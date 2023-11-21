import React, { useState } from "react";
import { Button, VStack, Box, Text, Flex } from "@chakra-ui/react";

interface SpeechRecognitionBoxProps {}

const SpeechRecognitionBox: React.FC<SpeechRecognitionBoxProps> = () => {
  const [textBoxCount, setTextBoxCount] = useState<number>(5);
  const [recognizedText, setRecognizedText] = useState<string[]>(
    Array(textBoxCount).fill("")
  );

  const startRecognition = (index: number): void => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "kn-IN";

    recognition.onresult = (event): void => {
      const transcript: string = event.results[0][0].transcript;
      setRecognizedText((prevText) => {
        const newText = [...prevText];
        newText[index] = transcript;
        return newText;
      });
    };

    recognition.onerror = (event): void => {
      console.error(
        `Speech recognition error for button ${index}:`,
        event.error
      );
    };

    recognition.start();
  };

  const addTextBox = (): void => {
    setTextBoxCount((prevCount: number) => prevCount + 1);
  };

  return (
    <VStack spacing={4}>
      <Button id="addTextBoxButton" onClick={addTextBox}>
        Add Text Box
      </Button>

      <VStack id="rightContainer" spacing={4}>
        {[...Array(textBoxCount)].map((_, index: number) => (
          <Box
            key={index}
            className="text-box"
            p={4}
            borderWidth="1px"
            borderRadius="md"
          >
            <Flex direction="column" h="100%" textAlign="center">
              <Text
                id={`recognizedText${index + 1}`}
                className="recognized-text"
                flexGrow={1}
              >
                {recognizedText[index]}
              </Text>
              <Button
                className="record-button"
                onClick={(): void => startRecognition(index)}
              >
                Record
              </Button>
            </Flex>
          </Box>
        ))}
      </VStack>
    </VStack>
  );
};

export default SpeechRecognitionBox;
