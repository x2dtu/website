import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";

const ProjectsCard = ({ name, image, langImage, link, langAlt, objectFit }) => {
  //#454444
  //#585858
  //#191919
  return (
    <Box
      sx={{
        color: "white",
        flexDirection: "column",
      }}
      display="flex"
      alignItems="center"
    >
      <a href={link} target="_blank">
        <Paper
          elevation={10}
          className="projects-card"
          sx={{ position: "relative", backgroundColor: "#212121" }}
        >
          <img
            src={image}
            alt={name}
            className="projects-image"
            style={{ objectFit: objectFit }}
          />
        </Paper>
      </a>
      <Paper
        sx={{
          p: 1,
          px: 3,
          mt: 2,
          borderRadius: 10,
        }}
        className="skills-image-text projects-image-text"
        elevation={10}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          pl={1.5}
        >
          <Typography sx={{ fontSize: { xl: "1.8em" } }}>{name}</Typography>
          <img src={langImage.src} alt={langAlt} className="project-image" />
        </Stack>
      </Paper>
    </Box>
  );
};

export default ProjectsCard;
