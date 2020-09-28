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
    fontSize: 75,
    fontWeight: "bold",
    color: MyColors.offWhite,
    paddingTop: 16,
    paddingBottom: 16
  },
  headerText: {
    color: MyColors.secondary,
    fontSize: 20
  },
  summary: {
    width: 400
  },
  summaryText: {
    color: MyColors.primary,
    fontSize: 20
  }
});

function Header() {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.headerText}>Hello World</Typography>
        <Typography className={classes.name}>Zachery Misson</Typography>
        <div className={classes.summary}>
          <Typography className={classes.summaryText}>
            Summary of a bunch of cool stuff about me that will sound really
            cool and make people want to hire me for a job that pays really
            well.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Header;
