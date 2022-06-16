import { HashRouter as RouterDom, Route, Routes } from "react-router-dom";
import Login from "../main/Login";
import Main from "../main/Main";
import Ticket from "../main/Ticket";

const Router = () => {

  return (
   <RouterDom>
     <Routes>
       <Route path="/Login" element={<Login/>}/>
       <Route path="/NewTicket" element={<Ticket/>}/>
       <Route exact  path="/" element={<Main/>} /> 
     </Routes>
   </RouterDom>
)
    
};

export default Router;
