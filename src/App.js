import { useContext, useEffect } from "react";
import Router from "./componnets/router/Router.jsx";
import { SessionContext } from "./componnets/session/SessionContext.jsx";
import {Types} from "./componnets/session/SessionReducer"

function App() {
const [,dispatch] = useContext(SessionContext)
const user = JSON.parse(localStorage.getItem('session'))|| ""

useEffect(()=>{
  if(user.token){
    dispatch({type:Types.authRefresh, payload: user})
  }
},[])

  return (
      <Router/>
  );
}

export default App;
