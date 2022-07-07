import { Box, Grid } from '@mui/material'
import React from 'react'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import Section from './Section'


const Stats = () => {
  return (
    <Box>
    <Grid container columns={{xs:12,xl:36}}>
        <Grid item xs={12} xl={1} ><SideBar></SideBar></Grid>
        <Grid item xs={12} xl={35}>
        <Grid container>
            <Grid item xl={12}><NavBar></NavBar></Grid>
            <Grid item xl={12} flexGrow={1}>Stats</Grid>
            </Grid>
           
        </Grid>
    </Grid>
    </Box>
  )
}

export default Stats