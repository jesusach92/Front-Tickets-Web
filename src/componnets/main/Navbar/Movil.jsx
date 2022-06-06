import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

import Auth from "../Auth";

const Movil = () => {
  return (
    <div className="navbar-Movil">
      <Link to="/">
        <img src={logo} alt="Texin" className="logo"></img>
      </Link>
      <Auth></Auth>
    </div>
  );
};

export default Movil;
