import axios from "axios";
import { AUTH } from "../../helpers/Const";

const Types = {
  authLogin: "auth - Login",
  authLogout: "auth - Logout",
  authRefresh: "auth - Refresh"
};

const initialValues = {
  user: {
    token: "",
    userName: "",
    profileImage: "",
    fkRol: "",
  },
};
const SessionReducer = (state, action) => {
  switch (action.type) {
    case Types.authRefresh:
      return {
        ...state,
        user:action.payload
      };

    case Types.authLogin:
      window.localStorage.setItem("session", JSON.stringify(action.payload))
      return {
        ...state,
        user: action.payload,
      };
    case Types.authLogout:
    window.localStorage.removeItem('session')
        return {
            ...state,
            user:initialValues.user
        }
    default:
      return state;
  }
};

export {initialValues, Types}
export default SessionReducer;
