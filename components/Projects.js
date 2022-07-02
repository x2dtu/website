import { Box, Typography } from "@mui/material";
import React from "react";
import Anchor from "./Anchor";

const Projects = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Anchor id="projects" />
      <Typography
        className="page-title"
        sx={{ color: "white" }}
        gutterBottom
        variant="h2"
      >
        Projects 🛠️
      </Typography>
    </Box>
  );
};

export default Projects;
