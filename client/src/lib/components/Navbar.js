import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FirstNameContext } from "../../App";


function Navbar({setUser}) {
  const navigate = useNavigate()
  const first_name = useContext(FirstNameContext)

  function handleLogout() {
    localStorage.removeItem("token"); 
    setUser(null)
    navigate('/login')
  }

return ( first_name ? (
    <nav className="shadow" id="navbar">
      <div className="main-container-fixed">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
            <NavLink className="btn btn-ghost text-xl" to="/">The Tavern</NavLink>
            </div>
          <div className="navbar-end">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost w-25">
                <span className="text-sm"> Hi {first_name ? first_name : <></>}!</span>
              </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li><NavLink to="/">Homepage</NavLink></li>
                  <li>
                  <div className="join">
                  <div className="join-item">
                    <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content w-8 rounded-xl">
                    <span className="text-xs">UI</span>
                  </div>
                  </div>
                  </div>
                    <div className="join-item">
                      <p>Profile</p>
                    </div>
                    </div>
                  </li>
                  <li><NavLink to="/messages" end>Messages</NavLink></li>
                  <li>Likes</li>
                  <li><button className="btn btn-primary btn-sm" onClick={handleLogout}>Logout</button></li>
                </ul>
            </div>
  </div>
    </div>
    </div>
    </nav>
    ) : <></>)
}

export default Navbar