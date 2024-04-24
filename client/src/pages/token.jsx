import { Box, Text, Center, CircularProgress } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "react-apexcharts";
import NotFound from "./notFound";
import moment from "moment";

const Token = () => {
  const address = useParams().address;
  const [predictions, setPredictions] = useState();

  useEffect(() => {
    async function fetchPrediction() {
      try {
        const res = await fetch(
          `https://arima-vercel.vercel.app/?a=${address}`
        );
        const info = await res.json();
        console.log(info);
        const fetchedPredictions = info.prediction.map((prediction, i) => {
          const time = new Date((Number(info.last_date) + i * 86400) * 1000);

          return {
            price: prediction.toFixed(4),
            timestamp: time,
            time: moment(time).format("Do MMM"),
          };
        });

        setPredictions(fetchedPredictions);
      } catch {
        console.log("not available");
      }
    }
    if (address.match(/^0x[a-fA-F0-9]{40}$/)) fetchPrediction();
  }, [address]);
  if (address.match(/^0x[a-fA-F0-9]{40}$/))
    if (!predictions)
      return (
        <Center mt="20">
          <CircularProgress
            isIndeterminate
            thickness="6px"
            speed="0.65s"
            color="blue.500"
            size="200"
          />
        </Center>
      );
  if (predictions)
    return (
      <Box p="2">
        {predictions && (
          <Box
            mx="auto"
            rounded="md"
            maxW="1000px"
            bgColor="gray.200"
            p="3"
            my="10"
          >
            <Text textAlign="center" fontWeight="bold">
              Predictions
            </Text>
            <Chart
              options={{
                chart: {
                  id: "prediction-chart",
                },
                xaxis: {
                  categories: predictions.map((p) => p.time),
                },
              }}
              series={[
                {
                  name: "prediction",
                  data: predictions.map((p) => p.price),
                },
              ]}
              type="area"
            />
          </Box>
        )}
      </Box>
    );
  return <NotFound />;
};

export default Token;
