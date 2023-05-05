import React, { useEffect, useState } from "react";
import WatchNavbar from "../Components/WatchNavbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";
import WatchList from "../Components/WatchList";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_WACTH_ERROR,
  GET_WACTH_REQUEST,
  GET_WACTH_SUCCESS,
} from "../Redux/WatchReducer/actionType";
import { GetWacthes } from "../Redux/WatchReducer/action";
import { useLocation, useSearchParams } from "react-router-dom";
import { MdOutlineErrorOutline } from "react-icons/md";
import "../CSS/Watches.css";

const Watches = () => {
  const { isLoading, isError } = useSelector((store) => store.watchReducer);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const PageArray = [1, 2, 3, 4, 5];

  const paramsObj = {
    params: {
      brand: searchParams.getAll("brands"),
      gender: searchParams.getAll("gender"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  const GetWacthData = async () => {
    dispatch({ type: GET_WACTH_REQUEST });
    try {
      let res = await GetWacthes(paramsObj, page);
      setTimeout(() => {
        dispatch({ type: GET_WACTH_SUCCESS, payload: res.data });
      }, 2000);
    } catch (error) {
      console.log(error);
      dispatch(() => {
        dispatch({ type: GET_WACTH_ERROR });
      }, 2000);
    }
  };

  useEffect(() => {
    GetWacthData();
  }, [location.search, page]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ marginBottom: "40px" }}>
      <WatchNavbar />
      <Box w="80%" m="auto" mt="20px">
        <Breadcrumb separator="-">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/wacthes">Wacthes</BreadcrumbLink>
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
        <WatchList />
      )}
      <Box mt="40px">
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
    </div>
  );
};

export default Watches;

