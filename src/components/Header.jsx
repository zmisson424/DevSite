import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { MyColors } from "../theme/colors";

const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  name: {
    fontSize: 50,
    fontWeight: "bold",
    color: MyColors.offWhite,
    marginTop: -30
  },
  headerText: {
    color: MyColors.secondary,
    fontSize: 100
  },
  summary: {
    width: 500
  },
  summaryText: {
    color: MyColors.white,
    fontSize: 18
  }
});

function Header() {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.headerText}>
          {"</ Hello World >"}
        </Typography>
        <Typography className={classes.name}>
          My name is Zachery Misson
        </Typography>
        <div className={classes.summary}>
          <Typography className={classes.summaryText}>
            I am a software developer for both mobile and web. I consider myself
            full stack, with lots of experience in both front and back end
            applications. I work with several popular frameworks including
            ReactJS, Angular, and Flutter.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Header;
