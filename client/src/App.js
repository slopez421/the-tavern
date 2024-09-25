import React, { createContext, useEffect, useMemo, useState } from "react";
import { Route, Routes, useNavigate} from "react-router";
import Login from "./lib/features/auth/Login";
import Home from "./lib/components/Home";
import Navbar from "./lib/components/Navbar";
import DndPosts from "./lib/features/posts/DndPosts";
import MtgPosts from "./lib/features/posts/MtgPosts";
import VtmPosts from "./lib/features/posts/VtmPosts";
import PathfinderPosts from "./lib/features/posts/PathfinderPosts";
import FalloutPosts from "./lib/features/posts/FalloutPosts";
import ShadowrunPosts from "./lib/features/posts/ShadowrunPosts";
import MessagesPage from "./lib/components/MessagesPage";
import SingleThread from "./lib/features/threads/SingleThread";

export const UserContext = createContext();
export const FirstNameContext = createContext();
export const PostsContext = createContext();
export const RefreshContext = createContext();
export const UserIdContext = createContext();
export const ThreadsContext = createContext();


function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [firstname, setFirstname] = useState(null)
  const [userid, setUserid] = useState(null)
  const [posts, setPosts] = useState([])
  const [threads, setThreads] = useState([])
  const [refresh, setRefresh] = useState(false)

  function handleSetFresh() { 
    return setRefresh(!refresh)
  }

  useEffect(() => {
    if(user != null){
      setFirstname(JSON.parse(atob(user.split(".")[1]))["first_name"]);
      setUserid(JSON.parse(atob(user.split(".")[1]))["id"]);
      console.log(user)
      localStorage.setItem("token", user);
    } else {
      setFirstname(null)
      setUserid(null)
    }
  }, [user])


  useEffect(() => {
    if(localStorage.getItem("token") != undefined){
      setUser(localStorage.getItem("token"));
      console.log('getToken:', user)
      navigate("/");
    }
    else {
      navigate("/login")
    }
  }, [user]);

  useEffect(() => {
    fetch("/posts")
    .then((r) => r.json())
    .then((posts) => setPosts(posts))
  }, [refresh])

  useEffect(() => {
    fetch("/threads")
    .then((r) => r.json())
    .then((threads) => setThreads(threads))
}, [refresh]);
 
  return <div>
    <div className="main-container">
    <RefreshContext.Provider value={refresh}>
    <UserContext.Provider value={user}>
    <FirstNameContext.Provider value={firstname}>
    <UserIdContext.Provider value={userid} >
    <PostsContext.Provider value={posts}>
    <ThreadsContext.Provider value={threads}>
    <Navbar setUser={setUser} />
    <Routes>
                <Route path="/" element={<Home setRefresh={handleSetFresh} setPosts={setPosts}/>}/>
                <Route path="/posts/dnd" element={<DndPosts setRefresh={handleSetFresh} />} />
                <Route path="/posts/mtg" element={<MtgPosts setRefresh={handleSetFresh}/>} />
                <Route path="/posts/vtm" element={<VtmPosts setRefresh={handleSetFresh} />} />
                <Route path="/posts/pathfinder" element={<PathfinderPosts setRefresh={handleSetFresh}/>} />
                <Route path="/posts/fallout" element={<FalloutPosts setRefresh={handleSetFresh} />} />
                <Route path="/posts/shadowrun" element={<ShadowrunPosts setRefresh={handleSetFresh} />} />
                <Route path="/messages" element={<MessagesPage setRefresh={handleSetFresh} />} />
                <Route path="/messages/threads/:id" element={<SingleThread setRefresh={handleSetFresh} />} />
      <Route path="/login"  element={<Login setUser={setUser}/>} />
      </Routes>
      </ThreadsContext.Provider>
      </PostsContext.Provider>
      </UserIdContext.Provider>
      </FirstNameContext.Provider>
      </UserContext.Provider>
      </RefreshContext.Provider>
      </div>
    </div>
}

export default App;