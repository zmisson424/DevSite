import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../config';

import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Grid,
  Divider,
  Grow
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import HTML5 from './components/html5.png';
import REACT from './components/react.png';
import ANGULAR from './components/angular.png';
import ANDROID from './components/android.png';
import FLUTTER from './components/flutter.png';
import FIREBASE from './components/firebase.png';
import GOOGLE from './components/google.jpg';

const BackDiv = styled.div`
  background: ${colors.background};
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const SectionHeader = styled.h2`
  color: ${colors.primaryLight};
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
  }
});

class Experience extends Component {
  render() {
    const { classes } = this.props;
    return (
      <BackDiv>
        <SectionHeader>Web</SectionHeader>
        <Grid container spacing={16}>
          <Grid item md={2}>
            <Grow in={true}>
              <Card>
                <CardImage src={HTML5} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    HTML 5
                  </Typography>
                  <Typography component="p">
                    Stuff about HTML 5 goes here.
                  </Typography>
                </CardContent>
                <Divider />
                <CardActions className={classes.actions}>
                  <a href="#">Learn More</a>
                </CardActions>
              </Card>
            </Grow>
          </Grid>
          <Grid item md={2}>
            <Grow in={true} timeout={1500}>
              <Card>
                <CardImage src={REACT} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    React
                  </Typography>
                  <Typography component="p">
                    Yatta Yatta Yatte React!
                  </Typography>
                </CardContent>
                <Divider />
                <CardActions className={classes.actions}>
                  <a href="#">Learn More</a>
                </CardActions>
              </Card>
            </Grow>
          </Grid>
          <Grid item md={2}>
            <Grow in={true} timeout={3000}>
              <Card>
                <CardImage src={ANGULAR} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    Angular
                  </Typography>
                  <Typography component="p">Stuff About Angular</Typography>
                </CardContent>
                <Divider />
                <CardActions className={classes.actions}>
                  <a href="#">Learn More</a>
                </CardActions>
              </Card>
            </Grow>
          </Grid>
        </Grid>

        <SectionHeader>Apps</SectionHeader>
        <Grid container spacing={16}>
          <Grid item md={2}>
            <Grow in={true}>
              <Card>
                <CardImage src={ANDROID} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    Android
                  </Typography>
                  <Typography component="p">Good old Android</Typography>
                </CardContent>
                <Divider />
                <CardActions className={classes.actions}>
                  <a href="#">Learn More</a>
                </CardActions>
              </Card>
            </Grow>
          </Grid>
          <Grid item md={2}>
            <Grow in={true}>
              <Card>
                <CardImage src={FLUTTER} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    Flutter
                  </Typography>
                  <Typography component="p">
                    Build for Android and iOS together
                  </Typography>
                </CardContent>
                <Divider />
                <CardActions className={classes.actions}>
                  <a href="#">Learn More</a>
                </CardActions>
              </Card>
            </Grow>
          </Grid>
        </Grid>

        <SectionHeader>Services</SectionHeader>
        <Grid container spacing={16}>
          <Grid item md={2}>
            <Grow in={true}>
              <Card>
                <CardImage src={FIREBASE} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    Firebase
                  </Typography>
                  <Typography component="p">The best.</Typography>
                </CardContent>
                <Divider />
                <CardActions className={classes.actions}>
                  <a href="#">Learn More</a>
                </CardActions>
              </Card>
            </Grow>
          </Grid>
          <Grid item md={2}>
            <Grow in={true}>
              <Card>
                <CardImage src={GOOGLE} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    Google Cloud
                  </Typography>
                  <Typography component="p">The best.</Typography>
                </CardContent>
                <Divider />
                <CardActions className={classes.actions}>
                  <a href="#">Learn More</a>
                </CardActions>
              </Card>
            </Grow>
          </Grid>
          <Grid item md={2}>
            <Grow in={true}>
              <Card>
                <CardImage src={HTML5} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    AWS
                  </Typography>
                  <Typography component="p">The best.</Typography>
                </CardContent>
                <Divider />
                <CardActions className={classes.actions}>
                  <a href="#">Learn More</a>
                </CardActions>
              </Card>
            </Grow>
          </Grid>
          <Grid item md={2}>
            <Grow in={true}>
              <Card>
                <CardImage src={HTML5} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    MongoDB
                  </Typography>
                  <Typography component="p">The best.</Typography>
                </CardContent>
                <Divider />
                <CardActions className={classes.actions}>
                  <a href="#">Learn More</a>
                </CardActions>
              </Card>
            </Grow>
          </Grid>
        </Grid>

        <SectionHeader>Design</SectionHeader>
        <Grid container spacing={16}>
          <Grid item md={2}>
            <Grow in={true}>
              <Card>
                <CardImage src={HTML5} />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    HTML 5
                  </Typography>
                  <Typography component="p">
                    Stuff about HTML 5 goes here.
                  </Typography>
                </CardContent>
                <Divider />
                <CardActions className={classes.actions}>
                  <a href="#">Learn More</a>
                </CardActions>
              </Card>
            </Grow>
          </Grid>
        </Grid>
      </BackDiv>
    );
  }
}

export default withStyles(styles)(Experience);
