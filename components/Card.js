import { Typography, Box, Stack, Paper } from "@mui/material";
import React from "react";

const aboutColorScheme = {
  backgroundColor: "#2e4382",
  color: "beige",
  outline: "beige",
};
const experienceColorScheme = {
  backgroundColor: "white",
  color: "black",
  outline: "gray",
};

const Card = ({ title, text, alt, image, type, secondary, small }) => {
  const colorScheme =
    type == "about"
      ? aboutColorScheme
      : type == "experience"
      ? experienceColorScheme
      : null;
  return (
    <Paper
      elevation={10}
      sx={{
        backgroundColor: colorScheme.backgroundColor,
        border: `3px solid ${colorScheme.outline}`,
      }}
      className={`${type}-card`}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ textAlign: "center" }}
      >
        <Typography
          sx={{ color: colorScheme.color }}
          className={`${type}-title`}
          variant={small ? "h4" : "h3"}
        >
          {title}
        </Typography>
        <img alt={alt} src={image.src} className="card-image" />
      </Stack>
      {secondary && (
        <Box textAlign="center">
          <Typography variant="button">{secondary}</Typography>
        </Box>
      )}
      <hr className={`${type}-divider divider`} />
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

export default Card;
