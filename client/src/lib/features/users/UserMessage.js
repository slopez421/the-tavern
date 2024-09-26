import React from "react";
import { useContext } from "react";
import { FirstNameContext } from "../../../App";

function UserMessage() {

    const first_name = useContext(FirstNameContext)

    return (
        <div className="filter-menu" id="menu">
          <ul className="menu menu-sm bg-success shadow-lg rounded-box w-56 mt-10 mx-10 [&_li>*:not(ul):not(.menu-title):not(details):active]:bg-info">
            <center>
          <div className="text-lg mt-2 w-full">Welcome back, <div className="text-primary-content">{first_name}</div></div>
          <p className="mt-10 p-1">Here, you can review your own posts and find your Tavern stats.</p>
          </center>
            </ul>
    </div>
    )
}

export default UserMessage