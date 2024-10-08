import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import AppBar from "../components/AppBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialIcons from "../components/SocialIcons";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { MyColors } from "../theme/colors";

function Home() {
  const theme = useTheme();

  return (
    <Box
      id="app-root"
      sx={{
        height: "100vh",
        overflowY: "auto",
        backgroundColor: MyColors.background,
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          width: "0.4em",
          display: "none",
        },
        "&::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0,0,0,.1)",
          outline: "1px solid slategrey",
        },
      }}
    >
      <AppBar />
      <Box
        sx={{
          width: "100%",
          paddingLeft: "250px",
          paddingRight: "250px",
          [theme.breakpoints.down("sm")]: {
            paddingLeft: "24px",
            paddingRight: "24px",
          },
        }}
      >
        <Header />
        <Skills />
        <Projects />
        <Contact />
      </Box>
      <SocialIcons />
      <Footer />
    </Box>
  );
}

export default Home;
