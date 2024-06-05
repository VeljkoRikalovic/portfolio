import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GlobalStyles from "./styles/GlobalStyles.js";
import "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
