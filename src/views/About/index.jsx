import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ListItem from "../../components/ListItem";
import Hidden from "@material-ui/core/Hidden";
import { MyColors } from "../../theme/colors";
import Eleanor from "../../assets/images/eleanor.jpg";
import Podrick from "../../assets/images/podrick.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    justifyContent: "center"
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
    alignItems: "center",
    justifyContent: "center"
  },
  smallImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: 100,
      height: 125
    }
  },
  largeImage: {
    width: 225,
    height: 275,
    borderRadius: 10,
    objectFit: "cover",
    marginLeft: 16,
    marginRight: 16,
    [theme.breakpoints.down("sm")]: {
      width: 125,
      height: 175
    }
  },
  fun: {
    width: "100%",
    paddingLeft: "20%",
    paddingRight: "20%",
    textAlign: "center",
    marginTop: 48,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
      marginBottom: 48
    }
  },
  textArea: {
    marginLeft: 48,
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
          <div className={classes.images}>
            <img className={classes.smallImage} src={Eleanor} />
            <img className={classes.largeImage} src={Eleanor} />
            <img className={classes.smallImage} src={Podrick} />
          </div>
        </Hidden>
        <div className={classes.textArea}>
          <Typography variant="body1">
            Born and raised in Ohio. I obtained my bachelors degree from The
            Ohio State University and then relocated to Chicago. I have been
            professionaly programming for six years and operating my own
            personal freelance agency for four years. I am currently employeed
            at SpeakEasy as the Senior Software Developer.
          </Typography>
          <div className={classes.fun}>
            <Typography variant="h5" color="secondary">
              Fun Facts
            </Typography>
            <ListItem text="I am getting married on September 25, 2021" />
            <ListItem text="I have a puppy (her name is Eleanor) and a bunny (his name is Podrick)" />
            <ListItem text="I'm a big sports guy" />
            <ListItem text="I like to travel" />
          </div>
        </div>
        <Hidden mdUp>
          <div className={classes.images}>
            <img className={classes.smallImage} src={Eleanor} />
            <img className={classes.largeImage} src={Eleanor} />
            <img className={classes.smallImage} src={Podrick} />
          </div>
        </Hidden>
      </div>
    </div>
  );
}

export default About;
