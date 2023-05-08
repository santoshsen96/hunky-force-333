import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { MdOutlineErrorOutline } from "react-icons/md";
import "../CSS/Watches.css";
import { RxDotFilled } from "react-icons/rx";
import JwelleryNavbar from "../Components/jwelleryNavbar";
import { GetJwelleys } from "../Redux/jwelleryReducer/action";
import {
  GET_JWELLERY_ERROR,
  GET_JWELLERY_REQUEST,
  GET_JWELLERY_SUCCESS,
} from "../Redux/jwelleryReducer/actionType";
import JwelleryList from "../Components/JwelleryList";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export const Jewelery = () => {
  const { isLoading, isError } = useSelector((store) => store.jwelleryReducer);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const PageArray = [1, 2, 3, 4];

  const paramsObj = {
    params: {
      brand: searchParams.getAll("brands"),
      category: searchParams.getAll("category"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  const GetJwelleryData = async () => {
    dispatch({ type: GET_JWELLERY_REQUEST });
    try {
      let res = await GetJwelleys(paramsObj, page);
      setTimeout(() => {
        dispatch({ type: GET_JWELLERY_SUCCESS, payload: res.data });
      }, 2000);
    } catch (error) {
      console.log(error);
      dispatch(() => {
        dispatch({ type: GET_JWELLERY_ERROR });
      }, 2000);
    }
  };

  useEffect(() => {
    GetJwelleryData();
  }, [location.search, page]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Navbar />
      <div style={{ marginBottom: "20px", paddingTop: "60px" }}>
        <img
          style={{ padding: "10px", width: "100%", height: "400px" }}
          src="https://i.postimg.cc/kGxvFdF6/Jwellery-Banner.jpg"
          alt="Jwellery Banner"
        />
        <JwelleryNavbar />
        <Box w="80%" m="auto" mt="20px">
          <Breadcrumb separator={<RxDotFilled />}>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="/wacthes">Jwellery</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        {isLoading ? (
          <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
          </div>
        ) : isError ? (
          <Heading textAlign={"center"}>
            <Flex
              alignItems={"center"}
              gap="10px"
              textAlign={"center"}
              m="80px"
              ml="40%"
            >
              Something Went Wrong <MdOutlineErrorOutline size={"40px"} />
            </Flex>
          </Heading>
        ) : (
          <JwelleryList />
        )}
        <Box mt="40px" mb="30px">
          {PageArray.map((index) => {
            return (
              <Button
                key={index}
                variant={"none"}
                m="0px 10px"
                className={page === index ? "page" : ""}
                onClick={() => setPage(index)}
              >
                {index}
              </Button>
            );
          })}
        </Box>
        <Footer />
      </div>
    </>
  );
};
