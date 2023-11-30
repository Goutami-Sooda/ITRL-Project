import { HStack, Text } from "@chakra-ui/react";

const Question = () => {
  return (
    <HStack
      justifyContent="center"
      alignItems="center"
      color="white"
      height="5vh"
    >
      <Text>ಪ್ರಶ್ನೆ:</Text>
      <Text>Kannada question here</Text>  
      
    </HStack>
  );
};

export default Question;
