import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { HavenlyProvider } from "./havenly/HavenlyContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HavenlyProvider>
        <App />
      </HavenlyProvider>
    </BrowserRouter>
  </React.StrictMode>
);
