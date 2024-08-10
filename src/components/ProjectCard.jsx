import React from "react";
import { Box, Typography } from "@mui/material";
import { MyColors } from "../theme/colors";

function ProjectCard({ title, description, imageUrl }) {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        padding: "16px",
        borderRadius: "10px",
        borderColor: MyColors.secondary,
        borderStyle: "solid",
        borderWidth: "0.4px",
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Box sc={{ width: "100%", textAlign: "center" }}>
        <img
          src={imageUrl}
          alt="Project"
          style={{
            borderRadius: "4px",
            height: "200px",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        />
      </Box>
      <Typography variant="caption">{description}</Typography>
      <Box className={classes.soon}>
        <Typography variant="overline">
          Coming to iOS and Android soon
        </Typography>
      </Box>
    </Box>
  );
}

export default ProjectCard;
