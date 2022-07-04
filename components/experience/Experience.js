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
import VT from "../../images/vt.png";
import GarminLogo from "../../images/garmin-logo.png";
import ExperienceCard from "./ExperienceCard";
import Anchor from "../Anchor";
// import Link from "@mui/material";
// import Virginia from "../../images/virginia.png";

const Experience = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        minHeight: "100vh",
      }}
    >
      <Anchor id="experience" />
      <Typography variant="h2" className="page-title" gutterBottom>
        Experience 🧠
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        sx={{ pb: "4em", pt: "2em", flexWrap: "wrap", rowGap: "4em" }}
      >
        <ExperienceCard
          image={VT}
          alt="Virginia Tech Department of Computer Science"
          text="I have always been curious and
                  inquisitive, and these traits have only increased my interest for
                  solving challenging problems. Naturally, when I took my first
                  computer science class in my freshman year of college, I fell in
                  love with the subject. I continue to code because it gives me the 
                  chance to struggle, grow, learn, and have fun."
          title="VT CS Department"
          secondary="Undergraduate Research Lead"
          type="experience"
          href="experiences/research-lead"
          dates="Fall 2021 - Present"
        />

        <ExperienceCard
          image={GarminLogo}
          alt="Garmin"
          text="When I'm not coding, I can often be found having fun with friends,
                spending time with family, reading, and learning new programming
                languages. I'm a big fan of coding personal projects in my free time
                which not only benefit my overall coding proficiency and knowledge
                but also my enjoyment for the craft."
          title="Garmin"
          secondary="Embedded Software Engineer Intern"
          href="experiences/garmin-intern"
          type="experience"
          dates="Summer 2022"
        />
      </Stack>
    </Box>
  );
};

export default Experience;
