import React from "react";
import {
  Box,
  Grid,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
} from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// import portrait from "../public/images/pictureofme1-removebg-preview.png";
import portrait from "../../public/images/intro_pic.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
// import Fade from "react-reveal/Fade";
import Anchor from "../Anchor";
import IntroductionButton from "./IntroductionButton";

const Introduction = () => {
  const buttonClass = "about-title title-color title-buttons";
  return (
    <Box
      height="100vh"
      sx={{
        backgroundImage: `url(${portrait.src})`,
        backgroundPosition: "50% 20%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Anchor id="home" />
      <Stack textAlign="center">
        <Typography
          variant="h3"
          className="about-title title-color"
          sx={{
            fontStyle: "italic",
          }}
        >
          Hi!
        </Typography>
        <Typography
          variant="h1"
          className="about-title title-color"
          sx={{
            pb: 4,
          }}
        >
          I'm Michael
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={10}>
          <IntroductionButton
            tooltipText="View my LinkedIn"
            Icon={<LinkedInIcon className={buttonClass} />}
            href="https://www.linkedin.com/in/michael-atkins-vt/"
          />
          <IntroductionButton
            tooltipText="See my Personal Projects on GitHub"
            Icon={<GitHubIcon className={buttonClass} />}
            href="https://github.com/x2dtu"
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Introduction;