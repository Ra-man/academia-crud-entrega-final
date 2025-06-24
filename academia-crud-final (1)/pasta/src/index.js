
// Importa o React e o ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Renderiza o App no elemento com id root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
