import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function FilterMenu() {


    return (
        <div className="filter-menu">
          <ul className="menu bg-base-200 rounded-box w-56 mt-10">
            <li><p>All Posts</p></li>
            <li><p>Dungeons & Dragons</p></li>
            <li><p>Pathfinder</p></li>
            <li><p>Magic: The Gathering</p></li>
            <li><p>Vampire: The Masquerade</p></li>
            <li><p>Fallout: The TTRPG</p></li>
            <li><p>Shadowrun</p></li>
            <li><p>Cyberpunk</p></li>
            </ul>
    </div>
    )
}

export default FilterMenu