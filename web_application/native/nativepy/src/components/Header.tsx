import { HStack, Image } from "@chakra-ui/react";
import headerlogo from "../assets/RVCE NEW-HEADER.png";
const Header = () => {
  return (
    <HStack>
      <Image src={headerlogo} width="20%" height="10vh"></Image>
    </HStack>
  );
};

export default Header;
