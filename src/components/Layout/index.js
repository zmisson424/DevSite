import React, { Component } from "react";
import { colors } from "../../config";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider
} from "@material-ui/core";
import {
  Dashboard as DashIcon,
  CloudUpload,
  Assignment,
  Help as HelpIcon
} from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

import { Home, Create, Develop, Contact } from "../../pages";

const drawerWidth = 245;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  appFrame: {
    height: '100%',
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
    backgroundColor: colors.primaryDark
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#FAFAFA"
  },
  avatar: {
    height: 200,
    width: 200,
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: 25,
    color: colors.secondary
  },
  item: {
    color: "#ffffff"
  }
});

class Layout extends Component {
  state = {
    pageNumber: 2
  };

  changePageNumber = number => {
    this.setState({
      pageNumber: number
    });
  };

  render() {
    const { classes } = this.props;
    const pageNumber = this.state.pageNumber;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div
              style={{
                marginBottom: 10
              }}
            >
              <Avatar alt="Embark Development" className={classes.avatar}>
                Embark Dev
              </Avatar>
              <Divider style={{ marginTop: 25 }} />
            </div>

            <List>
              <ListItem button onClick={() => this.changePageNumber(1)}>
                <ListItemIcon
                  classes={{
                    root: classes.item
                  }}
                >
                  <DashIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Home"
                  classes={{
                    primary: classes.item
                  }}
                />
              </ListItem>
              <ListItem button onClick={() => this.changePageNumber(2)}>
                <ListItemIcon
                  classes={{
                    root: classes.item
                  }}
                >
                  <Assignment />
                </ListItemIcon>
                <ListItemText
                  primary="Create"
                  classes={{
                    primary: classes.item
                  }}
                />
              </ListItem>
              <ListItem button onClick={() => this.changePageNumber(3)}>
                <ListItemIcon
                  classes={{
                    root: classes.item
                  }}
                >
                  <CloudUpload />
                </ListItemIcon>
                <ListItemText
                  primary="Develop"
                  classes={{
                    primary: classes.item
                  }}
                />
              </ListItem>
              <ListItem button onClick={() => this.changePageNumber(4)}>
                <ListItemIcon
                  classes={{
                    root: classes.item
                  }}
                >
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Contact"
                  classes={{
                    primary: classes.item
                  }}
                />
              </ListItem>
            </List>
          </Drawer>
          <main className={classes.content}>
            {pageNumber === 1 && <Home />}
            {pageNumber === 2 && <Create />}
            {pageNumber === 3 && <Develop />}
            {pageNumber === 4 && <Contact />}
          </main>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Layout);
