import React, {useEffect, useState} from "react";
import PostsContainer from "../features/posts/PostsContainer";
import FilterMenu from "./FilterMenu";
import SiteStats from "./SiteStats";

function Home() {

    return (
        <div className="grid grid-cols-4">
            <div className="col-span-1">
                <FilterMenu />
            </div>
            <div className="col-span-2">
                <div className="posts-containers">
                <PostsContainer/>
                </div>
            </div>
            <div className="col-span-1">
                <div className="home-stats">
                    <SiteStats />
                </div>
            </div>
    </div>
    )
}

export default Home