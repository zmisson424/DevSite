import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Box, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GithubIcon from "../assets/images/github-light.png";
import CodepenIcon from "../assets/images/codepen-light.png";
import StackOverflowIcon from "../assets/images/stackoverflow-light.png";
import LinkedInIcon from "../assets/images/linkedin-light.png";

import "./styles.css";

function SocialIcons({ text }) {
  const [show, setShow] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClick = (type) => {
    var url;
    switch (type) {
      case "github":
        url = "https://github.com/zmisson424";
        break;
      case "stackoverflow":
        url = "https://stackoverflow.com/users/4560040/zachery-misson";
        break;
      case "codepen":
        url = "https://codepen.io/zmisson424";
        break;
      case "linkedin":
        url = "https://www.linkedin.com/in/zachery-dev/";
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
      <Box
        sx={{
          position: "absolute",
          bottom: "30px",
          right: "30px",
          [theme.breakpoints.down("sm")]: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: 0,
            right: 0,
          },
        }}
      >
        <Box
          sx={{
            padding: "12px",
            cursor: "pointer",
            [theme.breakpoints.down("sm")]: {
              padding: "24px",
            },
          }}
          onClick={() => handleClick("github")}
        >
          <Tooltip title="Github" placement="left-start">
            <img
              style={{
                width: "24px",
                height: "24px",
              }}
              alt="Github"
              src={GithubIcon}
            />
          </Tooltip>
        </Box>

        <Box
          sx={{
            padding: "12px",
            cursor: "pointer",
            [theme.breakpoints.down("sm")]: {
              padding: "24px",
            },
          }}
          onClick={() => handleClick("stackoverflow")}
        >
          <Tooltip title="StackOverflow" placement="left-start">
            <img
              style={{
                width: "24px",
                height: "24px",
              }}
              alt="StackOverflow"
              src={StackOverflowIcon}
            />
          </Tooltip>
        </Box>
        <Box
          sx={{
            padding: "12px",
            cursor: "pointer",
            [theme.breakpoints.down("sm")]: {
              padding: "24px",
            },
          }}
          onClick={() => handleClick("codepen")}
        >
          <Tooltip title="CodePen" placement="left-start">
            <img
              style={{
                width: "24px",
                height: "24px",
              }}
              alt="CodePen"
              src={CodepenIcon}
            />
          </Tooltip>
        </Box>
        <Box
          sx={{
            padding: "12px",
            cursor: "pointer",
            [theme.breakpoints.down("sm")]: {
              padding: "24px",
            },
          }}
          onClick={() => handleClick("linkedin")}
        >
          <Tooltip title="LinkedIn" placement="left-start">
            <img
              style={{
                width: "24px",
                height: "24px",
              }}
              alt="LinkedIn"
              src={LinkedInIcon}
            />
          </Tooltip>
        </Box>
      </Box>
    </CSSTransition>
  );
}

export default SocialIcons;
