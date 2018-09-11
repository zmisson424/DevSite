import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../config';

import {
  Typography,
  Card,
  CardContent,
  Divider,
  CardActions,
  Grid,
  Fade,
  Hidden
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import SERVICES from './components/services.jpg';
import SHOPIFY from './components/shopify.jpg';
import SQUARESPACE from './components/squarespace.png';
import WORDPRESS from './components/wordpress.png';
import DOTS from './components/dots.svg';
import REACT from '../../utils/img/react.png';
import ANGULAR from '../../utils/img/angular.png';
import ANDROID from '../../utils/img/android.png';
import FLUTTER from '../../utils/img/flutter.png';

const HeaderImg = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  margin-bottom: 25px;
  text-align: center;
`;

const BackDiv = styled.div`
  background: ${colors.background};
  width: 100%;
  height: 100%;
`;

const TextDiv = styled.div`
  text-align: center;
  padding-left: 200px;
  padding-right: 200px;

  @media (max-width: 960px) {
    padding-left: 10px;
    padding-right: 10px;
  }
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

const Dots = styled.div`
  background: url(${DOTS});
  background-repeat: no-repeat;
  height: 60px;
  width: 7%;
  margin-top: 75px;
  margin-bottom: 75px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 960px) {
    margin-top: 35px;
    margin-bottom: 20px;
  }
`;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  header: {
    color: colors.secondary,
    marginBottom: 15
  },
  body: {
    color: colors.white
  },
  card: {
    height: '100%'
  },
  cardContent: {
    height: '38%'
  },
  actions: {
    //
  }
});

class Create extends Component {
  render() {
    const { classes } = this.props;
    return (
      <BackDiv>
        <HeaderImg src={SERVICES} />
        <Fade in={true} timeout={1500}>
          <div>
            <TextDiv>
              <Typography className={classes.header} variant="display3">
                Lets Get Started
              </Typography>
              <Typography className={classes.body} variant="headline">
                Embark Developing is here to make your vision a reality.
              </Typography>
              <Dots />
              <Typography className={classes.header} variant="display3">
                Small Business
              </Typography>
              <Typography className={classes.body} variant="headline">
                For small businesses trying to make a name for themselves in the
                digital world, Shopify, Squarespace and WordPress are ideal.
                Embark can help launch and create a site that perfectly matches
                your vision. Easy for you to maintain and update, these options
                eliminate the need of constant developer input. Simple and
                intuitive.
              </Typography>
            </TextDiv>
            <div
              style={{
                width: '100%',
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 40
              }}
            >
              <Grid container spacing={16}>
                <Hidden mdDown>
                  <Grid item lg={3} />
                </Hidden>
                <Grid item lg={2} md={4} xs={6}>
                  <Card className={classes.card}>
                    <CardImage src={SHOPIFY} />
                    <CardContent className={classes.cardContent}>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        Shopify
                      </Typography>
                      <Typography component="p">
                        Make cusomizable retail websites that can be updated and
                        changed without a permanent developer.
                      </Typography>
                    </CardContent>
                    <Divider />
                    <CardActions className={classes.actions}>
                      <a href="https://www.shopify.com/">Check it out</a>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item lg={2} md={4} xs={6}>
                  <Card className={classes.card}>
                    <CardImage src={SQUARESPACE} />
                    <CardContent className={classes.cardContent}>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        Squarespace
                      </Typography>
                      <Typography component="p">
                        Create a unique site that can show off any style of
                        business from retail to generating a blog.
                      </Typography>
                    </CardContent>
                    <Divider />
                    <CardActions className={classes.actions}>
                      <a href="https://www.squarespace.com/">Check it out</a>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item lg={2} md={4} xs={6}>
                  <Card className={classes.card}>
                    <CardImage src={WORDPRESS} />
                    <CardContent className={classes.cardContent}>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        WordPress
                      </Typography>
                      <Typography component="p">
                        A powerful tool to get any business off the ground,
                        WordPress is ideal for meeting every need.
                      </Typography>
                    </CardContent>
                    <Divider />
                    <CardActions className={classes.actions}>
                      <a href="https://wordpress.org/">Check it out</a>
                    </CardActions>
                  </Card>
                </Grid>
                <Hidden mdDown>
                  <Grid item lg={3} />
                </Hidden>
              </Grid>
            </div>
            <TextDiv>
              <Dots />
              <Typography className={classes.header} variant="display3">
                Startup
              </Typography>
              <Typography className={classes.body} variant="headline">
                Do you have a great idea? Do you want to launch your own tech
                service on the web, mobile application or both, but {"don't "}
                know where to start? A fresh build might be the solution. Using
                modern frameworks such as React or Angular can help speed up the
                development process for your Web App. Using Android Studio, a
                new Android Application can be built from the ground up to do
                exactly as you envision.
              </Typography>
            </TextDiv>
            <div
              style={{
                width: '100%',
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 40
              }}
            >
              <Grid container spacing={16}>
                <Hidden mdDown>
                  <Grid item lg={2} />
                </Hidden>
                <Grid item lg={2} md={3} xs={6}>
                  <Card className={classes.card}>
                    <CardImage src={REACT} />
                    <CardContent className={classes.cardContent}>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        React
                      </Typography>
                      <Typography component="p">
                        Fast, simple and scalable. React is one of the most
                        popular frameworks to build a modern Web App.
                      </Typography>
                    </CardContent>
                    <Divider />
                    <CardActions className={classes.actions}>
                      <a href="https://reactjs.org/">Check it out</a>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item lg={2} md={3} xs={6}>
                  <Card className={classes.card}>
                    <CardImage src={ANGULAR} />
                    <CardContent className={classes.cardContent}>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        Angular
                      </Typography>
                      <Typography component="p">
                        Arguably as popular as React, Angular is another
                        fantastic Web App framework.
                      </Typography>
                    </CardContent>
                    <Divider />
                    <CardActions className={classes.actions}>
                      <a href="https://angular.io/">Check it out</a>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item lg={2} md={3} xs={6}>
                  <Card className={classes.card}>
                    <CardImage src={ANDROID} />
                    <CardContent className={classes.cardContent}>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        Android
                      </Typography>
                      <Typography component="p">
                        The most popular mobile operating system in the world.
                      </Typography>
                    </CardContent>
                    <Divider />
                    <CardActions className={classes.actions}>
                      <a href="https://www.android.com/">Check it out</a>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item lg={2} md={3} xs={6}>
                  <Card className={classes.card}>
                    <CardImage src={FLUTTER} />
                    <CardContent className={classes.cardContent}>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        Flutter
                      </Typography>
                      <Typography component="p">
                        Still in early development, Flutter uses a React like
                        framework to create for both Android and iOS.
                      </Typography>
                    </CardContent>
                    <Divider />
                    <CardActions className={classes.actions}>
                      <a href="https://flutter.io/">Check it out</a>
                    </CardActions>
                  </Card>
                </Grid>
                <Hidden mdDown>
                  <Grid item lg={2} />
                </Hidden>
              </Grid>
            </div>
            <TextDiv style={{ marginBottom: 50 }}>
              <Dots />
              <Typography className={classes.header} variant="display3">
                Services
              </Typography>
              <Typography className={classes.body} variant="headline">
                Embark Developing can help you make new additions to your
                existing website or application. Whether you want to create an
                easy way to accept donations for your non-profit or allow live
                streaming of you event, Embark can help you access a greater
                audience.
              </Typography>
            </TextDiv>
          </div>
        </Fade>
      </BackDiv>
    );
  }
}

export default withStyles(styles)(Create);
