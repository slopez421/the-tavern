import React from "react";
import { useContext } from "react";
import UserMessage from "./UserMessage";
import { PostsContext, UserIdContext } from "../../../App";
import PostPreview from "../posts/PostPreview";
import UserStats from "./UserStats";

function Profile() {
    const user_id = useContext(UserIdContext)

    const posts = useContext(PostsContext)
    const user_posts = posts.filter((post) => post.id === user_id)

    return (
        <div className="grid grid-cols-4">
            <div className="col-span-1 mt-10">
                <div className="item-fixed">
                <UserMessage />
                </div>
            </div>
            <div className="col-span-2 mt-10">
                <div className="overscroll-none">
                {user_posts.length !== 0 ? user_posts?.map((post) => {
                    return <PostPreview key={post.id} post={post}/>
                }):
                <div className="card-title justify-center text-info mt-20">No posts yet, traveller.</div>}
                </div>
            </div>
            <div className="col-span-1 mt-10">
                <div className="home-stats">
                    <UserStats />
                </div>
            </div>
    </div>
    )
}

export default Profile;