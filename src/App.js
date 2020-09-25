import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Home from "./views";
import { MyColors } from "./theme/colors";

const useStyles = makeStyles({
  root: {
    backgroundColor: MyColors.background,
    width: "100%",
    height: "100vh"
  }
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
