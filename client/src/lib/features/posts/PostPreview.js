import React from "react";
import PostAuthor from "./PostAuthor";
import { Link } from "react-router-dom";
const PostPreview = ({post}) => {

    return(
        <div className="flex flex-wrap-reverse">
                       <div className="card-normal shrink-1 shadow-2xl rounded-box bg-primary text-primary-content mt-10">
                       <div className="card-body">
                       <h3>Username</h3>
                           <h2 className="card-title"><Link to={`/posts/${post.id}`}>{post.title}</Link></h2>
                               <h3>This adventuring party has {post.players_have} players and is seeking {post.players_need} more players.</h3>
                           <p>{post.body}</p>
                   <div className="card-actions">
                       <div className="dropdown dropdown-hover dropdown-top"> 
                           <button className="btn" onClick={() => console.log('Handle delete')}>
                               <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   className="h-6 w-6"
                                   fill="currentColor"
                                   viewBox="0 0 24 24"
                                   stroke="currentColor">
                                   <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       strokeWidth="2"
                                       d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                               </svg>
                           </button>
                           </div>
                           </div>
                   <div className="collapse collapse-arrow">
                       <input type="checkbox" className="peer" />
                           <div className="collapse-title bg-neutral-content text-primary peer-checked:bg-neutral-content peer-checked:text-primary">
                           <p className="card-title">Comments</p>
                       </div>
                           
                       </div>
               </div>
             </div>
                </div>
    )
    
}
export default PostPreview