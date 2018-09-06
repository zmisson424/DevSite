import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../config';

import { Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const BackDiv = styled.div`
  background: ${colors.background};
  width: 100%;
  height: 100%;
  padding-left: 40px;
  padding-right: 40px;
  position: fixed;

  @media (max-width: 1100px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const CenterDiv = styled.div`
  width: 100%;
  padding-right: 245px;
  padding-left: 25%;
  position: absolute;
  top: 30%;

  @media (max-width: 1100px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  paper: {
    padding: 15,
    marginRight: 20,
    [theme.breakpoints.up('md')]: {
      width: '50%',
      marginRight: 0
    }
  },
  header: {
    color: colors.secondary
  },
  email: {
    color: colors.primary,
    marginTop: 15
  }
});

class Contact extends Component {
  render() {
    const { classes } = this.props;
    return (
      <BackDiv>
        <CenterDiv>
          <Paper className={classes.paper}>
            <div
              style={{
                textAlign: 'center'
              }}
            >
              <Typography variant="display3" className={classes.header}>
                Contact
              </Typography>
              <Typography variant="subheading">
                Feel free to contact with any questions, comments or concerns.
              </Typography>
              <Typography variant="subheading" className={classes.email}>
                zach@embarkdeveloping.com
              </Typography>
            </div>
          </Paper>
        </CenterDiv>
      </BackDiv>
    );
  }
}

export default withStyles(styles)(Contact);
