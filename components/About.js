import { Box, List, Typography } from "@mui/material";
import React from "react";
import AboutCard from "./AboutCard";
import { Animator, MoveIn } from "react-scroll-motion";
import HokieBird from "../images/hokie-bird.png";
import ThinkingHead2 from "../images/thinking-head-2.png";
import Computer from "../images/computer.png";

const About = () => {
  const colorScheme = { backgroundColor: "#2e4382", color: "beige" };
  //#242d49
  //#303e69 -> which background color?
  //#38487a
  return (
    <Box
      sx={{
        //
        backgroundColor: "#242d49",
        position: "absolute",
        height: "100%",
        width: "100%",
        p: "1em",
        overflow: "auto",
        // "overflow-y": "hidden",
      }}
    >
      <Typography
        gutterBottom
        variant="h2"
        sx={{
          p: "1em",
          pb: 0,
          color: colorScheme.color,
          // fontWeight: "400",
        }}
      >
        About Me 🔎
      </Typography>
      <List sx={{ px: "2em" }}>
        <Animator animation={MoveIn(-100, 0)}>
          <AboutCard
            image={HokieBird}
            alt="Hokie Bird"
            text="I am a 20-year-old junior Virginia Tech student studying
                    computer science. I am planning to graduate with my
                    Bachelor's Degree in Spring 2023 and will stay an extra year
                    to complete my Master's in Science."
            colorScheme={colorScheme}
          />
        </Animator>
        <Animator animation={MoveIn(100, 0)}>
          <AboutCard
            image={ThinkingHead2}
            alt="Thinking Head"
            text="I'm from Midlothian, Virginia where I grew up with my loving and
              supportive family and friends. I have always been curious and
              inquisitive, and these traits have only increased my interest for
              solving challenging problems. Naturally, when I took my first
              computer science class in my freshman year of college, I fell in
              love with the subject."
            colorScheme={colorScheme}
          />
        </Animator>
        <Animator animation={MoveIn(-100, 0)}>
          <AboutCard
            image={Computer}
            alt="Computer"
            text="When I'm not coding, I can often be found having fun with friends,
            spending time with family, reading, and learning new programming
            languages. I'm a big fan of coding personal projects in my free time
            which not only benefit my overall coding proficiency and knowledge
            but also my enjoyment."
            colorScheme={colorScheme}
          />
        </Animator>
      </List>
    </Box>
  );
};

export default About;
