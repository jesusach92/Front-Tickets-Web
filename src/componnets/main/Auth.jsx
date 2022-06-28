import { useContext, useState, useEffect } from "react";
import { SessionContext } from "../session/SessionContext";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { Types } from "../session/SessionReducer";
import { AUTH } from "../../helpers/Apiinstance";
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

const Auth = () => {
  const [, dispatch] = useContext(SessionContext);
  const user = JSON.parse(localStorage.getItem("session")) || "";
  const [open, setOpen] = useState(false);
  const [OpenMod, setOpenMod] = useState(false);
  const [dataU, setData] = useState({ passwordEmploye: "" });
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

const logout = async()=>{
  dispatch({type: Types.authLogout})
  await AUTH.put(`/logout`,undefined,{withCredentials:true})
}

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
      user.token?.length > 1 ? (
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
        autoFocus
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
          <IconButton
            size="small"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar src="logo"></Avatar>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={(e) => navigate("/NewTicket")}>
              Nuevo Ticket
            </MenuItem>
            <MenuItem onClick={e=>{logout()}}>Cerrar Sesion</MenuItem>
          </Menu>
		  </ThemeProvider>
      ) : (
        <div>
          <IconButton
            size="small"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
          >
            <MenuIcon/>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
			<MenuItem onClick={(e) => navigate("/")}>
              Inicio
            </MenuItem>
            <MenuItem onClick={(e) => navigate("/login")}>
              Iniciar Sesion
            </MenuItem>
            <MenuItem onClick={(e) => navigate("/NewTicket")}>
              Nuevo Ticket
            </MenuItem>
			
          </Menu>
        </div>
      )
  );
};

export default Auth;
