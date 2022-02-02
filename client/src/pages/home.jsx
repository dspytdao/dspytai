import { Avatar, Box, HStack, Spacer, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React from "react";

const topTokens = [
  {
    name: "UNI",
    address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    logo: "https://assets.coingecko.com/coins/images/12504/small/uniswap-uni.png?1600306604",
  },
  {
    name: "GTC",
    address: "0xde30da39c46104798bb5aa3fe8b9e0e1f348163f",
    logo: "https://assets.coingecko.com/coins/images/15810/small/gitcoin.png?1621992929",
  },
  {
    name: "GRT",
    address: "0xc944e90c64b2c07662a292be6244bdf05cda44a7",
    logo: "https://assets.coingecko.com/coins/images/13397/small/Graph_Token.png?1608145566",
  },
  {
    name: "SUSHI",
    address: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
    logo: "https://assets.coingecko.com/coins/images/12271/small/512x512_Logo_no_chop.png?1606986688",
  },
  {
    name: "MANA",
    address: "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
    logo: "https://assets.coingecko.com/coins/images/878/small/decentraland-mana.png?1550108745",
  },
  {
    name: "ENJ",
    address: "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
    logo: "https://assets.coingecko.com/coins/images/1102/small/enjin-coin-logo.png?1547035078",
  },
];

const Home = () => {
  const MotionBox = motion(Box);
  const navigate = useNavigate();
  return (
    <Box>
      {topTokens.map((token) => (
        <MotionBox
          onClick={() => navigate(`/token/${token.address}`)}
          whileHover={{
            scale: 1.05,
            rotateX: 1,
            rotateY: 3,
            transition: { duration: 0.4 },
          }}
          mx="auto"
          my="4"
          p="3"
          maxW={{ base: "80vw", md: "60vw", lg: "600px" }}
          rounded="lg"
          bgGradient="linear(to-tr, blue.50, green.100)"
        >
          <HStack>
            <Avatar name={token.name} src={token.logo} bgColor="gray.300" />
            <Spacer />
            <Text fontWeight="bold" fontSize="22">
              {token.name}
            </Text>
          </HStack>
        </MotionBox>
      ))}
    </Box>
  );
};

export default Home;
