// Quiz.tsx
import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Heading,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import Header from "../../components/Header";

import { questionsData as originalQuestionsData } from "../QuizQuestions/Quiz2";

function Quiz2() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [questionsData, setQuestionsData] = useState([...originalQuestionsData]);
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const handleAnswerButtonClick = (isCorrect: boolean): void => {
    setIsCorrect(isCorrect);
    setIsOpen(true);

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionsData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleClose = (): void => {
    setIsOpen(false);
    setIsCorrect(null);
  };

  // Fisher-Yates Algorithm to shuffle questions
  const shuffleArray = (array: any[]): any[] => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const restartQuiz = (): void => {
    // Shuffle the questions array
    const shuffledQuestions = shuffleArray(questionsData);
  
    // Reset the state with shuffled questions
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setIsCorrect(null);
    setIsOpen(false);
    setQuestionsData(shuffledQuestions);
  };

  return (
    <Box>
      <Header></Header>
      
      <Box textAlign="center" padding="4">
        {showScore ? (
          <Box>
            <Heading as="h1">
              ನಿಮ್ಮ ಅಂಕ: {questionsData.length} ರಲ್ಲಿ {score}
            </Heading>
            <Button colorScheme="teal" onClick={restartQuiz} mt="4">
              ರಸಪ್ರಶ್ನೆಯನ್ನು ಮರುಪ್ರಾರಂಭಿಸಿ
            </Button>
          </Box>
        ) : (
          <Box>
            <Heading as="h1">
              ಪ್ರಶ್ನೆ {currentQuestion + 1}/{questionsData.length}
            </Heading>
            <Box bg="gray.100" p="4" borderRadius="md" mt="4">
              {questionsData[currentQuestion].question}
            </Box>
            <Box mt="4">
              {questionsData[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswerButtonClick(option.isCorrect)}
                  colorScheme="teal"
                  size="lg"
                  mt="2"
                  width="100%"
                >
                  {option.answerText}
                </Button>
              ))}
            </Box>
          </Box>
        )}
      </Box>

      <AlertDialog
        isOpen={isOpen}
        onClose={handleClose}
        leastDestructiveRef={cancelRef}
        autoFocus={false}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {isCorrect !== null ? (isCorrect ? "ಸರಿಯಾದ!" : "ತಪ್ಪಾಗಿದೆ!") : ""}
            </AlertDialogHeader>

            <AlertDialogBody>
              {isCorrect !== null
                ? isCorrect
                  ? "ಉತ್ತಮ! ನಿಮ್ಮ ಉತ್ತರ ಸರಿಯಾಗಿದೆ." //"Good job! Your answer is correct."
                  : "ನಿಮ್ಮ ಉತ್ತರ ತಪ್ಪಾಗಿದೆ."           //"Oops! Your answer is wrong."
                : ""}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                colorScheme="teal"
                onClick={handleClose}
                ref={(ref) => (cancelRef.current = ref)}
              >
                ಮುಂದಿನ ಪ್ರಶ್ನೆ
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}

export default Quiz2;

