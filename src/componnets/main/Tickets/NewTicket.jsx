import {
  Box,
  Button,
  Container,
  createTheme,
  Divider,
  FormGroup,
  FormLabel,
  Grid,
  MenuItem,
  Stack,
  TextField,
  ThemeProvider,
  Tooltip,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import { useContext } from "react";
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

  const sendData = (event) => {
    //event.preventDefault();
    console.log(event);
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
                <Grid item xl={12} xs={true} sm={12} md={12} lg={12}>
                  {!user.auth ? (
                    <TextField
                      label="No. de Referencia"
                      required
                      placeholder="Numero de 10 digitos"
                      size="small"
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
                      }}></TextField><TextField
                    select
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
					<MenuItem>
					</MenuItem>
				  </TextField>
				  <TextField
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
				  <TextField
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
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    sx={{
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
