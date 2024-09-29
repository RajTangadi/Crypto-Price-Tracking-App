import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import CoinContextProvider from "./context/CoinContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <CoinContextProvider>
        <App />
      </CoinContextProvider>
    </Router>
  </React.StrictMode>
);
