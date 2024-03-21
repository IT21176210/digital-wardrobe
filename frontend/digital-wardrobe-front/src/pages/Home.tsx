import React from "react";
import { NavBar } from "../component";
import { Box, Button, Container, Flex, Grid, Text } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import { HomeDiscription, HomeNewCollections } from ".";

const Home = () => {
  const to = useNavigate();

  return (
    <>
      <NavBar />
      <div className=" flex flex-col border-2 border-pink-500  max-w-screen-2xl items-center p-8 space-y-10">
        <HomeDiscription />
        <HomeNewCollections />
      </div>
    </>
  );
};

export default Home;
