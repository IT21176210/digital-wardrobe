"use client";
import { Flex, Grid, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { NavBar, NewProductCard, ProductCard } from "../component";

interface Productx {
  name: String;
  description: String;
  price: String;
  ImageUrl: string;
  category: String;
  _id: String;
}

const Cloths = () => {
  const to = useNavigate();

  const [_Loading, _setLoading] = useState(false);
  const [_SearchQuote, _setSearchQuote] = useState("");
  const [_ProductList, _setProductList] = useState<[Productx]>([
    {
      name: "",
      description: "",
      price: "",
      ImageUrl: "",
      category: "",
      _id: "",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/cloth/getAll")
      .then((data) => {
        const productlist = data.data.data;
        _setProductList(productlist);
      })
      .catch((error) => {
        console.log("Error" + error);
      });
  }, [_ProductList]);

  return (
    <>
      <NavBar />
      <br />
      <center>
        <div className=" max-w-2xl ">
          <TextField.Root>
            <TextField.Slot>
              <FaMagnifyingGlass />
            </TextField.Slot>
            <TextField.Input
              placeholder=" Name of the Product..."
              onChange={(d) => {
                _setSearchQuote(d.currentTarget.value);
              }}
            />
          </TextField.Root>
        </div>
      </center>
      <br />

      <NewProductCard />

      <Flex justify={"center"} width={"100%"}>
        <Grid
          justify={"center"}
          align={"center"}
          columns={{ initial: "1", sm: "2", md: "3", lg: "4" }}
          mt={"3"}
          gapY={"3"}
          gapX={"8"}
        >
          {_ProductList
            .filter((product) =>
              _SearchQuote.toLocaleLowerCase() == ""
                ? product
                : product.name
                    .toLocaleLowerCase()
                    .includes(_SearchQuote.toLocaleLowerCase())
            )
            .map((product, index) => (
              <ProductCard
                key={index}
                Price={product.price}
                Discription={product.description}
                Catagory={product.category}
                Name={product.name}
                ImgUrl={product.ImageUrl}
                _id={product._id}
              />
            ))}
        </Grid>
      </Flex>
    </>
  );
};

export default Cloths;
