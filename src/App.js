import { useContext, useEffect, useState } from "react";
import Router from "./componnets/router/Router.jsx";
import { SessionContext } from "./componnets/session/SessionContext.jsx";
import {
  Button,
  createTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { AUTH } from "./helpers/Apiinstance.jsx";
import { Types } from "./componnets/session/SessionReducer.jsx";


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

function App() {
  const [state, dispatch] = useContext(SessionContext);
  const user = JSON.parse(localStorage.getItem("session")) || "";
  const [open, setOpen] = useState(false);
  const [OpenMod, setOpenMod] = useState(false);
  const [dataU, setData] = useState({ passwordEmploye: "" });

  useEffect(() => {
    if (user.token) {
      sessionConsult();
    }
  }, []);

  const sessionConsult = async () => {
    try {
      const { data } = await AUTH.get(`/update`, {
        withCredentials: true,
      });
      dispatch({ type: Types.authRefresh, payload: data });
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        setOpen(true);
      }
    }
  };

  const sessionRefresh = async () => {
    try {
      const { data } = await AUTH.post(`/login`, dataU, {
        withCredentials: true,
      });
      dispatch({ type: Types.authLogin, payload: data });
      setOpenMod(false);
    } catch (error) {
      setOpenMod(false);
      dispatch({ type: Types.authLogout });
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={open}
        onClose={(e) => {
          setOpen(false);
          dispatch({ type: Types.authLogout});
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Session Caducada</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tu sesion ha caducado, ¿Quieres reiniciarla?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(e) => {
              setOpen(false);
              dispatch({ type: Types.authLogout });
            }}
          >
            No
          </Button>
          <Button
            onClick={(e) => {
              setOpenMod(true);
              setOpen(false);
              setData({ ...dataU, emailEmploye: user.emailEmploye });
            }}
            autoFocus
          >
            Si
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={OpenMod}
        onClose={(e) => {
          setOpenMod(false);
          dispatch({ type: Types.authLogout});
        }}
      >
        <DialogTitle>Ingresa tu contraseña</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ingresa nuevamente tu contraseña para actualizar tu sesion
          </DialogContentText>
          <TextField
            sx={{
              marginTop: "20px",
            }}
            fullWidth
            size="small"
            type={"password"}
            value={dataU.passwordEmploye}
            onChange={(e) =>
              setData({ ...dataU, passwordEmploye: e.target.value })
            }
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={sessionRefresh}>iniciar sesion</Button>
        </DialogActions>
      </Dialog>

      <Router />
    </ThemeProvider>
  );
}

export default App;
