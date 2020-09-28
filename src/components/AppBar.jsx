import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { MyColors } from "../theme/colors";
import Embark from "../assets/images/embark.png";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    backgroundColor: MyColors.background,
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 48,
    paddingRight: 48
  },
  filler: {
    flexGrow: 1
  },
  action: {
    width: 100
  },
  logo: {
    height: 40
  }
});

function AppBar() {
  const classes = useStyles();

  useEffect(() => {
    document.querySelector("#app-root").addEventListener("scroll", () => {
      console.log("Scrolling??");
    });
  }, []);

  return (
    <div className={classes.root}>
      <Link href="/">
        <img src={Embark} className={classes.logo} />
      </Link>
      <div className={classes.filler} />
      <div className={classes.action}>
        <Link href="#about" variant="body1" color="secondary" underline="none">
          About
        </Link>
      </div>
      <div className={classes.action}>
        <Link href="#skills" variant="body1" color="secondary" underline="none">
          Skills
        </Link>
      </div>
      <div className={classes.action}>
        <Link
          href="#projects"
          variant="body1"
          color="secondary"
          underline="none"
        >
          Projects
        </Link>
      </div>
      <div className={classes.action}>
        <Link
          href="#contact"
          variant="body1"
          color="secondary"
          underline="none"
        >
          Contact
        </Link>
      </div>
      <div className={classes.button}>
        <Button variant="outlined" color="secondary">
          Resume
        </Button>
      </div>
    </div>
  );
}

export default AppBar;
