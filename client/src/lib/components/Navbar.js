import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { userLoggedOut } from "../features/auth/authSlice";
import { useLogoutMutation } from "../features/api/apiSlice";
import {logoutReducer, selectCurrentUser} from "../features/users/usersSlice";
import { FirstNameContext } from "../../App";

function Navbar() {
  const first_name = useContext(FirstNameContext)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const user = useAppSelector(selectCurrentUser)
  const [clicked, setClicked] = useState(false)

  function handleLogout() {
    fetch("/logout", {
        method: "DELETE"}).then((r) => {
            if (r.ok) {
              dispatch(logoutReducer(null))
            }
        })
    }

return (
    <nav className="shadow">
      <div className="main-container-fixed">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
            <NavLink className="btn btn-ghost text-xl" to="/">The Tavern</NavLink>
            </div>
          <div className="navbar-end">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost w-25">
                <span className="text-sm"> Hi {first_name}!</span>
              </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li><NavLink to="/" end>Homepage</NavLink></li>
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
                  <li>Messages</li>
                  <li>Likes</li>
                  <li><button className="btn btn-primary btn-sm" onClick={handleLogout}>Logout</button></li>
                </ul>
            </div>
  </div>
    </div>
    </div>

    </nav>)
}

export default Navbar