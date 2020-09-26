import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "../components/AppBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialIcons from "../components/SocialIcons";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { MyColors } from "../theme/colors";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    overflowY: "auto",
    backgroundColor: MyColors.background
  },
  wrapper: {
    width: "100%",
    paddingLeft: 250,
    paddingRight: 250
  }
});

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
      <div className={classes.wrapper}>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
      <SocialIcons />
    </div>
  );
}

export default Home;
