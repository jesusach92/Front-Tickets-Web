import {
  Box,
  Button,
  Container,
  createTheme,
  Divider,
  Grid,
  MenuItem,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import { useContext, useState } from "react";
import { SessionContext } from "../../session/SessionContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fa5d02",
    },
    text: {},
  },
  typography: {
    fontFamily: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ].join(","),
    },
  },
});

const NewTicket = () => {
  const [state] = useContext(SessionContext);
  const { user } = state;
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const sendData = (event) => {
    event.preventDefault();
    const _formData = new FormData(event.currentTarget);
    setData();
  };

  window.onbeforeunload = (event) => {
    const e = event || window.Event;
    e.preventDefault();
    if (e) {
      e.returnValue = "";
    }
    alert("No te vayas");
    return "";
  };
  return (
    <Box>
      <Grid
        container
        sx={{
          maxWidth: 1200,
          margin: "auto",
          marginTop: 5,
        }}
      >
        <Grid item sm={12} md={12} lg={9} xl={9}>
          <Container>
            <ThemeProvider theme={theme}>
              <Typography component="div">
                <Box
                  mb={5}
                  sx={{
                    fontWeight: 300,
                    fontSize: "2rem",
                    color: "rgba(1,1,1,0.6)",
                  }}
                >
                  ¿Cómo te podemos ayudar?
                </Box>
                <Divider variant="middle" />
              </Typography>
              <Grid mt={3} container component="form" onSubmit={sendData}>
                <Grid item xs={12}>
                  <Typography component="div">
                    <Box
                      sx={{
                        fontWeight: 300,
                        fontSize: "1.5rem",
                        color: "rgba(1,1,1,0.6)",
                      }}
                    >
                      Envianos tu Problema
                    </Box>
                  </Typography>
                </Grid>
                <Grid item xl={12} xs={true} sm={12} md={12} lg={12}>
                  {!user.type || user.type === 1 ? (
                    <TextField
                      label="No. de Referencia"
                      required
                      name="ref_Number"
                      placeholder="Numero de 10 digitos"
                      size="small"
                      margin="normal"
                      helperText="Numero proporcionado por tu agente Texin"
                      sx={{
                        [theme.breakpoints.down("lg")]: {
                          width: "100%",
                        },
                        [theme.breakpoints.up("sm")]: {
                          width: "41%",
                        },
                      }}
                    ></TextField>
                  ) : (
                    <></>
                  )}
                  <TextField
                    label="Asunto"
                    required
                    name="Subject"
                    placeholder="Asunto"
                    size="small"
                    margin="normal"
                    sx={{
                      [theme.breakpoints.down("lg")]: {
                        width: "100%",
                      },
                      [theme.breakpoints.up("sm")]: {
                        width: "60%",
                      },
                    }}
                  ></TextField>
                  <TextField
                    select
                    name="cetegory"
                    size="small"
                    label="Categoria"
                    helperText="Selecciona tu categoria"
                    margin="normal"
                    sx={{
                      [theme.breakpoints.down("lg")]: {
                        width: "100%",
                      },
                      [theme.breakpoints.up("sm")]: {
                        width: "51%",
                      },
                    }}
                  >
                    <MenuItem value={1}>Redes</MenuItem>

                    <MenuItem value={2}>Wifi</MenuItem>

                    <MenuItem value={3}>Programacion</MenuItem>

                    <MenuItem value={4}>Impresoras</MenuItem>

                    <MenuItem value={5}>Equipos</MenuItem>
                  </TextField>
                  <TextField
                    name="message"
                    label="Mensaje"
                    margin="normal"
                    multiline
                    rows={10}
                    required
                    size="small"
                    sx={{
                      [theme.breakpoints.down("lg")]: {
                        width: "100%",
                      },
                      [theme.breakpoints.up("sm")]: {
                        width: "60%",
                      },
                    }}
                    placeholder="Describe a detalle tu problema"
                  ></TextField>
                  {!user.type || user.type === 1 ? (
                    <>
                      <TextField
                        name="email"
                        label="Correo Electronico"
                        margin="normal"
                        required
                        placeholder="Asunto"
                        size="small"
                        sx={{
                          [theme.breakpoints.down("lg")]: {
                            width: "100%",
                          },
                          [theme.breakpoints.up("sm")]: {
                            width: "51%",
                          },
                        }}
                      ></TextField>
                      <TextField
                        name="consumerName"
                        required
                        label="Nombre Completo"
                        placeholder="Nombre"
                        size="small"
                        margin="normal"
                        sx={{
                          [theme.breakpoints.down("lg")]: {
                            width: "100%",
                          },
                          [theme.breakpoints.up("sm")]: {
                            width: "51%",
                          },
                        }}
                      ></TextField>
                    </>
                  ) : (
                    <></>
                  )}
                  <TextField
                    name="files"
                    type="file"
                    label="Carga una imagen que nos ayude a identificar tu problema"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      accept: ".jpg,.png",
                      multiple: true,
                    }}
                    size="large"
                    margin="normal"
                    helperText="Imagen png, jpg, jpge, no mayor a 20Mb"
                    sx={{
                      [theme.breakpoints.down("lg")]: {
                        width: "100%",
                      },
                      [theme.breakpoints.up("sm")]: {
                        width: "51%",
                      },
                    }}
                  ></TextField>
                  <TextField
                    name="priority"
                    select
                    size="small"
                    label="Prioridad"
                    margin="normal"
                    sx={{
                      [theme.breakpoints.down("lg")]: {
                        width: "100%",
                      },
                      [theme.breakpoints.up("sm")]: {
                        width: "51%",
                      },
                    }}
                  >
                    <MenuItem value={"Alta"}>Alta</MenuItem>
                    <MenuItem value={"Media"}>Media</MenuItem>
                    <MenuItem value={"Baja"}>Baja</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} mb={5}>
                  <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    sx={{
                      [theme.breakpoints.down("lg")]: {
                        width: "100%",
                      },
                      textTransform: "none",
                    }}
                    endIcon={<SendIcon />}
                  >
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </ThemeProvider>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewTicket;
