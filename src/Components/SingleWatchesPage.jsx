import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { RxDotFilled } from "react-icons/rx";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
} from "@chakra-ui/modal";
import Footer from "./Footer";
import Navbar from "./Navbar";

const SingleWatchesPage = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [present, setPresent] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const GetData = async () => {
    let res = await axios.get(`http://localhost:8080/watches/${id}`);
    setData(res.data);
  };

  const PostToCart = async () => {
    axios
      .post("http://localhost:8080/cart", data)
      .then(() => {
        onOpen();
      })
      .catch((err) => {
        setPresent(true);
        onOpen();
      });
  };

  useEffect(() => {
    GetData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px", paddingTop: "60px" }}>
        <Box w="80%" m="auto" mt="20px">
          <Breadcrumb separator={<RxDotFilled />}>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/Watches">Watches</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>{data?.category}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Flex
          justifyContent={"space-between"}
          w="80%"
          m="auto"
          mt="40px "
          alignItems={"center"}
          gap="50px"
          direction={["column", "row"]}
        >
          <Image w="50%" src={data?.image} />
          <Box textAlign={"left"}>
            <Heading m="15px" size={"lg"} fontWeight={"400"}>
              {data?.title}
            </Heading>
            <hr />
            <Heading m="3px 0px" size={"sm"} fontWeight={"light"}>
              <span
                style={{
                  color: "rgb(63, 121, 230)",
                  fontWeight: "400",
                  fontSize: "20px",
                  marginBottom: "20px",
                }}
              >
                Description
              </span>{" "}
              <br />{" "}
              <Box m="10px" fontSize={"16px"}>
                {data?.description}
              </Box>
            </Heading>
            <hr />
            <Heading m="3px 0px" size={"sm"} fontWeight={"light"}>
              <span
                style={{
                  color: "rgb(63, 121, 230)",
                  fontWeight: "400",
                  fontSize: "20px",
                  marginBottom: "20px",
                }}
              >
                Product Detail
              </span>{" "}
              <br />{" "}
              <Box m="10px 40px" fontSize={"16px"}>
                <ul>
                  <li>Brand: {data?.brand}</li>
                  <li>Gender: {data?.gender}</li>
                  <li>Category: {data?.category}</li>
                </ul>
              </Box>
            </Heading>
            <Heading size={"lg"} m="30px 0px">
              $ {data?.price}{" "}
              <sub style={{ fontSize: "15px" }}>{data?.discount}</sub>
            </Heading>
            <Button
              variant={"none"}
              w="100%"
              background={"black"}
              color="white"
              _hover={{
                background: "white",
                color: "black",
                border: "2px solid gray",
              }}
              onClick={PostToCart}
            >
              ADD TO CART
            </Button>
          </Box>
        </Flex>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogBody m={"10px"} fontSize={"20px"}>
                {present
                  ? "Item Already Present In Cart"
                  : "Item Added To Cart"}
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button variant={"link"} colorScheme="red" onClick={onClose}>
                  Ok
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </div>
      <Footer />
    </>
  );
};

export default SingleWatchesPage;
