import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import NavBar from "./lib/components/NavBar";
import Home from "./lib/components/Home";

function App() {

  return <div>
    <div className="main-container">
    <NavBar/>
    <div className="container">
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      </Routes>
      </div>
    </div>
  </div>
}

export default App;