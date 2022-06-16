import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SessionContext } from "../session/SessionContext";

const Auth = () => {
  const [state] = useContext(SessionContext);
  return state.user.token === "" ? (
    <Link to="/Login" className="links">
      Iniciar sesion
    </Link>
  ) : (
    <Link to={"/"} className="links">
      Cerrar Session
    </Link>
  );
};

export default Auth;
