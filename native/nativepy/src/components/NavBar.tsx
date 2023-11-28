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
        HOME
      </ChakraLink>

      <ChakraLink href="#" isExternal>
        TUTORIAL
      </ChakraLink>

      <ChakraLink as={RouterLink} to="quiz">
        QUIZ
      </ChakraLink>

      <ChakraLink href="#" isExternal>
        CONTACT
      </ChakraLink>
    </HStack>
  );
};

export default NavBar;
