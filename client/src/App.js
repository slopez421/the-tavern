import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import NavBar from "./lib/components/NavBar";
import Home from "./lib/components/Home";

function App() {

  return <div>
    <div>
    <NavBar/>
    <div className="main-container">
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      </Routes>
      </div>
    </div>
  </div>
}

export default App;