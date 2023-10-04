import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Box, Stack, ThemeProvider } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import Add from "../components/Add";
import { theme } from "../components/theme";

const Home = () => {

  const [mode, setMode] = useState("dark");

  return (
    <ThemeProvider theme={theme(mode)}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar mode = {mode} setMode ={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>

  );
};

export default Home;
