import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Employes = () => {
  const [data, setData] = useState("");
  const sendData = async (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Box>
      <Grid
        container
        component={"form"}
        justifyContent={"center"}
        onSubmit={(e) => sendData(e)}
      >
        <Grid item xl={7} py={4}>
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
        <Grid item xl={7} py={4}>
          <Grid container>
            <Grid item xl={3}>
              <Typography component={"div"}>
                <Box>Perfil</Box>
              </Typography>
            </Grid>
            <Grid item xl={9}>
              <TextField
                margin="normal"
                label="Nombre Completo"
                size="small"
                sx={{
                  width: "60%",
                }}
                name="nameUser"
              ></TextField>
              <Box>
                <TextField
                  margin="normal"
                  sx={{
                    width: "30%",
                  }}
                  label="Número telefonico"
                  size="small"
                  name="numberPhone"
                ></TextField>
                <FormControl margin="normal" size="small"sx={{
					marginX:2,
                    width: "10%",
                  }}>
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
                  width: "51%",
                }}
                label="Area"
                size="small"
                name="email"
              ></TextField>
			  <TextField
                margin="normal"
                sx={{
                  width: "51%",
                }}
                label="Puesto"
                size="small"
                name="email"
              ></TextField>
            </Grid>
            <Grid item xl={12}>
              <Divider />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={7} py={4}>
          <Divider />
        </Grid>

        <Grid item xl={7} py={4}>
          <Button type="submit">Salvar</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Employes;
