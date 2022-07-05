import { Box, Grid } from "@mui/material";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../session/SessionContext";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Consumer from "./Profiles/Consumer";
import Employes from "./Profiles/Employes";

const Profile = () => {
  const [state] = useContext(SessionContext);
  const { user } = state;
  window.onbeforeunload = (event) => {
    const e = event || window.Event;
    e.preventDefault();
    if (e) {
      e.returnValue = "";
    }
    alert("No te vayas");
    return "";
  };
  return user.type ? (
    <Box>
      <Grid container direction={"column"} height="100vh" flexWrap={"nowrap"}>
        <Grid item>
          <NavBar />
        </Grid>
        <Grid item flexGrow={1}>
          {user.type === 1 ? <Consumer /> : <Employes />}
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  ) : (
    <Navigate to="/" replace={true}></Navigate>
  );
};

export default Profile;
