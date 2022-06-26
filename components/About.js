import { Box, Grid, List, Stack, Typography } from "@mui/material";
import React from "react";
import AboutCard from "./AboutCard";
import { Animator, MoveIn } from "react-scroll-motion";
import HokieBird from "../images/hokie-bird.png";
import ThinkingHead2 from "../images/thinking-head-2.png";
import ThinkingHead from "../images/thinking-head.png";
import Tree from "../images/tree.png";
import Computer from "../images/computer.png";
import Card from "./Card";

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
        p: "1em",
        overflow: "auto",
        minHeight: "100vh",
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
      {/* <Animator animation={MoveIn(-100, 0)}> */}
      {/* </Animator> */}
      {/* <Animator animation={MoveIn(100, 0)}> */}
      {/* </Animator> */}
      {/* <Animator animation={MoveIn(-100, 0)}> */}
      {/* </Animator> */}
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ p: "4em", pt: "2em", flexWrap: "wrap", rowGap: "4em" }}
      >
        <Card
          image={HokieBird}
          alt="Hokie Bird"
          text="I am a 20-year-old junior Virginia Tech student studying
                    computer science from Midlothian, Virginia where I grew up with my loving and
                    supportive family and friends. I am planning to graduate with my
                    Bachelor's Degree in Spring 2023 and will stay an extra year
                    to complete my Master's in Science."
          title="Who I am"
        />
        <Card
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
        <Card
          image={Tree}
          alt="Computer"
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
