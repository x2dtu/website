import {
  Box,
  Button,
  ButtonBase,
  List,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import GarminLogo from "../images/garmin-logo.png";
import HokieBird from "../images/hokie-bird.png";
import ThinkingHead from "../images/thinking-head.png";
import Tree from "../images/tree.png";
import LinkCard from "./LinkCard";
// import Link from "@mui/material";
// import Virginia from "../images/virginia.png";

const Experience = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h2" sx={{ p: "1em" }}>
        Experience 🧠
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        sx={{ p: "4em", pt: "2em", flexWrap: "wrap", rowGap: "4em" }}
      >
        <LinkCard
          image={ThinkingHead}
          alt="Thinking Head"
          text="I have always been curious and
                  inquisitive, and these traits have only increased my interest for
                  solving challenging problems. Naturally, when I took my first
                  computer science class in my freshman year of college, I fell in
                  love with the subject. I continue to code because it gives me the 
                  chance to struggle, grow, learn, and have fun."
          title="VT CS Department"
          secondary="Undergraduate Research Lead"
          type="experience"
          href="#one"
          small
        />

        <LinkCard
          image={Tree}
          alt="Computer"
          text="When I'm not coding, I can often be found having fun with friends,
                spending time with family, reading, and learning new programming
                languages. I'm a big fan of coding personal projects in my free time
                which not only benefit my overall coding proficiency and knowledge
                but also my enjoyment for the craft."
          title="Garmin"
          secondary="Embedded Software Engineer Intern"
          href="#two"
          type="experience"
        />
      </Stack>
    </Box>
  );
};

export default Experience;
