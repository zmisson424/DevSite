import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PropTypes from 'prop-types';

import { colors } from '../../config';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography
} from '@material-ui/core';
import {
  Dashboard as DashIcon,
  CloudUpload,
  Assignment,
  Help as HelpIcon,
  Settings as SetIcon
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 245;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    backgroundColor: colors.primaryDark
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#FAFAFA'
  },
  item: {
    color: '#ffffff'
  },
  bottomList: {
    position: 'absolute',
    bottom: 0
  }
});

class Layout extends Component {

  header = () => {
    return (
      <div
        style={{
          marginBottom: 10
        }}
      >
        <div
          style={{
            marginLeft: 23
          }}
        >
          <h2
            style={{
              color: '#ffffff',
              marginBottom: 0
            }}
          >
            Learning Express
          </h2>
          <Typography style={{ color: '#ffffff' }}>of Columbus</Typography>
        </div>
        <Divider style={{ marginTop: 25 }} />
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          {this.header()}

          <List>
            <ListItem button onClick={() => this.props.changePageNumber(1)}>
              <ListItemIcon
                classes={{
                  root: classes.item
                }}
              >
                <DashIcon />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                classes={{
                  primary: classes.item
                }}
              />
            </ListItem>
            <ListItem button onClick={() => this.props.changePageNumber(2)}>
              <ListItemIcon
                classes={{
                  root: classes.item
                }}
              >
                <Assignment />
              </ListItemIcon>
              <ListItemText
                primary="Reports"
                classes={{
                  primary: classes.item
                }}
              />
            </ListItem>
            <ListItem button onClick={() => this.props.changePageNumber(3)}>
              <ListItemIcon
                classes={{
                  root: classes.item
                }}
              >
                <CloudUpload />
              </ListItemIcon>
              <ListItemText
                primary="Upload"
                classes={{
                  primary: classes.item
                }}
              />
            </ListItem>
          </List>
          <List
            classes={{
              root: classes.bottomList
            }}
          >
            <ListItem button onClick={() => this.props.changePageNumber(4)}>
              <ListItemIcon
                classes={{
                  root: classes.item
                }}
              >
                <HelpIcon />
              </ListItemIcon>
              <ListItemText
                primary="Help"
                classes={{
                  primary: classes.item
                }}
              />
            </ListItem>
            <ListItem button onClick={() => this.props.changePageNumber(5)}>
              <ListItemIcon
                classes={{
                  root: classes.item
                }}
              >
                <SetIcon />
              </ListItemIcon>
              <ListItemText
                primary="Settings"
                classes={{
                  primary: classes.item
                }}
              />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          {this.props.pageNumber === 1 && <Dashboard />}
          {this.props.pageNumber === 2 && <Reports />}
          {this.props.pageNumber === 3 && <Upload />}
          {this.props.pageNumber === 4 && <Help />}
          {this.props.pageNumber === 5 && <Settings />}
        </main>
      </div>
    );
  }
}
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  withStyles(styles)(Layout)
);
