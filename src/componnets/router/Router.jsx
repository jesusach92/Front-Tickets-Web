import React from "react";
import { HashRouter as RouterDom, Route, Routes } from "react-router-dom";
import Loading from "../../helpers/Loading";
import Inbox from "../main/Agents/Inbox";
const Dashboard = React.lazy(()=>import ("../main/Agents/Dashboard"))
const Profile = React.lazy(()=> import("../main/Profile"))
const Login = React.lazy(()=> import ("../main/Login"))
const Main = React.lazy(()=> import("../main/Main"))
const Ticket = React.lazy(()=> import("../main/Ticket"))

const Router = () => {
  return (

   <RouterDom>
     <Routes>
        <Route path="/">
        <Route index element={<React.Suspense fallback={<Loading></Loading>}><Main/></React.Suspense>}/>
        <Route path="Login" element={<React.Suspense
       fallback={<Loading></Loading>}><Login/></React.Suspense>}/>
       <Route path="Dashboard"> 
        <Route index element={<React.Suspense
            fallback={<Loading></Loading>}><Dashboard/></React.Suspense>}/>
       <Route path="Inbox" element={<React.Suspense
            fallback={<Loading></Loading>}><Inbox/></React.Suspense>}></Route>
       </Route>
       <Route path="/NewTicket" element={<React.Suspense
       fallback={<Loading></Loading>}><Ticket/></React.Suspense>}/>
       <Route path="/Profile" element={<React.Suspense
       fallback={<Loading></Loading>}><Profile/></React.Suspense>}/>
       </Route>
       </Routes>
   </RouterDom>
)
    
};

export default Router;
