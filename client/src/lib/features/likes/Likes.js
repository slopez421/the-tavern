import React, { useContext, useState, useEffect } from "react";
import {UserIdContext} from "../../../App";
import PostPreview from "../posts/PostPreview";
import LikesStats from "./LikesStats";

function Likes() {
    const [userInfo, setUserInfo] = useState(null);
    const user_id = useContext(UserIdContext)
    
    useEffect(() => {
        fetch(`/users/${user_id}`)
        .then((r) => r.json())
        .then((userInfo) => setUserInfo(userInfo))
      }, [user_id])

    return (
        <div className="grid grid-cols-4">
            <div className="col-span-1 mt-20 mx-20">
                <LikesStats likes={userInfo?.liked_posts} />
            </div>
            <div className="col-span-2 mt-10">
                <div className="overscroll-none">
                {userInfo?.liked_posts?.map((post) => {
                    return <PostPreview key={post.id} post={post} />
                })}
                </div>
            </div>
            <div className="col-span-1 mt-10">
                <div className="home-stats">
                </div>
            </div>
    </div>
    )
}

export default Likes;