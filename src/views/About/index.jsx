import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { MyColors } from "../../theme/colors";

const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    justifyContent: "center"
  },
  header: {
    marginBottom: 48
  },
  summary: {
    color: MyColors.white
  },
  section: {
    width: "75%",
    display: "flex",
    alignItems: "center"
  },
  image: {
    width: 200,
    height: 250,
    objectFit: "cover",
    borderRadius: 10,
    mixBlendMode: "multiply",
    "&:hover": {
      mixBlendMode: "normal"
    }
  },
  imageWrapper: {
    width: 200,
    height: 250,
    backgroundColor: MyColors.secondary,
    borderRadius: 10,
    boxShadow: `-10px 10px 10px  ${MyColors.primary}`
  },
  imageBox: {
    marginRight: 48
  }
});

function About() {
  const classes = useStyles();

  return (
    <div id="about" className={classes.root}>
      <Typography variant="h3" color="secondary" className={classes.header}>
        About
      </Typography>
      <div className={classes.section}>
        <div className={classes.imageBox}>
          <div className={classes.imageWrapper}>
            <img
              className={classes.image}
              src="https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/mw3sd1epiw7tsejmfqhg.jpg"
            />
          </div>
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

export default About;
