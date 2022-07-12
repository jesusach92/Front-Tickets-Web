import { Box, createTheme, Divider, Grid, Tab, Tabs, ThemeProvider, Typography } from "@mui/material";
import React, { useState } from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import InboxIcon from "@mui/icons-material/Inbox";
import Loading from "../../../../helpers/Loading";
const RequestTicket = React.lazy(()=>import("./Tickets/RequestTicket"))
const TableTicket = React.lazy(()=>import("./Tickets/TableTicket"))

const TabPanel =({component})=>{
    return(
        <Box sx={{height:"100%"}}>
            <Grid container direction={"column"} sx={{height:"100%"}}>
                <Grid item>
                    <Typography variant="h6" align="left" p={2}> 
                            {component.label}
                    </Typography> 
                </Grid>
                <Grid item flexGrow={1}>
                   {component.index === 4 ?(<React.Suspense fallback={<Loading></Loading>}><RequestTicket></RequestTicket></React.Suspense>):(<React.Suspense fallback={<Loading></Loading>}><TableTicket></TableTicket></React.Suspense>)}
                </Grid>
            </Grid>
        </Box>
        
    )
}

  

const Inbox = () => {
const [component, setComponent] = useState({value:0, index:0, label:"Bandeja de Entrada"})


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
                  value={component.value}
                  onChange={(e,newValue)=>{setComponent({value:newValue, index: e.target.tabIndex, label:e.target.ariaLabel})}}
                  >
                    <Tab icon={<InboxIcon />} label="Bandeja de Entrada" aria-label="Bandeja de Entrada" sx={{paddingTop:4}} tabIndex={0}></Tab>
                    <Divider></Divider>
                    <Tab  label="Tickets Abiertos" aria-label="Tickets Abiertos" tabIndex={1}></Tab>
                    <Tab label="Tickets Cerrados"  tabIndex={2} aria-label="Tickets Cerrados"></Tab>
                    <Tab label="Recientes Actualizaciones" tabIndex={3} aria-label="Recientes Actualizaciones"></Tab>
                    <Divider></Divider>
                    <Tab label="Solicitudes de Reapertura"  tabIndex={4} aria-label="Solicitud de Reapertura"></Tab>
                  </Tabs>
                </Grid>
                <Grid item xl={21} sx={{height:"100%"}}>
                    <TabPanel component={component}></TabPanel>
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
