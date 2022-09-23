import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#dbf6f0",
    },
    secondary: {
      main: "#f3f1eb",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
