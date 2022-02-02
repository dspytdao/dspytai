from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import json
import pandas as pd
import numpy as np
from statsmodels.tsa.arima.model import ARIMA

application = Flask(__name__)
app = application
CORS(app)

url ='https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3'

@app.route("/", methods=["GET","POST"])
def home():
    if request.args.get('f'):
        f = int(request.args.get('f'))
    else:
        f=15
    if request.args.get('q'):
        q = request.args.get('q')
    else:
        q = """
        {token (id:"0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"){tokenDayData{priceUSD date}}}
        """
    r = requests.post(url, json={'query': q})
    json_data = json.loads(r.text)
    
    df_data = json_data['data']['token']['tokenDayData']
    df = pd.DataFrame(df_data)

    df.priceUSD = df.priceUSD.replace(0, np.nan).dropna()
    df.priceUSD = df.priceUSD.astype(float)

    last = df.date.iloc[-1:].values[0]
    timestep = df.date.iloc[-1:].values[0]-df.date.iloc[-2:-1].values[0]
    model = ARIMA(df.priceUSD, order=(1,1,0))
    fitted = model.fit()
    # Forecast
    fc = fitted.forecast(f)

    return jsonify({'predictions': list(fc), 'last_date': str(last), 'timestep': str(timestep)})

if __name__ == "__main__":
    app.run(debug=True)