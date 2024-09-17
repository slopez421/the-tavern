import React from "react";
import { useAppSelector } from "../../hooks";
import PostPreview from "./PostPreview";

function PostsContainer() {
const posts = useAppSelector(state => state.posts)
    return <div>
                <div className="flex flex-wrap-reverse">
                    {posts.map((post) => 
                    <PostPreview key={post.id} post={post} />)}
                </div>
        
            </div>
}

export default PostsContainer