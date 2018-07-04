import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../config';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex'
  }
});

class Create extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
      <h1>Lets make some shit</h1>
      </div>
    );
  }
}

export default withStyles(styles)(Create);
