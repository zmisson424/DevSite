import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { MyColors } from "../../theme/colors";
import { Email } from "../../config";
import { ResumeLink } from "../../config";

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h2" color="secondary">
          Contact
        </Typography>
        <Typography variant="body1">
          Hey! If you want to get to know me more, feel free to send an email.
        </Typography>
        <Box
          sx={{
            display: "flex",
            marginTop: "48px",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "center",
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{
                color: MyColors.background,
                width: "100px",
              }}
              component="a"
              href={"mailto:" + Email}
            >
              Email
            </Button>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "center",
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{
                color: MyColors.background,
                width: "100px",
              }}
              component="a"
              href={ResumeLink}
            >
              Resume
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
