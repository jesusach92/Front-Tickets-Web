import { Box, createTheme, Divider, Grid, Tab, Tabs, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import InboxIcon from "@mui/icons-material/Inbox";

const TabPanel =(props)=>{
    const { value, index, ...other } = props;
    return(
        <Box sx={{height:"100%"}}>
            <Grid container direction={"column"} sx={{height:"100%"}}>
                <Grid item>Hola</Grid>
                <Grid item flexGrow={1}>
                        Hola 2
                </Grid>
            </Grid>
        </Box>
        
    )
}
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

const Inbox = () => {
const [component, setComponent] = useState("index")
const handleChange = (event, newValue) => {
    setComponent(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fa5d02",
      },
      error: {
        main: "#FF3202",
      },
    },
  });
  return (
    <Box>
        <ThemeProvider theme={theme}>
      <Grid container columns={{ xs: 12, xl: 36 }}>
        <Grid item xs={12} xl={1}>
          <SideBar></SideBar>
        </Grid>
        <Grid item xs={12} xl={35}>
          <Grid container direction={"column"} sx={{ height: "100%" }}>
            <Grid item>
              <NavBar></NavBar>
            </Grid>
            <Grid item flexGrow={1}>
              <Grid container flexGrow={1} sx={{ height: "100%" }} columns={24}>
                <Grid
                xl={3}
                  item
                  
                  sx={{
                    borderRight: "1px solid rgba(1,1,1,0.1)",
                  }}
                >
                  <Tabs orientation="vertical"
                  value={component}
                  onChange={handleChange}
                  >
                    <Tab icon={<InboxIcon />} label="Bandeja de Entrada" sx={{paddingTop:4}}></Tab>
                    <Divider></Divider>
                    <Tab label="Tickets Abiertos" ></Tab>
                    <Tab label="Tickets Cerrados" ></Tab>
                    <Tab label="Recientes Actualizaciones" ></Tab>
                    <Divider></Divider>
                    <Tab label="Solicitudes de Reapertura" ></Tab>
                  </Tabs>
                </Grid>
                <Grid item xl={21} sx={{height:"100%"}}>
                    <TabPanel></TabPanel>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </ThemeProvider>
    </Box>
  );
};

export default Inbox;
