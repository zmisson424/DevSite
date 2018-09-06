import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../../config';

import { Typography, Grow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import BackgroundImage from './android_background.jpg';

const BackDiv = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${BackgroundImage});
  background-size: cover;
  width: 100%;
  height: 100%;
  position: fixed;

  @media (max-width: 1100px) {
    top: 0;
    left: 0;
    background-position: 50% 50%;
  }
`;

const CenterDiv = styled.div`
  width: 100%;
  padding-right: 245px;
  text-align: center;
  position: absolute;
  top: 35%;

  @media (max-width: 1100px) {
    top: 30%;
    padding-right: 0px;
  }
`;

const HeaderH1 = styled.div`
  font-size: 4em;
  color: ${colors.secondary};

  @media (max-width: 1100px) {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 3em;
  }
`;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  text: {
    color: colors.white,
    fontSize: 25,
    paddingRight: 10,
    paddingLeft: 10
  }
});

class SlideTwo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <BackDiv>
        <Grow in={true} timeout={1500}>
          <CenterDiv>
            <HeaderH1>Design for Mobile Applications or the Web</HeaderH1>
            <Typography className={classes.text}>
              Develop apps for Android or start an Angular or React project
              today.
            </Typography>
          </CenterDiv>
        </Grow>
      </BackDiv>
    );
  }
}

export default withStyles(styles)(SlideTwo);
