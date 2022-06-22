import { useContext, useState } from "react";
import { SessionContext } from "../session/SessionContext";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { Types } from "../session/SessionReducer";

const Auth = () => {
  const [state,dispatch] = useContext(SessionContext);
  const { user } = state;
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      user.token.length > 1 ? (
        <div>
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
            <MenuItem onClick={e=>{dispatch({type: Types.authLogout})}}>Cerrar Sesion</MenuItem>
          </Menu>
        </div>
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
