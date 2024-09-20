import React from "react";
import { useGetPostsQuery } from "../features/api/apiSlice";

function SiteStats() {
    const {data: posts, isLoading, isSuccess, isError, error} = useGetPostsQuery('getPosts')

    return (
        <div className="stats stats-vertical shadow mt-10">
            <div className="stat">
                <div className="stat-title">Total Posts on the Board</div>
                <div className="stat-value">Num</div>
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