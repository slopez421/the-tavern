import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import NavBar from "./lib/components/NavBar";
import Home from "./lib/components/Home";
import SinglePostPage from "./lib/features/posts/SinglePostPage";
import FilteredPosts from "./lib/features/posts/FilteredPosts";

function App() {

  return <div>
    <div className="main-container">
    <NavBar/>
    <div className="main-container">
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/posts/:postId" element={<SinglePostPage />}></Route>
      <Route path="/posts/:ttrpg" element={<FilteredPosts/>}></Route>
      </Routes>
      </div>
    </div>
  </div>
}

export default App;