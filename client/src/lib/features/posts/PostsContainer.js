import React from "react";
import PostPreview from "./PostPreview";
import { useGetPostsQuery } from "../api/apiSlice";

function PostsContainer() {
    const {data: posts, isLoading, isSuccess, isError, error} = useGetPostsQuery()
    let content;

    console.log(isSuccess, isLoading, posts)

    if (isLoading) {
        content = <span className="loading loading-spinner loading-lg"></span>
    } else if (isSuccess) {
        content = posts.map((post) => <PostPreview key={post.id} post={post}/>)
    } else if (isError) {
        content = <p>{error.message}</p>
    }
    return (<div className="flex flex-row flex-wrap-reverse flex-none">
        {content}
            </div>);
}

export default PostsContainer