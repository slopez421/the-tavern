import React, { useContext } from "react";
import PostPreview from "./PostPreview";
import { PostsContext } from "../../../App";

function FilteredPosts({ttrpg, setRefresh}) {
    
    const posts = useContext(PostsContext)
    const filtered_posts = posts.filter((post) => post.ttrpg === ttrpg)
    let content;

    if (filtered_posts.length !== 0 ) {
        content = filtered_posts.map((post) => <PostPreview setRefresh={setRefresh} key={post.id} post={post}/>)
    } else {
        content = (
        <div className="card" >
            <div className="card card-bordered border-primary card-normal shadow-xl max-w-lg mt-10 mx-2 rounded-box bg-success text-secondary">
                    <div className="card-body items-center">
                    <h2 className="card-title">No Posts Yet!</h2>
                    </div>
             </div>
                </div>)
    }
return (<div className="items-center">
        <div className="flex flex-col-reverse flex-none">
            {content}
</div>
</div>);
}

export default FilteredPosts