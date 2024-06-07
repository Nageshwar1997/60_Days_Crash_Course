import {
  Button,
  Heading,
  useToast,
  Input,
  VStack,
  Container,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();
  const {
    login,
    authDetails: { isLoggedIn },
  } = useContext(AuthContext);

  const handleClick = async () => {
    try {
      let response = await axios({
        method: "post",
        url: "https://reqres.in/api/login",
        data: {
          email,
          password,
        },
      });
      toast({
        title: "Login Successful",
        description: "You are redirecting to Home.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      login(response?.data?.token);
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Please check your email and password.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Container maxW={"md"} mx={"auto"} mt={"10"}>
      <VStack>
        <Heading as="h1" size="xl">
          Login Page
        </Heading>
        <Text>
          Use this email : <strong>eve.holt@reqres.in</strong>
        </Text>
        <Input
          placeholder="Enter Your Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Text>
          Use this password : <strong>cityslicka</strong>
        </Text>
        <Input
          placeholder="Enter Your Password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleClick} colorScheme="red" variant="outline">
          Login
        </Button>
      </VStack>
    </Container>
  );
};

export default Login;
