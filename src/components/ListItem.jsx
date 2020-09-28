import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { MyColors } from "../theme/colors";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    padding: 8
  },
  bullet: {
    color: MyColors.secondary,
    marginRight: 8,
    fontSize: 10
  },
  text: {
    color: MyColors.white,
    fontSize: 16
  }
});

function ListItem({ text }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.bullet}>&lt;/&gt;</span>
      <Typography align="left" className={classes.text}>
        {text}
      </Typography>
    </div>
  );
}

export default ListItem;
