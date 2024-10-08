import React from "react";
import PostsContainer from "../features/posts/PostsContainer";
import FilterMenu from "./FilterMenu";
import SiteStats from "./SiteStats";

function Home({setRefresh}) {

    return (
        <div className="grid grid-cols-4">
            <div className="col-span-1 mt-10">
                <div className="item-fixed">
                <FilterMenu />
                </div>
            </div>
            <div className="col-span-2 mt-10">
                <div className="overscroll-none">
                <PostsContainer setRefresh={setRefresh}/>
                </div>
            </div>
            <div className="col-span-1 mt-10">
                <div className="home-stats">
                    <SiteStats />
                </div>
            </div>
    </div>
    )
}

export default Home