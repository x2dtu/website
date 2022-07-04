import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Anchor from "../Anchor";
import SkillsCard from "./SkillsCard";
import Javascript from "../../images/javascript.webp";
import ReactImg from "../../images/react.png";
import Python from "../../images/python.png";
import Java from "../../images/java.png";
import C from "../../images/c.png";
import CPlusPlus from "../../images/c++.png";
import Rust from "../../images/rust.png";
import CSS from "../../images/css.png";
import Git from "../../images/git.png";
import Docker from "../../images/docker.png";
import Linux from "../../images/linux.png";
import Jupyter from "../../images/jupyter.png";

const languages = [
  {
    name: "Javascript",
    picture: { image: Javascript, objectFit: "contain", small: true },
  },
  {
    name: "React",
    picture: { image: ReactImg, objectFit: "contain", medium: true },
  },
  { name: "Python", picture: { image: Python, objectFit: "cover" } },
  { name: "Java", picture: { image: Java, objectFit: "contain" } },
  { name: "C", picture: { image: C, objectFit: "contain", medium: true } },
  {
    name: "C++",
    picture: { image: CPlusPlus, objectFit: "contain", medium: true },
  },
  { name: "Rust", picture: { image: Rust, objectFit: "contain" } },
  {
    name: "CSS",
    picture: { image: CSS, objectFit: "scale-down", small: true },
  },
];

const technologies = [
  { name: "Git", picture: { image: Git, objectFit: "contain", small: true } },
  { name: "Docker", picture: { image: Docker, objectFit: "contain" } },
  {
    name: "Linux CLI",
    picture: { image: Linux, objectFit: "scale-down", small: true },
  },
  {
    name: "Jupyter Notebooks",
    picture: { image: Jupyter, objectFit: "contain", small: true },
  },
];

const Skills = () => {
  //350535
  //3c0a3c
  //2e042e
  //290429
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#290429" }}>
      <Anchor id="skills" />
      <Typography
        className="page-title"
        sx={{ color: "white" }}
        gutterBottom
        variant="h2"
      >
        Skills ⚙️
      </Typography>
      <Box className="skills-subtitle-container">
        <Typography variant="h6" className="skills-subtitle">
          Languages
        </Typography>
      </Box>
      <Box pb="3em">
        <Grid
          container
          rowSpacing={7}
          textAlign="center"
          justifyContent="center"
        >
          {languages.map((language) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={language.name}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <SkillsCard
                name={language.name}
                image={language.picture.image}
                objectFit={language.picture.objectFit}
                small={language.picture.small}
                medium={language.picture.medium}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className="skills-subtitle-container">
        <Typography variant="h6" className="skills-subtitle">
          Technologies
        </Typography>
      </Box>
      <Box pb="3em">
        <Grid
          container
          rowSpacing={7}
          textAlign="center"
          justifyContent="center"
        >
          {technologies.map((tech) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={tech.name}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <SkillsCard
                name={tech.name}
                image={tech.picture.image}
                objectFit={tech.picture.objectFit}
                small={tech.picture.small}
                medium={tech.picture.medium}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
