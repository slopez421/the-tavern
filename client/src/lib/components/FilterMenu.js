import React from "react";
import { Link } from "react-router-dom";

function FilterMenu() {
    return (
        <div className="filter-menu">
          <ul className="menu menu-sm bg-success rounded-box w-56 mt-10 mx-10">
            <li><p><Link to={'/'}>All Posts</Link></p></li>
            <li><p><Link to={'/posts/dnd'}>Dungeons & Dragons</Link></p></li>
            <li><p><Link to={'/posts/pathfinder'}>Pathfinder</Link></p></li>
            <li><p><Link to={'/posts/mtg'}>Magic: The Gathering</Link></p></li>
            <li><p><Link to={'/posts/vtm'}>Vampire: The Masquerade</Link></p></li>
            <li><p><Link to={'/posts/fallout'}>Fallout: The TTRPG</Link></p></li>
            <li><p><Link to={'/posts/shadowrun'}>Shadowrun</Link></p></li>
            </ul>
    </div>
    )
}

export default FilterMenu