import React, { useContext } from "react";
import { PostsContext, UsersContext } from "../../App";

function SiteStats() {
    const posts = useContext(PostsContext)
    const users = useContext(UsersContext)
    return (
        <div className="stats stats-vertical shadow-lg mt-10">
            <div className="stat text-info">
                <div className="stat-title">Total Posts on the Board</div>
                <div className="stat-value">{posts.length}</div>
                <div className="stat-desc">Adventures waiting to be had!</div>
            </div>
        <div className="stat text-info">
            <div className="stat-title">Adventurers</div>
            <div className="stat-value">{users.length}</div>
            <div className="stat-desc">in the Tavern</div>
        </div>
    </div>
    )
}

export default SiteStats