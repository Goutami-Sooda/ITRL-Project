import React, { useState, useEffect } from "react";
import {
  Box,
  Input,
  Button,
  VStack,
  HStack,
  Text,
  StackDivider,
} from "@chakra-ui/react";

interface KannadaKeyboardIssueProps {}

const KannadaKeyboardIssue: React.FC<KannadaKeyboardIssueProps> = () => {
  const [voiceInput, setVoiceInput] = useState<string>("");
  const [recognizedText, setRecognizedText] = useState<string[]>([]);
  let recognition: any;

  const kannadaLettersData = [
    "ಅ",
    "ಆ",
    "ಇ",
    "ಈ",
    "ಉ",
    "ಊ",
    "ಋ",
    "ೠ",
    "ಎ",
    "ಏ",
    "ಐ",
    "ಒ",
    "ಓ",
    "ಔ",
    "ಅಂ",
    "ಅಃ",
  ];

  const kannadaLettersData1 = [
    "ಕ",
    "ಖ",
    "ಗ",
    "ಘ",
    "ಙ",
    "ಚ",
    "ಛ",
    "ಜ",
    "ಝ",
    "ಞ",
    "ಟ",
    "ಠ",
    "ಡ",
    "ಢ",
    "ಣ",
    "ತ",
  ];

  const kannadaLettersData2 = [
    "ಥ",
    "ದ",
    "ಧ",
    "ನ",
    "ಪ",
    "ಫ",
    "ಬ",
    "ಭ",
    "ಮ",
    "ಯ",
    "ರ",
    "ಲ",
    "ವ",
    "ಶ",
    "ಷ",
  ];
  const kannadaLettersData3 = [
    "ಸ",
    "ಹ",
    "೦",
    "೧",
    "೨",
    "೩",
    "೪",
    "೫",
    "೬",
    "೭",
    "೮",
    "೯",
  ];

  const kannadaOthersData = [
    "್",
    "ಾ",
    "ಿ",
    "ೀ",
    "ು",
    "ೂ",
    "ೃ",
    "ೆ",
    "ೇ",
    "ೈ",
    "ೊ",
    "ೋ",
    "ೌ",
    "್ಕ",
    "್ಖ",
    "್",
    "್ದ",
    "್ಧ",
  ];

  const kannadaOthersData1 = [
    "ಗ",
    "್ನ",
    "್ಘ",
    "್ಙ",
    "್ಚ",
    "್ಛ",
    "್ಜ",
    "್ಝ",
    "್ಞ",
    "್ಟ",
    "್ಠ",
    "್ಡ",
    "್ಢ",
    "್ಣ",
    "್ತ",
  ];

  const kannadaOthersData2 = [
    "್",
    "್ದ",
    "್ಧ",
    "್ನ",
    "್ಪ",
    "್ಫ",
    "್ಬ",
    "್ಭ",
    "್ಮ",
    "್ಯ",
    "್ರ",
    "್ಲ",
    "್ವ",
    "್ಶ",
    "್ಷ",
    "್ಸ",
    "್ಹ",
  ];

  const handleKeyClick = (character: string) => {
    setVoiceInput((prevInput) => {
      const cursorPosition = prevInput.length;
      const newText =
        prevInput.substring(0, cursorPosition) +
        character +
        prevInput.substring(cursorPosition);
      return newText;
    });
  };

  const startVoiceRecognition = () => {
    if ("webkitSpeechRecognition" in window) {
      recognition = new webkitSpeechRecognition();
      recognition.lang = "kn-IN";

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setVoiceInput(transcript);
      };

      recognition.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error);
      };

      recognition.start();
    } else {
      alert("Speech recognition not supported in your browser.");
    }
  };

  const startRecognition = (index: number): void => {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = "kn-IN";

    recognition.onresult = (event: any): void => {
      const transcript: string = event.results[0][0].transcript;
      setRecognizedText((prevText) => {
        const newText = [...prevText];
        newText[index] = transcript;
        return newText;
      });
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.start();
  };

  useEffect(() => {
    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [recognition]);

  return (
    <Box textAlign="center" padding="4">
      <Text fontSize="2xl" fontWeight="bold">
        Record : Kannada to Python Code
      </Text>
      <VStack spacing="4" align="center" className="container">
        <HStack className="text-box">
          <Input
            type="text"
            className="input-field"
            id="voiceInputField"
            value={voiceInput}
            onChange={(e) => setVoiceInput(e.target.value)}
          />
          <Button
            className="record-button"
            onClick={startVoiceRecognition}
            colorScheme="teal"
          >
            Record
          </Button>
        </HStack>
        <VStack
          spacing="2"
          divider={<StackDivider borderColor="gray.200" />}
          className="keyboard-container"
          maxWidth="30vh"
        >
          <VStack className="keyboard-section" maxWidth="20vh">
            <HStack>
              {kannadaLettersData.map((character, index) => (
                <Button
                  key={character}
                  className="key"
                  onClick={() => {
                    handleKeyClick(character);
                  }}
                >
                  {character}
                </Button>
              ))}
            </HStack>
            <HStack>
              {kannadaLettersData1.map((character, index) => (
                <Button
                  key={character}
                  className="key"
                  onClick={() => {
                    handleKeyClick(character);
                  }}
                >
                  {character}
                </Button>
              ))}
            </HStack>
            <HStack>
              {kannadaLettersData2.map((character, index) => (
                <Button
                  key={character}
                  className="key"
                  onClick={() => {
                    handleKeyClick(character);
                  }}
                >
                  {character}
                </Button>
              ))}
            </HStack>
            <HStack>
              {kannadaLettersData3.map((character, index) => (
                <Button
                  key={character}
                  className="key"
                  onClick={() => {
                    handleKeyClick(character);
                  }}
                >
                  {character}
                </Button>
              ))}
            </HStack>
            <HStack>
              {kannadaOthersData.map((character, index) => (
                <Button
                  key={character}
                  className="key"
                  onClick={() => {
                    handleKeyClick(character);
                  }}
                >
                  {character}
                </Button>
              ))}
            </HStack>
            <HStack>
              {kannadaOthersData1.map((character, index) => (
                <Button
                  key={character}
                  className="key"
                  onClick={() => {
                    handleKeyClick(character);
                  }}
                >
                  {character}
                </Button>
              ))}
            </HStack>
            <HStack>
              {kannadaOthersData2.map((character, index) => (
                <Button
                  key={character}
                  className="key"
                  onClick={() => {
                    handleKeyClick(character);
                  }}
                >
                  {character}
                </Button>
              ))}
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default KannadaKeyboardIssue;
