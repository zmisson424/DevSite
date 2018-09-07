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
    color: colors.primaryLight,
    marginBottom: 15
  },
  body: {
    color: colors.white
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
                Where to start?
              </Typography>
              <Typography className={classes.body} variant="headline">
                There are lots of different approaches to make the perfect
                application that fits your buisness.
              </Typography>
              <Dots />
              <Typography className={classes.header} variant="display3">
                Small Business
              </Typography>
              <Typography className={classes.body} variant="headline">
                For small business trying to make a space for themselves in the
                world, it can be best to use Shopify or Squarespace. Embark can
                help launch and create a site that perfectly matches your
                vision. Then it will be easy for you to maintain and update your
                site with out the need of a developer. Simple and intuitive.
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
                <Hidden smDown>
                  <Grid item md={3} />
                </Hidden>
                <Grid item md={2} xs={6}>
                  <Card>
                    <CardImage src={SHOPIFY} />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        Shopify
                      </Typography>
                      <Typography component="p">Shopify</Typography>
                    </CardContent>
                    <Divider />
                    <CardActions className={classes.actions}>
                      <a href="https://www.shopify.com/">Check it out</a>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item md={2} xs={6}>
                  <Card>
                    <CardImage src={SQUARESPACE} />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        Squarespace
                      </Typography>
                      <Typography component="p">Shopify</Typography>
                    </CardContent>
                    <Divider />
                    <CardActions className={classes.actions}>
                      <a href="https://www.squarespace.com/">Check it out</a>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item md={2} xs={6}>
                  <Card>
                    <CardImage src={WORDPRESS} />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        WordPress
                      </Typography>
                      <Typography component="p">Shopify</Typography>
                    </CardContent>
                    <Divider />
                    <CardActions className={classes.actions}>
                      <a href="https://wordpress.org/">Check it out</a>
                    </CardActions>
                  </Card>
                </Grid>
                <Hidden smDown>
                  <Grid item md={3} />
                </Hidden>
              </Grid>
            </div>
            <TextDiv>
              <Dots />
              <Typography className={classes.header} variant="display3">
                Startup
              </Typography>
              <Typography className={classes.body} variant="headline">
                Do you have a great idea and want to launch your own tech
                service on the web, mobile application or both, but might not
                know where to start? A fresh build might be the solution. Using
                modern frameworks such as React or Angular can help speed up the
                development process for your Web App. Using Android Studio a new
                Android Application can also be built from the ground up to do
                exactyl as you envision.
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
                <Hidden smDown>
                  <Grid item md={2} />
                </Hidden>
                <Grid item md={2} xs={6}>
                  <Card>
                    <CardImage src={REACT} />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        React
                      </Typography>
                      <Typography component="p">Shopify</Typography>
                    </CardContent>
                    <Divider />
                    <CardActions className={classes.actions}>
                      <a href="https://reactjs.org/">Check it out</a>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item md={2} xs={6}>
                  <Card>
                    <CardImage src={ANGULAR} />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        Angular
                      </Typography>
                      <Typography component="p">Shopify</Typography>
                    </CardContent>
                    <Divider />
                    <CardActions className={classes.actions}>
                      <a href="https://angular.io/">Check it out</a>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item md={2} xs={6}>
                  <Card>
                    <CardImage src={ANDROID} />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        Android
                      </Typography>
                      <Typography component="p">Shopify</Typography>
                    </CardContent>
                    <Divider />
                    <CardActions className={classes.actions}>
                      <a href="https://www.android.com/">Check it out</a>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item md={2} xs={6}>
                  <Card>
                    <CardImage src={FLUTTER} />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        Flutter
                      </Typography>
                      <Typography component="p">Shopify</Typography>
                    </CardContent>
                    <Divider />
                    <CardActions className={classes.actions}>
                      <a href="https://flutter.io/">Check it out</a>
                    </CardActions>
                  </Card>
                </Grid>
                <Hidden smDown>
                  <Grid item md={2} />
                </Hidden>
              </Grid>
            </div>
            <TextDiv style={{ marginBottom: 50 }}>
              <Dots />
              <Typography className={classes.header} variant="display3">
                Services
              </Typography>
              <Typography className={classes.body} variant="headline">
                If you already have a website or application, but are just
                looking for some new additions, this can be done as well. For
                example, local churches might look to update their website to
                support live streaming to broadcast Sunday service. They might
                also want to add a spot to accept donations through a credit
                card. These small imporvements are always possible.
              </Typography>
            </TextDiv>
          </div>
        </Fade>
      </BackDiv>
    );
  }
}

export default withStyles(styles)(Create);
