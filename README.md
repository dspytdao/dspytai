# DspytAI

Developed as part of [Algovera Grant](https://forum.algovera.ai/t/dspyt-ai-uniswap-portfolio-tracker/184)

## Summary

First Uniswap centered Dapp that utilizes on-chain data to model potential price fluctuations in real-time.

[Live Demo](https://dspytai.vercel.app/)

[Kaggle Notebook](https://www.kaggle.com/code/pavfedotov/dspyt-ai)

## Vercel Backend

[The backend Vercel repository](https://github.com/dspytdao/vercel-python)

[The backend Vercel ednpoint](https://vercel-python-nt2k.vercel.app/)

### Limitations

[According to Vercel documentation](https://vercel.com/docs/concepts/limits/overview#serverless-function-size), "The maximum size for a Serverless Function is 50 MB and the maximum unzipped size is 250 MB including layers which are automatically used depending on Runtimes". This does not allow us to import sklearn or tensorflow.

Hence, we currently utilize backend for data preprocessing.

## Long Description

Dspytai is the first Uniswap powered Dapp that utilizes on-chain data to model potential price fluctuations in real-time.

We combine a browser–based frontend that gives users the ability to determine price averages for any ERC20 contract through the combination of a machine learning model and the Graph.

Dspytai also offers simple, free to use downloadable price prediction data in both text based csv format and image based png and svg formats that are extendable to an NFT.

### Initial Heroku Back End

[The backend Heroku repository](https://github.com/dspytdao/Heroku_Graph_ML)

[The api endpoint on heroku](https://dspyt.herokuapp.com/)

## Further Ideas

[Time series forecasting | Tensorflow](https://www.tensorflow.org/tutorials/structured_data/time_series)

[Alternatives to Deploy a model](https://www.freecodecamp.org/news/deploy-your-machine-learning-models-for-free/)
