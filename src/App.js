import { useContext, useEffect, useState } from "react";
import Router from "./componnets/router/Router.jsx";
import { SessionContext } from "./componnets/session/SessionContext.jsx";
import {initialValues, Types} from "./componnets/session/SessionReducer"
import { Button, createTheme, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ThemeProvider } from "@mui/material";
import axios from "axios";
import { AUTH } from "./helpers/Const.jsx";

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
const [state,dispatch] = useContext(SessionContext)
const user = JSON.parse(localStorage.getItem('session'))|| ""
const [open, setOpen] = useState(false)
const [OpenMod, setOpenMod] = useState(false)


useEffect(()=>{
  if(user.token){
	sessionConsult();
}
},[])

const sessionConsult = async ()=>{
	try {
		const {data} = await axios.get(`${AUTH}/update`,{ withCredentials: true })
		dispatch({type:Types.authRefresh, payload:data})
	} catch (error) {
	 if(error.response.status === 401 || error.response.status === 403)
	{
		setOpen(true)
	}
	}
}

const sessionRefresh= async ()=>{
	
}

  return (
	<ThemeProvider theme={theme}>
	<Dialog
	open={open}
	onClose={e=> setOpen(false)}
	aria-labelledby="alert-dialog-title"
	aria-describedby="alert-dialog-description">
   <DialogTitle id="alert-dialog-title">
		Session Caducada
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Tu sesion ha caducado, ¿Quieres reiniciarla?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={e=>{setOpen(false);dispatch({type:Types.authLogout,payload:initialValues})}}>No</Button>
          <Button onClick={e=>sessionRefresh(true)} autoFocus>
            Si
          </Button>
        </DialogActions>
      </Dialog>
	  <Dialog>

	  </Dialog>
	<Router/>
	</ThemeProvider>
     
  );
}

export default App;
