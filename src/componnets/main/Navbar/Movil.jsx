import { AppBar, createTheme, Toolbar } from "@mui/material";
import { Box, ThemeProvider } from "@mui/system";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import Auth from "../Auth";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const Movil = () => {
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
  );
};

export default Movil;
