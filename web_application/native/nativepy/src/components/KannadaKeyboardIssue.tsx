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
  const [generatedText, setGeneratedText] = useState(''); //translated text display

  let recognition: any;
  var webkitSpeechRecognition: any;

  const kannadaLettersData = [
    "ಅ",
    "ಆ",
    "ಇ",
    "ಈ",
    "ಉ",
    "ಊ",
    "ಋ",
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
    "ಳ",
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
    
  ];

  const kannadaOthersData1 = [
    "್ದ",
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
    "್ಣ",
    "್ತ",
  ];

  const kannadaOthersData2 = [
    "್ನ",
    "್ಪ",
    "್ಬ",
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
      const cursorPosition = prevInput.length; //can be modified to point exact cursor location
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

  const translateAlgorithm = async () => {                 
    try {
      const response = await fetch('http://127.0.0.1:8080/api/translate/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: voiceInput }),
      });

      const data = await response.json();
      //console.log('Translated text:', data.translatedText);
      setGeneratedText(data.generatedText);
      //console.log(data.translatedText); 
    } 
    
    catch (error) {
      console.error('Backend error:', error);
    }
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
      ರೆಕಾರ್ಡ್ ಅಥವಾ ಟೈಪ್: ಕನ್ನಡ ಅಲ್ಗಾರಿದಮ್
      </Text>
      <VStack spacing="4" align="center" className="container">
        <HStack className="text-box">
          <Input
            type="text"
            className="input-field"
            id="voiceInputField"
            value={voiceInput}
            onChange={(e) => setVoiceInput(e.target.value)}
            placeholder="ಇಲ್ಲಿ ಬರೆಯಿರಿ" 
          />
          
          <Button
            className="record-button"
            onClick={startVoiceRecognition}
            colorScheme="teal"
            style={{ width: '150px' }}
          >
            ರೆಕಾರ್ಡ್ 
          </Button>

          <Button                           
            className="submit-button"
            onClick={translateAlgorithm}
            colorScheme="teal"
            style={{ width: '150px' }}
          >
            ಸಲ್ಲಿಸಿ 
          </Button>

          <Input
            type="text"
            className="input-field"
            id="translatedInputField"
            value={generatedText === null ? "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ" : generatedText} //try again
            onChange={(e) => setGeneratedText(e.target.value)}
            readOnly
          />


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
