import { HStack, Text, Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, useDisclosure, Box } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { TopicData } from "./types";

// const Question: React.FC = () => {
//   const { topicId } = useParams<{ topicId: string }>();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [isButtonActive, setIsButtonActive] = useState(false);
//   const [questions, setQuestions] = useState<TopicData[]>([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [error, setError] = useState<string | null>(null);
//   const topicImportMap: { [key: string]: () => Promise<any> } = {
//     '1': () => import('../pages/PracticeQuestions/Topic1'),
//     '2': () => import('../pages/PracticeQuestions/Topic2'),
//     '3': () => import('../pages/PracticeQuestions/Topic3'),
//     '4': () => import('../pages/PracticeQuestions/Topic4'),
//     '5': () => import('../pages/PracticeQuestions/Topic5'),
//     '6': () => import('../pages/PracticeQuestions/Topic6'),
//   };

//   useEffect(() => {
//     const loadTopicData = async () => {
//       if (topicId && topicImportMap[topicId]) {  
//         try {
//           const topicModule = await topicImportMap[topicId]();
//           setQuestions(topicModule.practiceQuesData);
//         } catch (error) {
//           console.error("Failed to load topic data", error);
//         }
//       } else {
//         setError('Invalid topic ID');
//       }
//     };

//     loadTopicData();

//     // Set the button to be active after 2 minutes
//     const timer = setTimeout(() => {
//       setIsButtonActive(true);
//     }, 2 * 60 * 1000);

//     return () => clearTimeout(timer);
//   }, []); // Empty dependency array ensures the effect runs only once on component mount

//   const handleButtonClick = () => {
//     onOpen(); // Open the dialog box
//   };

//   const onCloseDialog = () => {
//     onClose(); // Close the dialog box
//   };

//   const leastDestructiveRef = useRef<HTMLElement | null>(null);

//   const nextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const previousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   if (questions.length === 0) {
//     return <Text>Loading...</Text>;
//   }

//   const currentQuestion = questions[currentQuestionIndex];
  
//   return (
//     <HStack
//       justifyContent="space-between" // Align items to the left and right ends
//       alignItems="center"
//       color="white"
//     >
//       <Box flex="1"> {/* Use Box to take remaining space */}
//         <Text textAlign="center"> ಪ್ರಶ್ನೆ: {currentQuestion.question} </Text>
//       </Box>
//       <Button onClick={handleButtonClick} isDisabled={!isButtonActive} colorScheme="teal">
//         ಸರಿಯಾದ ಉತ್ತರ
//       </Button>
  
//       <AlertDialog isOpen={isOpen} onClose={onCloseDialog} leastDestructiveRef={leastDestructiveRef}>
//         <AlertDialogOverlay>
//           <AlertDialogContent>
//             <AlertDialogHeader>ಸರಿಯಾದ ಉತ್ತರ</AlertDialogHeader>
//             <AlertDialogBody>
//             {currentQuestion.answer}
//             </AlertDialogBody>
//             <AlertDialogFooter>
//               <Button onClick={onCloseDialog}>ಮುಂದುವರೆಯಿರಿ</Button>
//             </AlertDialogFooter>
//           </AlertDialogContent>
//         </AlertDialogOverlay>
//       </AlertDialog>
  
//       <Button onClick={previousQuestion} isDisabled={currentQuestionIndex === 0} colorScheme="teal">
//         ಹಿಂದಿನ ಪ್ರಶ್ನೆ
//       </Button>
//       <Button onClick={nextQuestion} isDisabled={currentQuestionIndex === questions.length - 1} colorScheme="teal">
//         ಮುಂದಿನ ಪ್ರಶ್ನೆ
//       </Button>
//     </HStack>/

const Question: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [questions, setQuestions] = useState<TopicData[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const topicImportMap: { [key: string]: () => Promise<any> } = {
    '1': () => import('../pages/PracticeQuestions/Topic1'),
    '2': () => import('../pages/PracticeQuestions/Topic2'),
    '3': () => import('../pages/PracticeQuestions/Topic3'),
    '4': () => import('../pages/PracticeQuestions/Topic4'),
    '5': () => import('../pages/PracticeQuestions/Topic5'),
    '6': () => import('../pages/PracticeQuestions/Topic6'),
  };

  useEffect(() => {
    const loadTopicData = async () => {
      if (topicId && topicImportMap[topicId]) {  
        try {
          const topicModule = await topicImportMap[topicId]();
          setQuestions(topicModule.practiceQuesData);
        } catch (error) {
          console.error("Failed to load topic data", error);
        }
      } else {
        setError('Invalid topic ID');
      }
    };

    loadTopicData();

    // Set the button to be active after 2 minutes
    const timer = setTimeout(() => {
      setIsButtonActive(true);
    }, 2 * 60 * 1000);

    return () => clearTimeout(timer);
  }, [topicId]); // Include topicId in the dependency array

  const handleButtonClick = () => {
    onOpen(); // Open the dialog box
  };

  const onCloseDialog = () => {
    onClose(); // Close the dialog box
  };

  const leastDestructiveRef = useRef<HTMLElement | null>(null);

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsButtonActive(false); // Disable the button
      setTimeout(() => {
        setIsButtonActive(true); // Enable the button after 2 minutes
      }, 2 * 60 * 1000);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setIsButtonActive(false); // Disable the button
      setTimeout(() => {
        setIsButtonActive(true); // Enable the button after 2 minutes
      }, 2 * 60 * 1000);
    }
  };

  if (questions.length === 0) {
    return <Text>Loading...</Text>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  
  return (
    <HStack
      justifyContent="space-between" // Align items to the left and right ends
      alignItems="center"
      color="white"
    >
      <Box flex="1"> {/* Use Box to take remaining space */}
        <Text textAlign="center"> ಪ್ರಶ್ನೆ: {currentQuestion.question} </Text>
      </Box>
      <Button onClick={handleButtonClick} isDisabled={!isButtonActive} colorScheme="teal">
        ಸರಿಯಾದ ಉತ್ತರ
      </Button>
  
      <AlertDialog isOpen={isOpen} onClose={onCloseDialog} leastDestructiveRef={leastDestructiveRef}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>ಸರಿಯಾದ ಉತ್ತರ</AlertDialogHeader>
            <AlertDialogBody>
            {currentQuestion.answer}
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={onCloseDialog}>ಮುಂದುವರೆಯಿರಿ</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
  
      <Button onClick={previousQuestion} isDisabled={currentQuestionIndex === 0} colorScheme="teal">
        ಹಿಂದಿನ ಪ್ರಶ್ನೆ
      </Button>
      <Button onClick={nextQuestion} isDisabled={currentQuestionIndex === questions.length - 1} colorScheme="teal">
        ಮುಂದಿನ ಪ್ರಶ್ನೆ
      </Button>
    </HStack>
  );
};

export default Question;
