import React, { useState } from "react";
import { HStack, Textarea, Button } from "@chakra-ui/react";

interface ErrorTranslationProps {}

const ErrorTranslation: React.FC<ErrorTranslationProps> = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const translateErrorMessage = async () => {
    try {
      const response = await fetch(
        "https://sirius03.pythonanywhere.com/api/translateError/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: errorMessage }),
        }
      );

      const data = await response.json();
      //console.log('Translated text:', data.translatedText);
      const translation = data.translatedText;
      setErrorMessage(translation);
    } catch (error) {
      console.error("Backend error:", error);
    }
  };

  return (
    <HStack className="text-box">
      <Textarea
        className="error-input-field"
        id="errorInputField"
        value={errorMessage}
        placeholder="ದೋಷ ಸಂದೇಶವನ್ನು ಇಲ್ಲಿ ಹಾಕಿ"
        onChange={(e) => setErrorMessage(e.target.value)}
        height="auto"
        minHeight="40px"
        resize="vertical"
      />

      <Button
        className="translate-button"
        onClick={translateErrorMessage}
        colorScheme="teal"
        style={{ width: "190px" }}
      >
        ಅನುವಾದಿಸಿ
      </Button>
    </HStack>
  );
};

export default ErrorTranslation;
