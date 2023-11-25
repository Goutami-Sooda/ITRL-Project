import { HStack, Text } from "@chakra-ui/react";

const Question = () => {
  return (
    <HStack
      justifyContent="center"
      alignItems="center"
      color="white"
      height="5vh"
    >
      <Text>Question:</Text>
      <Text>Kannada Question here</Text>
    </HStack>
  );
};

export default Question;
