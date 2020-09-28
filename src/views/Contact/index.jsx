import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { MyColors } from "../../theme/colors";

const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  wrapper: {
    width: "75%"
  },
  header: {
    textAlign: "center",
    marginBottom: 48
  },
  summary: {
    color: MyColors.white
  }
});

function Contact() {
  const classes = useStyles();

  return (
    <div id="contact" className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <Typography variant="h3" color="secondary">
            Contact
          </Typography>
        </div>
        <Typography className={classes.summary}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
          pulvinar proin gravida hendrerit lectus a. Urna id volutpat lacus
          laoreet non curabitur gravida. Dapibus ultrices in iaculis nunc. Dui
          ut ornare lectus sit. Odio facilisis mauris sit amet massa. Diam quis
          enim lobortis scelerisque fermentum dui faucibus. Placerat duis
          ultricies lacus sed turpis tincidunt id aliquet. Ipsum consequat nisl
          vel pretium lectus quam id. In est ante in nibh.
        </Typography>
      </div>
    </div>
  );
}

export default Contact;
