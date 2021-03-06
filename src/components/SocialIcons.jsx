import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CSSTransition } from "react-transition-group";
import Tooltip from "@material-ui/core/Tooltip";
import GithubIcon from "../assets/images/github-light.png";
import CodepenIcon from "../assets/images/codepen-light.png";
import StackOverflowIcon from "../assets/images/stackoverflow-light.png";
import LinkedInIcon from "../assets/images/linkedin-light.png";
import { SocialLinks } from "../config";

import "./styles.css";

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    bottom: 30,
    right: 30,
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bottom: 0,
      right: 0
    }
  },
  iconWrapper: {
    padding: 12,
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      padding: 24
    }
  },
  icon: {
    width: 24,
    height: 24
  }
}));

function SocialIcons({ text }) {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClick = type => {
    var url;
    switch (type) {
      case "github":
        url = SocialLinks.github;
        break;
      case "stackoverflow":
        url = SocialLinks.stackoverflow;
        break;
      case "codepen":
        url = SocialLinks.codepen;
        break;
      case "linkedin":
        url = SocialLinks.linkedin;
        break;
      default:
        break;
    }

    if (url) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  };

  return (
    <CSSTransition in={show} timeout={1500} classNames="slide">
      <div className={classes.root}>
        <div
          className={classes.iconWrapper}
          onClick={() => handleClick("github")}
        >
          <Tooltip title="Github" placement="left-start">
            <img className={classes.icon} alt="Github" src={GithubIcon} />
          </Tooltip>
        </div>

        <div
          className={classes.iconWrapper}
          onClick={() => handleClick("stackoverflow")}
        >
          <Tooltip title="StackOverflow" placement="left-start">
            <img
              className={classes.icon}
              alt="StackOverflow"
              src={StackOverflowIcon}
            />
          </Tooltip>
        </div>
        <div
          className={classes.iconWrapper}
          onClick={() => handleClick("codepen")}
        >
          <Tooltip title="CodePen" placement="left-start">
            <img className={classes.icon} alt="CodePen" src={CodepenIcon} />
          </Tooltip>
        </div>
        <div
          className={classes.iconWrapper}
          onClick={() => handleClick("linkedin")}
        >
          <Tooltip title="LinkedIn" placement="left-start">
            <img className={classes.icon} alt="LinkedIn" src={LinkedInIcon} />
          </Tooltip>
        </div>
      </div>
    </CSSTransition>
  );
}

export default SocialIcons;
