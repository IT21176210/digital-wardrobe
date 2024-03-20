import React from "react";
import { NavBar } from "../component";
import { Box, Button, Container, Flex, Grid, Text } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import { HomeDiscription } from ".";

const Home = () => {
  const to = useNavigate();

  return (
    <>
      <NavBar />
      <div className=" flex border-2 border-pink-500 max-h-screen max-w-screen-2xl items-center p-8">
        <HomeDiscription />
      </div>
    </>
  );
};

export default Home;
