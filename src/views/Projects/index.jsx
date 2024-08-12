import React from "react";
import { Box, Hidden, Typography, Tooltip, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ReactIcon from "../../assets/images/react.svg";
import FlutterIcon from "../../assets/images/flutter.svg";
import ParseIcon from "../../assets/images/parse.svg";
import DigitalOceanIcon from "../../assets/images/digitalocean.svg";
import FirebaseIcon from "../../assets/images/firebase.svg";
import AwsIcon from "../../assets/images/aws.svg";
import SpeakEasy from "../../assets/images/speakeasy.png";
import Bluequeue from "../../assets/images/bluequeue.png";

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
        <Typography variant="h3" align="right">
          Havensight
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
              src={SpeakEasy}
              alt="SpeakEasy"
              style={{
                width: "550px",
                [theme.breakpoints.down("sm")]: {
                  width: "100%",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              width: "350px",
            }}
          >
            <Typography variant="subtitle2">
              TappShare is a modern solution to content distribution. Build and
              design campaigns and easily deliver them to your recicipients in
              the most appropriate place (WhatsApp, SMS, iMessage, Facebook
              Messenger, etc...).
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
              }}
              variant="h6"
            >
              Job
            </Typography>
            <Typography variant="subtitle2">
              I am the Senior Software Developer in charge of two websites, the
              backend, and an iOS and Android app. I am in charge of improving
              the platform and running the development team.
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
          Bizi
        </Typography>
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
            <Typography
              sx={{
                marginTop: "10px",
              }}
              variant="h6"
            >
              Job
            </Typography>
            <Typography variant="subtitle2">
              I was the Front End devloper for this startup. The app uses
              Flutter to quickly deploy to both iOS and Android. I have helped
              with Backend work as well using Express and Neo4J.
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

      <Box
        sx={{
          marginTop: "48px",
          [theme.breakpoints.down("sm")]: {
            marginTop: "24px",
          },
        }}
      >
        <Typography variant="h3" align="right">
          TappShare
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
            }}
          >
            <img
              src={SpeakEasy}
              alt="SpeakEasy"
              style={{
                width: "550px",
                [theme.breakpoints.down("sm")]: {
                  width: "100%",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              width: "350px",
            }}
          >
            <Typography variant="subtitle2">
              TappShare is a modern solution to content distribution. Build and
              design campaigns and easily deliver them to your recicipients in
              the most appropriate place (WhatsApp, SMS, iMessage, Facebook
              Messenger, etc...).
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
              }}
              variant="h6"
            >
              Job
            </Typography>
            <Typography variant="subtitle2">
              I am the Senior Software Developer in charge of two websites, the
              backend, and an iOS and Android app. I am in charge of improving
              the platform and running the development team.
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
            <Typography
              sx={{
                marginTop: "10px",
              }}
              variant="h6"
            >
              Job
            </Typography>
            <Typography variant="subtitle2">
              I was the Front End devloper for this startup. The app uses
              Flutter to quickly deploy to both iOS and Android. I have helped
              with Backend work as well using Express and Neo4J.
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
