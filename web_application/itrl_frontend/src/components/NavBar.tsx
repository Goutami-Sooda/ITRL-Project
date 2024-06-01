import { HStack, StackDivider, Link as ChakraLink } from "@chakra-ui/react";
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
      borderRadius="md"
      paddingX={50}
    >
      <ChakraLink
        as={RouterLink}
        to="/"
        _hover={{
          textDecoration: "none",
          bg: "blue.800",
          paddingX: 4,
          paddingY: 2,
          borderRadius: "md",
        }}
        paddingX={6}
        paddingY={4}
        borderRadius="md"
      >
        ಮುಖಪುಟ {/*home page*/}
      </ChakraLink>

      <ChakraLink
        as={RouterLink}
        to="/about"
        _hover={{
          textDecoration: "none",
          bg: "blue.800",
          paddingX: 4,
          paddingY: 2,
          borderRadius: "md",
        }}
        paddingX={6}
        paddingY={4}
        borderRadius="md"
      >
        ನಮ್ಮ ಬಗ್ಗೆ {/*about us page*/}
      </ChakraLink>
    </HStack>
  );
};

export default NavBar;