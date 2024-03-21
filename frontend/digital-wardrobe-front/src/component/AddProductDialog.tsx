"use client";
import { invalidData } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonIcon, DropdownMenuIcon, PlusIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  Flex,
  TextField,
  Text,
  DropdownMenu,
  Grid,
  Box,
  Button,
  IconButton,
} from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { TfiClose } from "react-icons/tfi";
import { z } from "zod";

const FormValidationSchema = z.object({
  NewProductName: z.string().min(1, "Product Name is required"),
  NewProductDescription: z.string(),
  NewProductPrice: z.number().positive("Value must be greater than Zero"),
  NewProductUrl: z.string().min(1, "Needed image "),
});

type FormSchma = z.infer<typeof FormValidationSchema>;

const AddProductDialog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchma>({
    resolver: zodResolver(FormValidationSchema),
  });

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Flex className=" items-end justify-end m-5">
          <Button onClick={() => {}}>
            <PlusIcon /> Add Product
          </Button>
        </Flex>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Close>
          <Flex justify={"end"}>
            <TfiClose />
          </Flex>
        </Dialog.Close>
        <br />
        <Dialog.Title>Add New Product</Dialog.Title>
        <Dialog.Description>
          enter the details of the product that you like to add
        </Dialog.Description>
        <br />
        <form
          onSubmit={handleSubmit(
            (d) => {
              console.log("valid");
            },
            (errors) => {
              console.log(
                "invalid" +
                  "desc" +
                  errors.NewProductDescription +
                  "name" +
                  errors.NewProductName +
                  "price" +
                  errors.NewProductPrice +
                  errors.root +
                  "url" +
                  errors.NewProductUrl
              );
            }
          )}
        >
          <Flex direction={"column"} gap={"1"}>
            <Text>1. Name of the Product</Text>
            <TextField.Root>
              <TextField.Input
                placeholder="Product Name"
                title="NewProductName"
                {...register("NewProductName")}
              />
            </TextField.Root>
            <br />
            <Text>2. Description about Product</Text>
            <TextField.Root>
              <TextField.Input
                placeholder="Product Description"
                title="NewProductDescription"
                {...register("NewProductDescription")}
              />
            </TextField.Root>
            <br />
            <Text>2. Price Product</Text>
            <TextField.Root>
              <TextField.Input
                placeholder="Price... (in LKR)"
                title="NewProductPrice"
                {...register("NewProductPrice")}
              />
            </TextField.Root>
            <br />
            <Text>3. Price Catogory</Text>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <TextField.Root>
                  <TextField.Slot>
                    <DropdownMenuIcon />
                  </TextField.Slot>
                  <TextField.Input placeholder="Product Catogory" />
                </TextField.Root>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>
                  <Text>Male</Text>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <Text>Fe-Male</Text>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
            <br />
            <Text>4. Upload a product Image</Text>
            <Grid columns={"2"}>
              <Box>
                <Flex justify={"center"} align={"center"} direction={"column"}>
                  <Button mt={"4"}>Upload Image</Button>
                  <TextField.Root>
                    <TextField.Input {...register("NewProductUrl")} />
                  </TextField.Root>
                </Flex>
              </Box>
              <Box>
                <img
                  src=""
                  style={{
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                    height: 100,
                    backgroundColor: "var(--gray-5)",
                  }}
                />
              </Box>
            </Grid>
          </Flex>
          <br />

          <Flex justify={"end"}>
            <button
              type="submit"
              className=" bg-red-400 pt-1 bt-b-1 pl-2 pr-2 rounded-md font-medium text-lg"
            >
              Save
            </button>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default AddProductDialog;
