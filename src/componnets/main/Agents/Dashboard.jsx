import { Box, Grid } from '@mui/material'
import React from 'react'
import SideBar from './SideBar'
import Section from './Section'


const Dashboard = () => {
  return (
    <Box>
    <Grid container columns={{xs:12,xl:36}}>
        <Grid item xs={12} xl={1} ><SideBar></SideBar></Grid>
        <Grid item xs={12} xl={35}>
            <Section></Section>
        </Grid>
    </Grid>
    </Box>
  )
}

export default Dashboard