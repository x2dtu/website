import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import VT from "../../public/images/vt.png";
import GarminLogo from "../../public/images/garmin-logo.png";
import AWS from "../../public/images/aws.png";
import ExperienceCard from "./ExperienceCard";
import Anchor from "../Anchor";

const Experience = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Anchor id="experience" />
      <Typography
        sx={{ typography: { sm: "h2", xs: "h3", xl: "h1" } }}
        className="page-title"
        gutterBottom
      >
        Experience 🧠
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        sx={{
          pb: "4em",
          pt: { xs: "1.5em", xl: "5em" },
          flexWrap: "wrap",
          rowGap: "4em",
        }}
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
                team, specifically on the augmented reality cameras and android 
                auto interfaces for 2022 and 2023 BMW lineups. This internship gave me 
                comprehensive exposure to embedded systems programming with limited 
                processing and memory constraints as well as multi-threading and all the 
                benefits and hazards that come with it."
          title="Garmin"
          secondary="Embedded Software Engineer Intern"
          href="experiences/garmin-intern"
          dates="Summer 2022"
        />
        <ExperienceCard
          image={AWS}
          alt="Amazon"
          text="I worked at AWS Cloudfront for my second internship where I integrated automatic 
                querying of edge location logs into a service used to expedite ticket resolution. 
                My design utilized parallelized step functions, 3 cohesive lambdas, and various 
                Dynamo DBs and S3 buckets all deployed using the AWS Cloud Development Kit (CDK). 
                Overall, my design saves Cloudfront operators up to 30 minutes of time when tackling 
                edge location & cache outages and issues."
          title="Amazon"
          secondary="AWS Cloudfront SDE Intern"
          href="experiences/garmin-intern"
          dates="Summer 2023"
        />
      </Stack>
    </Box>
  );
};

export default Experience;
