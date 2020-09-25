import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { MyColors } from "../../theme/colors";

const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "start",
    alignItems: "center"
  }
});

function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" color="secondary">
        Projects
      </Typography>
    </div>
  );
}

export default Projects;
