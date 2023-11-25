import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Question from "./components/Question";
import SpeechRecognitionBox from "./components/KannadaKeyboardIssue";
import Editor from "./components/Editor";
import KannadaKeyboardIssue from "./components/KannadaKeyboardIssue";
function App() {
  return (
    <Grid
      templateAreas={`"header header" "nav nav" "question question" "incode editor"`}
      gap={1}
      autoFlow="row dense"
    >
      <GridItem area="header">
        <Header></Header>
      </GridItem>
      <GridItem area="nav" bg="blue.600">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="question" bg="blue.600">
        <Question></Question>
      </GridItem>
      <GridItem area="incode" maxHeight="75vh" overflowX="scroll">
        <KannadaKeyboardIssue></KannadaKeyboardIssue>
      </GridItem>
      <GridItem area="editor" minHeight="80vh" bg="black">
        <Editor></Editor>
      </GridItem>
    </Grid>
  );
}

export default App;
