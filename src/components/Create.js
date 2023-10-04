import { Button, Container, TextField, Typography, styled } from "@mui/material";
import React from "react";
import theme from './theme'

const Create = () => {
  const BlueButton = styled(Button)(({theme})=> ({
    backgroundColor: "skyblue" ,
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    '&:disabled': {
        backgroundColor : 'gray'
    }
  }));
  return (
    // <Container>
    //   <Typography variant="h6" component="h2" color="primary" gutterBottom>
    //     Create a new note
    //   </Typography>
    // </Container>
    // <h1>App</h1>
    <>
    <BlueButton>This is my button</BlueButton>
    <TextField label="Custom Input" variant="outlined" />
    </>
    
  );
};

export default Create;
