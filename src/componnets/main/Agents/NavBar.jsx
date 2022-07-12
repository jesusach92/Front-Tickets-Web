import {
  AppBar,
  Badge,
  Box,
  Button,
  createTheme,
  IconButton,
  InputBase,
  Paper,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import React, { useContext } from "react";
import Auth from "../Auth";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { SessionContext } from "../../session/SessionContext";
import { Navigate } from "react-router-dom";
const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(1,1,1,0.2)",
    },
    success: {
      main: "#fa5d02",
    },
  },
});
const NavBar = () => {
    const [{user},] = useContext(SessionContext)
  return (
    user.fkRole !== 1 && user.fkRole !== undefined ? (<Box  
     sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar 
        position={"sticky"}
        top="0" 
        sx={{ justifyContent: "space-between" }}>
          <Toolbar>
            <Box 
            sx={{ flexGrow: 1 }}>
              <Button
                size="small"
                color="success"
                variant="contained"
                sx={{ textTransform: "none" }}
              >
                Nuevo
              </Button>
            </Box>
            <Paper component="form" sx={{ display: "flex" }}>
              <InputBase
              size="small"
                sx={{ ml: 1, flex: "1" }}
                placeholder="Necesito..."
                inputProps={{ "aria-label": "¿Como puedo ayudarte?" }}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            <Box px={3}>
            <IconButton size="large">
            <Badge badgeContent={4} color="success"><NotificationsIcon size="large"></NotificationsIcon></Badge></IconButton>
            </Box>
            <Auth></Auth>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>):(<Navigate to={"/"}></Navigate>)
    
  );
};

export default NavBar;
