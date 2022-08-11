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
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: colorScheme.backgroundColor,
        border: `3px solid ${colorScheme.outline}`,
        mx: { md: 0, sm: 2, xs: 2 },
        minHeight: { xl: "45vh" },
      }}
      className="about-card"
    >
      <Stack width="100%">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ textAlign: "center" }}
        >
          <Typography
            className="about-title"
            sx={{ typography: { xl: "h2", xs: "h3" }, pl: { xl: "0.25em" } }}
          >
            {title}
          </Typography>
          <img alt={alt} src={image.src} className="card-image" />
        </Stack>
        <hr className="about-divider divider" />
      </Stack>
      <Box textAlign="center" my="auto">
        <Typography
          sx={{
            color: colorScheme.color,
            fontSize: {
              xl: "1.8em",
              xs: "1.2em",
            },
          }}
        >
          {text}
        </Typography>
      </Box>
    </Paper>
  );
};

export default AboutCard;
