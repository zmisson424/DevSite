import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ListItem from "../../components/ListItem";

function Skills() {
  const theme = useTheme();

  return (
    <Box
      id="expertise"
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        marginTop: "250px",
        marginBottom: "250px",
        [theme.breakpoints.down("sm")]: {
          alignItems: "center",
        },
      }}
    >
      <Typography variant="h2" color="secondary">
        Experience
      </Typography>
      <Box
        sx={{
          width: "500px",
          marginTop: "24px",
          [theme.breakpoints.down("sm")]: {
            width: "100%",
            marginTop: "10px",
          },
        }}
      >
        <Typography variant="body1">
          I am a Full Stack developer for both web and mobile interfaces. On
          web, I generally develop using an Angular or ReactJS frontend and
          combine this with a RESTful backend. I have built both Express and
          Ruby on Rails backends. As for mobile, I develop for cross platform
          use on Flutter and React Native. I also develop for native Android in
          both Kotlin and Java.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "48px",
          width: "100%",
          justifyContent: "center",
          [theme.breakpoints.down("sm")]: {
            width: "100%",
            flexWrap: "wrap",
          },
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            marginBottom: "24px",
            paddingLeft: "8px",
            paddingRight: "8px",
            [theme.breakpoints.down("sm")]: {
              width: "50%",
              padding: 0,
              textAlign: "center",
            },
          }}
        >
          <Typography
            sx={{
              [theme.breakpoints.down("sm")]: {
                textAlign: "left",
              },
            }}
            variant="h5"
          >
            Frameworks
          </Typography>
          <ListItem text="React" />
          <ListItem text="Angular" />
          <ListItem text="Flutter" />
          <ListItem text="Express" />
          <ListItem text="UI5" />
          <ListItem text="SAP MDK" />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            marginBottom: "24px",
            paddingLeft: "8px",
            paddingRight: "8px",
            [theme.breakpoints.down("sm")]: {
              width: "50%",
              padding: 0,
              textAlign: "center",
            },
          }}
        >
          <Typography
            sx={{
              [theme.breakpoints.down("sm")]: {
                textAlign: "left",
              },
            }}
            variant="h5"
          >
            Languages
          </Typography>
          <ListItem text="Javascript" />
          <ListItem text="Typescript" />
          <ListItem text="Python" />
          <ListItem text="Kotlin" />
          <ListItem text="Java" />
          <ListItem text="Dart" />
          <ListItem text="C++" />
          <ListItem text="HTML5" />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            marginBottom: "24px",
            paddingLeft: "8px",
            paddingRight: "8px",
            [theme.breakpoints.down("sm")]: {
              width: "40%",
              padding: 0,
              textAlign: "center",
            },
          }}
        >
          <Typography
            sx={{
              [theme.breakpoints.down("sm")]: {
                textAlign: "left",
              },
            }}
            variant="h5"
          >
            Services
          </Typography>
          <ListItem text="AWS" />
          <ListItem text="Firebase" />
          <ListItem text="Parse" />
          <ListItem text="DigitalOcean" />
          <ListItem text="Jira" />
          <ListItem text="Confluence" />
          <ListItem text="SAP" />
          <ListItem text="MySQL/NoSQL" />
          <ListItem text="Git" />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            marginBottom: "24px",
            paddingLeft: "8px",
            paddingRight: "8px",
            [theme.breakpoints.down("sm")]: {
              width: "40%",
              padding: 0,
              textAlign: "center",
            },
          }}
        >
          <Typography
            sx={{
              [theme.breakpoints.down("sm")]: {
                textAlign: "left",
              },
            }}
            variant="h5"
          >
            AI
          </Typography>
          <ListItem text="Googel AI Studio" />
          <ListItem text="Tensor Flow" />
          <ListItem text="Gemini & Gemini Flash" />
          <ListItem text="Vertex AI" />
          <ListItem text="Firebase ML" />
          <ListItem text="Chat GPT API" />
        </Box>
      </Box>
    </Box>
  );
}

export default Skills;
