import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MyColors } from "../theme/colors";

function Header() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography
          sx={{
            color: MyColors.secondary,
            fontSize: "100px",
            [theme.breakpoints.down("sm")]: {
              fontSize: "40px",
            },
          }}
        >
          {"</ Hello World >"}
        </Typography>
        <Typography
          sx={{
            fontSize: "50px",
            fontWeight: "bold",
            color: MyColors.offWhite,
            marginTop: "-30px",
            [theme.breakpoints.down("sm")]: {
              fontSize: "25px",
              marginTop: 0,
            },
          }}
        >
          My name is Zachery Misson
        </Typography>
        <Box
          sx={{
            width: "500px",
            [theme.breakpoints.down("sm")]: {
              width: "275px",
              marginTop: "10px",
            },
          }}
        >
          <Typography variant="body1">
            I am a full stack software developer for both mobile and web. I work
            with several popular frameworks including ReactJS, Angular, and
            Flutter.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
