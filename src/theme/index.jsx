import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { MyColors } from "./colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: MyColors.primary
    },
    secondary: {
      main: MyColors.secondary
    },
    text: {
      primary: MyColors.white
    }
  },
  typography: {
    fontFamily: ["Lato"]
  },
  overrides: {
    MuiTypography: {
      h2: {}
    }
  }
});

export default responsiveFontSizes(theme);
