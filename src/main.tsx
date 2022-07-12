import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalCSS from "./global/Global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalCSS />
    <App />
  </React.StrictMode>
);
