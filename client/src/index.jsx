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
    <React.StrictMode>
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path="/*" element={<App />} />
                    </Routes>
                </Router>
            </Provider>
</React.StrictMode>
);
