import React from "react";
import PostAuthor from "./PostAuthor";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { selectCurrentUser } from "../users/usersSlice";
import { useFormik } from "formik";
import { useAddNewLikeMutation } from "../api/apiSlice";
import LikesForm from "../likes/LikesForm";
import { useDeleteLikeMutation } from "../api/apiSlice";

function PostPreview({post, likes}) {
    const user = useAppSelector(selectCurrentUser)
    const [addNewLike, {isLoading}] = useAddNewLikeMutation()
    const matched_like = likes?.find((like) => like.post_id === post.id)
    const [deleteLike, {isSuccess}] = useDeleteLikeMutation()

    const formik = useFormik({
        initialValues: {
            heart_color: "none",
            user_id: user.id,
            post_id: post.id,
        },
        onSubmit: async (values) => {
            try {
                await addNewLike(values).unwrap().then((payload) => console.log('fulfilled', payload))
               
            } catch (err) {
                console.log(err)
            }
        },
    })

    function handleDelete() {
        if (matched_like) {
            async (matched_like) => {
                try {
                    await deleteLike(matched_like).unwrap().then((payload) => console.log('fulfilled', payload))
                } catch (err) {
                    console.log(err)
                }
            }
        } else {
            <></>
        }

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
                           <button className="btn" onClick={() => handleDelete()}>
                               <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   className="h-6 w-6"
                                   fill={matched_like ? matched_like.heart_color : formik.values.heart_color}
                                   viewBox="0 0 24 24"
                                   stroke="currentColor">
                                   <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       strokeWidth="2"
                                       d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                               </svg>
                           </button>
                           <LikesForm formik={formik} />
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
}
export default PostPreview