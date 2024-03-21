import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import {
  Box,
  Card,
  Flex,
  HoverCard,
  IconButton,
  Inset,
  Link,
  Text,
} from "@radix-ui/themes";
import { GiPoloShirt } from "react-icons/gi";
import { TbCashBanknote } from "react-icons/tb";

const ProductCard = ({
  Name,
  ImgUrl,
  Price,
  Catagory,
  Discription,
}: {
  Name: String;
  ImgUrl: string;
  Price: String;
  Discription: String;
  Catagory: String;
}) => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <Card className="  border-red-500 w-72 h-64 max-h-72 max-w-72 ">
          <Inset className="">
            <img
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 140,
                backgroundColor: "var(--gray-5)",
              }}
              src={ImgUrl}
            />
          </Inset>
          <br />
          <Box>
            <Flex justify={"between"} align={"end"}>
              <Text weight={"medium"}>
                <Link className=" text-black">{Name}</Link>
              </Text>
              <Flex align={"center"} gap={"2"}>
                <IconButton>
                  <Pencil2Icon />
                </IconButton>
                <IconButton color="red">
                  <TrashIcon />
                </IconButton>
              </Flex>
            </Flex>
            <Flex align={"center"} gap={"1"}>
              <TbCashBanknote />
              <Text>{Price}</Text>
            </Flex>
            <Flex align={"center"} gap={"1"}>
              <GiPoloShirt />
              <Text>{Catagory}</Text>
            </Flex>
          </Box>
        </Card>
      </HoverCard.Trigger>
      <HoverCard.Content>
        <Flex className=" max-w-xl">
          <Inset>
            <img
              src={ImgUrl}
              style={{
                display: "block",
                objectFit: "cover",
                width: "50%",
                height: 140,
                backgroundColor: "var(--gray-5)",
              }}
            />
          </Inset>
          <Box>
            <Text>{Name}</Text>
            <br />
            <Text>{Discription}</Text>
          </Box>
        </Flex>
      </HoverCard.Content>
    </HoverCard.Root>
  );
};

export default ProductCard;
