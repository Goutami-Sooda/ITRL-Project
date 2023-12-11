import { HStack, Text, Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Question = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    // Set the button to be active after 5 minutes
    const timer = setTimeout(() => {
      setIsButtonActive(true);
    }, 2 * 60 * 1000);

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
      <Text> ೧ ರಿಂದ ೭ ರವರೆಗಿನ ಸಂಖ್ಯೆಯನ್ನು ಇನ್‌ಪುಟ್ ಆಗಿ ತೆಗೆದುಕೊಳ್ಳಿ ಮತ್ತು ಅನುಗುಣವಾದ ವಾರದ ದಿನವನ್ನು ಮುದ್ರಿಸಿ (ವೇರಿಯಬಲ್ ಎನ್ ಅನ್ನು ಬಳಸಿ).</Text>
      <Button onClick={handleButtonClick} isDisabled={!isButtonActive} colorScheme="teal">
        ಸರಿಯಾದ ಉತ್ತರ
      </Button>

      
      <AlertDialog isOpen={isOpen} onClose={onCloseDialog}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>ಸರಿಯಾದ ಉತ್ತರ</AlertDialogHeader>
            <AlertDialogBody>
              ಎನ್ ಎನ್ನುವ ವೇರಿಯಬಲ್ಗೆ ಒಂದರಿಂದ ಏಳರವರೆಗೆ ಬಳಕೆದಾರರು ನೀಡುವ ಸಂಖ್ಯೆಯನ್ನು ನಿಯೋಜಿಸಿ. <br />
              ಒಂದು ವೇಳೆ ಎನ್ ಒಂದಾಗಿದ್ದರೆ ರವಿವಾರ ಎಂದು ಮುದ್ರಿಸಿ. <br />
              ಇಲ್ಲದಿದ್ದರೆ ಒಂದು ವೇಳೆ ಎನ್ ಎರಡಾಗಿದ್ದರೆ ಸೋಮವಾರ ಎಂದು ಮುದ್ರಿಸಿ. <br />
              ಇಲ್ಲದಿದ್ದರೆ ಒಂದು ವೇಳೆ ಎನ್ ಮೂರಾಗಿದ್ದರೆ ಮಂಗಳವಾರ ಎಂದು ಮುದ್ರಿಸಿ. <br />
              ಇಲ್ಲದಿದ್ದರೆ ಒಂದು ವೇಳೆ ಎನ್ ನಾಲ್ಕು ಆಗಿದ್ದರೆ ಬುಧವಾರ ಎಂದು ಮುದ್ರಿಸಿ. <br />
              ಇಲ್ಲದಿದ್ದರೆ ಒಂದು ವೇಳೆ ಎನ್ ಐದು ಗಿದ್ದರೆ ಗುರುವಾರ ಎಂದು ಮುದ್ರಿಸಿ. <br />
              ಇಲ್ಲದಿದ್ದರೆ ಒಂದು ವೇಳೆ ಎನ್ ಆರು ಆಗಿದ್ದರೆ ಶುಕ್ರವಾರ ಎಂದು ಮುದ್ರಿಸಿ. <br />
              ಇಲ್ಲದಿದ್ದರೆ ಶನಿವಾರ ಎಂದು ಮುದ್ರಿಸಿ. 
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
