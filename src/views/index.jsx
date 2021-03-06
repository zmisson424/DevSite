import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import AppBar from "../components/AppBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialIcons from "../components/SocialIcons";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { MyColors } from "../theme/colors";
import { GoogleAnalytics } from "../config";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    overflowY: "auto",
    backgroundColor: MyColors.background,
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      width: "0.4em",
      display: "none"
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey"
    }
  },
  wrapper: {
    width: "100%",
    paddingLeft: 250,
    paddingRight: 250,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 24,
      paddingRight: 24
    }
  }
}));

ReactGA.initialize(GoogleAnalytics.trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

function Home() {
  const classes = useStyles();

  return (
    <div id="app-root" className={classes.root}>
      <AppBar />
      <div className={classes.wrapper}>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <SocialIcons />
      <Footer />
    </div>
  );
}

export default Home;
