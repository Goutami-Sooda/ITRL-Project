import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Question from "./components/Question";
//import SpeechRecognitionBox from "./components/KannadaKeyboardIssue";
import Editor from "./components/Editor";
import KannadaKeyboardIssue from "./components/KannadaKeyboardIssue";
import ErrorTranslation from "./components/ErrorTranslation";
import { activateModel } from './services/ModelActivation';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Call the activateModel function once the component mounts
    activateModel();
  }, []);

  return (
    <Grid
      templateAreas={`"header header" "nav nav" "question question" "incode editor"`}
      gap={1}
      autoFlow="row dense"
      templateColumns="60% 40%"
    >
      <GridItem area="header">
        <Header></Header>
      </GridItem>
      {/* <GridItem area="nav" bg="blue.600">
        <NavBar></NavBar>
      </GridItem> */}
      <GridItem area="question" bg="blue.600">
        <Question></Question>
      </GridItem>
      <GridItem area="incode" w="100%" overflowX="scroll">
        <KannadaKeyboardIssue></KannadaKeyboardIssue>
      </GridItem>
      <GridItem area="editor" minHeight="80vh" bg="white" p={4}>   
        <Editor></Editor>
        <ErrorTranslation></ErrorTranslation>
      </GridItem>
    </Grid>
  );
}

export default App;
