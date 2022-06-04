import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Paper,
  ListItemText,
  Typography,
} from "@mui/material";

const ExperienceCard = ({ image, alt, text }) => {
  return (
    <ListItem sx={{ pb: "2em" }}>
      <Paper
        elevation={10}
        sx={{
          backgroundColor: "LightGray",
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
            <Typography
              sx={{ color: "black", fontSize: "1.2em", pl: "0.75em" }}
            >
              {text}
            </Typography>
          }
        />
      </Paper>
    </ListItem>
  );
};

export default ExperienceCard;
