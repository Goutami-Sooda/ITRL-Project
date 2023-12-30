import React from 'react';
import { Box, Heading, Link, Stack, List, ListItem } from '@chakra-ui/react';
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Tutorials: React.FC = () => {
    return (
      <Box>
          <Header></Header>
          <NavBar></NavBar>
          <Box textAlign="center" padding="4">
              <Heading>ವಿಷಯಗಳು</Heading>
              <Stack direction="column" align="center" spacing={4}>
                  <List spacing={2}>
                      <ListItem>
                          <h3>Topic 1</h3>
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
                              <Link href="#">Quiz 1</Link>
                          </ListItem>
  
                          <ListItem>
                              <Link href="#">Practice Questions</Link>
                          </ListItem>
                          </List>
                      </ListItem>
  
                      //List and sub-list for second topic
                      <ListItem>
                          <h3>Topic 2</h3>
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
                              <Link href="#">Quiz 2</Link>
                          </ListItem>
                          <ListItem>
                              <Link href="#">Practice Questions</Link>
                          </ListItem>
                          </List>
                      </ListItem>
  
                      //List and sub-list for third topic
                      <ListItem>
                          <h3>Topic 3</h3>
                      </ListItem>
  
                      <ListItem>
                          {/* Sublist */}
                          <List ml={4} spacing={1}>
                          <ListItem>
                              <Link href="/tutorials_pdf/variables.pdf" isExternal>
                                  ವೇರಿಯಬಲ್
                              </Link>
                          </ListItem>
  
                          <ListItem>
                              <Link href="#">Quiz 3</Link>
                          </ListItem>
  
                          <ListItem>
                              <Link href="#">Practice Quetsions</Link>
                          </ListItem>
                      </List>
                      </ListItem>
  
                      //List and sub-list for fourth topic
                      <ListItem>
                          <h3>Topic 4</h3>
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
                              <Link href="#">Quiz 4</Link>
                          </ListItem>
  
                          <ListItem>
                              <Link href="#">Practice Quetsions</Link>
                          </ListItem>
                      </List>
                      </ListItem>
  
  
                      //List and sub-list for fifth topic
                      <ListItem>
                          <h3>Topic 5</h3>
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
                              <Link href="#">Quiz 5</Link>
                          </ListItem>
  
                          <ListItem>
                              <Link href="#">Practice Quetsions</Link>
                          </ListItem>
                      </List>
                      </ListItem>
  
                      //List and sub-list for sixth topic
                      <ListItem>
                          <h3>Topic 6</h3>
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
                              <Link href="#">Quiz 6</Link>
                          </ListItem>
  
                          <ListItem>
                              <Link href="#">Practice Quetsions</Link>
                          </ListItem>
                      </List>
                      </ListItem>
  
                      //List and sub-list for seventh topic
                      <ListItem>
                          <h3>Topic 7</h3>
                      </ListItem>
  
                      <ListItem>
                          {/* Sublist */}
                          <List ml={4} spacing={1}>
                          <ListItem>
                              <Link href="/tutorials_pdf/error handling.pdf" isExternal>
                              ದೋಷ ಪ್ರಕಾರಗಳು
                              </Link>
                          </ListItem>
  
                          <ListItem>
                              <Link href="#">Quiz 7</Link>
                          </ListItem>
  
                          <ListItem>
                              <Link href="#">Practice Quetsions</Link>
                          </ListItem>
                      </List>
                      </ListItem>
  
  
                  </List>
              </Stack>
          </Box>
      </Box>
    );
  };
  
  export default Tutorials;
  
/*const Tutorials: React.FC = () => {
  return (
    <Box>
        <Header></Header>
        <NavBar></NavBar>
        <Box textAlign="center" padding="4">
            <Heading>ವಿಷಯಗಳು</Heading>
            <Stack direction="column" align="center" spacing={4}>
                <Link href="/tutorials_pdf/print.pdf" isExternal>
                    ಮುದ್ರಿಸಿ ಹೇಳಿಕೆ
                </Link>
                <Link href="/tutorials_pdf/datatypes.pdf" isExternal>
                    ಡೇಟಾಟೈಪ್
                </Link>
                <Link href="/tutorials_pdf/variables.pdf" isExternal>
                    ವೇರಿಯಬಲ್
                </Link>
                <Link href="/tutorials_pdf/operators.pdf" isExternal>
                    ನಿರ್ವಾಹಕಗಳು (ಆಪರೇಟರ್)
                </Link>
                <Link href="/tutorials_pdf/conditional.pdf" isExternal>
                    ಷರತ್ತುಬದ್ಧ ಹೇಳಿಕೆಗಳು
                </Link>
                <Link href="/tutorials_pdf/loops.pdf" isExternal>
                    ಲೂಪ್ ಹೇಳಿಕೆಗಳು
                </Link>
                <Link href="/tutorials_pdf/error handling.pdf" isExternal>
                    ದೋಷ ಪ್ರಕಾರಗಳು
                </Link>
            </Stack>
        </Box>
    </Box>
  );
};

export default Tutorials;*/