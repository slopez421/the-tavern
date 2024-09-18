import React from "react";
import { selectAllPosts } from "../features/posts/postsSlice";
import { useAppSelector } from "../hooks";

function SiteStats() {
const count = useAppSelector(selectAllPosts)
    return (
        <div className="stats stats-vertical shadow mt-10">
            <div className="stat">
                <div className="stat-title">Posts</div>
                <div className="stat-value">{count.length}</div>
                <div className="stat-desc">Adventures waiting to be had!</div>
            </div>
        <div className="stat">
            <div className="stat-title">Adventurers</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">in the Tavern</div>
        </div>
    </div>
    )
}

export default SiteStats