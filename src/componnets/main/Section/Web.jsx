import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Container,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SessionContext } from "../../session/SessionContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fa5d02",
    },
  },
});

const Web = () => {
  const [state] = useContext(SessionContext);
  const user = state.user || " ";
  const navigate = useNavigate();
  return (
    <Grid container height={"auto"} flexDirection={"column"}>
      <Grid item>
        <Grid
          container
          flexDirection={"column"}
          alignItems="center"
          sx={{
            backgroundColor: "rgba(1,1,1,0.04)",
            borderBottom: "1px solid rgba(1,1,1,0.1)",
          }}
        >
          <Grid item width={"100%"} pt={2}>
            <Typography component="div">
              <Box
                sx={{
                  textAlign: "center",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
                  fontWeight: 300,
                  fontSize: "2rem",
                }}
              >
                ¿Cómo puedo ayudarte?
              </Box>
            </Typography>
          </Grid>
          <Grid item width={"80%"} p={5}>
            <Paper component="form" square sx={{ display: "flex" }}>
              <InputBase
                sx={{ ml: 1, flex: "1" }}
                placeholder="Quiero ayuda con..."
                inputProps={{ "aria-label": "¿Como puedo ayudarte?" }}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          sx={{
            maxWidth: 1200,
            margin: "auto",
            marginTop: 5,
          }}
        >
          <Grid item xs={8} sm={12} md={8} lg={8} xl={8}>
            <Container>
              <Typography component="div">
                <Box
                  sx={{
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
                    fontWeight: 300,
                    fontSize: "1.5rem",
                    color: "rgba(1,1,1,0.6)",
                  }}
                >
                  Pasos Iniciales
                </Box>
              </Typography>
              <Box mt={1}>
                <ThemeProvider theme={theme}>
                  <Button
                    size="large"
                    sx={{
                      textTransform: "none",
                    }}
                    onClick={(e) => navigate("/")}
                  >
                    Bienvenido{user.nameUser ? " " + user.nameUser : ""}
                  </Button>
                </ThemeProvider>
              </Box>
            </Container>
          </Grid>
          <Grid item xs={4} sm={12} md={4} lg={4} xl={4} flexGrow={1}>
            <Container>
              <Typography component="div">
                <Box
                  sx={{
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
                    fontWeight: 300,
                    fontSize: "1rem",
                    color: "rgba(1,1,1,0.6)",
                  }}
                >
                  Preguntas frecuentes
                </Box>
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Web;
