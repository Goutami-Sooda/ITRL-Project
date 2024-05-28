import React, {useState} from 'react';
import { Box, Heading, Link, Stack, List, ListItem, Flex } from '@chakra-ui/react';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Quiz1 from "./QuizPageRender/Quiz1";
import Quiz2 from "./QuizPageRender/Quiz2";
import Quiz3 from "./QuizPageRender/Quiz3";
import Quiz4 from "./QuizPageRender/Quiz4";
import Quiz5 from "./QuizPageRender/Quiz5";
import Quiz6 from "./QuizPageRender/Quiz6";
import { useNavigate } from 'react-router-dom';

const Tutorials: React.FC = () => {
    const navigate = useNavigate();

    const handleTopicSelection = (topicId: number) => {
      navigate(`/question/${topicId}`);
    };

  return (
    <Box>
        <Header></Header>
        <Box textAlign="center" padding="4">
            <Heading>ವಿಷಯಗಳು</Heading>

            <br />
            <br />
            
            <Flex align="center">

                <Box
                p={4} // Padding
                borderRadius="md" // Rounded corners
                boxShadow="md" // Box shadow
                bg="teal.200" // Background color
                marginLeft = {20}
                marginRight = {60}
                textAlign="center"
                >
                    {/* Your content goes here */}
                <List spacing={2}>   
                    <ListItem>
                        <Heading as="h3" fontWeight="bold" fontSize="18px">ಅಧ್ಯಾಯ ಒಂದು</Heading>
                    </ListItem>
                    <ListItem>
                        {/* Sublist */}
                        <List ml={4} spacing={1}>
                        <ListItem>
                            <Link href="/tutorials_pdf/print.pdf" isExternal>
                                ಮುದ್ರಿಸಿ ಹೇಳಿಕೆ
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link id="quiz1" onClick={() => Quiz1()} href="/Quiz1">ರಸಪ್ರಶ್ನೆ ಒಂದು</Link>
                        </ListItem>

                        <ListItem>
                            <Link onClick={() => handleTopicSelection(1)}>ಅಭ್ಯಾಸ ಪ್ರಶ್ನೆಗಳು</Link>
                        </ListItem>
                        </List>
                    </ListItem>
                </List>
                </Box>
                

                <Box
                p={4} // Padding
                borderRadius="md" // Rounded corners
                boxShadow="md" // Box shadow
                bg="teal.200" // Background color
                marginRight = {65}
                textAlign="center"
                >
                    {/* Your content goes here */}
                <List spacing={2}>
                    
                    //List and sub-list for second topic
                    <ListItem>
                    <Heading as="h3" fontWeight="bold" fontSize="18px">ಅಧ್ಯಾಯ ಎರಡು</Heading>
                    </ListItem>
                    <ListItem>
                        {/* Sublist */}
                        <List ml={4} spacing={1}>
                        <ListItem>
                            <Link href="/tutorials_pdf/datatypes.pdf" isExternal>
                                ಡೇಟಾಟೈಪ್
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link id = "quiz2" onClick={() => Quiz2()}href="/Quiz2">ರಸಪ್ರಶ್ನೆ ಎರಡು</Link>
                        </ListItem>
                        <ListItem>
                            <Link onClick={() => handleTopicSelection(2)}>ಅಭ್ಯಾಸ ಪ್ರಶ್ನೆಗಳು</Link>
                        </ListItem>
                        </List>
                    </ListItem>

                    
                </List>
                </Box>

                <Box
                p={4} // Padding
                borderRadius="md" // Rounded corners
                boxShadow="md" // Box shadow
                bg="teal.200" // Background color
                marginRight = {25}
                marginLeft = {40}
                textAlign="center"
                >
                    {/* Your content goes here */}
                <List spacing={2}>
                    //List and sub-list for third topic
                    <ListItem>
                    <Heading as="h3" fontWeight="bold" fontSize="18px">ಅಧ್ಯಾಯ ಮೂರು</Heading>
                    </ListItem>
                    <ListItem>
                       
                        <List ml={4} spacing={1}>
                        <ListItem>
                            <Link href="/tutorials_pdf/variables.pdf" isExternal>
                                ವೇರಿಯಬಲ್
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link id = "quiz3" onClick={() => Quiz3()} href="/Quiz3">ರಸಪ್ರಶ್ನೆ ಮೂರು</Link>
                        </ListItem>

                        <ListItem>
                            <Link onClick={() => handleTopicSelection(3)}>ಅಭ್ಯಾಸ ಪ್ರಶ್ನೆಗಳು</Link>
                        </ListItem>
                        </List>
                    </ListItem>
                </List>
                </Box>
            </Flex>
            <br />
            <br />

            <Flex>
                <Box
                p={4} // Padding
                borderRadius="md" // Rounded corners
                boxShadow="md" // Box shadow
                bg="teal.200" // Background color
                marginRight = {100}
                textAlign="center"
                >
                    {/* Your content goes here */}

                <List>

                    //List and sub-list for fourth topic
                    <ListItem>
                    <Heading as="h3" fontWeight="bold" fontSize="18px">ಅಧ್ಯಾಯ ನಾಲ್ಕು</Heading>
                    </ListItem>

                    <ListItem>
                        {/* Sublist */}
                        <List ml={4} spacing={1}>
                        <ListItem>
                            <Link href="/tutorials_pdf/operators.pdf" isExternal>
                            ನಿರ್ವಾಹಕಗಳು (ಆಪರೇಟರ್)
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link id = "quiz4" onClick={() => Quiz4()} href="/Quiz4">ರಸಪ್ರಶ್ನೆ ನಾಲ್ಕು </Link>
                        </ListItem>

                        <ListItem>
                            <Link onClick={() => handleTopicSelection(4)}>ಅಭ್ಯಾಸ ಪ್ರಶ್ನೆಗಳು</Link>
                        </ListItem>
                    </List>
                    </ListItem>
                </List>
                </Box>
                
                <Box
                p={4} // Padding
                borderRadius="md" // Rounded corners
                boxShadow="md" // Box shadow
                bg="teal.200" // Background color
                marginRight = {150}
                textAlign="center"
                >
                    {/* Your content goes here */}
                <List>
                    //List and sub-list for fifth topic
                    <ListItem>
                    <Heading as="h3" fontWeight="bold" fontSize="18px">ಅಧ್ಯಾಯ ಅಯ್ದು</Heading>
                    </ListItem>

                    <ListItem>
                        {/* Sublist */}
                        <List ml={4} spacing={1}>
                        <ListItem>
                            <Link href="/tutorials_pdf/conditional.pdf" isExternal>
                            ಷರತ್ತುಬದ್ಧ ಹೇಳಿಕೆಗಳು
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link id = "quiz5" onClick={() => Quiz5()} href="/Quiz5">ರಸಪ್ರಶ್ನೆ ಅಯ್ದು</Link>
                        </ListItem>

                        <ListItem>
                            <Link onClick={() => handleTopicSelection(5)}>ಅಭ್ಯಾಸ ಪ್ರಶ್ನೆಗಳು</Link>
                        </ListItem>
                    </List>
                    </ListItem>
                </List>
                </Box>

                
                <Box
                p={4} // Padding
                borderRadius="md" // Rounded corners
                boxShadow="md" // Box shadow
                bg="teal.200" // Background color
                marginRight = {150}
                textAlign="center"
                >
                    {/* Your content goes here */}
                <List>
                    //List and sub-list for sixth topic
                    <ListItem>
                    <Heading as="h3" fontWeight="bold" fontSize="18px">ಅಧ್ಯಾಯ ಆರು</Heading>
                    </ListItem>

                    <ListItem>
                        {/* Sublist */}
                        <List ml={4} spacing={1}>
                        <ListItem>
                            <Link href="/tutorials_pdf/loops.pdf" isExternal>
                            ಲೂಪ್ ಹೇಳಿಕೆಗಳು
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link id = "quiz6" onClick={() => Quiz6()} href="/Quiz6">ರಸಪ್ರಶ್ನೆ ಆರು</Link>
                        </ListItem>

                        <ListItem>
                            <Link onClick={() => handleTopicSelection(6)}>ಅಭ್ಯಾಸ ಪ್ರಶ್ನೆಗಳು</Link>
                        </ListItem>
                    </List>
                    </ListItem>

                </List>
                </Box>

                
                <Box
                p={4} // Padding
                borderRadius="md" // Rounded corners
                boxShadow="md" // Box shadow
                bg="teal.200" // Background color
                textAlign="center"
                >
                    {/* Your content goes here */}
                <List>
                    //List and sub-list for seventh topic
                    <ListItem>
                    <Heading as="h3" fontWeight="bold" fontSize="18px">ಅಧ್ಯಾಯ ಏಳು </Heading>
                    </ListItem>
                    <br />
                    <ListItem>
                        {/* Sublist */}
                        <List ml={4} spacing={1}>
                        <ListItem>
                            <Link href="/tutorials_pdf/error handling.pdf" isExternal>
                            ದೋಷ ಪ್ರಕಾರಗಳು
                            </Link>
                        </ListItem>
                    </List>
                    </ListItem>
                </List>
                </Box>
            </Flex>
        </Box>
    </Box>
  );
};


export default Tutorials;