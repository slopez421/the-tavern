import React from "react";

function LikesStats({likes}) {
    
    return (
        <div className="stats stats-vertical shadow w-full mx-10">
        <div className="stat place-items-center">
          <div className="stat-value">{likes?.length}</div>
          <div className="stat-desc">Likes</div>
        </div>
      </div>
    )
}

export default LikesStats;