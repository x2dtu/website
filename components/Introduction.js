import React from "react";
import Image from "next/image";
import {
  Box,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import portrait from "../images/pictureofme1-removebg-preview.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { Animator, Fade } from "react-scroll-motion";

const Introduction = () => {
  return (
    <Animator animation={Fade(0.5, 1)}>
      <Grid
        container
        sx={{
          p: "1em",
          backgroundColor: "lightblue",
          position: "absolute",
          height: "100%",
        }}
        wrap="nowrap"
      >
        <Grid item xs={6} textAlign="center">
          <Typography
            variant="h1"
            sx={{
              fontWeight: "regular",
              paddingTop: "30%",
              paddingBottom: "11.25%",
              color: "#242d49",
            }}
          >
            <em style={{ paddingRight: "3.75%" }}>Hi!</em> I'm Michael
          </Typography>
          <Stack direction="row" spacing={10} justifyContent="center">
            <Tooltip
              title={<Typography variant="body1">View my LinkedIn</Typography>}
              arrow
              enterDelay={50}
            >
              <IconButton
                href="https://www.linkedin.com/in/michael-atkins-vt/"
                target="_blank"
              >
                <LinkedInIcon
                  sx={{
                    fontSize: "2.5em",
                    color: "#242d49",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip
              title={
                <Typography variant="body1">
                  See my Personal Projects on GitHub
                </Typography>
              }
              arrow
              enterDelay={50}
            >
              <IconButton href="https://github.com/x2dtu" target="_blank">
                <GitHubIcon
                  sx={{
                    fontSize: "2.5em",
                    color: "#242d49",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip
              title={<Typography variant="body1">Call or Text Me</Typography>}
              arrow
              enterDelay={50}
            >
              <IconButton href="tel: 804-929-7307" target="_blank">
                <PhoneIcon
                  fontSize="large"
                  sx={{
                    fontSize: "2.5em",
                    color: "#242d49",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip
              title={<Typography variant="body1">Email Me</Typography>}
              arrow
              enterDelay={50}
            >
              <IconButton href="mailto: michaelga@vt.edu" target="_blank">
                <EmailIcon
                  fontSize="large"
                  sx={{
                    fontSize: "2.5em",
                    color: "#242d49",
                  }}
                />
              </IconButton>
            </Tooltip>
          </Stack>
        </Grid>
        <Grid
          item
          xs={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={portrait}
            style={{
              alignSelf: "center",
              borderRadius: "20%",
            }}
          />
        </Grid>
      </Grid>
    </Animator>
  );
};

export default Introduction;
