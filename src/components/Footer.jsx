import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { MyColors } from "../theme/colors";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 48,
    paddingRight: 48
  },
  firstSection: {
    flexGrow: 1
  },
  lastSection: {
    flexGrow: 1,
    textAlign: "end"
  },
  link: {
    flexGrow: 1,
    textAlign: "center"
  }
});

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.firstSection}>
        <Typography variant="caption">Written by Zachery Misson</Typography>
      </div>
      <div className={classes.link}>
        <Link href="https://github.com/zmisson424/DevSite" variant="caption">
          Clone, Fork and Star
        </Link>
      </div>
      <div className={classes.lastSection}>
        <Typography variant="caption">
          Last Updated: October 12, 2020
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
