import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { MyColors } from "../../theme/colors";
import { Email } from "../../config";
import { ResumeLink } from "../../config";

const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  wrapper: {
    textAlign: "center"
  },
  buttonRow: {
    display: "flex",
    marginTop: 48
  },
  buttonBlock: {
    flexGrow: 1,
    textAlign: "center"
  },
  button: {
    color: MyColors.white,
    width: 100
  }
});

function Contact() {
  const classes = useStyles();

  return (
    <div id="contact" className={classes.root}>
      <div className={classes.wrapper}>
        <Typography variant="h2" color="secondary">
          Contact
        </Typography>
        <Typography variant="body1">
          Hey! If you want to get to know me more, feel free to send an email.
        </Typography>
        <div className={classes.buttonRow}>
          <div className={classes.buttonBlock}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              component="a"
              href={"mailto:" + Email}
            >
              Email
            </Button>
          </div>
          <div className={classes.buttonBlock}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              component="a"
              href={ResumeLink}
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
