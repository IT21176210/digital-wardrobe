import { Box, Button, Container, Grid, Text } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

const home_one = () => {
  const to = useNavigate();
  return (
    <div className=" pl-8 pr-8">
      <Grid columns={{ initial: "1", md: "2" }} align={"start"}>
        <Box className=" pt-10">
          <Text
            weight={"bold"}
            size={"8"}
            className=" text-[#436D83] font-serif "
          >
            Discover The Ideal Fashion Style That Suits You Best
          </Text>
          <br />
          <Text size={"4"}>
            Elevate your style with our Wardrobe,where fashion meets
            individuality. Discover a world of contemporary designs, quality
            craftsmanship, and statement pieces that empower you to express your
            unique personality. Wardrobe is dedicated to creating a diverse
            range of clothing for all genders, ages, and occasions. From casual
            everyday wear to elegant formal attire,
          </Text>
          <br />
          <br />
          <Button
            size={"4"}
            onClick={() => {
              to("/Cloths");
            }}
          >
            Shop Now
          </Button>
          <Container className=" sm:hidden block">
            <img src="https://i.pinimg.com/originals/b5/e5/f3/b5e5f3902c765225de4eda050fcdb6bc.jpg" />
          </Container>
        </Box>
        <Box>
          <Container className=" sm:block hidden">
            <img src="https://i.pinimg.com/originals/b5/e5/f3/b5e5f3902c765225de4eda050fcdb6bc.jpg" />
          </Container>
        </Box>
      </Grid>
    </div>
  );
};

export default home_one;
