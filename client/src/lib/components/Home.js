import React, {useEffect, useState} from "react";
import PostsContainer from "../features/posts/PostsContainer";

function Home() {

    return (
        <div className="grid grid-cols-3">
            <div className="col-span-1 mt-10">
                <p>form</p>
            </div>
            <div className="col-span-1 mt-10">
            <PostsContainer />
            </div>
            <div className="col-span-1 mt-10">
                <p>Count Box</p>
            </div>
    </div>
    )
}

export default Home