import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../assets/logo.png";
import { Alert, Collapse, IconButton, useMediaQuery } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../session/SessionContext";
import { Types } from "../session/SessionReducer";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import CloseIcon from "@mui/icons-material/Close";
import GppBadIcon from "@mui/icons-material/GppBad";
import { AUTH } from "../../helpers/Apiinstance";

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

const Img = styled("img")({
  margin: "auto",
  marginTop: "2rem",
  display: "block",
  maxWidth: "60%",
});

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

const validationSchema = yup.object({
  email: yup
    .string("Ingresa tu nombre de Usuario")
    .email("Tu nombre de usuario no es valido")
    .required("El usuario es requerido"),
  password: yup
    .string("Ingresa tu contraseña")
    .min(8, "Contraseña minima de 8 caracteres")
    .required("Contraseña requerida"),
});

export default function Login() {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const [, dispatch] = useContext(SessionContext);
  const [errors, setErrors] = useState("error");

  const sendData = async (values) => {
    try {
      const response = await AUTH.post(`/login`, values, {
        withCredentials: true,
      });
      if (response.status === 200) {
        dispatch({ type: Types.authLogin, payload: response.data });
        navigate("/");
      }
    } catch (error) {
      setFlag(true);
      setErrors(error.response.data);
      console.log(error);
    }
  };
  const dataFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: sendData,
  });

  useEffect(() => {
    if (flag) {
      setTimeout(() => {
        setFlag(false);
      }, 2000);
    }
  });

  const movil = useMediaQuery("(max-width: 600px)");
  const tablet = useMediaQuery("(max-width:900px)");

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={2}
          md={2}
          sx={{
            backgroundSize: (t) =>
              movil && tablet ? "2rem" : tablet ? "80px" : "150px",
            backgroundColor: "rgba(0,0,0,0.85)",
            backgroundPosition: "50% 3%",
          }}
        >
          <Link onClick={(e) => navigate("/")}>
            <Img
              alt="Texin S.A de C.V"
              src={logo}
              sx={{
                [theme.breakpoints.down("sm")]: {
                  display: "none",
                },
              }}
            ></Img>
          </Link>
        </Grid>
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
            <Collapse in={flag}>
              <Alert
                severity="error"
                icon={<GppBadIcon fontSize="inherit"></GppBadIcon>}
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={(e) => setFlag(false)}
                  >
                    <CloseIcon />
                  </IconButton>
                }
              >
                {errors}
              </Alert>
            </Collapse>
            <Box
              component="form"
              noValidate
              onSubmit={dataFormik.handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="userName"
                label="Nombre de Usuario o correo electronico"
                name="email"
                autoComplete="email"
                autoFocus
                value={dataFormik.values.email}
                error={
                  dataFormik.touched.email && Boolean(dataFormik.errors.email)
                }
                onChange={dataFormik.handleChange}
                helperText={dataFormik.touched.email && dataFormik.errors.email}
                sx={{
                  borderColor: "gray",
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                value={dataFormik.values.password}
                error={
                  dataFormik.touched.password &&
                  Boolean(dataFormik.errors.password)
                }
                onChange={dataFormik.handleChange}
                helperText={
                  dataFormik.touched.password && dataFormik.errors.password
                }
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
                  <ThemeProvider theme={theme}>
                    <Button
                      size="large"
                      sx={{
                        textTransform: "none",
                      }}
                      onClick={(e) => navigate("/NewTicket")}
                    >
                      Nuevo Ticket
                    </Button>
                  </ThemeProvider>
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
