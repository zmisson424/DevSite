import React from "react";
import { Box, Typography } from "@mui/material";
import { MyColors } from "../theme/colors";

function ListItem({ text }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        padding: "8px",
      }}
    >
      <span
        style={{
          color: MyColors.secondary,
          marginRight: "8px",
          fontSize: "10px",
        }}
      >
        &lt;/&gt;
      </span>
      <Typography align="left" sx={{ color: MyColors.white, fontSize: "16px" }}>
        {text}
      </Typography>
    </Box>
  );
}

export default ListItem;
