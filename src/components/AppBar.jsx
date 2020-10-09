import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { MyColors } from "../theme/colors";
import Embark from "../assets/images/embark.png";
import { ResumeLink } from "../config";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    backgroundColor: MyColors.background,
    width: "100%",
    height: 80,
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 48,
    paddingRight: 48,
    transition: "all 0.50s cubic-bezier(0.645, 0.045, 0.355, 1)",
    transform: "translateY(0)",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 16,
      paddingRight: 4
    }
  },
  rootHide: {
    position: "fixed",
    backgroundColor: MyColors.background,
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 48,
    paddingRight: 48,
    transition: "all 0.50s cubic-bezier(0.645, 0.045, 0.355, 1)",
    transform: "translateY(-80px)"
  },
  filler: {
    flexGrow: 1
  },
  action: {
    width: 125,
    textAlign: "center"
  },
  logo: {
    height: 40
  },
  button: {
    marginLeft: 16
  },
  menuIcon: {
    width: 36,
    height: 36
  },
  drawer: {
    maxWidth: 300,
    minWidth: 250,
    backgroundColor: MyColors.background,
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  drawerHeader: {
    height: 200
  },
  drawerButton: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  listText: {
    color: MyColors.secondary,
    textAlign: "center"
  }
}));

function AppBar() {
  const classes = useStyles();
  const [showAppBar, setShowAppBar] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    let previousScrollPosition = 0;

    document.querySelector("#app-root").addEventListener("scroll", () => {
      var position = document.querySelector("#app-root").scrollTop;
      if (position > previousScrollPosition) {
        setShowAppBar(false);
        previousScrollPosition = position;
      } else if (previousScrollPosition > position) {
        setShowAppBar(true);
        previousScrollPosition = position;
      }
    });
  }, []);

  return (
    <div className={showAppBar ? classes.root : classes.rootHide}>
      <Hidden smDown>
        <Link href="/">
          <img src={Embark} className={classes.logo} />
        </Link>
        <div className={classes.filler} />
        <div className={classes.action}>
          <Link
            href="#about"
            variant="body1"
            color="secondary"
            underline="none"
          >
            About
          </Link>
        </div>
        <div className={classes.action}>
          <Link
            href="#expertise"
            variant="body1"
            color="secondary"
            underline="none"
          >
            Experience
          </Link>
        </div>
        <div className={classes.action}>
          <Link
            href="#projects"
            variant="body1"
            color="secondary"
            underline="none"
          >
            Projects
          </Link>
        </div>
        <div className={classes.action}>
          <Link
            href="#contact"
            variant="body1"
            color="secondary"
            underline="none"
          >
            Contact
          </Link>
        </div>
        <div className={classes.button}>
          <Button
            variant="outlined"
            color="secondary"
            component="a"
            href={ResumeLink}
          >
            Resume
          </Button>
        </div>
      </Hidden>
      <Hidden mdUp>
        <Link href="/">
          <img src={Embark} className={classes.logo} />
        </Link>
        <div className={classes.filler} />
        <IconButton onClick={() => setDrawerOpen(true)}>
          <MenuIcon color="secondary" className={classes.menuIcon} />
        </IconButton>
      </Hidden>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <div className={classes.drawer}>
          <div className={classes.drawerHeader}></div>
          <List>
            <ListItem button component="a" key={"about"} href="#about">
              <ListItemText className={classes.listText} primary="About" />
            </ListItem>
            <ListItem button component="a" key={"expertise"} href="#expertise">
              <ListItemText className={classes.listText} primary="Experience" />
            </ListItem>
            <ListItem button component="a" key={"projects"} href="#projects">
              <ListItemText className={classes.listText} primary="Projects" />
            </ListItem>
            <ListItem button component="a" key={"contact"} href="#contact">
              <ListItemText className={classes.listText} primary="Contact" />
            </ListItem>
          </List>
          <div className={classes.drawerButton}>
            <Button
              variant="outlined"
              color="secondary"
              component="a"
              href={ResumeLink}
            >
              Resume
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default AppBar;
