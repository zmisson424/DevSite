import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ListItem from "../../components/ListItem";
import { MyColors } from "../../theme/colors";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start"
  },
  wrapper: {
    width: 500,
    marginTop: 24,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: 10
    }
  },
  grid: {
    display: "flex",
    marginTop: 48,
    width: "100%",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "100%",
      alignItems: "center"
    }
  },
  columns: {
    flexGrow: 1,
    marginBottom: 24,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      textAlign: "center"
    }
  },
  columnHeader: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "left"
    }
  }
}));

function Skills() {
  const classes = useStyles();

  return (
    <div id="expertise" className={classes.root}>
      <Typography variant="h2" color="secondary">
        Experience
      </Typography>
      <div className={classes.wrapper}>
        <Typography variant="body1">
          I am a Full Stack developer for both web and mobile interfaces. On
          web, I generally develop using an Angular or ReactJS frontend and
          combine this with a RESTful backend. I have built both Express and
          Ruby on Rails backends. As for mobile, I develop for cross platform
          use on Flutter and React Native. I also develop for native Android in
          both Kotlin and Java.
        </Typography>
      </div>
      <div className={classes.grid}>
        <div className={classes.columns}>
          <Typography className={classes.columnHeader} variant="h5">
            Frameworks
          </Typography>
          <ListItem text="React" />
          <ListItem text="Angular" />
          <ListItem text="Flutter" />
          <ListItem text="Express" />
        </div>
        <div className={classes.columns}>
          <Typography className={classes.columnHeader} variant="h5">
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
          <Typography className={classes.columnHeader} variant="h5">
            Services
          </Typography>
          <ListItem text="AWS" />
          <ListItem text="Firebase" />
          <ListItem text="Parse" />
          <ListItem text="DigitalOcean" />
          <ListItem text="Jira" />
          <ListItem text="MySQL/NoSQL/Graph DB" />
          <ListItem text="Github/Gitlab/Bitbucket" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
