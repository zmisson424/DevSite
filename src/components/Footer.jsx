import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { MyColors } from "../theme/colors";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 24
  }
});

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography color="primary">Coded by Zachery Misson</Typography>
      <Typography color="primary">Clone, Fork or Star</Typography>
    </div>
  );
}

export default Footer;
