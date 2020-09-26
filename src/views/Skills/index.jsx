import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ListItem from "../../components/ListItem";
import { MyColors } from "../../theme/colors";

const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center"
  },
  wrapper: {
    width: "75%",
    display: "flex"
  },
  header: {
    marginBottom: 48
  },
  summary: {
    color: MyColors.white
  },
  columns: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center"
  },
  columnHeader: {
    color: MyColors.white
  }
});

function Skills() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" color="secondary" className={classes.header}>
        Skills
      </Typography>
      <div className={classes.wrapper}>
        <div className={classes.columns}>
          <Typography className={classes.columnHeader} variant="h6">
            Frameworks
          </Typography>
          <ListItem text="React" />
          <ListItem text="Angular" />
          <ListItem text="Flutter" />
          <ListItem text="Express" />
        </div>
        <div className={classes.columns}>
          <Typography className={classes.columnHeader} variant="h6">
            Languages
          </Typography>
          <ListItem text="Javascript" />
          <ListItem text="Python" />
          <ListItem text="Kotlin" />
          <ListItem text="Java" />
          <ListItem text="Dart" />
          <ListItem text="HTML/CSS/SASS" />
        </div>
        <div className={classes.columns}>
          <Typography className={classes.columnHeader} variant="h6">
            Services
          </Typography>
          <ListItem text="AWS" />
          <ListItem text="Firebase" />
          <ListItem text="DigitalOcean" />
          <ListItem text="Jira" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
