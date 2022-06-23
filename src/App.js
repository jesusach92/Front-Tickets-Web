import { useContext, useEffect, useState } from "react";
import Router from "./componnets/router/Router.jsx";
import { SessionContext } from "./componnets/session/SessionContext.jsx";
import {Types} from "./componnets/session/SessionReducer"
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
const [,dispatch] = useContext(SessionContext)
const user = JSON.parse(localStorage.getItem('session'))|| ""
const [open, setOpen] = useState(false)


useEffect(()=>{
  if(user.token){
	dispatch({type:Types.authRefresh, payload: user})
	if(sessionConsult(user)){
	setOpen(true)
	}
	else{
		console.log("Holaa");
	}
  }
},[])

const sessionConsult = async (user)=>{
	const {data,status} = await axios.get(`${AUTH}/update`,{ withCredentials: true })
	if( status===200)
	{
		return false
	}
	else if(status === 401)
	{
		return true
	}

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
          <Button onClick={e=>setOpen(false)}>No</Button>
          <Button onClick={e=>setOpen(false)} autoFocus>
            Si
          </Button>
        </DialogActions>
      </Dialog>
	<Router/>
	</ThemeProvider>
     
  );
}

export default App;
