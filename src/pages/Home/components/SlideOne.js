import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../../config';

import { Typography, Grow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import BackgroundImage from './computer_background.jpg';

const BackDiv = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${BackgroundImage});
  background-size: cover;
  width: 100%;
  height: 100%;
  position: fixed;
`;

const CenterDiv = styled.div`
  width: 100%;
  padding-right: 245px;
  text-align: center;
  position: absolute;
  top: 35%;
`;

const HeaderH1 = styled.div`
  font-size: 5em;
  color: ${colors.secondary};
`;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  text: {
    color: colors.white,
    fontSize: 25
  }
});

class SlideOne extends Component {
  render() {
    const { classes } = this.props;
    return (
      <BackDiv>
        <Grow in={true} timeout={1500}>
          <CenterDiv>
            <HeaderH1>Embark Developing</HeaderH1>
            <Typography className={classes.text}>
              A simple and rapid solution to get your project off the ground.
            </Typography>
          </CenterDiv>
        </Grow>
      </BackDiv>
    );
  }
}

export default withStyles(styles)(SlideOne);
