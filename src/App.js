import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Home from "./views";
import { MyColors } from "./theme/colors";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: MyColors.background,
          width: "100%",
          height: "100vh",
        }}
      >
        <Home />
      </Box>
    </ThemeProvider>
  );
}

export default App;
