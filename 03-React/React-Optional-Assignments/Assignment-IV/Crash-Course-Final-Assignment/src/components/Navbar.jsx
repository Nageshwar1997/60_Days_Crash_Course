import { Flex } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
const links = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/contact",
    label: "Contact",
  },
  {
    to: "/tickets",
    label: "Tickets",
  },
];
const Navbar = () => {
  const { logout, authDetails } = useContext(AuthContext);
  return (
    <Flex
      align="center"
      justify="space-around"
      padding={4}
      bg={"gray.200"}
      p={4}
    >
      {links.map((link) => (
        <ChakraLink
          as={ReactRouterLink}
          to={link.to}
          key={link.to}
          color={"gray.900"}
        >
          {link.label}
        </ChakraLink>
      ))}
      {authDetails?.isLoggedIn == true ? (
        <ChakraLink
          as={ReactRouterLink}
          to={"/login"}
          color={"gray.900"}
          onClick={logout}
        >
          Logout
        </ChakraLink>
      ) : (
        <ChakraLink as={ReactRouterLink} to={"/login"} color={"gray.900"}>
          Login
        </ChakraLink>
      )}
    </Flex>
  );
};

export default Navbar;
