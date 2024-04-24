import { Avatar, Box, HStack, Spacer, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React from "react";

const topTokens = [
  {
    name: "DIFF",
    address: "0x3f75ceabCDfed1aCa03257Dc6Bdc0408E2b4b026",
    logo: "https://assets.coingecko.com/coins/images/25331/small/photo5451952870917257644.jpg?1651826321",
  },
  {
    name: "MSM",
    address: "0xee7fa5Bf82EdAB83dE8A184399360c4E6148A23e",
    logo: "",
  },
  {
    name: "USDC",
    address: "0x51e44FfaD5C2B122C8b635671FCC8139dc636E82",
    logo: "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389",
  },
  {
    name: "EVD",
    address: "0x47685B6AC7bB4de761A57828877A7B8254c8B145",
    logo: "https://assets.coingecko.com/coins/images/27785/small/evmos-domains.png?1665798992",
  },
];

const Home = () => {
  const MotionBox = motion(Box);
  const navigate = useNavigate();
  return (
    <Box>
      {topTokens.map((token) => (
        <MotionBox
          key={token.address}
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
