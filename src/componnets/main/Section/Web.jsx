import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Container, createTheme, Grid, ThemeProvider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette:{
    primary:{
      main:"#fa5d02"
    }
  }
})

const Web = () => {
const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "calc(100vh - 150px)",
      }}
    >
      <Container
        sx={{
          height: "30vh",
          backgroundColor: "rgba(1,1,1,0.04)",
          minWidth: "100% !important",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          borderBottom: "1px solid rgba(1,1,1,0.1)",
        }}
      >
        <Typography mb={2} component="div">
          <Box
            sx={{
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
              fontWeight: 300,
              fontSize: "2rem",
            }}
          >
            ¿Cómo puedo ayudarte?
          </Box>
        </Typography>
        <Container>
          <Paper
            component="form"
            sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
            square
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Quiero ayuda con..."
              inputProps={{ "aria-label": "¿Como puedo ayudarte?" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Container>
      </Container>
      <Grid container sx={{
        maxWidth: 1200,
        margin: "auto",
        marginTop: 5,
      }}>
      <Grid item xs={8} sm={12} md={8} lg={8} xl={8}>
          <Container>
            <Typography component="div">
              <Box
			  sx={{
				fontFamily:
				  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
				fontWeight: 300,
				fontSize: "1.5rem",
				color: "rgba(1,1,1,0.6)"
			  }}
			  > Pasos Iniciales</Box>
            </Typography>
			  <Box mt={3}>
          <ThemeProvider theme={theme}>
            <Button size="large" sx={{
					textTransform:"none",
				}} onClick={e=> navigate("/")}> Bienvenido</Button>
          </ThemeProvider>
				
			  </Box>
          </Container>
        </Grid>
        <Grid item xs={4} sm={12} md={4} lg={4} xl={4}>
		<Container>
            <Typography component="div">
              <Box
			  sx={{
				fontFamily:
				  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
				fontWeight: 300,
				fontSize: "1rem",
				color: "rgba(1,1,1,0.6)"
			  }}
			  > Preguntas frecuentes</Box>
            </Typography>
			  <Box>

			  </Box>
          </Container>
        </Grid>
        </Grid>
    </Box>
  );
};

export default Web;
