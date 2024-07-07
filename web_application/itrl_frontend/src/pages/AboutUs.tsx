import React, { useState } from "react";
import { Box, Heading, Image, Text, Grid, Button } from "@chakra-ui/react";
import Header from "../components/Header";
import manvithimg from "../assets/Manvith.jpg";
import siriimg from "../assets/Siri.jpg";
import niharimg from "../assets/Nihar.jpg";
import goutamiimg from "../assets/Goutami.jpg";
import aryaHimg from "../assets/AryaH.png";
import aryaVimg from "../assets/AryaV.jpg";
import ahanaimg from "../assets/ahana.jpg";
import chandanaimg from "../assets/Chandana.jpg";

interface LayoutProps {
  name?: string;
  image?: string;
  description?: string;
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
    <Image borderRadius="full" boxSize="150px" src={image} alt={name} mb={4} />
    <Heading as="h3" size="md" mb={2}>
      {name}
    </Heading>
    <Text>{description}</Text>
  </Box>
);

const About = () => {
  const [language, setLanguage] = useState("english");
  const [aboutText, setAboutText] = useState(
    "We are a dynamic team of Computer Science and Engineering students from RV College of Engineering, united by our shared passion for knowledge and technology. Collaborating under the guidance of Shobha ma'am, Deepamala ma'am, and Jyoti Shetty ma'am, we have collectively worked on this project, dedicating ourselves to the noble cause of enhancing coding skills for rural students. This project aims to empower rural students by providing an interactive platform to learn coding basics in their regional language, Kannada. Our diverse interests span across Artificial Intelligence, Natural Language Processing, Machine Learning, Web Development, and emerging technologies. Our team's dedication to pushing the boundaries of technology, combined with the guidance of our mentors, fuels our commitment to making a meaningful impact in the ever-evolving landscape of technology and innovation."
  );
  const [headingText, setHeadingText] = useState("About Us");
  const [teamHeadingText, setTeamHeadingText] = useState("The Team");
  const [buttonText, setButtonText] = useState("ಕನ್ನಡಕ್ಕೆ ಅನುವಾದಿಸಿ");
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "GOUTAMI SOODA",
      image: goutamiimg,
      description:
        "An enthusiastic technophile pursuing B.E in CSE at RV College of Engineering with keen interest in the fields of Artificial Intelligence, Natural Language Processing, Machine Learning, Web Development and fascinating technologies. I enjoy exploring new arenas in software development and build projects that benefit the world.",
    },
    {
      name: "ARYA HARIHARAN",
      image: aryaHimg,
      description:
        "Currently pursuing a degree in Computer Science and Engineering from RV College of Engineering. Being curious and goal-driven, I am open to new opportunities and ready to learn about things I am unfamiliar with. I hope to one day harness the power of technology to make the world a better place. I also love baking and playing badminton!",
    },
    {
      name: "AHANA PATIL",
      image: ahanaimg,
      description:
        "A dedicated student pursuing B.E. in CSE at R.V. College of Engineering, I am a dedicated tech enthusiast with a keen interest in the dynamic field of Machine Learning. Continuously exploring innovative ideas and projects, I thrive on the challenge of pushing the boundaries of possibility in this ever-evolving landscape.",
    },
    {
      name: "ARYA VINOD",
      image: aryaVimg,
      description:
        "A motivated and enthusiastic student pursuing B.E. in CSE at R.V. College of Engineering,I enjoy learning new technologies. I am particularly interested to learn about and contribute to the field of Cloud and Cybersecurity. I am a trained Bharatanatyam dancer and love to swim and read murder mysteries!  ",
    },
    {
      name: "CHANDANA S",
      image: chandanaimg,
      description:
        "An aspiring student pursuing B.E in CSE at RV College of Engineering, with a keen interest in NLP, ML, AI, Web development, and emerging technologies. Enthusiastic about exploring and delving into the realm of new technologies, driven by a fascination to learn and solve real-world challenges.",
    },
    {
      name: "MANVITH LB",
      image: manvithimg,
      description:
        "A dynamic Computer Science undergraduate, with proficiency in Python and JavaScript, ensuring high-quality code. Leveraging a diverse skill set, Currently pursuing a BE at RV College of Engineering, I am dedicated to overcoming challenges and achieving impactful development objectives.",
    },
    {
      name: "NIHAR MANDAHAS",
      image: niharimg,
      description:
        "Enthusiastic and dedicated B.E. in Computer Science student at RVCE, passionate about leveraging cutting-edge technology to drive innovation and solve real-world problems. Eager to apply my technical skills, creativity, and strong work ethic to contribute effectively to the ever evolving world of computer science.",
    },
    {
      name: "SIRI H",
      image: siriimg,
      description:
        "An enthusiastic computer science student at RV College of Engineering.With keen interest in Machine Learning (ML), Web Development, Cybersecurity, and emerging technologies, always eager to dive into new challenges. Through a myriad of projects, I actively seek to enhance my knowledge and skills.Driven by my unwavering determination and fueled by a thirst for knowledge,I am always ready to make a significant impact in the ever-evolving landscape of technology.",
    },
  ]);

  const translateAlgorithm = async () => {
    try {
      const translationEndpoint =
        language === "english"
          ? "https://sirius03.pythonanywhere.com/api/translateError/"
          : "https://sirius03.pythonanywhere.com/api/translateAbout/";
      const translatedAboutText = await translateText(
        aboutText,
        translationEndpoint
      );
      const translatedHeadingText = await translateText(
        headingText,
        translationEndpoint
      );
      const translatedTeamHeadingText = await translateText(
        teamHeadingText,
        translationEndpoint
      );
      const translatedButtonText =
        language === "english" ? "Translate to English" : "ಕನ್ನಡಕ್ಕೆ ಅನುವಾದಿಸಿ";

      const translatedMembers = await Promise.all(
        teamMembers.map(async (member) => {
          const translatedName = await translateText(
            member.name,
            translationEndpoint
          );
          const translatedDescription = await translateText(
            member.description,
            translationEndpoint
          );
          return {
            ...member,
            name: translatedName,
            description: translatedDescription,
          };
        })
      );

      setAboutText(translatedAboutText);
      setHeadingText(translatedHeadingText);
      setTeamHeadingText(translatedTeamHeadingText);
      setButtonText(translatedButtonText);
      setTeamMembers(translatedMembers);
      setLanguage(language === "english" ? "kannada" : "english");
    } catch (error) {
      console.error("Translation error:", error);
    }
  };

  const translateText = async (text: string, endpoint: string) => {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error("Failed to translate");
    }

    const translatedData = await response.json();
    return translatedData.translatedText;
  };

  return (
    <Box>
      <Header />
      <Box mt={8} ml={50}>
        <Heading as="h1" size="xl" mb={4}>
          {headingText}
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
        <Text>{aboutText}</Text>
      </Box>
      <Heading as="h2" size="lg" mt={8} textAlign="center">
        {teamHeadingText}
      </Heading>
      <Grid
        mt={8}
        ml={50}
        mr={50}
        templateColumns="repeat(4, 1fr)"
        gap={6}
        justifyContent="center"
      >
        {teamMembers.map((member) => (
          <TeamMember
            key={member.name}
            name={member.name}
            image={member.image}
            description={member.description}
          />
        ))}
      </Grid>
      <Box textAlign="center" mt={4}>
        <Button onClick={translateAlgorithm}>{buttonText}</Button>
      </Box>
    </Box>
  );
};

export default About;
