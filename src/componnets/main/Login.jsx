import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../assets/logo.png";
import { useMediaQuery } from "@mui/material";
import { useContext, useEffect } from "react";
import { SessionContext } from "../session/SessionContext";
import { Types } from "../session/SessionReducer";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.texin.com.mx/">
        Texin
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


const theme = createTheme({
  palette: {
    primary: {
      main: "#fa5d02",
    },
  },
});

export default function Login() {
	const [ , dispatch]= useContext(SessionContext)
	const user = JSON.parse(window.localStorage.getItem('session'))
	useEffect(() => {
	  if(user)
	  dispatch({type: Types.authLogin, payload: user})
	  return () => null
	}, [])

  const movil = useMediaQuery("(max-width: 600px)");
  const tablet = useMediaQuery("(max-width:900px)");
  const handleSubmit = (event) => {
    // event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={2}
          md={2}
          sx={{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: (t) =>
              movil && tablet ? "2rem" : tablet ? "80px" : "150px",
            backgroundColor: "black",
            backgroundPosition: "50% 3%",
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={10}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#fa5d02" }}>
              <PersonIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar Sesion
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="userName"
                label="Nombre de Usuario"
                name="userName"
                autoComplete="email"
                autoFocus
                sx={{
                  borderColor: "gray",
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="passwordEmploye"
                label="Contraseña"
                type="password"
                id="passwordEmploye"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" />}
                label="Recordarme"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  textTransform: "none",
                }}
              >
                Iniciar Sesion
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/" variant="body2">
                    Nuevo Ticket
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
