import { Container, createTheme, ThemeProvider} from '@mui/material'
import React from 'react'
import logo from "../../assets/logo.png"
import {Link} from "react-router-dom"

const themeDefault= createTheme()

const theme = createTheme({
    components:{
        MuiContainer:{
            styleOverrides:{
                root:{
                    height:'80px',
                    backgroundColor:`${themeDefault.palette.grey[600]}`,
                    display:'flex',
                    flexDirection:'center',
                    alignItems:'center',
                    justifyContent:'center'
                }
            }
        }
    }
})

const Footer = () => {
  
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth={'100%'}>
        <Link to="/">
        <img src={logo} alt="Texin" className='logo'/></Link>
    </Container>
    </ThemeProvider>
  )
}

export default Footer