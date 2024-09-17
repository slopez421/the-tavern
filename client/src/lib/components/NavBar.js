import React from "react";
import { NavLink } from "react-router-dom";
function NavBar() {

/* function handleLogout() {
    fetch("/logout", {
        method: "DELETE"}).then((r) => {
            if (r.ok) {
                setErrors("")
                setUser(null)
            }
        })
    } */

 return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
            <NavLink className="btn btn-ghost text-xl" to="/">The Tavern</NavLink>
            </div>
          <div className="navbar-end">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li><NavLink to="/" end>Homepage</NavLink></li>
                  <li>Profile</li>
                  <li>Messages</li>
                  <li>Likes</li>
                  <li><button className="btn btn-primary" onClick={() => console.log('Implement logout')}>Logout</button></li>
                </ul>
            </div>
  </div>
</div>
</nav>)
}

export default NavBar