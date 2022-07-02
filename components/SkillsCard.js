import { Box, Paper } from "@mui/material";
import React from "react";

const SkillsCard = ({ name, image, objectFit, small, medium }) => {
  console.log(name, small, medium);
  return (
    <Box
      sx={{
        color: "white",
        flexDirection: "column",
      }}
      display="flex"
      alignItems="center"
    >
      <Paper
        elevation={10}
        className="skills-card"
        sx={{ position: "relative", backgroundColor: "#340534" }}
      >
        <img
          src={image.src}
          alt={name}
          className={
            small
              ? "skills-small-image"
              : medium
              ? "skills-med-image"
              : "skills-image"
          }
          style={{ objectFit: objectFit }}
        />
      </Paper>
      <Paper
        sx={{
          p: 1,
          mt: 2,
          borderRadius: 10,
        }}
        className="skills-image-text"
        elevation={10}
      >
        {/* <Box
          p={1}
          mt={2}
          sx={{
            backgroundColor: "#353232",
            width: "55%",
            borderRadius: 10,
          }}
        > */}
        {name}
        {/* </Box> */}
      </Paper>
    </Box>
  );
};

export default SkillsCard;
