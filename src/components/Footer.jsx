import React from "react";
import { Box, Link, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        paddingTop: "24px",
        paddingBottom: "24px",
        paddingLeft: "48px",
        paddingRight: "48px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="caption">Written by Zachery Misson</Typography>
      </Box>
      <Box sx={{ flexGrow: 1, textAlign: "center" }}>
        <Link href="https://github.com/zmisson424/DevSite" variant="caption">
          Clone, Fork and Star
        </Link>
      </Box>
      <Box sx={{ flexGrow: 1, textAlign: "end" }}>
        <Typography variant="caption">
          Last Updated: October 12, 2020
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
