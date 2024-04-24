import {
  chakra,
  Flex,
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import "@fontsource/luxurious-script";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [tokenAddress, setTokenAddress] = useState();
  return (
    <chakra.header w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md">
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <chakra.a
          href="/"
          fontSize="34"
          fontWeight="md"
          title="Home Page"
          fontFamily="Luxurious Script"
          display="flex"
          alignItems="center"
        >
          Dspytai
        </chakra.a>

        <HStack spacing={3} display="flex" alignItems="center">
          <InputGroup>
            <InputLeftElement pointerEvents="none" />
            <Input
              rounded="lg"
              type="text"
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  if (tokenAddress !== "") navigate(`/token/${tokenAddress}`);
                }
              }}
              onChange={(e) => setTokenAddress(e.target.value)}
              placeholder="Search ERC20 Contract"
            />
          </InputGroup>
        </HStack>
      </Flex>
    </chakra.header>
  );
};

export default Navbar;
