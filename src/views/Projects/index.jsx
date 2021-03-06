import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import ReactIcon from "../../assets/images/react.svg";
import FlutterIcon from "../../assets/images/flutter.svg";
import ParseIcon from "../../assets/images/parse.svg";
import DigitalOceanIcon from "../../assets/images/digitalocean.svg";
import FirebaseIcon from "../../assets/images/firebase.svg";
import AwsIcon from "../../assets/images/aws.svg";
import ProjectCard from "../../components/ProjectCard";
import SpeakEasy from "../../assets/images/speakeasy.png";
import Bluequeue from "../../assets/images/bluequeue.png";
import Recipe from "../../assets/images/recipe_app.png";
import Game from "../../assets/images/game_app.png";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    minHeight: "100vh"
  },
  project: {
    marginTop: 48,
    [theme.breakpoints.down("sm")]: {
      marginTop: 24
    }
  },
  grid: {
    display: "flex",
    width: "100%",
    marginTop: 24,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  column: {
    flexGrow: 1,
    textAlign: "center"
  },
  description: {
    width: 350
  },
  job: {
    marginTop: 10
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 16
  },
  iconRow: {
    width: "100%",
    marginTop: 24,
    display: "flex",
    justifyContent: "center"
  },
  others: {
    marginTop: 48
  },
  speakeasy: {
    width: 550,
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  bluequeue: {
    height: 300,
    [theme.breakpoints.down("sm")]: {
      height: 250
    }
  }
}));

function Projects() {
  const classes = useStyles();

  return (
    <div id="projects" className={classes.root}>
      <Typography variant="h2" color="secondary" align="center">
        Projects
      </Typography>
      <div className={classes.project}>
        <Typography variant="h3" align="right">
          SpeakEasy
        </Typography>
        <div style={{ width: "100%", textAlign: "right" }}>
          <Typography align="right" variant="caption" color="secondary">
            2018 - Present (Full Time)
          </Typography>
        </div>
        <div className={classes.grid}>
          <div className={classes.column}>
            <img
              src={SpeakEasy}
              alt="SpeakEasy"
              className={classes.speakeasy}
            />
          </div>
          <div className={classes.description}>
            <Typography variant="subtitle2">
              SpeakEasy is a modern solution to content distribution. Build and
              design campaigns and easily deliver them to your recicipients in
              the most appropriate place (WhatsApp, SMS, iMessage, Facebook
              Messenger, etc...).
            </Typography>
            <Typography className={classes.job} variant="h6">
              Job
            </Typography>
            <Typography variant="subtitle2">
              I am the Senior Software Developer in charge of two websites, the
              backend, and an iOS and Android app. I am in charge of improving
              the platform and running the development team.
            </Typography>
            <div className={classes.iconRow}>
              <Tooltip title="React">
                <img src={ReactIcon} alt="React" className={classes.icon} />
              </Tooltip>
              <Tooltip title="Flutter">
                <img src={FlutterIcon} alt="Flutter" className={classes.icon} />
              </Tooltip>
              <Tooltip title="Parse">
                <img src={ParseIcon} alt="Parse" className={classes.icon} />
              </Tooltip>
              <Tooltip title="AWS">
                <img src={AwsIcon} alt="AWS" className={classes.icon} />
              </Tooltip>
              <Tooltip title="Firebase">
                <img
                  src={FirebaseIcon}
                  alt="Firebase"
                  className={classes.icon}
                />
              </Tooltip>
              <Tooltip title="DigitalOcean">
                <img
                  src={DigitalOceanIcon}
                  alt="DigitalOcean"
                  className={classes.icon}
                />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.project}>
        <Typography variant="h3" align="left">
          BlueQueue
        </Typography>
        <div style={{ width: "100%", textAlign: "left" }}>
          <Typography align="right" variant="caption" color="secondary">
            2019 - Present (Full Time)
          </Typography>
        </div>
        <div className={classes.grid}>
          <Hidden mdUp>
            <div className={classes.column}>
              <img
                src={Bluequeue}
                alt="Bluequeue"
                className={classes.bluequeue}
              />
            </div>
          </Hidden>
          <div className={classes.description}>
            <Typography variant="subtitle2">
              Enhancing the consumer product. This application focuses on easily
              bringing consumer products, coupons, instructions, videos, reviews
              and more all in one social place.
            </Typography>
            <Typography className={classes.job} variant="h6">
              Job
            </Typography>
            <Typography variant="subtitle2">
              I am the Front End devloper for this startup. The app uses Flutter
              to quickly deploy to both iOS and Android. I have helped with
              Backend work as well using Express and Neo4J.
            </Typography>
            <div className={classes.iconRow}>
              <Tooltip title="Flutter">
                <img src={FlutterIcon} alt="Flutter" className={classes.icon} />
              </Tooltip>
              <Tooltip title="Firebase">
                <img
                  src={FirebaseIcon}
                  alt="Firebase"
                  className={classes.icon}
                />
              </Tooltip>
              <Tooltip title="DigitalOcean">
                <img
                  src={DigitalOceanIcon}
                  alt="DigitalOcean"
                  className={classes.icon}
                />
              </Tooltip>
            </div>
          </div>
          <Hidden smDown>
            <div className={classes.column}>
              <img
                src={Bluequeue}
                alt="Bluequeue"
                className={classes.bluequeue}
              />
            </div>
          </Hidden>
        </div>
      </div>
      <Grid container spacing={2} justify="center" className={classes.others}>
        <Grid item md={4} ms={12}>
          <ProjectCard
            title="Recipe App"
            description="This is an easy to use recipe app. Easily create, store, and share recipes. Easy too use and understand. Built in measurement conversions. Easy to upload photos of expected results."
            imageUrl={Recipe}
          />
        </Grid>
        <Grid item md={4} sm={12}>
          <ProjectCard
            title="GameTime"
            description="This is my project during the pandemic. Easily play classic board games with your friends and family in real-time. It includes in-game chat and leaderboards."
            imageUrl={Game}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
