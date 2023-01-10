import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Anchor from "../Anchor";
import SkillsCard from "./SkillsCard";
import Javascript from "../../public/images/javascript.webp";
import Typescript from "../../public/images/typescript.png";
import Go from "../../public/images/go.png";
import ReactImg from "../../public/images/react.png";
import Python from "../../public/images/python.png";
import Java from "../../public/images/java.png";
import C from "../../public/images/c.png";
import CPlusPlus from "../../public/images/cplusplus.png";
import Rust from "../../public/images/rust.png";
import CSS from "../../public/images/css.png";
import Git from "../../public/images/git.png";
import Docker from "../../public/images/docker.png";
import Linux from "../../public/images/linux.png";
import Jupyter from "../../public/images/jupyter.png";
import Next from "../../public/images/next.png";

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
    name: "Typescript",
    picture: { image: Typescript, objectFit: "contain", small: true },
  },
  { name: "Go", picture: { image: Go, objectFit: "contain" } },
  { name: "Rust", picture: { image: Rust, objectFit: "contain" } },
  {
    name: "C++",
    picture: { image: CPlusPlus, objectFit: "contain", medium: true },
  },
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
    name: "Next.js",
    picture: { image: Next, objectFit: "scale-down", small: true },
  },
  {
    name: "Jupyter Notebooks",
    picture: { image: Jupyter, objectFit: "contain", small: true },
  },
];

const Skills = () => {
  return (
    <Box
      textAlign="center"
      sx={{ minHeight: "100vh", backgroundColor: "#290429" }}
    >
      <Anchor id="skills" />
      <Typography
        className="page-title"
        sx={{
          color: "white",
          typography: { sm: "h2", xs: "h3", xl: "h1" },
        }}
        gutterBottom
      >
        Skills ⚙️
      </Typography>
      <Box className="skills-subtitle-container">
        <Typography
          sx={{
            typography: { xs: "h6", xl: "h4" },
          }}
          className="skills-subtitle"
        >
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
        <Typography
          sx={{
            typography: { xs: "h6", xl: "h4" },
          }}
          className="skills-subtitle"
        >
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
