import { Typography } from "@mui/material";
import React from "react";
import ExperiencePageComp from "../../components/experience/ExperiencePageComp";
import Garmin from "../../public/images/garmin-logo.png";

const GarminIntern = () => {
  const title = "Embedded Software Engineering Intern";
  const dates = "Summer 2022";
  const company = "";
  const description = (
    <Typography>
      My first internship was with Garmin where I worked with their Auto OEM
      team, specifically on the augmented reality cameras and android auto
      interfaces for 2022 and 2023 BMW lineups. This internship gave me
      comprehensive exposure to embedded systems programming with limited
      processing and memory constraints as well as multi-threading and all the
      benefits and hazards that come with it.
    </Typography>
  );
  return (
    <ExperiencePageComp
      title={title}
      company={company}
      dates={dates}
      companyImg={Garmin}
      description={description}
    />
  );
};

export default GarminIntern;
