import { createMuiTheme } from "@material-ui/core/styles";
import { MyColors } from "./colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: MyColors.primary
    },
    secondary: {
      main: MyColors.secondary
    }
  },
  typography: {
    fontFamily: ["Lato"]
  }
});

export default theme;
