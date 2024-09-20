import React from "react";
import { Route, Routes, Navigate} from "react-router";
import Navbar from "./lib/components/Navbar";
import { useAppSelector } from "./lib/hooks";
import Login from "./lib/features/auth/Login";
import Home from "./lib/components/Home";
import SinglePostPage from "./lib/features/posts/SinglePostPage";
import FilteredPosts from "./lib/features/posts/FilteredPosts";
import { selectCurrentUsername } from "./lib/features/auth/authSlice";
import Layout from "./lib/components/Layout";

function App() {
  const ProtectedRoutes = () => {
    const username = useAppSelector(selectCurrentUsername)
    return (username ? <Layout /> : <Navigate to="/login"/>)
    }

  return <div>
    <div className="main-container">
    <Routes>
      <Route path="/" element={<ProtectedRoutes />}>
                <Route index element={<Home />}/>
                <Route path="/posts/:id" element={<SinglePostPage/>}></Route>
                <Route path="/posts/:ttrpg" element={<FilteredPosts/>}></Route>
      </Route>
      <Route path="/login" element={<Login />} />
      </Routes>
      </div>
    </div>
}

export default App;