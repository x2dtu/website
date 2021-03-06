import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Anchor from "../Anchor";
import ProjectsCard from "./ProjectsCard";
import Chess from "../../images/chess.PNG";
import Calculator from "../../images/calculator.png";
import PathFinder from "../../images/path-finder.png";
import Java from "../../images/java.png";
import ReactImg from "../../images/react.png";
import Python from "../../images/python.png";
import Rust from "../../images/rust.png";

const projects = [
  {
    name: "Chess",
    image: Chess.src,
    link: "https://github.com/x2dtu/chess",
    langImage: Java,
    langAlt: "Java",
    objectFit: "cover",
  },
  {
    name: "Calculator",
    image: Calculator.src,
    link: "https://github.com/x2dtu/calculator",
    langImage: ReactImg,
    langAlt: "React",
    objectFit: "contain",
  },
  {
    name: "Hangman",
    image:
      "https://user-images.githubusercontent.com/82241006/177058950-41e98c6a-69c0-40c9-a332-05737e157ae3.png",
    link: "https://github.com/x2dtu/hangman",
    langImage: ReactImg,
    langAlt: "React",
    objectFit: "contain",
  },
  {
    name: "Snake",
    image:
      "https://user-images.githubusercontent.com/82241006/177055208-c1fece29-ae76-4e94-97f3-6f713ea9ec16.png",
    link: "https://github.com/x2dtu/snake",
    langImage: Python,
    langAlt: "Python",
    objectFit: "contain",
  },
  {
    name: "Path Finder",
    image: PathFinder.src,
    link: "https://github.com/x2dtu/path-finder",
    langImage: Python,
    langAlt: "Python",
    objectFit: "contain",
  },
  {
    name: "Ray Tracer",
    image: Rust.src,
    link: "https://github.com/x2dtu/ray-tracer",
    langImage: Rust,
    langAlt: "Rust",
    objectFit: "contain",
  },
  {
    name: "This Website!",
    image: ReactImg.src,
    link: "https://github.com/x2dtu/website",
    langImage: ReactImg,
    langAlt: "React",
    objectFit: "contain",
  },
];

const Projects = () => {
  //#191919
  //#343434
  //#454444
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#343434" }}>
      <Anchor id="projects" />
      <Typography
        className="page-title"
        sx={{ color: "white" }}
        gutterBottom
        variant="h2"
      >
        Personal Projects ???????
      </Typography>
      <Grid
        container
        rowSpacing={7}
        textAlign="center"
        justifyContent="center"
        sx={{ py: 3 }}
      >
        {projects.map((prj) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={prj.name}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ProjectsCard {...prj} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
