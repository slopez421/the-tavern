import React from "react";

function SiteStats() {
    return (
        <div className="stats stats-vertical shadow mt-10">
            <div className="stat">
                <div className="stat-title">Posts</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">Adventures waiting to be had!</div>
            </div>

        <div className="stat">
            <div className="stat-title">Adventurers</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
    </div>
    )
}

export default SiteStats