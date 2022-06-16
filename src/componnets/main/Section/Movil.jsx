import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import {useNavigate} from "react-router-dom"

const theme = createTheme({
  palette: {
    primary: {
      main: "#fa5d02",
    },
  },
});

const Movil = () => {
  const navigate =useNavigate();
  return (
    <Box
      sx={{
        height: "calc(100vh - 150px)",
      }}
    >
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
        square
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="¿Como puedo ayudarte?"
          inputProps={{ "aria-label": "¿Como puedo ayudarte?" }}
        />
        <ThemeProvider theme={theme}>
           <IconButton type="submit" sx={{ p: "10px" }} aria-label="search" color="primary">
          <SearchIcon />
        </IconButton>
        </ThemeProvider>
       
      </Paper>
      <Container fixed>
        <ThemeProvider theme={theme}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              mb: 2,
              textTransform: "none",
            }}
            onClick= {e=> navigate("/NewTicket")}
          >
            Nuevo Ticket
          </Button>
        </ThemeProvider>
      </Container>
      <Container>
        <span className="grettings">Saludos Cordiales</span>
      </Container>
    </Box>
  );
};

export default Movil;
