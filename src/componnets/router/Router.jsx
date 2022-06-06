import { useContext } from "react";
import { HashRouter as RouterDom, Route, Routes } from "react-router-dom";
import Login from "../main/Login";
import Main from "../main/Main";
import { SessionContext } from "../session/SessionContext";

const Router = () => {
const [state] = useContext(SessionContext)
  return (
   <RouterDom>
     <Routes>
       <Route path="Login" element={<Login/>}/>
       <Route exact  path="/" element={<Main/>} />
     </Routes>
   </RouterDom>
)
    
};

export default Router;
