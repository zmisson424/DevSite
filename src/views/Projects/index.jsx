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
    alignItems: "center",
    justifyContent: "center"
  },
  wrapper: {
    width: "80%"
  },
  summary: {
    color: MyColors.white
  },
  project: {
    marginTop: 48
  },
  overview: {
    marginBottom: 24,
    marginTop: 24
  },
  description: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  columns: {
    width: 300,
    marginLeft: 48,
    marginRight: 48
  }
});

function Projects() {
  const classes = useStyles();

  return (
    <div id="projects" className={classes.root}>
      <Typography variant="h2" color="secondary">
        Work and Projects
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
        <div className={classes.overview}>
          <Typography variant="body1">
            SpeakEasy is a modern solution to marketing. Build and design
            campaigns and easily deliver them to you customers at the right
            time. Using dark social messaging (WhatsApp, SMS, iMessage, Facebook
            Messenger, etc...) to reach recipients in a more modern way. The
            campaigns are designed to engage and encourage interaction.
          </Typography>
        </div>
        <div className={classes.description}>
          <div className={classes.columns}>
            <Typography variant="h5">Job</Typography>
            <Typography variant="subtitle2">
              My official title is Senior Software Engineer. I am in charge of
              all development. The company is running two websites and a mobile
              application. One website is the account site that mangaes and
              creates the marketing campaign. I migrated this site from Ruby on
              Rails to React. The other site acts as a micro-site that is to
              display and manage all marketing campaigns that go out to the
              recipients. Originally, this was a small website built in PHP, but
              is now a full-blown Web App in React. SpeakEasy also has a mobile
              application on both iOS and Android. This is created using
              Flutter.
            </Typography>
          </div>
          <div className={classes.columns}>
            <Typography variant="h5">Stack</Typography>
            <ListItem text="React" />
            <ListItem text="Parse" />
            <ListItem text="Express" />
            <ListItem text="Flutter" />
            <ListItem text="Ruby on Rails" />
            <ListItem text="PHP" />
          </div>
          <div className={classes.columns}>
            <Typography variant="h5">Services</Typography>
            <ListItem text="AWS" />
            <ListItem text="Firebase" />
            <ListItem text="DigitalOcean" />
            <ListItem text="Atlassian Products" />
            <ListItem text="Zoho" />
            <ListItem text="Stripe" />
            <ListItem text="MongoDB" />
          </div>
        </div>
      </div>
      <div className={classes.project}>
        <Typography variant="h3" align="left">
          Bluequeue
        </Typography>
        <Typography align="right" variant="caption" color="secondary">
          2019 - Present (Part Time)
        </Typography>
        <div className={classes.overview}>
          <Typography variant="body1">
            SpeakEasy is a modern solution to marketing. Build and design
            campaigns and easily deliver them to you customers at the right
            time. Using dark social messaging (WhatsApp, SMS, iMessage, Facebook
            Messenger, etc...) to reach recipients in a more modern way. The
            campaigns are designed to engage and encourage interaction.
          </Typography>
        </div>
        <div className={classes.description}>
          <div className={classes.columns}>
            <Typography variant="h5">Job</Typography>
            <Typography variant="subtitle2">
              My official title is Senior Software Engineer. I am in charge of
              all development. The company is running two websites and a mobile
              application. One website is the account site that mangaes and
              creates the marketing campaign. I migrated this site from Ruby on
              Rails to React. The other site acts as a micro-site that is to
              display and manage all marketing campaigns that go out to the
              recipients. Originally, this was a small website built in PHP, but
              is now a full-blown Web App in React. SpeakEasy also has a mobile
              application on both iOS and Android. This is created using
              Flutter.
            </Typography>
          </div>
          <div className={classes.columns}>
            <Typography variant="h5">Stack</Typography>
            <ListItem text="React" />
            <ListItem text="Parse" />
            <ListItem text="Express" />
            <ListItem text="Flutter" />
            <ListItem text="Ruby on Rails" />
            <ListItem text="PHP" />
          </div>
          <div className={classes.columns}>
            <Typography variant="h5">Services</Typography>
            <ListItem text="AWS" />
            <ListItem text="Firebase" />
            <ListItem text="DigitalOcean" />
            <ListItem text="Atlassian Products" />
            <ListItem text="Zoho" />
            <ListItem text="Stripe" />
            <ListItem text="MongoDB" />
          </div>
        </div>
      </div>
      <div className={classes.project}>
        <Typography variant="h3" align="right">
          Learning Express (Columbus)
        </Typography>
        <div style={{ width: "100%", textAlign: "right" }}>
          <Typography align="right" variant="caption" color="secondary">
            2013 - 2018 (Full Time)
          </Typography>
        </div>
        <div className={classes.overview}>
          <Typography variant="body1">
            SpeakEasy is a modern solution to marketing. Build and design
            campaigns and easily deliver them to you customers at the right
            time. Using dark social messaging (WhatsApp, SMS, iMessage, Facebook
            Messenger, etc...) to reach recipients in a more modern way. The
            campaigns are designed to engage and encourage interaction.
          </Typography>
        </div>
        <div className={classes.description}>
          <div className={classes.columns}>
            <Typography variant="h5">Job</Typography>
            <Typography variant="subtitle2">
              My official title is Senior Software Engineer. I am in charge of
              all development. The company is running two websites and a mobile
              application. One website is the account site that mangaes and
              creates the marketing campaign. I migrated this site from Ruby on
              Rails to React. The other site acts as a micro-site that is to
              display and manage all marketing campaigns that go out to the
              recipients. Originally, this was a small website built in PHP, but
              is now a full-blown Web App in React. SpeakEasy also has a mobile
              application on both iOS and Android. This is created using
              Flutter.
            </Typography>
          </div>
          <div className={classes.columns}>
            <Typography variant="h5">Stack</Typography>
            <ListItem text="React" />
            <ListItem text="Parse" />
            <ListItem text="Express" />
            <ListItem text="Flutter" />
            <ListItem text="Ruby on Rails" />
            <ListItem text="PHP" />
          </div>
          <div className={classes.columns}>
            <Typography variant="h5">Services</Typography>
            <ListItem text="AWS" />
            <ListItem text="Firebase" />
            <ListItem text="DigitalOcean" />
            <ListItem text="Atlassian Products" />
            <ListItem text="Zoho" />
            <ListItem text="Stripe" />
            <ListItem text="MongoDB" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
