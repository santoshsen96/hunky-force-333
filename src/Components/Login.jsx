import { Box, Flex, Heading, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../CSS/Signup.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useWidth } from "./Width";
import axios from "axios";
import { IoMdDoneAll } from "react-icons/io";
import { BiErrorCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useAuthentication } from "./Authentication";
import Footer from "./Footer";
import Navbar from "./Navbar";

const IntialState = {
  username: "",
  password: "",
};

const Login = () => {
  const [login, setLogin] = useState(IntialState);
  const width = useWidth();
  const toast = useToast();
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const [auth, name, setAuth, setName] = useAuthentication();

  console.log("auth from login", auth);

  const getUserData = async () => {
    try {
      let res = await axios.get("http://localhost:8080/user");
      setUserData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
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

  const HandleLogin = () => {
    if (login.username === "") ShowToast("Email");
    else if (login.password === "") ShowToast("Password");
    else {
      let usernamePresent = userData.filter((item) => {
        return item.username === login.username;
      });
      let passwordPresent = userData.filter((item) => {
        return item.password === login.password;
      });

      if (usernamePresent.length > 0 && passwordPresent.length > 0) {
        toast({
          position: "bottom-left",
          render: () => (
            <Box color="white" p={3} bg="green.500">
              <Flex alignItems={"center"} gap="10px">
                login Successfull <IoMdDoneAll />
              </Flex>
            </Box>
          ),
        });
        setLogin(IntialState);
        localStorage.setItem("authentication", JSON.stringify(true));
        localStorage.setItem("name", JSON.stringify(usernamePresent[0].name));
        setAuth(true);
        setName(usernamePresent[0].name);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else if (usernamePresent.length === 0) {
        toast({
          position: "bottom-left",
          render: () => (
            <Box color="white" p={3} bg="red.500">
              <Flex alignItems={"center"} gap="10px">
                username not found <BiErrorCircle />
              </Flex>
            </Box>
          ),
        });
      } else if (passwordPresent.length === 0) {
        toast({
          position: "bottom-left",
          render: () => (
            <Box color="white" p={3} bg="red.500">
              <Flex alignItems={"center"} gap="10px">
                password not found <BiErrorCircle />
              </Flex>
            </Box>
          ),
        });
      }
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Navbar />
      <div
        style={{
          padding: "30px",
          background: "#212529",
          width: width < 1300 ? "70%" : "50%",
          margin: "auto",
          marginTop: "70px",
          borderRadius: "15px",
          marginBottom: "30px",
        }}
      >
        <Heading color="#45f3ff">Login</Heading>
        <Flex
          w={width < 1150 ? "80%" : "70%"}
          m="auto"
          alignItems={"center"}
          gap="30px"
          direction={width > 999 ? "row" : "column"}
          padding="20px 0px"
        >
          <img
            width={"300px"}
            src="https://th.bing.com/th/id/OIP.2crpHQ2vAsEYeriur6l6sQHaE8?pid=ImgDet&w=612&h=408&rs=1"
            alt="signup"
          />
          <div style={{ padding: "10px" }}>
            <br />
            <div className="inputbox">
              <input
                required="required"
                type="text"
                name="username"
                value={login.username}
                onChange={HandleChange}
              />
              <span>Username</span>
              <i></i>
            </div>
            <br />
            <div className="inputbox">
              <input
                required="required"
                type="password"
                name="password"
                value={login.password}
                onChange={HandleChange}
              />
              <span>Password</span>
              <i></i>
            </div>
            <br />
            <button className="button" onClick={HandleLogin}>
              <Flex alignItems={"center"} gap="10px">
                Login <AiOutlineArrowRight />
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
          Don't have a account ?{" "}
          <Link
            style={{ color: "skyblue", textDecoration: "underline" }}
            to="/signup"
          >
            SignUP
          </Link>
        </Heading>
        <Heading
          margin={"20px"}
          fontWeight={"500"}
          textAlign={"center"}
          size={"md"}
          color="ButtonFace"
        >
          <Link
            style={{ color: "skyblue", textDecoration: "underline" }}
            to="/admin-login"
          >
            Admin
          </Link>{" "}
          Login{" "}
        </Heading>
      </div>
      <Footer />
    </>
  );
};

export default Login;
