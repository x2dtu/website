import { Typography, Box, Stack, Paper } from "@mui/material";
import Link from "next/link";

const colorScheme = {
  backgroundColor: "white",
  color: "black",
  outline: "gray",
};

const LinkCard = ({ title, text, alt, image, secondary, dates, href }) => {
  const small = title.length > 10;
  return (
    <Link href={href}>
      <Paper
        elevation={10}
        sx={{
          backgroundColor: colorScheme.backgroundColor,
          border: `3px solid ${colorScheme.outline}`,
          cursor: "pointer",
          position: "relative",
          mx: { md: 0, sm: 2, xs: 2 },
        }}
        className="experience-card link-card"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            textAlign: "center",
            height: "15%",
            position: "relative",
            mb: 1,
          }}
        >
          <Typography
            sx={{ color: colorScheme.color }}
            className="experience-title"
            variant={small ? "h4" : "h3"}
          >
            {title}
          </Typography>
          <img alt={alt} src={image.src} className="experience-image" />
        </Stack>
        {secondary && (
          <Box textAlign="center">
            <Typography variant="button">{secondary}</Typography>
          </Box>
        )}
        {secondary && (
          <Box textAlign="center">
            <Typography variant="button">{dates}</Typography>
          </Box>
        )}
        <hr className="experience-divider divider" />
        <Box>
          <Typography
            sx={{
              color: colorScheme.color,
              pb: 1,
            }}
            className="card-text"
          >
            {text}
          </Typography>
        </Box>
      </Paper>
    </Link>
  );
};

export default LinkCard;
