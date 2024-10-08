import React from "react";
import { Box, Hidden, Typography, Tooltip, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ReactIcon from "../../assets/images/react.svg";
import FlutterIcon from "../../assets/images/flutter.svg";
import ParseIcon from "../../assets/images/parse.svg";
import DigitalOceanIcon from "../../assets/images/digitalocean.svg";
import FirebaseIcon from "../../assets/images/firebase.svg";
import AwsIcon from "../../assets/images/aws.svg";
import SAPIcon from "../../assets/images/sap.svg";
import UI5Icon from "../../assets/images/ui5.svg";
import JavascriptIcon from "../../assets/images/javascript.svg";
import TypescriptIcon from "../../assets/images/typescript.svg";
import SpeakEasy from "../../assets/images/speakeasy.png";
import Bluequeue from "../../assets/images/bluequeue.png";
import HCGTemplate from "../../assets/images/hcg_template.png";
import Bizi from "../../assets/images/bizi.png";

function Projects() {
  const theme = useTheme();

  return (
    <Box
      id="projects"
      sx={{
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h2" color="secondary" align="center">
        Work and Projects
      </Typography>

      <Box
        sx={{
          marginTop: "48px",
          [theme.breakpoints.down("sm")]: {
            marginTop: "24px",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "right",
          }}
        >
          <Link
            href="https://www.havensightconsulting.com/"
            variant="h3"
            target="_blank"
            rel="noopener"
            color="inherit"
            underline="hover"
          >
            Havensight
          </Link>
        </Box>
        <Typography variant="body2" align="right">
          Technical Lead / Software Developer
        </Typography>
        <Box sx={{ width: "100%", textAlign: "right" }}>
          <Typography align="right" variant="caption" color="secondary">
            2021 - Present (Full Time)
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            marginTop: "24px",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
            },
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "center",
            }}
          >
            <img
              src={HCGTemplate}
              alt="Havensight Template"
              style={{
                height: "324px",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "350px",
              marginLeft: "24px",
            }}
          >
            <Typography variant="subtitle2">
              Havensight created the original SAP Mobile Platform, and today
              uses SAPUI5, HTML5 and the latest templates, tools and hardware to
              implement SAP native mobile solutions and solve the biggest
              operational challenge for the world’s largest companies.
            </Typography>
            <Box
              sx={{
                width: "100%",
                marginTop: "24px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Tooltip title="SAP">
                <img
                  src={SAPIcon}
                  alt="SAP"
                  style={{
                    height: "24px",
                    marginRight: "16px",
                  }}
                />
              </Tooltip>
              <Tooltip title="UI5">
                <img
                  src={UI5Icon}
                  alt="UI5"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "16px",
                  }}
                />
              </Tooltip>
              <Tooltip title="Javascript">
                <img
                  src={JavascriptIcon}
                  alt="Javascript"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "16px",
                  }}
                />
              </Tooltip>
              <Tooltip title="Typescript">
                <img
                  src={TypescriptIcon}
                  alt="Typescript"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "16px",
                  }}
                />
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "48px",
          [theme.breakpoints.down("sm")]: {
            marginTop: "24px",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Link
            href="https://getbizi.io/"
            variant="h3"
            target="_blank"
            rel="noopener"
            color="inherit"
            underline="hover"
          >
            Bizi
          </Link>
        </Box>
        <Typography variant="body2">Project Manager</Typography>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography align="right" variant="caption" color="secondary">
            2023 - Present (Part Time)
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            marginTop: "24px",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
            },
          }}
        >
          <Hidden mdUp>
            <Box
              sx={{
                flexGrow: 1,
                textAlign: "center",
              }}
            >
              <img
                src={Bizi}
                alt="Bizi"
                style={{
                  height: "300px",
                  [theme.breakpoints.down("sm")]: {
                    height: "250px",
                  },
                }}
              />
            </Box>
          </Hidden>
          <Box
            sx={{
              width: "350px",
            }}
          >
            <Typography variant="subtitle2">
              Bizi is a platform designed for the self employed. It allows users
              to easily create a website, market their services, and manage
              their analytics. The platform is designed to be simple and easy to
              use.
            </Typography>
            <Box
              sx={{
                width: "100%",
                marginTop: "24px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Tooltip title="React">
                <img
                  src={ReactIcon}
                  alt="React"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "16px",
                  }}
                />
              </Tooltip>
              <Tooltip title="Flutter">
                <img
                  src={FlutterIcon}
                  alt="Flutter"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "16px",
                  }}
                />
              </Tooltip>
              <Tooltip title="Firebase">
                <img
                  src={FirebaseIcon}
                  alt="Firebase"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "16px",
                  }}
                />
              </Tooltip>
              <Tooltip title="DigitalOcean">
                <img
                  src={DigitalOceanIcon}
                  alt="DigitalOcean"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "16px",
                  }}
                />
              </Tooltip>
            </Box>
          </Box>
          <Hidden smDown>
            <Box
              sx={{
                flexGrow: 1,
                textAlign: "center",
              }}
            >
              <img
                src={Bizi}
                alt="Bizi"
                style={{
                  height: "324px",
                  [theme.breakpoints.down("sm")]: {
                    height: "250px",
                  },
                }}
              />
            </Box>
          </Hidden>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "48px",
          [theme.breakpoints.down("sm")]: {
            marginTop: "24px",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "right",
          }}
        >
          <Link
            href="https://tappshare.io/"
            variant="h3"
            target="_blank"
            rel="noopener"
            color="inherit"
            underline="hover"
          >
            TappShare
          </Link>
        </Box>
        <Typography variant="body2" align="right">
          Full Stack Developer
        </Typography>
        <Box sx={{ width: "100%", textAlign: "right" }}>
          <Typography align="right" variant="caption" color="secondary">
            2018 - 2021 (Full Time)
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            marginTop: "24px",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
            },
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "center",
              display: {
                xl: "block",
                md: "block",
                lg: "block",
                sm: "none",
                xs: "none",
              },
            }}
          >
            <img
              src={SpeakEasy}
              alt="SpeakEasy"
              style={{
                width: "550px",
                [theme.breakpoints.down("md")]: {
                  width: "200px",
                  boxFit: "contain",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "center",
              display: {
                xl: "none",
                md: "none",
                lg: "none",
                sm: "block",
                xs: "block",
              },
            }}
          >
            <img
              src={SpeakEasy}
              alt="SpeakEasy"
              style={{
                width: "100%",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "350px",
              marginLeft: "24px",
            }}
          >
            <Typography variant="subtitle2">
              TappShare is a modern solution to content distribution. Build and
              design campaigns and easily deliver them to your recicipients in
              the most appropriate place (WhatsApp, SMS, iMessage, Facebook
              Messenger, etc...).
            </Typography>
            <Box
              sx={{
                width: "100%",
                marginTop: "24px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Tooltip title="React">
                <img
                  src={ReactIcon}
                  alt="React"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "16px",
                  }}
                />
              </Tooltip>
              <Tooltip title="Flutter">
                <img
                  src={FlutterIcon}
                  alt="Flutter"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "16px",
                  }}
                />
              </Tooltip>
              <Tooltip title="Parse">
                <img
                  src={ParseIcon}
                  alt="Parse"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "16px",
                  }}
                />
              </Tooltip>
              <Tooltip title="AWS">
                <img
                  src={AwsIcon}
                  alt="AWS"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "16px",
                  }}
                />
              </Tooltip>
              <Tooltip title="Firebase">
                <img
                  src={FirebaseIcon}
                  alt="Firebase"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "16px",
                  }}
                />
              </Tooltip>
              <Tooltip title="DigitalOcean">
                <img
                  src={DigitalOceanIcon}
                  alt="DigitalOcean"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "16px",
                  }}
                />
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "48px",
          [theme.breakpoints.down("sm")]: {
            marginTop: "24px",
          },
        }}
      >
        <Typography variant="h3" align="left">
          BlueQueue
        </Typography>
        <Typography variant="body2">Front End Developer (Mobile)</Typography>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography align="right" variant="caption" color="secondary">
            2019 - 2021 (Part Time)
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            marginTop: "24px",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
            },
          }}
        >
          <Hidden mdUp>
            <Box
              sx={{
                flexGrow: 1,
                textAlign: "center",
              }}
            >
              <img
                src={Bluequeue}
                alt="Bluequeue"
                style={{
                  height: "300px",
                  [theme.breakpoints.down("sm")]: {
                    height: "250px",
                  },
                }}
              />
            </Box>
          </Hidden>
          <Box
            sx={{
              width: "350px",
            }}
          >
            <Typography variant="subtitle2">
              Enhancing the consumer product. This application focuses on easily
              bringing consumer products, coupons, instructions, videos, reviews
              and more all in one social place.
            </Typography>
            <Box
              sx={{
                width: "100%",
                marginTop: "24px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Tooltip title="Flutter">
                <img
                  src={FlutterIcon}
                  alt="Flutter"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "16px",
                  }}
                />
              </Tooltip>
              <Tooltip title="Firebase">
                <img
                  src={FirebaseIcon}
                  alt="Firebase"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "16px",
                  }}
                />
              </Tooltip>
              <Tooltip title="DigitalOcean">
                <img
                  src={DigitalOceanIcon}
                  alt="DigitalOcean"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "16px",
                  }}
                />
              </Tooltip>
            </Box>
          </Box>
          <Hidden smDown>
            <Box
              sx={{
                flexGrow: 1,
                textAlign: "center",
              }}
            >
              <img
                src={Bluequeue}
                alt="Bluequeue"
                style={{
                  height: "300px",
                  [theme.breakpoints.down("sm")]: {
                    height: "250px",
                  },
                }}
              />
            </Box>
          </Hidden>
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;
