import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,

} from '@mui/material';

function App() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Your information</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box mt={4}>
          <Typography variant="h4">Welcome to Your Profile</Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                //   
                  
                  type="password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl  fullWidth margin="normal">
                  <InputLabel>Gender</InputLabel>
                  <Select label="Gender">
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              
            </Grid>
            <Button variant="contained" color="primary">
              Update
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
