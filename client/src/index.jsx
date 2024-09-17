import React from "react";
import App from "./App";
import "./globals.css";
import { createRoot } from "react-dom/client";
import Provider from "./StoreProvider";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
<BrowserRouter>
    <Provider>
        <App />
    </Provider>
</BrowserRouter>
);
