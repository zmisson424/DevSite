import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Hidden, Typography } from "@mui/material";
import ListItem from "../../components/ListItem";
import Photo from "../../assets/images/about.png";

function About() {
  const theme = useTheme();

  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
          alignItems: "center",
        },
      }}
    >
      <Typography variant="h2" color="secondary">
        About Me
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
        }}
      >
        <Hidden smDown>
          <Box
            sx={{
              width: "100%",
              flexGrow: 1,
              marginRight: "48px",
              [theme.breakpoints.down("sm")]: {
                marginRight: 0,
                marginTop: "24px",
                textAlign: "center",
              },
            }}
          >
            <Typography variant="h5" color="secondary">
              Fun Facts
            </Typography>
            <ListItem text="I am getting married on September 25, 2021" />
            <ListItem text="I have a puppy (her name is Eleanor) and a bunny (his name is Podrick)" />
            <ListItem text="I'm a big sports guy" />
            <ListItem text="I like to travel" />
          </Box>
        </Hidden>
        <Box
          sx={{
            maxWidth: "600px",
            [theme.breakpoints.down("sm")]: {
              marginLeft: 0,
              marginTop: "10px",
              textAlign: "center",
            },
          }}
        >
          <Typography variant="body1">
            I recievied my bachelors degree from The Ohio State University and
            then relocated to Chicago. I have been professionaly programming for
            six years and operating my own personal freelance agency for four
            years. I am currently employeed at SpeakEasy as the Senior Software
            Developer.
          </Typography>
        </Box>
        <Hidden mdUp>
          <Box
            sx={{
              width: "100%",
              flexGrow: 1,
              marginRight: "48px",
              [theme.breakpoints.down("sm")]: {
                marginRight: 0,
                marginTop: "24px",
                textAlign: "center",
              },
            }}
          >
            <Typography variant="h5" color="secondary">
              Fun Facts
            </Typography>
            <ListItem text="I am getting married on September 25, 2021" />
            <ListItem text="I have a puppy (her name is Eleanor) and a bunny (his name is Podrick)" />
            <ListItem text="I'm a big sports guy" />
            <ListItem text="I like to travel" />
          </Box>
        </Hidden>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "24px",
        }}
      >
        <img
          style={{
            width: "500px",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
          alt="Me"
          src={Photo}
        />
      </Box>
    </Box>
  );
}

export default About;
