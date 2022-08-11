import { Box, Stack, Typography } from "@mui/material";
import React from "react";
// import { Animator, MoveIn } from "react-scroll-motion";
import HokieBird from "../../public/images/hokie-bird.png";
import ThinkingHead from "../../public/images/thinking-head.png";
import Tree from "../../public/images/tree.png";
import AboutCard from "./AboutCard";
import Anchor from "../Anchor";

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#242d49",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Anchor id="about-me" />
      <Typography
        gutterBottom
        className="page-title about-title about-page-title"
        sx={{
          typography: { sm: "h2", xs: "h3", xl: "h1" },
        }}
      >
        About Me 🔎
      </Typography>
      {/* <Animator animation={MoveIn(-100, 0)}> */}
      {/* </Animator> */}
      {/* <Animator animation={MoveIn(100, 0)}> */}
      {/* </Animator> */}
      {/* <Animator animation={MoveIn(-100, 0)}> */}
      {/* </Animator> */}
      <Stack
        direction="row"
        justifyContent="space-evenly"
        sx={{
          pt: { xs: "2em", xl: "5em" },
          pb: "4em",
          flexWrap: "wrap",
          rowGap: "4em",
        }}
      >
        <AboutCard
          image={HokieBird}
          alt="Hokie Bird"
          text="I am a 20-year-old junior Virginia Tech student studying
                    computer science from Midlothian, Virginia where I grew up with my loving and
                    supportive family and friends. I am planning to graduate with my
                    Bachelor's Degree in Spring 2023 and will stay an extra year
                    to complete my Master's in Science."
          title="Who I am"
        />
        <AboutCard
          image={ThinkingHead}
          alt="Thinking Head"
          text="I have always been curious and
                  inquisitive, and these traits have only increased my interest for
                  solving challenging problems. Naturally, when I took my first
                  computer science class in my freshman year of college, I fell in
                  love with the subject. I continue to code because it gives me the 
                  chance to struggle, grow, learn, and have fun."
          title="Why I code"
        />
        <AboutCard
          image={Tree}
          alt="Tree"
          text="When I'm not coding, I can often be found having fun with friends,
                spending time with family, reading, and learning new programming
                languages. I'm a big fan of coding personal projects in my free time
                which not only benefit my overall coding proficiency and knowledge
                but also my enjoyment for the craft."
          title="How I live"
        />
      </Stack>
    </Box>
  );
};

export default About;
