import React from "react";
import { HStack, Button, Text, StackDivider } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack
    divider={<StackDivider borderColor="gray.200" />}
    spacing={50}
    alignItems="center"
    justifyContent="space-evenly"
    height="3vh"
    color="white"
    bg="blue.600"
    borderRadius="md" // Rounded edges
    paddingX={50} // Horizontal padding
    >
      {/* Chakra UI Link */}
      <ChakraLink 
        as={RouterLink}
        to="/"
        _hover={{ textDecoration: "none", bg: "blue.700" }} 
        padding={50} 
        borderRadius="md">
        ಕಲಿಕೆ {/*home page*/}
      </ChakraLink>

      <ChakraLink as={RouterLink}
        to="/about"
        _hover={{ textDecoration: "none", bg: "blue.700" }} 
        padding={50} 
        borderRadius="md">
        ನಮ್ಮ ಬಗ್ಗೆ {/*about us page*/}
      </ChakraLink>
    </HStack>
  );
};

export default NavBar;
