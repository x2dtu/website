import { Box, List, Typography } from "@mui/material";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import GarminLogo from "../images/garmin-logo.png";
// import Virginia from "../images/virginia.png";

const Experience = () => {
  return (
    <Box
      sx={{
        // position: "absolute",
        // height: "100%",
        // width: "100%",
        backgroundColor: "white",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h2" sx={{ p: "1em" }}>
        Experience 🧠
      </Typography>
      <List sx={{ px: "2em" }}>
        {/* <ExperienceCard
          image={Virginia}
          alt="Garmin"
          text="ulihafkshdfkjshdkghskdsdgkdshgksdjgkjdshgkjdhbgjsbgkshbglqiuhfwuahgwuihgksuh"
        /> */}
      </List>
    </Box>
  );
};

export default Experience;
