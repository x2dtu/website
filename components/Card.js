import { Typography, Box, Divider, Stack, Paper } from "@mui/material";
import Image from "next/image";
import React from "react";

const colorScheme = {
  backgroundColor: "#2e4382",
  color: "beige",
  title: "beige",
};

const Card = ({ title, text, alt, image }) => {
  return (
    // <Paper elevation={10} sx={{ overflow: "hidden" }}>
    <Paper
      elevation={10}
      sx={{
        backgroundColor: colorScheme.backgroundColor,
        border: `3px solid ${colorScheme.color}`,
        borderRadius: "5%",
        p: "1em",
        pt: "0.5em",
        maxWidth: "55vh",
        minWidth: "55vh",
        outline: "3px solid black",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ textAlign: "center" }}
      >
        <Typography
          sx={{ color: colorScheme.title }}
          className="title"
          variant="h3"
        >
          {title}
        </Typography>
        <img alt={alt} src={image.src} className="card-image" />
      </Stack>
      <hr className="divider" />
      <Box>
        <Typography
          sx={{
            color: colorScheme.color,
            // pl: "0.75em",
            // display: "inline",
            // float: "left",
          }}
          className="card-text"
        >
          {text}
        </Typography>
      </Box>
    </Paper>
    // </Paper>
  );
};

export default Card;
