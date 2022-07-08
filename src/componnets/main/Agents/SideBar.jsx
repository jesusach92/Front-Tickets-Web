import React from "react";
import {
  Box,
  createTheme,
  Grid,
  Stack,
  ThemeProvider,
  Tooltip,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SettingsIcon from "@mui/icons-material/Settings";
import { grey } from "@mui/material/colors";
import { Link, NavLink } from "react-router-dom";

const theme = createTheme({
  palette: {
    info: {
      main: grey["A100"],
    },
  },
});

const activeStyle = {
  color: "#fa5d02",
  textDecoration: "underline",
};

const SideBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
      position={"fixed"}
        sx={{
          [theme.breakpoints.down("lg")]: { height: "auto" },
          height: "100%",
          minHeight: "100vh",
          backgroundColor: "rgba(1,1,1,0.9)",
          
        }}
      >
        <Grid
          container
          direction={{ sm: "column" }}
          alignItems="center"
          justifyContent={"space-between"}

          sx={{
            [theme.breakpoints.down("lg")]: { height: "auto" },
            minHeight: "100vh",  
        }}
        >
          <Grid item>
            <Grid
              container
              justifyContent={"center"}
              textAlign="center"
              py={7}
              direction={{ xl: "column" }}
            >
              <Grid item py={2}>
                <Tooltip
                  title="Bandeja de Entrada"
                  enterDelay={1000}
                  leaveDelay={200}
                >
                  <NavLink
                    to="/Dashboard/Inbox"
                    style={({ isActive }) =>
                      isActive ? activeStyle : { color: "#f5f5f5" }
                    }
                  >
                    <InboxIcon></InboxIcon>
                  </NavLink>
                </Tooltip>
              </Grid>
              <Grid item py={2}>
                <NavLink
                  to="/Dashboard/Users"
                  style={({ isActive }) =>
                    isActive ? activeStyle : { color: "#f5f5f5" }
                  }
                >
                  <Tooltip title="Usuarios" enterDelay={1000} leaveDelay={200}>
                    <PeopleAltIcon></PeopleAltIcon>
                  </Tooltip>
                </NavLink>
              </Grid>
              <Grid item py={2}>
                <NavLink
                  to="/Dashboard/Stats"
                  style={({ isActive }) =>
                    isActive ? activeStyle : { color: "#f5f5f5" }
                  }
                >
                  <Tooltip
                    title="Estadisticas"
                    enterDelay={1000}
                    leaveDelay={200}
                  >
                    <QueryStatsIcon></QueryStatsIcon>
                  </Tooltip>
                </NavLink>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justifyContent={"center"} py={3}>
              <Grid item>
                <NavLink
                  to="/Dashboard/Config"
                  style={({ isActive }) =>
                    isActive ? activeStyle : { color: "#f5f5f5" }
                  }
                >
                  <Tooltip
                    title="Configuracion"
                    enterDelay={1000}
                    leaveDelay={200}
                  >
                    <SettingsIcon fontSize="large"></SettingsIcon>
                  </Tooltip>
                </NavLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default SideBar;
