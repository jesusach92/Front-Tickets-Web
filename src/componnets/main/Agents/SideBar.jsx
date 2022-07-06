import React from "react";
import {
  Box,
  createTheme,
  Grid,
  IconButton,
  Paper,
  Stack,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SettingsIcon from "@mui/icons-material/Settings";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
	info: {
	  main: grey["A100"],
	},
  },
});

const SideBar = () => {
  const navigate =useNavigate()
	return (
  <ThemeProvider theme={theme}>
	<Stack
	  direction={{sm:"column"}}
	  alignItems="center"
	  justifyContent={"space-between"}
	  sx={{ [theme.breakpoints.down("lg")]:{height:"auto"}, height: "100vh", backgroundColor: "rgba(1,1,1,0.9)" }}
	>
	  
		  <Grid container justifyContent={"center"} py={7}>
			<Grid item py={2}>
			  <IconButton onClick={e=>navigate("Inbox")} color="info">
				<InboxIcon></InboxIcon>
			  </IconButton>
			</Grid>
			<Grid item py={2}>
			  <IconButton color="info">
				<PeopleAltIcon></PeopleAltIcon>
			  </IconButton>
			</Grid>
			<Grid item py={2}>
			  <IconButton color="info">
				<QueryStatsIcon></QueryStatsIcon>
			  </IconButton>
			</Grid>
		  </Grid>
		  <Grid container justifyContent={"center"} py={3}>
			<Grid item>
			  <IconButton color="info">
				<SettingsIcon></SettingsIcon>
			  </IconButton>
			</Grid>
		  </Grid>
	</Stack>
	</ThemeProvider>
  );
};

export default SideBar;
