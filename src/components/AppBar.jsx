import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { MyColors } from "../theme/colors";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    backgroundColor: MyColors.background,
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 24,
    paddingRight: 24
  },
  filler: {
    flexGrow: 1
  },
  link: {
    width: 100
  }
});

function AppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logo}></div>
      <div className={classes.filler} />
      <div className={classes.link}>
        <Typography variant="body1" color="secondary">
          About
        </Typography>
      </div>
      <div className={classes.link}>
        <Typography variant="body1" color="secondary">
          Skills
        </Typography>
      </div>
      <div className={classes.link}>
        <Typography variant="body1" color="secondary">
          Projects
        </Typography>
      </div>
      <div className={classes.link}>
        <Typography variant="body1" color="secondary">
          Contact
        </Typography>
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
