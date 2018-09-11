import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../config';

import {
  Typography,
  Card,
  CardContent,
  Grid,
  Grow,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import HTML5 from './components/html5.png';
import REACT from './components/react.png';
import ANGULAR from './components/angular.png';
import ANDROID from './components/android.png';
import FLUTTER from './components/flutter.png';
import FIREBASE from './components/firebase.png';
import GOOGLE from './components/google.jpg';
import AWS from './components/aws.png';
import MONGO from './components/mongo.png';
import MATERIAL from './components/material.png';
import BOOTSTRAP from './components/bootstrap.png';

const BackDiv = styled.div`
  background: ${colors.background};
  width: 100%;
  height: 100%;
  padding-left: 40px;
  padding-right: 40px;

  @media (max-width: 960px) {
    padding-top: 40px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const SectionHeader = styled.h2`
  color: ${colors.secondary};
  padding-top: 30px;
  margin-bottom: 20px;
  width: 100%;
  border-bottom: 1px solid;
`;

const CardImage = styled.img`
  width: auto;
  height: 175px;
  background-size: cover;
  padding-top: 25px;
  padding-bottom: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  actions: {
    paddingTop: 13,
    paddingBottom: 13
  },
  paper: {
    position: 'absolute',
    padding: 15,
    [theme.breakpoints.up('md')]: {
      width: '50%',
      top: '30%',
      marginLeft: '25%'
    }
  },
  button: {
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    color: colors.secondary
  },
  card: {
    height: '100%'
  }
});

class Develop extends Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    return (
      <BackDiv>
        <SectionHeader>Web</SectionHeader>
        <Grid container spacing={16}>
          <Grid item lg={2} md={3} xs={6}>
            <Grow in={true}>
              <Card className={classes.card}>
                <CardImage src={HTML5} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    HTML 5
                  </Typography>
                  <Typography component="p">
                    Using a combination of HTML, CSS, and javascript, websites
                    can be designed with a smooth and dynamic flow capable of
                    running on all devices.
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
          <Grid item lg={2} md={3} xs={6}>
            <Grow in={true} timeout={1000}>
              <Card className={classes.card}>
                <CardImage src={REACT} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    React
                  </Typography>
                  <Typography component="p">
                    This is framework was originally developed by Facebook and
                    has quickly become one of the most popular and handy
                    developing tools for the internet.
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
          <Grid item lg={2} md={3} xs={6}>
            <Grow in={true} timeout={2000}>
              <Card className={classes.card}>
                <CardImage src={ANGULAR} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    Angular
                  </Typography>
                  <Typography component="p">
                    Developed by Google, Angular has taken shape to be a very
                    dynamic tool for quick builds with a modern design.
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        </Grid>

        <SectionHeader>Apps</SectionHeader>
        <Grid container spacing={16}>
          <Grid item lg={2} md={3} xs={6}>
            <Grow in={true} timeout={1000}>
              <Card className={classes.card}>
                <CardImage src={ANDROID} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    Android
                  </Typography>
                  <Typography component="p">
                    With over 2 billion active devices in the world, Android is
                    the biggest way to reach users of all backgrounds. Built
                    using Java, Kotlin, and XML, Android is a necessitie for all
                    projects.
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
          <Grid item lg={2} md={3} xs={6}>
            <Grow in={true} timeout={2000}>
              <Card className={classes.card}>
                <CardImage src={FLUTTER} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    Flutter
                  </Typography>
                  <Typography component="p">
                    This is still in the testing phase. Flutter takes a
                    React-like approach to create both Android and iOS apps at
                    the same time.
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        </Grid>

        <SectionHeader>Services</SectionHeader>

        <Grid container spacing={16}>
          <Grid item lg={2} md={3} xs={6}>
            <Grow in={true} timeout={3000}>
              <Card className={classes.card}>
                <CardImage src={FIREBASE} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    Firebase
                  </Typography>
                  <Typography component="p">
                    Ready to use on Android, iOS or the web, Firebase helps with
                    realtime database, user authentication, webhosting and much
                    more.
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
          <Grid item lg={2} md={3} xs={6}>
            <Grow in={true} timeout={4000}>
              <Card className={classes.card}>
                <CardImage src={GOOGLE} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    Google Cloud
                  </Typography>
                  <Typography component="p">
                    Maintained by Google, their cloud engine is powerful and
                    realiable. It can be used to host massive projects.
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
          <Grid item lg={2} md={3} xs={6}>
            <Grow in={true} timeout={5000}>
              <Card className={classes.card}>
                <CardImage src={AWS} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    AWS
                  </Typography>
                  <Typography component="p">
                    Amazon Web Services is the most popular cloud network. It
                    has a wide range of functions and capabilites for any
                    project.
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
          <Grid item lg={2} md={3} xs={6}>
            <Grow in={true} timeout={6000}>
              <Card className={classes.card}>
                <CardImage src={MONGO} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    MongoDB
                  </Typography>
                  <Typography component="p">
                    Mongo is an amazing tool to help create any database. It
                    also plays nice with both Google Cloud and AWS.
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        </Grid>

        <SectionHeader>Design</SectionHeader>
        <Grid container spacing={16} style={{ marginBottom: 25 }}>
          <Grid item lg={2} md={3} xs={6}>
            <Grow in={true} timeout={4000}>
              <Card className={classes.card}>
                <CardImage src={MATERIAL} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    Material Design
                  </Typography>
                  <Typography component="p">
                    This is Googles design guidlines. It maintains a flat,
                    realistic look to everything. Everything has specific colors
                    and interactions. Google uses this design technique in every
                    product of theirs.
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
          <Grid item lg={2} md={3} xs={6}>
            <Grow in={true} timeout={5000}>
              <Card className={classes.card}>
                <CardImage src={BOOTSTRAP} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    Bootstrap
                  </Typography>
                  <Typography component="p">
                    Originally designed at Twitter, this UI has a very clean and
                    unique look that would be recognized across the internet.
                    Using Bootstrap can speed up any UI creation.
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        </Grid>
      </BackDiv>
    );
  }
}

export default withStyles(styles)(Develop);
