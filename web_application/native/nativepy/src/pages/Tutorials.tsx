import React from 'react';
import { Box, Heading, Link, Stack } from '@chakra-ui/react';
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

export default Tutorials;