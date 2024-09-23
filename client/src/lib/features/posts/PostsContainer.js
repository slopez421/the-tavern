import React, { useContext } from "react";
import PostPreview from "./PostPreview";
import { useGetPostsQuery } from "../api/apiSlice";
import { useGetLikesQuery } from "../api/apiSlice";
import { useAppSelector } from "../../hooks";
import { UserId } from "../../../App";

function PostsContainer() {
    
    const {data: posts, isLoading, isSuccess, isError, error} = useGetPostsQuery()
    const {data: likes} = useGetLikesQuery()
    const user_likes = likes?.filter((like) => like.user_id === UserId)
    let content;


    if (isLoading) {
        content = <span className="loading loading-spinner loading-lg"></span>
    } else if (isSuccess) {
        content = posts.map((post) => <PostPreview likes={user_likes} key={post.id} post={post}/>)
    } else if (isError) {
        content = <p>{error.message}</p>
    }
    return (<div className="flex flex-col-reverse flex-none">
        {content}
            </div>);
}

export default PostsContainer