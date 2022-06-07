import { useContext, useEffect } from "react";
import Router from "./componnets/router/Router.jsx";
import { SessionContext }  from "./componnets/session/SessionContext";
import { Types } from "./componnets/session/SessionReducer";


function App() {
  const [ , dispatch]= useContext(SessionContext)
  const user = JSON.parse(window.localStorage.getItem('session'))
  useEffect(() => {
    if(user)
    dispatch({type: Types.authLogin, payload: user})
    return () => null
  }, [])
  
  return (
      <Router/>
  );
}

export default App;
