import { AppBar, Box, createTheme, ThemeProvider, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import Auth from './Auth'
import logo from '../../assets/logo.png'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});



const NavBar = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
      <AppBar position="static">
        <Toolbar sx={{
          display:"flex",
          alignItems:"center",
          justifyContent: "space-between"
        }}>
          <Link to="/">
            <img src={logo} alt="Texin" className="logo"></img>
          </Link>
          
          <Auth></Auth>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  )
}

export default NavBar