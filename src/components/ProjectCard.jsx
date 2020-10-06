import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { MyColors } from "../theme/colors";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: MyColors.primary,
    padding: 16,
    borderRadius: 10
  },
  image: {
    borderRadius: 10,
    height: 200,
    width: "100%",
    objectFit: "cover",
    marginTop: 16,
    marginBottom: 16
  },
  soon: {
    marginTop: 16
  }
});

function ProjectCard({ title, description, imageUrl }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={2}>
      <Typography variant="h6">{title}</Typography>
      <img src={imageUrl} className={classes.image} />
      <Typography variant="caption">{description}</Typography>
      <div className={classes.soon}>
        <Typography variant="overline">
          Coming to iOS and Android soon
        </Typography>
      </div>
    </Paper>
  );
}

export default ProjectCard;
