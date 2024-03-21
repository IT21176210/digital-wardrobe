import { Container, Box, Text } from "@radix-ui/themes";
import React from "react";

const Card = () => {
  return (
    <Container className=" max-h-80 max-w-64 flex">
      <Box className=" max-h-72  h-72 border-2 border-white bg-gray-400"></Box>
      <Box className=" flex items-center mt-2 justify-center flex-col">
        <Text weight={"light"} className=" text-white">
          Product
        </Text>
        <Text weight={"light"} className=" text-white">
          Price.00 LKR
        </Text>
      </Box>
    </Container>
  );
};

export default Card;
