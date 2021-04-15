import { createMuiTheme } from "@material-ui/core";
// import indigo from '@material-ui/core/colors/indigo'

// const darkIndigo = indigo[700]

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Open Sans"', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      // could customize the h1 variant as well
    }
  },
  palette: {
    // secondary: {
    //   main: darkIndigo
    // }
  },
  spacing: 10,
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '30'
      }
    }
  }

});
