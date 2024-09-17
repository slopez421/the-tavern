import React, {useEffect, useState} from "react";

function FilterMenu() {

    return (
        <div className="filter-menu">
          <ul className="menu bg-base-200 rounded-box w-56 mt-10">
            <li><a>All Posts</a></li>
            <li><a>Dungeons & Dragons</a></li>
            <li><a>Pathfinder</a></li>
            <li><a>Magic: The Gathering</a></li>
            <li><a>Vampire: The Masquerade</a></li>
            <li><a>Fallout: The TTRPG</a></li>
            <li><a>Shadowrun</a></li>
            <li><a>Cyberpunk</a></li>
            </ul>
    </div>
    )
}

export default FilterMenu