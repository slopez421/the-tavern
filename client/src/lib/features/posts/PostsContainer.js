import React from "react";
import { useAppSelector } from "../../hooks";
import PostPreview from "./PostPreview";

function PostsContainer() {
const posts = useAppSelector(state => state.posts)
    return <div>
                <hr />
                <div className="flex flex-wrap-reverse flex-none">
                    {posts.map((post) => 
                    <PostPreview key={post.id} post={post} className="basis-1/4" />)}
                </div>
        
            </div>
}

export default PostsContainer