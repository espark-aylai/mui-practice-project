import { createTheme } from "@mui/material";
import { blue, grey, lime, red } from "@mui/material/colors";


export const theme = (mode) =>  createTheme({
  
  palette: {
    mode: mode,
    primary: {
      main: "#1760a5",
      light: "skyblue",
    },
    secondary: {
      main: "#15c630",
    },
    otherColor: {
      main: "#999",
    },
  
  },

  typography: {
    h4: {
      color: blue[900],
      marginBottom : 30
    },
    // fontFamily: ["Roboto", "sans-serif"]
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          marginTop: 20,
          variant: "contained",
           color: "primary"
        },
      },
    },
    
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 40,
          height: 40, 
          fontSize: "1rem", 
          color: blue[900],
          backgroundColor: lime[50],
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // backgroundColor: "#ebebf1",
          margin : 'normal',
          width : '100%',
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none", 
          },
    
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root  : {
            '& .MuiOutlinedInput-notchedOutline': {
                border : 'none'
            },
            backgroundColor: "#ebebf1",
            paddingTop: "12px",
            paddingBottom: "12px",
        }
       
        
      },
    },
  },
});


