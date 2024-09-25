import React from "react";
import { NavLink } from "react-router-dom";

function FilterMenu() {
    return (
        <div className="filter-menu" id="menu">
          <ul className="menu menu-sm bg-success shadow-lg rounded-box w-56 mt-10 mx-10 [&_li>*:not(ul):not(.menu-title):not(details):active]:bg-info">
            <center>
          <div className="text-lg mt-4 ">Filter by TTRPG</div>
          </center>
          <div className="divider divider-info"></div>
            <li><NavLink to={'/'}>All Posts</NavLink></li>
            <li><NavLink to={'/posts/dnd'}>Dungeons & Dragons</NavLink></li>
            <li><NavLink to={'/posts/pathfinder'}>Pathfinder</NavLink></li>
            <li><NavLink to={'/posts/mtg'}>Magic: The Gathering</NavLink></li>
            <li><NavLink to={'/posts/vtm'}>Vampire: The Masquerade</NavLink></li>
            <li><NavLink to={'/posts/fallout'}>Fallout: The TTRPG</NavLink></li>
            <li><NavLink to={'/posts/shadowrun'}>Shadowrun</NavLink></li>
            </ul>
    </div>
    )
}

export default FilterMenu