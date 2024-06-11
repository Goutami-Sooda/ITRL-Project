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
  const [generatedText, setGeneratedText] = useState(""); //translated text display
  const [translatedTexts, setTranslatedTexts] = useState<string[]>([]); //collection of all algorithms
  const [PyCodeList, setPyCodeList] = useState<string[]>([]); //collection of all python code lines
  const [generatedPyCode, setGeneratedPyCode] = useState<string[]>([]);
  const [showFirstSection, setShowFirstSection] = useState(true);
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
    "್ಗ",
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
    "್ಥ",
  ];
  const kannadaOthersData2 = [
    "್ದ",
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
    const inputField = document.getElementById(
      "voiceInputField"
    ) as HTMLInputElement;
  
    if (inputField) {
      const start = inputField.selectionStart || 0;
      const end = inputField.selectionEnd || 0;
  
      const currentText = inputField.value;
  
      const newText =
        currentText.substring(0, start) +
        character +
        currentText.substring(end);
  
      inputField.value = newText;
      const newCursorPosition = start + character.length;
  
      // Focus on the input field after updating its value
      inputField.focus();
      
      inputField.setSelectionRange(newCursorPosition, newCursorPosition);
  
      setVoiceInput(newText);
  
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
      recognitionRef.current = window["webkitSpeechRecognition"];
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
      const pythonCode = data.generatedText;
      if(pythonCode === null){
        setGeneratedText("ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ"); //try again
      }
      else{
        setGeneratedText(pythonCode.toLowerCase());
        setGeneratedPyCode([pythonCode.toLowerCase()]); 
      }

      const translatedText = recognizedText.join(" ");
      setTranslatedTexts((prevTexts) => [...prevTexts, translatedText]);
      setRecognizedText([]);
      setVoiceInput("");

      //console.log(data.translatedText);
    } catch (error) {
      console.error("Backend error:", error);
    }
  };

  useEffect(() => {
    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [recognition]);

  useEffect(() => {
    setPyCodeList((prevTexts) => [...prevTexts, ...generatedPyCode]);
  }, [generatedPyCode]);

  const handleSectionSwitch = () => {
    setShowFirstSection((prevShowFirstSection) => !prevShowFirstSection);
  };

  const getKeyboardSection = () => {                          
    if (showFirstSection) {
      return (
        <VStack className="keyboard-section" maxWidth="20vh">
          {/* Render buttons for the first section */}
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
        </VStack>
      );
    } else {
      return (
        <VStack className="keyboard-section" maxWidth="20vh">
          {/* Render buttons for the second section */}
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
      );
    }
  };

  return (
    <Box textAlign="center" padding="4">
      <Text fontSize="2xl" fontWeight="bold">
        ಕನ್ನಡ ಅಲ್ಗಾರಿದಮ್: ಬರೆಯಿರಿ ಅಥವಾ ಮಾತನಾಡಿ
      </Text>
      <VStack spacing="4" align="center" className="container">
        <HStack className="text-box">
          <Input
            type="text"
            className="input-field"
            id="voiceInputField"
            value={voiceInput}
            placeholder="ಇಲ್ಲಿ ಬರೆಯಿರಿ" 
            onChange={handleInputChange}
          />
          <Button
            className="record-button"
            onClick={startVoiceRecognition}
            colorScheme="teal"
            style={{ width: "190px" }}
          >
            ಮಾತನಾಡಿ
          </Button>

          <Button
            className="submit-button"
            onClick={translateAlgorithm}
            colorScheme="teal"
            style={{ width: "145px" }}
          >
            ಸಲ್ಲಿಸಿ
          </Button>

          <Input
            type="text"
            className="input-field"
            id="translatedInputField"
            value={generatedText}
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
           {getKeyboardSection()}

            <HStack>
              <Button onClick={handleSectionSwitch}>ವಿಭಾಗವನ್ನು ಬದಲಾಯಿಸಿ</Button>
            </HStack>

            <VStack>
              <HStack>
                <Box
                  className="algorithms-field"
                  id="collectedInputField"
                  borderWidth="1px"
                  borderRadius="lg"
                  p="4"
                  whiteSpace="pre-line"
                  width="400px"
                >
                  <Text>{translatedTexts.join("\n")}</Text>
                </Box>
          
                <Box
                  className="pycode-field"
                  id="collectedPycodeField"
                  borderWidth="1px"
                  borderRadius="lg"
                  p="4"
                  whiteSpace="pre-wrap"
                  width="400px"
                >
                  <Text textAlign="left">{PyCodeList.join("\n").trim()}</Text>
                </Box>
              </HStack>  
            </VStack>
          </VStack>
        </VStack>
    </Box>
  );
};

export default KannadaKeyboardIssue;
