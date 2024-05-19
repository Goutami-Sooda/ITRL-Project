import React, { useState } from 'react';
import { Box, Heading, Image, Text, Grid } from '@chakra-ui/react';
import Header from "../components/Header";
import NavBar from "../components/NavBar";

interface LayoutProps {
    name?: string;
    image?: string;
    description?:string;
  }

  const TeamMember: React.FC<LayoutProps> = ({ name, image, description }) => (
    <Box
        p={4}
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        display="flex"
        flexDirection="column"
        alignItems="center"
        boxShadow="md"
        bg="white"
        textAlign="center"
        mb={8}
    >
        <Image
            borderRadius="full"
            boxSize="150px"
            src={image}
            alt={name}
            mb={4}
        />
        <Heading as="h3" size="md" mb={2}>
            {name}
        </Heading>
        <Text>{description}</Text>
    </Box>
);

const About = () => {
    const [language, setLanguage] = useState('english');
    const [teamMembers, setTeamMembers] = useState([
        {
            name: 'GOUTAMI SOODA',
            image: './src/assets/Goutami.jpg',
            description: 'An enthusiastic technophile pursuing B.E in CSE at RV College of Engineering with keen interest in the fields of Artificial Intelligence, Natural Language Processing, Machine Learning, Web Development and fascinating technologies. I enjoy exploring new arenas in software development and build projects that benefit the world.'
        },
        {
            name: 'ARYA HARIHARAN',
            image: './src/assets/AryaH.png',
            description: 'Currently pursuing a degree in Computer Science and Engineering from RV College of Engineering. Being curious and goal-driven, I am open to new opportunities and ready to learn about things I am unfamiliar with. I hope to one day harness the power of technology to make the world a better place. I also love baking and playing badminton!'
        },
        {
            name: 'AHANA PATIL',
            image: './src/assets/ahana.jpg',
            description: 'Passionate about delving into the realms of knowledge and technology, I am a dedicated tech enthusiast with a keen interest in the dynamic field of Machine Learning. Continuously exploring innovative ideas and projects, I thrive on the challenge of pushing the boundaries of possibility in this ever-evolving landscape. My commitment to staying at the forefront of technological advancements fuels my drive to contribute to cutting-edge solutions and engage in hands-on experiences that broaden my understanding of the intricate intersections between science and innovation.'
        },
        {
            name: 'ARYA VINOD',
            image: './src/assets/AryaV.jpg',
            description: 'A sophomore in the Computer Science and Engineering branch at RV College of Engineering.I am interested in the Cloud and Cybersecurity technologies and motivated to build projects that can truly aid the society.'
        },
        {
            name: 'CHANDANA S',
            image: './src/assets/Chandana.jpg',
            description: 'An aspiring student pursuing B.E in CSE at RV College of Engineering, with a keen interest in NLP, ML, AI, Web development, and emerging technologies. Enthusiastic about exploring and delving into the realm of new technologies, driven by a fascination to learn and solve real-world challenges.'
        },
        {
            name: 'MANVITH LB',
            image: './src/assets/Manvith.jpg',
            description: 'A dynamic Computer Science undergraduate, with proficiency in Python and JavaScript, ensuring high-quality code. Leveraging a diverse skill set, Currently pursuing a BE at RV College of Engineering, I am dedicated to overcoming challenges and achieving impactful development objectives.'
        },
        {
            name: 'NIHAR MANDAHAS',
            image: './src/assets/Nihar.jpg',
            description: 'Enthusiastic and dedicated B.E. in Computer Science student at RVCE, passionate about leveraging cutting-edge technology to drive innovation and solve real-world problems. Eager to apply my technical skills, creativity, and strong work ethic to contribute effectively to the ever evolving world of computer science.'
        },
        {
            name: 'SIRI H',
            image: './src/assets/Siri.jpg',
            description: 'An enthusiastic computer science student at RV College of Engineering.With keen interest in Machine Learning (ML), Web Development, Cybersecurity, and emerging technologies, always eager to dive into new challenges. Through a myriad of projects, I actively seek to enhance my knowledge and skills.Driven by my unwavering determination and fueled by a thirst for knowledge,I am always ready to make a significant impact in the ever-evolving landscape of technology.'
        }     
    ]);

    const translateAlgorithm = async () => {                 
        try {           
            const translatedMembers = await Promise.all(teamMembers.map(async (member) => {
                const response = await fetch('http://127.0.0.1:8080/api/translateError/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        text: member.description,                        
                    })
                });
                alert(member.description);

                if (!response.ok) {
                    throw new Error('Failed to translate');
                }

                const translatedData = await response.json();
                alert(translatedData.translatedText);
                return {
                    ...member,
                    description: translatedData.translatedText
                };               
            }));
            setTeamMembers(translatedMembers);
            setLanguage(language === 'english' ? 'kannada' : 'english');
        } catch (error) {
            console.error('Translation error:', error);
        }
    };

    return (
        <Box>
            <Header />
            <NavBar />
            <Box mt={8} ml={50}>
                <Heading as="h1" size="xl" mb={4}>
                    About Us
                </Heading>
            </Box>
            <Box
                p={4}
                borderRadius="md"
                boxShadow="md"
                bg="teal.200"
                ml={50}
                mr={50}
                mt={8}
                textAlign="center"
            >
                <Text>
                    We are a dynamic team of Computer Science and Engineering students from RV College of Engineering, united by our shared passion for knowledge and technology. Collaborating under the guidance of Shobha ma'am, Deepamala ma'am, and Jyoti Shetty ma'am, we have collectively worked on this project, dedicating ourselves to the noble cause of enhancing coding skills for rural students. This project aims to empower rural students by providing an interactive platform to learn coding basics in their regional language, Kannada. Our diverse interests span across Artificial Intelligence, Natural Language Processing, Machine Learning, Web Development, and emerging technologies. Our team's dedication to pushing the boundaries of technology, combined with the guidance of our mentors, fuels our commitment to making a meaningful impact in the ever-evolving landscape of technology and innovation.
                </Text>
            </Box>
            <Heading as="h2" size="lg" mt={8} textAlign="center">
                The Team
            </Heading>
            <Grid
                mt={8}
                ml={50}
                mr={50}
                templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
                gap={6}
                justifyContent="center"
            >
                {teamMembers.map(member => (
                    <TeamMember
                        key={member.name}
                        name={member.name}
                        image={member.image}
                        description={member.description}
                    />
                ))}
            </Grid>
            <Box textAlign="center" mt={4}>
                <button onClick={translateAlgorithm}>
                    {language === 'english' ? 'Translate to Kannada' : 'Translate to English'}
                </button>
            </Box>
        </Box>
    );
};

export default About;
