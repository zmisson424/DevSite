import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { MyColors } from "../../theme/colors";

const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center"
  },
  wrapper: {
    width: "75%"
  },
  header: {
    marginBottom: 48
  },
  summary: {
    color: MyColors.white
  }
});

function Projects() {
  const classes = useStyles();

  return (
    <div id="projects" className={classes.root}>
      <Typography variant="h3" color="secondary" className={classes.header}>
        Experience
      </Typography>
      <div className={classes.wrapper}>
        <Typography variant="h5" style={{ color: MyColors.white }}>
          SpeakEasy
        </Typography>
        <Typography variant="h5" style={{ color: MyColors.white }}>
          Bluequeue
        </Typography>
        <Typography variant="h5" style={{ color: MyColors.white }}>
          Learning Express
        </Typography>
      </div>
    </div>
  );
}

export default Projects;
