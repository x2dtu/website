import React from "react";
import StaticDrawerAppBar from "../StaticDrawerAppBar";
import { Box, Paper, Stack, Typography } from "@mui/material";

const ExperiencePageComp = ({
  title,
  company,
  companyImg,
  dates,
  description,
}) => {
  const elevation = 2;
  const borderRadius = 4;
  return (
    <>
      <StaticDrawerAppBar prevPage="Experience" />
      <Box
        mt="64px"
        px={10}
        py={7}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box display="flex" flexWrap="wrap">
          <Typography
            variant="h2"
            gutterBottom
            pb={1}
            sx={{ borderBottom: "1px solid gray" }}
          >
            {title}
          </Typography>
        </Box>
        <Box display="flex" mb={2}>
          <Paper
            sx={{
              p: 1,
              mt: 2,
              borderRadius,
            }}
            className="experience-image-text"
            elevation={elevation}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              px={3}
            >
              <Typography
                variant="button"
                gutterBottom
                mr={company ? 3 : 0}
                pt={0.5}
              >
                {company}
              </Typography>
              <img
                src={companyImg.src}
                alt={company}
                height="50px"
                // style={{ margin: "20px 0" }}
              />
            </Stack>
          </Paper>
        </Box>
        <Box display="flex" mb={3}>
          <Paper
            sx={{
              p: 1,
              pl: 4,
              pr: 2,
              mt: 2,
              borderRadius,
            }}
            className="experience-image-text"
            elevation={elevation}
          >
            <Typography variant="button" gutterBottom mr={3} pt={0.5}>
              {dates}
            </Typography>
          </Paper>
        </Box>
        <Paper
          sx={{
            p: 2,
            pl: 4,
            mt: 2,
            borderRadius,
          }}
          className="experience-image-text"
          elevation={elevation + 1}
        >
          {description}
        </Paper>
      </Box>
    </>
  );
};

export default ExperiencePageComp;
