import React from "react";
import { Route, Routes, Navigate} from "react-router";
import { useAppSelector } from "./lib/hooks";
import Login from "./lib/features/auth/Login";
import Home from "./lib/components/Home";
import SinglePostPage from "./lib/features/posts/SinglePostPage";
import FilteredPosts from "./lib/features/posts/FilteredPosts";
import Layout from "./lib/components/Layout";
import { selectCurrentUser } from "./lib/features/users/usersSlice";


function App() {
  const ProtectedRoutes = () => {
    const user = useAppSelector(selectCurrentUser)
    return (user ? <Layout /> : <Navigate to="/login"/>)
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