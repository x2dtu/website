import {
  Typography,
  Box,
  Stack,
  Paper,
  ButtonBase,
  Button,
} from "@mui/material";
import Link from "next/link";

const aboutColorScheme = {
  backgroundColor: "#2e4382",
  color: "beige",
  outline: "beige",
};
const experienceColorScheme = {
  backgroundColor: "white",
  color: "black",
  outline: "gray",
};

const LinkCard = ({
  title,
  text,
  alt,
  image,
  type,
  secondary,
  small,
  href,
}) => {
  const colorScheme =
    type == "about"
      ? aboutColorScheme
      : type == "experience"
      ? experienceColorScheme
      : null;

  return (
    <Link href={href}>
      <Paper
        elevation={10}
        sx={{
          backgroundColor: colorScheme.backgroundColor,
          border: `3px solid ${colorScheme.outline}`,
          cursor: "pointer",
          position: "relative",
        }}
        className={`${type}-card link-card`}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ textAlign: "center" }}
        >
          <Typography
            sx={{ color: colorScheme.color }}
            className={`${type}-title`}
            variant={small ? "h4" : "h3"}
          >
            {title}
          </Typography>
          <img alt={alt} src={image.src} className="card-image" />
        </Stack>
        {secondary && (
          <Box textAlign="center">
            <Typography variant="button">{secondary}</Typography>
          </Box>
        )}
        <hr className={`${type}-divider divider`} />
        <Box>
          <Typography
            sx={{
              color: colorScheme.color,
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
