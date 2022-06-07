import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";

const themeDefault = createTheme();

const theme = createTheme(
	{
		components:{
			MuiButton:{
				variants:[{
					props:{variant: 'outlined'},
					style:{
						textTransform:'none',
						marginTop:'10px',
						width: '100%',
						border: '1px solid #c2c2c2',
						borderRadius: '0%',
						backgroundColor: '#f5f5f5',
						color:`${themeDefault.palette.grey[600]}`,
						paddingTop:'0',
						paddingBottom:'0'
					}
				}]
			}
		}
	}
);


const Movil = () => {
  return (
    <Box sx={{
		height: 'calc(100vh - 150px)'
	}}>
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
	  <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
	<Container fixed>
		<ThemeProvider theme={theme}>
		<Button variant="outlined">Iniciar un nuevo Ticket</Button>
		</ThemeProvider>
		</Container>
		<Container>
			<span className="grettings">Saludos Cordiales</span>
		</Container>
	</Box>
  );
};

export default Movil;
