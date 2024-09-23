import React, { createContext, useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate} from "react-router";
import { useAppDispatch, useAppSelector } from "./lib/hooks";
import Login from "./lib/features/auth/Login";
import Home from "./lib/components/Home";
import SinglePostPage from "./lib/features/posts/SinglePostPage";
import FilteredPosts from "./lib/features/posts/FilteredPosts";
import Layout from "./lib/components/Layout";
import Navbar from "./lib/components/Navbar";

export const UserContext = createContext()
export const FirstNameContext = createContext();
export const UserId = createContext()

function App() {
  const [user, setUser] = useState(null)
  const [firstname, setFirstname] = useState(null)
  const [userid, setUserid] = useState(null)


  const dispatch = useAppDispatch()
  
  useEffect(() => {
    if(user != null){
      setFirstname(JSON.parse(atob(user.split(".")[1]))["first_name"]);
      setUserid(JSON.parse(atob(user.split(".")[1]))["id"]);
    }
  }, [user])

  // useEffect(() => {
  //    fetch("/check_session", {
  //     credentials: 'include',
  //    }).then((r) => {
  //     if (r.ok) {
  //       console.log(r)
  //       r.json().then((user) => {
  //         console.log('user:', user)
  //         setUser(user)})
  //     }
  //   });
  // }, []);


  // const ProtectedRoutes = () => {
  //   return (user != null? (
  //   <UserContext.Provider value={user}>
  //     <FirstNameContext.Provider value={firstname}>
  //       <Layout />
  //       </FirstNameContext.Provider>
  //       </UserContext.Provider>) : <Navigate to="/login"/>)
  // }

  return <div>
    <div className="main-container">
    <UserContext.Provider value={user}>
    <FirstNameContext.Provider value={firstname}>
    <UserId.Provider value={userid} >
    <Navbar />
    <Routes>
      <Route path="/">
                <Route index element={<Home />}/>
                <Route path="/posts/:id" element={<SinglePostPage/>}></Route>
                <Route path="/posts/:ttrpg" element={<FilteredPosts/>}></Route>
      </Route>
      <Route path="/login"  element={<Login setUser={setUser}/>} />
      </Routes>
      </UserId.Provider>
      </FirstNameContext.Provider>
      </UserContext.Provider>
      </div>
    </div>
}

export default App;