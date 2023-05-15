import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./contexts/UsersContext";
import { PlantsProvider } from "./contexts/PlantsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UsersProvider>
    <PlantsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PlantsProvider>
  </UsersProvider>
);
