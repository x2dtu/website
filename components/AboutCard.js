import React from "react";
import {
  ListItem,
  Paper,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";

const AboutCard = ({ image, alt, text, colorScheme }) => {
  const { backgroundColor, color } = colorScheme;
  return (
    <ListItem sx={{ pb: "2em" }}>
      <Paper
        elevation={10}
        sx={{
          backgroundColor: backgroundColor,
          p: "0.75em",
          display: "flex",
        }}
      >
        <ListItemAvatar sx={{ minWidth: "6%" }}>
          <div style={{ position: "relative", height: "100%" }}>
            <Image alt={alt} src={image} layout="fill" objectFit="contain" />
          </div>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography sx={{ color: color, fontSize: "1.2em", pl: "0.75em" }}>
              {text}
            </Typography>
          }
        />
      </Paper>
    </ListItem>
  );
};

export default AboutCard;
