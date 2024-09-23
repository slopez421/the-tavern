import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate} from "react-router";
import { useAppDispatch, useAppSelector } from "./lib/hooks";
import Login from "./lib/features/auth/Login";
import Home from "./lib/components/Home";
import SinglePostPage from "./lib/features/posts/SinglePostPage";
import FilteredPosts from "./lib/features/posts/FilteredPosts";
import Layout from "./lib/components/Layout";
import { selectCurrentUser, loginReducer  } from "./lib/features/users/usersSlice";
import { useCheckSessionMutation } from "./lib/features/api/apiSlice";

function App() {
  const navigate = useNavigate()
  const user = useAppSelector(selectCurrentUser)
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetch("/check_session", {
      credentials: 'include',
    }).then((r) => {
      if (r.ok) {
        console.log(r)
        r.json().then((user) => {
          console.log('user:', user)
          dispatch(loginReducer(user))})
      }
    });
  }, []);


  const ProtectedRoutes = () => {
    return (user? <Layout /> : <Navigate to="/login"/>)
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