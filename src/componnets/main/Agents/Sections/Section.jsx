import { Box, Grid } from '@mui/material'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SideBar from '../SideBar'

const Section = () => {
  return (
    <Box>
    <Grid container columns={{xs:12,xl:36}}>
        <Grid item xs={12} xl={1} ><SideBar/></Grid>
        <Grid item xs={12} xl={35}>
           Stats
        </Grid>
    </Grid>
    </Box>
  )
}

export default Section