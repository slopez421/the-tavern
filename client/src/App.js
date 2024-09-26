import React, { createContext, useEffect, useState } from "react";
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
import NewThread from "./lib/features/threads/NewThread";
import Profile from "./lib/features/users/Profile";
import Likes from "./lib/features/likes/Likes";
import Settings from "./lib/features/users/Settings";

export const UserContext = createContext();
export const FirstNameContext = createContext();
export const LastNameContext = createContext();
export const UsernameContext = createContext();
export const PostsContext = createContext();
export const RefreshContext = createContext();
export const UserIdContext = createContext();
export const ThreadsContext = createContext();
export const UsersContext = createContext();


function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [firstname, setFirstname] = useState(null)
  const [lastname, setLastname] = useState(null)
  const [username, setUsername] = useState(null)
  const [userid, setUserid] = useState(null)
  const [posts, setPosts] = useState([])
  const [threads, setThreads] = useState([])
  const [users, setUsers] = useState([])
  const [refresh, setRefresh] = useState(false)

  function handleSetFresh() { 
    return setRefresh(!refresh)
  }

  useEffect(() => {
    if(user != null){
      setFirstname(JSON.parse(atob(user.split(".")[1]))["first_name"]);
      setUserid(JSON.parse(atob(user.split(".")[1]))["id"]);
      setLastname(JSON.parse(atob(user.split(".")[1]))["last_name"]);
      setUsername(JSON.parse(atob(user.split(".")[1]))["username"]);
      localStorage.setItem("token", user);
    } else {
      setFirstname(null)
      setUserid(null)
    }
  }, [user])


  useEffect(() => {
    if(localStorage.getItem("token") != undefined){
      setUser(localStorage.getItem("token"));
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
      fetch("/users")
      .then((r) => r.json())
      .then((users) => setUsers(users))
    }, [refresh])

  useEffect(() => {
    fetch("/threads")
    .then((r) => r.json())
    .then((threads) => setThreads(threads))
}, [refresh]);
 
  return <div>
    <RefreshContext.Provider value={refresh}>
    <UserContext.Provider value={user}>
    <FirstNameContext.Provider value={firstname}>
    <LastNameContext.Provider value={lastname}>
    <UsernameContext.Provider value={username}>
    <UserIdContext.Provider value={userid} >
    <UsersContext.Provider value={users}>
    <PostsContext.Provider value={posts}>
    <ThreadsContext.Provider value={threads}>
    <Navbar setUser={setUser}/>
    <div className="main-container">
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
                <Route path="/messages/new" element={<NewThread setRefresh={handleSetFresh} />} />
                <Route path="/login"  element={<Login setUser={setUser}/>} />
                <Route path="/profile"  element={<Profile />} />
                <Route path="/likes"  element={<Likes setRefresh={handleSetFresh}/>} />
                <Route path="/settings"  element={<Settings setUser={setUser} setRefresh={handleSetFresh}/>} />
      </Routes>
      </div>
      </ThreadsContext.Provider>
      </PostsContext.Provider>
      </UsersContext.Provider>
      </UserIdContext.Provider>
      </UsernameContext.Provider >
      </LastNameContext.Provider>
      </FirstNameContext.Provider>
      </UserContext.Provider>
      </RefreshContext.Provider>
      </div>
}

export default App;