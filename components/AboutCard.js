import React from "react";
import {
  ListItem,
  Paper,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar,
  Grid,
} from "@mui/material";
import Image from "next/image";

const AboutCard = ({ image, alt, text, colorScheme }) => {
  const { backgroundColor, color } = colorScheme;
  return (
    <ListItem sx={{ pb: "2em" }}>
      <Paper
        elevation={10}
        sx={{
          backgroundColor: backgroundColor,
          p: "0.75em",
          // display: "flex",
          position: "relative",
        }}
      >
        {/* <img
          alt={alt}
          src={image.src}
          // layout="fill"
          // objectFit="contain"
          style={{
            float: "right",
            width: "auto",
            height: "100%",
            // shapeOutside:
            //   "url(https://www.pngkey.com/png/full/271-2713506_hokiebird-in-color-with-registered-trademark-symbol-hokie.png)",
          }}
        /> */}
        <Typography sx={{ color: color, fontSize: "1.2em", pl: "0.75em" }}>
          {text}
        </Typography>
      </Paper>
    </ListItem>
  );
};

export default AboutCard;

//  {/* <ListItemAvatar sx={{ minWidth: "6%", display: "flex" }}> */}
//         {/* <div style={{ position: "relative", height: "100%" }}>
//             <Image alt={alt} src={image} layout="fill" objectFit="contain" />
//           </div> */}
//         {/* <Avatar> */}
//         {/* <Image alt={alt} src={image} layout="fill" objectFit="contain" /> */}
//         {/* </Avatar> */}
//         {/* </ListItemAvatar> */}
//         {/* <div style={{ height: "100%", aspectRatio: "1", position: "relative" }}> */}

//         {/* </div> */}
//         {/* <div style={{ height: "100%", aspectRatio: "1", position: "absolute" }}> */}
//         {/* <Image alt={alt} src={image} layout="fill" objectFit="contain" /> */}
//         {/* </div> */}
//         <Box
//           sx={{
//             position: "relative",
//             shapeOutside: "circle()",
//             float: "left",
//             height: "5em",
//             width: "5em",
//           }}
//         >
//           <Image alt={alt} src={image} layout="fill" objectFit="contain" />
//         </Box>
//         <ListItemText
//           sx={{ display: "inline-block" }}
//           primary={
//             <Typography
//               sx={{
//                 color: color,
//                 fontSize: "1.2em",
//                 pl: "0.75em",
//                 // display: "inline",
//                 // float: "left",
//               }}
//             >
//               {text}
//             </Typography>
//           }
//         />
