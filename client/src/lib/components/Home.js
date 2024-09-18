import React, {useEffect, useState} from "react";
import PostsContainer from "../features/posts/PostsContainer";
import FilterMenu from "./FilterMenu";
import SiteStats from "./SiteStats";
import AddPostForm from "../features/posts/AddPostForm";

function Home() {

    return (
        <div className="grid grid-cols-4">
            <div className="col-span-1 mt-10">
                <div className="item-fixed">
                <FilterMenu />
                </div>
            </div>
            <div className="col-span-2 mt-10">
                <div>
                <AddPostForm />
                <PostsContainer/>
                
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