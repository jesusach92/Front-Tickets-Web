import {
  Box,
  Button,
  createTheme,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useContext, useState } from "react";
import { SessionContext } from "../../session/SessionContext";

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

const Employes = () => {
  const [{ user }] = useContext(SessionContext);
  const [showPassword, setShowPassword] = useState({currentPassword:false,newPassword:false,passwordRepeat:false});
  const [data, setData] = useState("");
  const display = useMediaQuery(theme.breakpoints.down("lg"))

  const sendData = async (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component={"form"}
        justifyContent={"center"}
        onSubmit={(e) => sendData(e)}
        sx={{
          [theme.breakpoints.down("lg")]: {
            paddingX: 2,
            boxSizing: "border-box",
          },
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={7} xl={7} py={4}>
          <Typography component={"div"}>
            <Box
              sx={{
                textAlign: "left",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
                fontWeight: 300,
                fontSize: "2rem",
                color: "rgba(1,1,1,0.6)",
              }}
            >
              Editar Perfil
            </Box>
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={7} xl={7} py={4}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
              <Typography component={"div"}>
                <Box>Perfil</Box>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
              <TextField
                margin="normal"
                label="Nombre Completo"
                InputLabelProps={{ shrink: true }}
                size="small"
                value={user.nameUser}
                onChange={(e) => {
                  setData({ ...data, nameUser: e.target.value });
                }}
                sx={{
                  [theme.breakpoints.down("lg")]: { width: "100%" },
                  width: "60%",
                }}
                name="nameUser"
              ></TextField>
              <Box>
                <TextField
                  margin="normal"
                  sx={{
                    [theme.breakpoints.down("lg")]: { width: "50%" },
                    width: "30%",
                  }}
                  label="Número telefonico"
                  size="small"
                  name="numberPhone"
                ></TextField>
                <FormControl
                  margin="normal"
                  size="small"
                  sx={{
                    marginX: 2,
                    [theme.breakpoints.down("lg")]: { width: "30%" },
                    width: "10%",
                  }}
                >
                  <InputLabel id="label-phone">Tipo</InputLabel>
                  <Select labelId="label-phone" label="Tipo">
                    <MenuItem>Fijo</MenuItem>
                    <MenuItem>Movil</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <TextField
                margin="normal"
                sx={{
                  [theme.breakpoints.down("lg")]: { width: "100%" },
                  width: "51%",
                }}
                label="Área"
                size="small"
                name="area"
              ></TextField>
              <TextField
                margin="normal"
                sx={{
                  [theme.breakpoints.down("lg")]: { width: "100%" },
                  width: "51%",
                }}
                label="Puesto"
                size="small"
                name="jobTitle"
              ></TextField>
            </Grid>
            <Grid item xl={12}>
              <Divider />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={7} xl={7} py={4}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
              <Typography component={"div"}>
                <Box>Cambiar contraseña</Box>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
              <FormControl
                sx={{
                  [theme.breakpoints.down("lg")]: { width: "100%" },
                  width: "51%",
                }}
                margin="normal"
                size="small"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Contraseña Actual
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword.currentPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={e=>setShowPassword({...showPassword, currentPassword:!showPassword.currentPassword})}
                        onMouseDown={e=>e.preventDefault()}
                        edge="end"
                      >
                        {showPassword.currentPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Contraseña Actual"
                />
              </FormControl>
              <FormControl
                sx={{
                  [theme.breakpoints.down("lg")]: { width: "100%" },
                  width: "51%",
                }}
                margin="normal"
                size="small"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Nueva Contraseña
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  autoComplete="off"
                  type={showPassword.newPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={e=>setShowPassword({...showPassword, newPassword:!showPassword.newPassword})}
                        onMouseDown={e=>e.preventDefault()}
                        edge="end"
                      >
                        {showPassword.newPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Nueva Contraseña"
                />
              </FormControl>
              <FormControl
                sx={{
                  [theme.breakpoints.down("lg")]: { width: "100%" },
                  width: "51%",
                }}
                margin="normal"
                size="small"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Confirmar Contraseña
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword.passwordRepeat ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={e=>setShowPassword({...showPassword, passwordRepeat:!showPassword.passwordRepeat})}
                        onMouseDown={e=>e.preventDefault()}
                        edge="end"
                      >
                        {showPassword.passwordRepeat ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirmar Contraseña"
                />
              </FormControl>
            </Grid>
            <Grid item xl={12}>
              <Divider />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={7} xl={7} py={2}>
          <Button
            type="submit"
            variant="contained"
            fullWidth={display? true : false}
            sx={{
              textTransform: "none",
            }}
          >
            Salvar Cambios
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Employes;
