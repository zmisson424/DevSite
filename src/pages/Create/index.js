import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../config';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import HEADER from './components/header.jpg';
import SMALL_BUSINESS from './components/small-business.jpg';
import STARTUP from './components/startup.jpg';
import SERVICES from './components/services.jpg';

const HeaderImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const CenterDiv = styled.div`
  width: 100%;
  text-align: center;
`;

const TextDiv = styled.div`
  padding-left: 150px;
  padding-right: 150px;
  padding-top: 15px;
`;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  header: {
    color: colors.primary
  },
  body: {
    marginBottom: 50
  }
});

class Create extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <CenterDiv>
          <HeaderImg src={HEADER} />
        </CenterDiv>
        <TextDiv>
          <Typography className={classes.header} variant="display2">
            Where to start?
          </Typography>
          <Typography className={classes.body} variant="display1">
            There are lots of different development techniques that will create
            the perfect setup for you company or business.
          </Typography>
        </TextDiv>
        <CenterDiv>
          <HeaderImg src={SMALL_BUSINESS} />
        </CenterDiv>
        <TextDiv>
          <Typography className={classes.header} variant="display2">
            Small Business
          </Typography>
          <Typography className={classes.body} variant="display1">
            For small business trying to make a space for themselves in the
            world, it can be best to use Shopify or Squarespace. Embark can help
            launch and create a site that perfectly matches your vision. Then it
            will be easy for you to maintain and update your site with out the
            need of a developer. Simple and intuitive.
          </Typography>
        </TextDiv>
        <CenterDiv>
          <HeaderImg src={STARTUP} />
        </CenterDiv>
        <TextDiv>
          <Typography className={classes.header} variant="display2">
            Startup
          </Typography>
          <Typography className={classes.body} variant="display1">
            Do you have a great idea and want to launch your own tech service on
            the web, mobile application or both, but might not know where to
            start? A fresh build might be the solution. Using modern frameworks
            such as React or Angular can help speed up the development process
            for your Web App. Using Android Studio a new Android Application can
            also be built from the ground up to do exactyl as you envision.
          </Typography>
        </TextDiv>
        <CenterDiv>
          <HeaderImg src={SERVICES} />
        </CenterDiv>
        <TextDiv>
          <Typography className={classes.header} variant="display3">
            Services
          </Typography>
          <Typography className={classes.body} variant="display1">
          If you already have a websiter or application, but are just looking
          for some new additions, this can be done as well. For example, local
          churches might look to update their website to support live
          streaming to broadcast Sunday service. They might also want to add a
          spot to accept donations through a credit card. These small
          imporvements are always possible.
          </Typography>
        </TextDiv>
      </div>
    );
  }
}

export default withStyles(styles)(Create);
