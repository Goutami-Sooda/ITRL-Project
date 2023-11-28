// Quiz.tsx
import React, { useState } from "react";
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
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { questionsData } from "./questions";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  const restartQuiz = (): void => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setIsCorrect(null);
    setIsOpen(false);
  };

  return (
    <Box>
      <Header></Header>
      <NavBar></NavBar>
      <Box textAlign="center" padding="4">
        {showScore ? (
          <Box>
            <Heading as="h1">
              Your Score: {score} out of {questionsData.length}
            </Heading>
            <Button colorScheme="teal" onClick={restartQuiz} mt="4">
              Restart Quiz
            </Button>
          </Box>
        ) : (
          <Box>
            <Heading as="h1">
              Question {currentQuestion + 1}/{questionsData.length}
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
        leastDestructiveRef={undefined}
        autoFocus={false}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {isCorrect !== null ? (isCorrect ? "Correct!" : "Wrong!") : ""}
            </AlertDialogHeader>

            <AlertDialogBody>
              {isCorrect !== null
                ? isCorrect
                  ? "Good job! Your answer is correct."
                  : "Oops! Your answer is wrong."
                : ""}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="teal" onClick={handleClose}>
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}

export default Quiz;
