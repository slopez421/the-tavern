import React, { useContext } from "react";
import PostPreview from "./PostPreview";
import { PostsContext } from "../../../App";
import AddPostForm from "./AddPostForm";

function PostsContainer({setRefresh}) {
    
    const posts = useContext(PostsContext)
    let content;

    if (!posts) {
        content = <span className="loading loading-spinner loading-lg"></span>
    } else if (posts) {
        content = posts.map((post) => <PostPreview setRefresh={setRefresh} key={post.id} post={post}/>)
    }

    return (<div>
        <AddPostForm setRefresh={setRefresh}/>
        <div className="flex flex-col-reverse">
        {content}
            </div></div>);
}

export default PostsContainer