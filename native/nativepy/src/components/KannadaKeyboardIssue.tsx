import React, { useState, useEffect, useRef } from "react";
import { ChangeEvent } from "react";
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
  const [translatedTexts, setTranslatedTexts] = useState<string[]>([]);
  const recognitionRef = useRef<any>(null);
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
    const inputField = document.getElementById(
      "voiceInputField"
    ) as HTMLInputElement;

    if (inputField) {
      const start = inputField.selectionStart || 0;
      const end = inputField.selectionEnd || 0;

      const newText =
        inputField.value.substring(0, start) +
        character +
        inputField.value.substring(end);

      setVoiceInput(newText);
      const newCursorPosition = start + character.length;
      inputField.setSelectionRange(newCursorPosition, newCursorPosition);

      // Update recognizedText with the modified input only if it's from the Kannada keyboard
      if (character !== "") {
        setRecognizedText([newText]);
      }
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Update recognizedText with the modified input using the computer keyboard
    setRecognizedText([e.target.value]);
    setVoiceInput(e.target.value);
  };

  const startVoiceRecognition = () => {
    if ("webkitSpeechRecognition" in window) {
      recognitionRef.current = new webkitSpeechRecognition();
      recognitionRef.current.lang = "kn-IN";

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setRecognizedText((prevText) => [...prevText, transcript]);
        setVoiceInput(transcript);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error);
      };

      recognitionRef.current.start();
    } else {
      alert("Speech recognition not supported in your browser.");
    }
  };

  // const translateText = (): void => {
  //   console.log("Recognized Text:", recognizedText);
  //   setTranslatedText(voiceInput);
  //   console.log("Translated Text:", translatedText);
  // };

  const translateText = (): void => {
    const translatedText = recognizedText.join(" ");
    setTranslatedTexts((prevTexts) => [...prevTexts, translatedText]);
    setRecognizedText([]);
    setVoiceInput("");
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
            // onChange={(e: ChangeEvent<HTMLInputElement>) =>
            //   setVoiceInput(e.target.value)
            // }
            onChange={handleInputChange}
          />
          <Button
            className="record-button"
            onClick={startVoiceRecognition}
            colorScheme="teal"
          >
            Record
          </Button>

          <Button
            className="translate-button"
            onClick={translateText}
            colorScheme="teal"
          >
            Translate
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
      {translatedTexts.map((text, index) => (
        <Text key={index} className="translated-text">
          {text}
          <br />
        </Text>
      ))}
    </Box>
  );
};

export default KannadaKeyboardIssue;
