import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ListItem from "../../components/ListItem";
import Hidden from "@material-ui/core/Hidden";
import Photo from "../../assets/images/about.png";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center"
    }
  },
  section: {
    width: "100%",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  images: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24
  },
  photo: {
    width: 500,
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  fun: {
    width: "100%",
    flexGrow: 1,
    marginRight: 48,
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginTop: 24,
      textAlign: "center"
    }
  },
  textArea: {
    maxWidth: 600,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: 10,
      textAlign: "center"
    }
  }
}));

function About() {
  const classes = useStyles();

  return (
    <div id="about" className={classes.root}>
      <Typography variant="h2" color="secondary">
        About Me
      </Typography>
      <div className={classes.section}>
        <Hidden smDown>
          <div className={classes.fun}>
            <Typography variant="h5" color="secondary">
              Fun Facts
            </Typography>
            <ListItem text="I am getting married on September 25, 2021" />
            <ListItem text="I have a puppy (her name is Eleanor) and a bunny (his name is Podrick)" />
            <ListItem text="I'm a big sports guy" />
            <ListItem text="I like to travel" />
          </div>
        </Hidden>
        <div className={classes.textArea}>
          <Typography variant="body1">
            I recievied my bachelors degree from The Ohio State University and
            then relocated to Chicago. I have been professionaly programming for
            six years and operating my own personal freelance agency for four
            years. I am currently employeed at SpeakEasy as the Senior Software
            Developer.
          </Typography>
        </div>
        <Hidden mdUp>
          <div className={classes.fun}>
            <Typography variant="h5" color="secondary">
              Fun Facts
            </Typography>
            <ListItem text="I am getting married on September 25, 2021" />
            <ListItem text="I have a puppy (her name is Eleanor) and a bunny (his name is Podrick)" />
            <ListItem text="I'm a big sports guy" />
            <ListItem text="I like to travel" />
          </div>
        </Hidden>
      </div>
      <div className={classes.images}>
        <img className={classes.photo} alt="Me" src={Photo} />
      </div>
    </div>
  );
}

export default About;
