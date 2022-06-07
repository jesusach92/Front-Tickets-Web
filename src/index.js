import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SessionProvaider from "./componnets/session/SessionContext";



/* Creating a root element and rendering the App component to it. */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
  <SessionProvaider>
    <App />
  </SessionProvaider>
  </StrictMode>
);
