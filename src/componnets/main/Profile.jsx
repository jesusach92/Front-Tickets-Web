import { Box, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { SessionContext } from '../session/SessionContext'
import Footer from './Footer'
import NavBar from './NavBar'
import Consumer from './Profiles/Consumer'

const Profile = () => {
  const [state,] = useContext(SessionContext)
  const {user} = state
  return (
    <Box>
    <Grid container direction={"column"} height="100vh" flexWrap={"nowrap"}>
      <Grid item>
        <NavBar />
      </Grid>
      <Grid item flexGrow={1} >
		{console.log(user)}
        <Consumer />
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  </Box>
  )
}

export default Profile