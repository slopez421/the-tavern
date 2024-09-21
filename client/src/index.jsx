import React from "react";
import App from "./App";
import "./globals.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { store } from "./lib/store";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
            <Provider store={store}>
                <Router>
                        <App />
                </Router>
            </Provider>
);
