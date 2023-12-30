import { HStack, Text, Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Question = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    // Set the button to be active after 5 minutes
    const timer = setTimeout(() => {
      setIsButtonActive(true);
    }, 3 * 60 * 1000);

    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const handleButtonClick = () => {
    onOpen(); // Open the dialog box
  };

  const onCloseDialog = () => {
    onClose(); // Close the dialog box
  };

  return (
    <HStack
      justifyContent="center"
      alignItems="center"
      color="white"
      height="5vh"
    >
      <Text> ಪ್ರಶ್ನೆ:</Text>
      <Text> ಒಂದು ಸಂಖ್ಯೆಯನ್ನು ಇನ್‌ಪುಟ್ ಆಗಿ ತೆಗೆದುಕೊಳ್ಳಿ ಮತ್ತು ಅದು ಧನಾತ್ಮಕ ಸಂಖ್ಯೆ, ಋಣಾತ್ಮಕ ಸಂಖ್ಯೆ ಅಥವಾ ಶೂನ್ಯ ಎಂದು ಮುದ್ರಿಸಿ (ವೇರಿಯಬಲ್ ಎನ್ ಅನ್ನು ಬಳಸಿ).</Text>
      <Button onClick={handleButtonClick} isDisabled={!isButtonActive} colorScheme="teal">
        ಸರಿಯಾದ ಉತ್ತರ
      </Button>

      
      <AlertDialog isOpen={isOpen} onClose={onCloseDialog}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>ಸರಿಯಾದ ಉತ್ತರ</AlertDialogHeader>
            <AlertDialogBody>
              ವೇರಿಯೇಬಲ್ ಎನ್ ಅನ್ನು ಘೋಷಿಸಿ ಮತ್ತು ಬಳಕೆದಾರರ ಇನ್‌ಪುಟ್ ಸಂಖ್ಯಾ ಮೌಲ್ಯವನ್ನು ನಿಯೋಜಿಸಿ.<br />
              ಒಂದು ವೇಳೆ ವೇರಿಯಬಲ್ ಎನ್ ಶೂನ್ಯಕ್ಕಿಂತ ದೊಡ್ಡದಾಗಿದ್ದರೆ ಧನಾತ್ಮಕ ಸಂಖ್ಯೆ ಎಂದು ಮುದ್ರಿಸಿ.<br />
              ಇಲ್ಲದಿದ್ದರೆ ಒಂದು ವೇಳೆ ವೇರಿಯಬಲ್ ಎನ್ ಸೊನ್ನೆಗಿಂತ ಚಿಕ್ಕದಾಗಿದ್ದರೆ ಅದು ಋಣಾತ್ಮಕ ಸಂಖ್ಯೆ ಎಂದು ಮುದ್ರಿಸಿ.<br />
              ಇಲ್ಲದಿದ್ದರೆ ಸೊನ್ನೆಯನ್ನು ಪ್ರಿಂಟ್ ಮಾಡಿ.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={onCloseDialog}>ಮುಂದುವರೆಯಿರಿ</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </HStack>
  );
};

export default Question;
