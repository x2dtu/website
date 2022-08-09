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
import portrait from "../public/images/pictureofme1-removebg-preview.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Fade from "react-reveal/Fade";
import Anchor from "./Anchor";

const Introduction = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "lightblue",
        minHeight: "100vh",
      }}
      wrap="nowrap"
    >
      <Anchor id="home" />
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
        <Grid container justifyContent="center">
          <Grid item xs={6} sm={3}>
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
          </Grid>
          <Grid item xs={6} sm={3}>
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
          </Grid>
        </Grid>
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
  );
};

export default Introduction;
