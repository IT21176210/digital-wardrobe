import { zodResolver } from "@hookform/resolvers/zod";
import {
  DropdownMenuIcon,
  InfoCircledIcon,
  Pencil2Icon,
  PlusIcon,
} from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Callout,
  Dialog,
  DropdownMenu,
  Flex,
  Grid,
  IconButton,
  Text,
  TextField,
} from "@radix-ui/themes";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TfiClose } from "react-icons/tfi";
import { z } from "zod";
import { ErrorsC } from ".";

const FormValidationSchema = z.object({
  NewProductName: z.string().min(1, "Product Name is required"),
  NewProductDescription: z.string(),
  NewProductPrice: z.string().min(1, "Value must be greater than Zero"),
  NewProductUrl: z.string().min(1, "Needed image "),
});

type FormSchma = z.infer<typeof FormValidationSchema>;

// interface FromValidation {
//   NewProductName: String;
//   NewProductDescription: String;
//   NewProductPrice: String;
//   NewProductUrl: String;
// }

const AddProductDialog = ({
  _id,
  name,
  desc,
  cato,
  price,
  imageurl,
}: {
  _id: string;
  name: string;
  desc: string;
  cato: "Male" | "Female" | "Uni-SEX";
  price: string;
  imageurl: string;
}) => {
  const [isSubmitting, setSubmit] = useState<boolean>(false);
  const [Catog, setCatog] = useState<"Male" | "Female" | "Uni-SEX">(cato);
  const [CausedError, SetCause] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    unregister,
    formState: { errors },
  } = useForm<FormSchma>({
    resolver: zodResolver(FormValidationSchema),
  });

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Flex className=" items-end justify-end m-5">
          <IconButton>
            <Pencil2Icon />
          </IconButton>
        </Flex>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Close>
          <Flex justify={"end"}>
            <TfiClose />
          </Flex>
        </Dialog.Close>
        <br />
        <Dialog.Title>UpdateProduct</Dialog.Title>

        <br />
        {CausedError && (
          <Callout.Root>
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>UnExpected Error Occured</Callout.Text>
          </Callout.Root>
        )}
        <form
          onSubmit={handleSubmit((e) => {
            setSubmit(true);
            axios
              .post("http://localhost:8000/update/" + _id, {
                name: e.NewProductName,
                category: Catog,
                price: e.NewProductPrice,
                ImageUrl: e.NewProductUrl,
                description: e.NewProductDescription,
              })
              .then(() => {
                setSubmit(false);
                reset();
              })
              .catch((e) => {
                SetCause(false);
              });
          })}
        >
          <Flex direction={"column"} gap={"1"}>
            <Text>1. Name of the Product</Text>
            <TextField.Root>
              <TextField.Input
                placeholder="Product Name"
                title="NewProductName"
                value={name}
                {...register("NewProductName")}
              />
            </TextField.Root>
            {errors.NewProductName && (
              <ErrorsC Msg={errors.NewProductName.message!} />
            )}
            <br />
            <Text>2. Description about Product</Text>
            <TextField.Root>
              <TextField.Input
                placeholder="Product Description"
                title="NewProductDescription"
                value={desc}
                {...register("NewProductDescription")}
              />
            </TextField.Root>
            {errors.NewProductDescription && (
              <ErrorsC Msg={errors.NewProductDescription.message!} />
            )}
            <br />
            <Text>2. Price Product</Text>
            <TextField.Root>
              <TextField.Input
                placeholder="Price... (in LKR)"
                title="NewProductPrice"
                value={price}
                {...register("NewProductPrice")}
              />
            </TextField.Root>
            {errors.NewProductPrice && (
              <ErrorsC Msg={errors.NewProductPrice.message!} />
            )}
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
                <DropdownMenu.Item
                  onClick={() => {
                    setCatog("Male");
                  }}
                >
                  <Text>Male</Text>
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  onClick={() => {
                    setCatog("Female");
                  }}
                >
                  <Text>Female</Text>
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  onClick={() => {
                    setCatog("Uni-SEX");
                  }}
                >
                  <Text>Uni-Sex</Text>
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
                    <TextField.Input
                      {...register("NewProductUrl")}
                      value={imageurl}
                    />
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
              disabled={isSubmitting}
              className=" bg-red-400 pt-1 bt-b-1 pl-2 pr-2 rounded-md font-medium text-lg"
            >
              Update
            </button>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default AddProductDialog;
