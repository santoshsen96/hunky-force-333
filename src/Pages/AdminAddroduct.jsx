import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Adminsidebar from "../Components/AdminSideBar";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductWatch,
  addProductWatchToProduct,
} from "../Redux/AdminProduct/action";
import "../CSS/Admindashboard.css";
import Navbar from "../Components/Navbar";
const initialState = {
  id: "",
  image: "",
  title: "",
  brand: "",
  discount: "",
  gender: "",
  size: "",
  price: "",
  category: "",
};
export const AdminAddroduct = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();
  const { id, image, title, brand, discount, gender, size, price, category } =
    product;
  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;

    setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const toast = useToast();
  const { products } = useSelector((state) => state.AdminProduct);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    dispatch(addProductWatch(product));
    dispatch(addProductWatchToProduct(product));
    setProduct(initialState);
    return toast({
      title: "Product Added Successfully",
      description: `Products added:${products.length + 1}`,
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Box>
      <Navbar />
      <Flex className="addproductpagecontainer" justifyContent={"space-evenly"}>
        <Box w={"18%"}>
          <Adminsidebar />
        </Box>
        <Box className="formcontainer" textAlign={"center"} w={"82%"}>
          {/* write code here */}

          {/* <Heading color={"#2d2d2d"} marginBottom="2%" marginTop="-9%">
            ADD PRODUCT
          </Heading> */}
          <Box
            className="form"
            padding={"3%"}
            margin="auto"
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          >
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel>ID</FormLabel>
                <Input
                  type="number"
                  value={product.id}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="id"
                  placeholder="Enter ID"
                />
                <FormLabel>Image</FormLabel>
                <Input
                  type="text"
                  value={product.image}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="image"
                  placeholder="Enter Image URL"
                />
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  value={product.title}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="title"
                  placeholder="Enter Product Title"
                />
                <FormLabel>Brand </FormLabel>
                <Input
                  type="text"
                  value={product.brand}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="brand"
                  placeholder="Enter Product Brand"
                />
                <FormLabel>Discount</FormLabel>
                <Input
                  type={"number"}
                  value={product.discount}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="discount"
                  placeholder="Enter Discount"
                />
                <FormLabel>Gender</FormLabel>
                <Input
                  type="text"
                  value={product.gender}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="gender"
                  placeholder="Enter Gender"
                />
                <FormLabel>Size</FormLabel>
                <Input
                  type="text"
                  value={product.size}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="size"
                  placeholder="Enter Product Size"
                />
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  value={product.price}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="price"
                  placeholder="Enter Product Price"
                />
                <FormLabel>Category</FormLabel>
                <Input
                  type="text"
                  value={product.category}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="category"
                  placeholder="Enter Product Category"
                />
                <Button
                  backgroundColor={"#2d2d2d"}
                  color="white"
                  marginTop={"3%"}
                  type="submit"
                >
                  ADD PRODUCT
                </Button>
              </FormControl>
            </form>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
