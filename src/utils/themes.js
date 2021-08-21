import { createTheme } from "@material-ui/core/styles";

export const defaultTheme = createTheme({
  typography: {
    fontFamily: ["Roboto Slab", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#b71c1c",
    },
    secondary: {
      main: "#212121",
    },
    info: {
      main: "#0277bd",
    },
    success: {
      main: "#4caf50",
    },
    warning: {
      main: "#ffca28",
    },
    error: {
      main: "#bf360c",
    },
  },
});
