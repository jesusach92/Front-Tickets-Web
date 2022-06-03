import { useContext, useEffect } from "react";
import Router from "./componnets/router/Router";
import  SessionProvaider, { SessionContext }  from "./componnets/session/SessionContext";


function App() {
  const [state, dispatch]= useContext(SessionContext)
  const user = JSON.parse(window.localStorage.getItem('session'))
  useEffect(() => {
    if()
    dispatch({})
  
    return () => {
      second
    }
  }, [third])
  
  return (
    <SessionProvaider>
      <Router></Router>
    </SessionProvaider>
  );
}

export default App;
