import React from "react";
import { BrowserRouter as RouterDom, Route, Routes } from "react-router-dom";
import Loading from "../../helpers/Loading";
const Inbox = React.lazy(()=> import("../main/Agents/Sections/Inbox"));
const Stats = React.lazy(()=> import("../main/Agents/Sections/Stats"));
const Config = React.lazy(()=> import("../main/Agents/Sections/Config"));
const Users = React.lazy(()=> import("../main/Agents/Sections/Users"));
const Dashboard = React.lazy(() => import("../main/Agents/Dashboard"));
const Profile = React.lazy(() => import("../main/Profile"));
const Login = React.lazy(() => import("../main/Login"));
const Main = React.lazy(() => import("../main/Main"));
const Ticket = React.lazy(() => import("../main/Ticket"));

const Router = () => {
  return (
    <RouterDom>
      <Routes>
        <Route path="/">
          <Route index element={<React.Suspense fallback={<Loading></Loading>}><Main /></React.Suspense>}/>
        <Route path="Login" element={<React.Suspense fallback={<Loading></Loading>}><Login />
              </React.Suspense>}/>
        </Route>
        <Route path="Dashboard">
            <Route index element={<React.Suspense fallback={<Loading/>}><Dashboard /></React.Suspense>}/>
            <Route path="Inbox" element={<React.Suspense fallback={<Loading/>}><Inbox /></React.Suspense>}/>
            <Route path="Stats" element={<React.Suspense fallback={<Loading/>}><Stats/></React.Suspense>}/>
            <Route path="Users" element={<React.Suspense fallback={<Loading/>}><Users/></React.Suspense>}/>
            <Route path="Config" element={<React.Suspense fallback={<Loading/>}><Config/></React.Suspense>}/>
        </Route>
        <Route path="NewTicket" element={<React.Suspense fallback={<Loading></Loading>}><Ticket /></React.Suspense>}/>
        <Route path="Profile" element={<React.Suspense fallback={<Loading></Loading>}><Profile /></React.Suspense>}/>
      </Routes>
    </RouterDom>
  );
};

export default Router;
