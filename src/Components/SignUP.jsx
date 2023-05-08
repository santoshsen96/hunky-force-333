import { Box, Flex, Heading, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import "../CSS/Signup.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useWidth } from "./Width";
import axios from "axios";
import { IoMdDoneAll } from "react-icons/io";
import { BiErrorCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const IntialState = {
  name: "",
  username: "",
  password: "",
  email: "",
  mobile: "",
};

const SignUP = ({ setLogin }) => {
  const [signup, setSignup] = useState(IntialState);
  const width = useWidth();
  const toast = useToast();
  const navigate = useNavigate();

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };

  const ShowToast = (name) => {
    toast({
      position: "bottom-left",
      render: () => (
        <Box color="white" p={3} bg="red.500">
          <Flex alignItems={"center"} gap="10px">
            {name} is Empty <BiErrorCircle />
          </Flex>
        </Box>
      ),
    });
  };

  const HandleSignup = () => {
    if (signup.name === "") ShowToast("Name");
    else if (signup.username === "") ShowToast("Username");
    else if (signup.email === "") ShowToast("Email");
    else if (signup.mobile === "") ShowToast("Mobile");
    else if (signup.password === "") ShowToast("Password");
    else {
      axios
        .post("http://localhost:8080/user", signup)
        .then(() => {
          toast({
            position: "bottom-left",
            render: () => (
              <Box color="white" p={3} bg="green.500">
                <Flex alignItems={"center"} gap="10px">
                  User Added <IoMdDoneAll size="30px" />
                </Flex>
              </Box>
            ),
          });
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        })
        .catch((err) => {
          toast({
            position: "bottom-left",
            render: () => (
              <Box color="white" p={3} bg="red.500">
                <Flex alignItems={"center"} gap="10px">
                  Error <BiErrorCircle />
                </Flex>
              </Box>
            ),
          });
          console.log(err);
        });
      setSignup(IntialState);
    }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          padding: "30px",
          background: "#212529",
          width: "80%",
          margin: "auto",
          marginTop: "70px",
          borderRadius: "15px",
          marginBottom: "30px",
        }}
      >
        <Heading color="#45f3ff">SIGNUP</Heading>
        <Flex
          w={width < 1150 ? "80%" : "70%"}
          m="auto"
          alignItems={"center"}
          gap="30px"
          direction={width > 999 ? "row" : "column"}
        >
          <img
            src="https://th.bing.com/th/id/R.f23b926f1708a7465272f02c5ae64c64?rik=cYVibD87hfT%2bkw&pid=ImgRaw&r=0"
            alt="signup"
          />
          <div style={{ padding: "10px" }}>
            <div className="inputbox">
              <input
                required="required"
                type="text"
                name="name"
                value={signup.name}
                onChange={HandleChange}
              />
              <span>Name</span>
              <i></i>
            </div>
            <br />
            <div className="inputbox">
              <input
                required="required"
                type="text"
                name="username"
                value={signup.username}
                onChange={HandleChange}
              />
              <span>Username</span>
              <i></i>
            </div>
            <br />
            <div className="inputbox">
              <input
                required="required"
                type="text"
                name="email"
                value={signup.email}
                onChange={HandleChange}
              />
              <span>Email Address</span>
              <i></i>
            </div>
            <br />
            <div className="inputbox">
              <input
                required="required"
                type="number"
                name="mobile"
                value={signup.mobile}
                onChange={HandleChange}
              />
              <span>Mobile</span>
              <i></i>
            </div>
            <br />
            <div className="inputbox">
              <input
                required="required"
                type="password"
                name="password"
                value={signup.password}
                onChange={HandleChange}
              />
              <span>Password</span>
              <i></i>
            </div>
            <br />
            <button className="button" onClick={HandleSignup}>
              <Flex alignItems={"center"} gap="10px">
                Sign UP <AiOutlineArrowRight />
              </Flex>
            </button>
          </div>
        </Flex>
        <Heading
          margin={"20px"}
          fontWeight={"500"}
          textAlign={"center"}
          size={"md"}
          color="ButtonFace"
        >
          Have a account ?{" "}
          <Link
            style={{ color: "skyblue", textDecoration: "underline" }}
            to="/login"
          >
            Login
          </Link>
        </Heading>
      </div>
      <Footer />
    </>
  );
};

export default SignUP;
