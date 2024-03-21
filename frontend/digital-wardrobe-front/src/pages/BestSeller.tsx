import { Box, Button, Container, Flex, Grid, Text } from "@radix-ui/themes";
import { CardCustom } from "../component";

const BestSeller = () => {
  return (
    <>
      <Grid
        columns={"2"}
        className=" h-screen w-screen max-h-screen max-w-screen bg-[#749EB4]"
      >
        <Container className=" flex justify-center ml-10 max-w-96">
          <Text weight={"bold"} className=" font-serif text-4xl text-white">
            Best Seller Products
          </Text>
          <br />
          <Text weight={"medium"} className="text-white">
            Embrace the essence of confidence and authenticity with every
            garment you wear
          </Text>
          <br />
          <br />
          <Button size={"4"} className=" border-white border-2  text-white  ">
            See More
          </Button>
        </Container>

        <Container className=" flex justify-center">
          <Flex gap={"4"} className=" pr-5">
            <CardCustom />
            <CardCustom />
            <CardCustom />
          </Flex>
        </Container>
      </Grid>
    </>
  );
};

export default BestSeller;
