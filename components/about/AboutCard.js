import { Typography, Box, Stack, Paper } from "@mui/material";
import React from "react";

const colorScheme = {
  backgroundColor: "#2e4382",
  color: "beige",
  outline: "beige",
};

const AboutCard = ({ title, text, alt, image }) => {
  return (
    <Paper
      elevation={10}
      sx={{
        backgroundColor: colorScheme.backgroundColor,
        border: `3px solid ${colorScheme.outline}`,
        mx: { md: 0, sm: 2, xs: 2 },
      }}
      className="about-card"
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ textAlign: "center" }}
      >
        <Typography className="about-title" variant="h3">
          {title}
        </Typography>
        <img alt={alt} src={image.src} className="card-image" />
      </Stack>
      <hr className="about-divider divider" />
      <Box>
        <Typography
          sx={{
            color: colorScheme.color,
          }}
          className="card-text"
        >
          {text}
        </Typography>
      </Box>
    </Paper>
  );
};

export default AboutCard;
