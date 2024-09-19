import React from "react";
import { Route, Routes, Navigate, Outlet} from "react-router";
import NavBar from "./lib/components/NavBar";
import { useAppSelector } from "./lib/hooks";
import Login from "./lib/features/auth/Login";
import Home from "./lib/components/Home";
import SinglePostPage from "./lib/features/posts/SinglePostPage";
import FilteredPosts from "./lib/features/posts/FilteredPosts";
import { selectCurrentUsername } from "./lib/features/auth/authSlice";

const ProtectedRoutes = () => {
  const username = useAppSelector(selectCurrentUsername)
  return (username ? <Outlet /> : <Navigate to="/login"/>)
  }


function App() {

  return <div>
    <div className="main-container">
    <NavBar/>
    <div className="main-container">
    <Routes>
      <Route element={<ProtectedRoutes />}>
                <Route path="/" element={<Home />}/>
                <Route path="/posts/:postId" element={<SinglePostPage />}></Route>
                <Route path="/posts/:ttrpg" element={<FilteredPosts/>}></Route>
      </Route>
      <Route path="/login" element={<Login />} />
      </Routes>
      </div>
    </div>
  </div>
}

export default App;