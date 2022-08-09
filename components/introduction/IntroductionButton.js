import { IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";

const IntroductionButton = ({ tooltipText, Icon, href }) => {
  return (
    <Tooltip
      title={<Typography variant="body1">{tooltipText}</Typography>}
      arrow
      enterDelay={50}
    >
      <IconButton href={href} target="_blank">
        {Icon}
      </IconButton>
    </Tooltip>
  );
};

export default IntroductionButton;
