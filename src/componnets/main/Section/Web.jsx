import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";


const Web = () => {
  return (
    <Box
      sx={{
        height: "calc(100vh - 150px)",
      }}
    >
      <Container
      sx={{
        height:"30vh",
        backgroundColor: "rgba(1,1,1,0.04)",
        minWidth: "100% !important",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
		borderBottom: "1px solid rgba(1,1,1,0.1)"
      }}
      >
        <Typography mb={2} component="div">
			<Box sx={{
				fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
				fontWeight: 300,
				fontSize: "2rem",
			}}>¿Cómo puedo ayudarte?</Box>
        </Typography>
        <Container>
          <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center"}}
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
      <Container>
        <span className="grettings">Saludos Cordiales</span>
      </Container>
    </Box>
  );
}

export default Web