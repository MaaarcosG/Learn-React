import { createTheme } from "@mui/material";
import { lightGreen } from "@mui/material/colors";

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: "#598234",
    },
    secondary: {
      main: "#AEBD38",
    },
    error: {
      // main: red.A400,
      main: "#505160",
      green: lightGreen[700]
    },
  },
});
