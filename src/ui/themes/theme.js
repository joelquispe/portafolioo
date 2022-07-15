import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#06113C"
    },
    secondary: {
      main: "#113A5D"
    }
  },
  shape: {
    borderRadius: 4
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          margin: 1
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#062743",
          color :"#F9F9F9"
        }
      },
      defaultProps: {
        elevation: 0
      }
    }
  },
  typography: {
    fontFamily: 'Helvetica Neue,Monospace, Arial',
  },
});

export default baseTheme;
