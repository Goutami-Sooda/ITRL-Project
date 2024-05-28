import { HStack, Image } from "@chakra-ui/react";
import headerlogo from "../assets/RVCE NEW-HEADER.jpeg";
import NavBar  from "./NavBar"; //

const Header = () => {
  return (
    <HStack>
      <Image src={headerlogo} width="20%" height="10vh"></Image>
      <NavBar />
    </HStack>
  );
};

export default Header;
