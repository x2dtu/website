import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Anchor from "../Anchor";
import ProjectsCard from "./ProjectsCard";
import Chess from "../../public/images/chess.PNG";
import Calculator from "../../public/images/calculator.png";
import PathFinder from "../../public/images/path-finder.png";
import Java from "../../public/images/java.png";
import ReactImg from "../../public/images/react.png";
import Python from "../../public/images/python.png";
import Rust from "../../public/images/rust.png";
import portrait from "../../public/images/intro_pic.png";

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
    image:
      "https://user-images.githubusercontent.com/82241006/183513190-b30fd2b6-c17e-4934-beca-ecad3d24229a.png",
    link: "https://github.com/x2dtu/ray-tracer",
    langImage: Rust,
    langAlt: "Rust",
    objectFit: "contain",
  },
  {
    name: "This Website!",
    image: portrait.src,
    link: "https://github.com/x2dtu/website",
    langImage: ReactImg,
    langAlt: "React",
    objectFit: "contain",
  },
];

const Projects = () => {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#343434" }}>
      <Anchor id="projects" />
      <Typography
        className="page-title"
        gutterBottom
        sx={{
          color: "white",
          typography: { sm: "h2", xs: "h3" },
        }}
      >
        Personal Projects 🛠️
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
