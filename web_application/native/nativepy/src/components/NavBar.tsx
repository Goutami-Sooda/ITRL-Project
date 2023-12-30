import React from "react";
import { HStack, Button, Text, StackDivider } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
      alignItems="center"
      justifyContent="space-evenly"
      height="3vh"
      color="white"
      bg="blue.600"
    >
      {/* Chakra UI Link */}
      <ChakraLink as={RouterLink} to="/">
        ಮುಖಪುಟ    
      </ChakraLink>

      <ChakraLink as={RouterLink} to="/tutorials">
        ಕಲಿಕೆ
      </ChakraLink>

      <ChakraLink as={RouterLink} to="/quiz">
        ರಸಪ್ರಶ್ನೆ
      </ChakraLink>

      <ChakraLink href="#" isExternal>
        ಸಂಪರ್ಕಿಸಿ
      </ChakraLink>
    </HStack>
  );
};

export default NavBar;
