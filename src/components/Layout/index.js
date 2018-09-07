import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../config';

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  Hidden,
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from '@material-ui/core';
import {
  Dashboard as DashIcon,
  CloudUpload,
  Assignment,
  Menu as MenuIcon,
  Help as HelpIcon
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import { Home, Create, Develop, Contact } from '../../pages';
import LOGO from './components/embarklogo.png';
import GITHUB from './components/github.png';
import STACKOVERFLOW from './components/stackoverflow.png';
import GITLAB from './components/gitlab.png';

const drawerWidth = 245;

const LogoImg = styled.img`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 25px;
`;

const A = styled.a`
  display: inline-block;
  width: 100%;
`;

const SocialImg = styled.img`
  width: 85%;
`;

const SocialBar = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1
  },
  drawerPaper: {
    position: 'fixed',
    width: drawerWidth,
    backgroundColor: colors.primaryDark
  },
  content: {
    backgroundColor: '#FAFAFA',
    position: 'relative',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      float: 'right',
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  avatar: {
    height: 200,
    width: 200,
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: 25,
    color: colors.secondary
  },
  item: {
    color: '#ffffff'
  },
  appBar: {
    position: 'absolute',
    backgroundColor: colors.primaryDark
  }
});

class Layout extends Component {
  state = {
    pageNumber: 1,
    mobileOpen: false
  };

  changePageNumber = number => {
    this.setState({
      pageNumber: number
    });
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes } = this.props;
    const pageNumber = this.state.pageNumber;

    return (
      <div className={classes.root}>
        <Hidden smDown implementation="css">
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
              <LogoImg src={LOGO} />
              <Divider style={{ marginTop: 50, marginBottom: 20 }} />
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
            <Divider style={{ marginTop: 25 }} />
            <div style={{ position: 'absolute', bottom: 0 }}>
              <SocialBar>
                <A href="https://www.github.com/zmisson424">
                  <SocialImg src={GITHUB} alt="Github" />
                </A>
                <A href="https://stackoverflow.com/users/4560040/zach-misson?tab=profile">
                  <SocialImg src={STACKOVERFLOW} alt="Stackoverflow" />
                </A>
                <A href="https://gitlab.com/zmisson424">
                  <SocialImg src={GITLAB} alt="Gitlab" />
                </A>
              </SocialBar>
            </div>
          </Drawer>
        </Hidden>
        <Hidden mdUp>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                Embark Developing
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="temporary"
            classes={{
              paper: classes.drawerPaper
            }}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
          >
            <div
              style={{
                marginBottom: 10
              }}
            >
              <LogoImg src={LOGO} />
              <Divider style={{ marginTop: 50, marginBottom: 20 }} />
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
            <Divider style={{ marginTop: 25 }} />
            <div style={{ position: 'absolute', bottom: 0 }}>
              <SocialBar>
                <A href="https://www.github.com/zmisson424">
                  <SocialImg src={GITHUB} alt="Github" />
                </A>
                <A href="https://stackoverflow.com/users/4560040/zach-misson?tab=profile">
                  <SocialImg src={STACKOVERFLOW} alt="Stackoverflow" />
                </A>
                <A href="https://gitlab.com/zmisson424">
                  <SocialImg src={GITLAB} alt="Gitlab" />
                </A>
              </SocialBar>
            </div>
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          {pageNumber === 1 && <Home />}
          {pageNumber === 2 && <Create />}
          {pageNumber === 3 && <Develop />}
          {pageNumber === 4 && <Contact />}
        </main>
      </div>
    );
  }
}
export default withStyles(styles)(Layout);
