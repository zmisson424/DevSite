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
    height: 80,
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 48,
    paddingRight: 48,
    transition: "all 0.50s cubic-bezier(0.645, 0.045, 0.355, 1)",
    transform: "translateY(0)"
  },
  rootHide: {
    position: "fixed",
    backgroundColor: MyColors.background,
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 48,
    paddingRight: 48,
    transition: "all 0.50s cubic-bezier(0.645, 0.045, 0.355, 1)",
    transform: "translateY(-80px)"
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
  const [showAppBar, setShowAppBar] = useState(true);

  useEffect(() => {
    let previousScrollPosition = 0;

    document.querySelector("#app-root").addEventListener("scroll", () => {
      var position = document.querySelector("#app-root").scrollTop;

      console.log(position);
      console.log(previousScrollPosition);
      if (position > previousScrollPosition) {
        setShowAppBar(false);
        previousScrollPosition = position;
      } else if (previousScrollPosition > position) {
        setShowAppBar(true);
        previousScrollPosition = position;
      }
    });
  }, []);

  return (
    <div className={showAppBar ? classes.root : classes.rootHide}>
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
