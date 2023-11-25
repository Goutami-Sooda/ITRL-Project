import { HStack, Button, Text, StackDivider, Link } from "@chakra-ui/react";

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
    >
      <Link href="#">HOME</Link>
      <Link href="#" isExternal>
        TUTORIAL
      </Link>
      <Link href="#">START</Link>
      <Link href="#" isExternal>
        CONTACT
      </Link>
    </HStack>
  );
};

export default NavBar;
