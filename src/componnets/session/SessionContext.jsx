import { createContext, useReducer } from "react";
import SessionReducer, { initialValues } from "./SessionReducer";
const SessionContext = createContext();

const SessionProvaider = ({ children }) => {
  const [state, dispatch] = useReducer(SessionReducer, initialValues);
  return (
    <SessionContext.Provider value={[state, dispatch]}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContext };
export default SessionProvaider;
