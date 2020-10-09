import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { MyColors } from "../theme/colors";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "transparent",
    padding: 16,
    borderRadius: 10,
    borderColor: MyColors.secondary,
    borderStyle: "solid",
    borderWidth: 0.4
  },
  image: {
    borderRadius: 4,
    height: 200,
    marginTop: 16,
    marginBottom: 16
  },
  soon: {
    marginTop: 16
  },
  imageWrapper: {
    width: "100%",
    textAlign: "center"
  }
});

function ProjectCard({ title, description, imageUrl }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6">{title}</Typography>
      <div className={classes.imageWrapper}>
        <img src={imageUrl} className={classes.image} />
      </div>
      <Typography variant="caption">{description}</Typography>
      <div className={classes.soon}>
        <Typography variant="overline">
          Coming to iOS and Android soon
        </Typography>
      </div>
    </div>
  );
}

export default ProjectCard;
