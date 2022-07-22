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
import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../../session/SessionContext";
import axios from "axios";
import { TICKET } from "../../../helpers/Apiinstance";

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
const initialTicket= {
dateticket:Date.now(),
subjectTicket:"",
descriptionTicket:"",
areaFk:null,
categoryFk:null,
userFk:null,
initialPrority:null
}
const initialValues = [{ idCategory: 0, nameCategory: "No hay categorias disponibles" }];
const NewTicket = () => {
  const [state] = useContext(SessionContext);
  const { user } = state;
  const navigate = useNavigate();
  const [data, setData] = useState(initialTicket);
  const [area, setArea] = useState([]);
  const [category, setCategory] = useState(initialValues);

  const sendData = (event) => {
    event.preventDefault();
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
  const getAreas = async () => {
    try {
      const { data } = await TICKET.get(`/area`, {
        headers: {
          Authorization: `${user.token}`,
        },
      });
      setArea(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getAreas();
  }, []);

  const getCategory = async (e) => {
    
    try {
      const { data } = await TICKET.get(`/category/area/${e.target.value}`, {
        headers: {
          Authorization: `${user.token}`,
        },
      });
      setCategory(data);
    } catch (error) {
      if (error.response.status === 404) setCategory(initialValues);
    }
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
                    value={data?.subjectTicket || ""}
                    onChange={e=>setData({...data,subjectTicket:e.target.value})}
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
                    name="area"
                    size="small"
                    label="Area"
                    helperText="Selecciona el Área"
                    margin="normal"
                    value={data?.areaFk || ""}
                    onChange={(e) => {getCategory(e);setData({...data,areaFk:e.target.value})}}
                    sx={{
                      [theme.breakpoints.down("lg")]: {
                        width: "100%",
                      },
                      [theme.breakpoints.up("sm")]: {
                        width: "51%",
                      },
                    }}
                  >
                    <MenuItem value={0} disabled>Selecciona el Área</MenuItem>
                    {area.map((e) => (
                      <MenuItem key={e.idArea} value={e.idArea}>
                        {e.nameArea}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    select
                    name="category"
                    size="small"
                    label="Categoria"
                    helperText="Selecciona tu categoria"
                    margin="normal"
                    value={data?.categoryFk || ""}
                    onChange={(e) => {setData({...data,categoryFk:e.target.value})}}  
                    sx={{
                      [theme.breakpoints.down("lg")]: {
                        width: "100%",
                      },
                      [theme.breakpoints.up("sm")]: {
                        width: "51%",
                      },
                    }}
                  >
                     <MenuItem value={0} disabled>Selecciona la Categoria
                     </MenuItem>
                    {category &&
                      category.map((e) => (
                        <MenuItem value={e.idCategory}>
                          {e.nameCategory}
                        </MenuItem>
                      ))}
                  </TextField>
                  <TextField
                    name="message"
                    label="Mensaje"
                    margin="normal"
                    multiline
                    rows={10}
                    required
                    size="small"
                    value={data?.descriptionTicket || ""}
                    onChange={(e) => {setData({...data,descriptionTicket:e.target.value})}}  
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
                    <MenuItem value={1}>Alta</MenuItem>
                    <MenuItem value={3}>Media</MenuItem>
                    <MenuItem value={2}>Baja</MenuItem>
                    <MenuItem value={4}>Urgente</MenuItem>
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
