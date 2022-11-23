import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Cards from "./components/Cards/Cards";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import { Clasicas, Home, Populares, Proximas } from "./pages";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
