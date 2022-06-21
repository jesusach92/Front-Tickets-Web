import React from "react";
import { HashRouter as RouterDom, Route, Routes } from "react-router-dom";
import Loading from "../../helpers/Loading";
const Login = React.lazy(()=> import ("../main/Login"))
const Main = React.lazy(()=> import("../main/Main"))
const Ticket = React.lazy(()=> import("../main/Ticket"))

const Router = () => {

  return (

   <RouterDom>
     <Routes>
       <Route path="/Login" element={<React.Suspense
       fallback={<Loading></Loading>}><Login/></React.Suspense>}/>
       <Route path="/NewTicket" element={<React.Suspense
       fallback={<Loading></Loading>}><Ticket/></React.Suspense>}/>
       <Route exact  path="/" element={<React.Suspense
       fallback={<Loading></Loading>}><Main/></React.Suspense>} /> 
     </Routes>
   </RouterDom>
)
    
};

export default Router;
