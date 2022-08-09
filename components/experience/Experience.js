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
import VT from "../../public/images/vt.png";
import GarminLogo from "../../public/images/garmin-logo.png";
import ExperienceCard from "./ExperienceCard";
import Anchor from "../Anchor";
// import Link from "@mui/material";
// import Virginia from "../../public/images/virginia.png";

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
        sx={{ pb: "4em", pt: "1.5em", flexWrap: "wrap", rowGap: "4em" }}
      >
        <ExperienceCard
          image={VT}
          alt="Virginia Tech Department of Computer Science"
          text="I am a lead student of a Virginia 
                  Tech computer science research group known as the Computer 
                  Systems Genome Project. I lead 20+ other undergraduate students 
                  in our goal to map out the history, lineage, and specifications 
                  of numerous computers, computer parts, and supercomputers. In 
                  addition to mentoring other students, I work as a full-stack
                  developer with our python backend, database, and next.js frontend."
          title="VT CS Department"
          secondary="Undergraduate Research Lead"
          type="experience"
          href="experiences/research-lead"
          dates="Fall 2021 - Present"
        />

        <ExperienceCard
          image={GarminLogo}
          alt="Garmin"
          text="My first internship was with Garmin where I worked with their Auto OEM 
                team, specifically on the augmeneted reality cameras and android 
                auto interfaces for 2022 and 2023 BMW lineups. This internship gave me 
                comprehensive exposure to embedded systems programming with limited 
                processing and memory contraints as well as multi-threading and all the 
                benefits and hazards that come with it."
          title="Garmin"
          secondary="Embedded Software Engineer Intern"
          href="experiences/garmin-intern"
          dates="Summer 2022"
        />
      </Stack>
    </Box>
  );
};

export default Experience;
