import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Open Sans"', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      // could customize the h1 variant as well
    }
  },
  palette: {},
  spacing: 10
});
