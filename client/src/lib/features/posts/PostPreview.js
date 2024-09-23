import React from "react";
import PostAuthor from "./PostAuthor";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { useFormik } from "formik";
import { useAddNewLikeMutation } from "../api/apiSlice";
import LikesForm from "../likes/LikesForm";
import { useDeleteLikeMutation } from "../api/apiSlice";
import { UserId } from "../../../App";

function PostPreview({post, likes}) {
    const [addNewLike, {isLoading}] = useAddNewLikeMutation()
    const matched_like = likes?.find((like) => like.post_id === post.id)

    const formik = useFormik({
        initialValues: {
            heart_color: "none",
            user_id: UserId,
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
        return console.log('delete')
    }

    return(
        <div className="card" >
            <div className="card card-bordered border-primary card-normal shadow-xl max-w-lg mt-10 mx-2 rounded-box bg-success text-secondary">
                    <div className="card-body">
                    <p>Posted by: Username</p>
                    <h2 className="card-title"><u><Link to={`/posts/${post.id}`}>{post.title}</Link></u></h2>
                    <p><span className="badge badge-sm badge-primary">Has {post.players_have} {post.players_have === 1 ? "Player": "Players"}</span> | <span className="badge badge-sm badge-error">Needs {post.players_need} {post.players_need === 1 ? "Player": "Players"}</span> | <span className="badge badge-sm badge-info">{post.timezone}</span> | <span className="badge badge-sm badge-warning-content">{post.ttrpg}</span></p>
                    <p>{(post.body).substring(0, 50)}...</p>
                   <div className="card-actions">
                       <div className="dropdown dropdown-hover dropdown-top"> 
                           <button className="btn btn-sm" onClick={handleDelete}>
                               <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   className="h-6 w-6"
                                   fill={matched_like ? matched_like.heart_color : formik.values.heart_color}
                                   viewBox="0 0 24 24"
                                   stroke={matched_like ? matched_like.heart_color : "currentColor"}>
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
                           <p>Comments</p>
                       </div>
             </div>
                </div>
    )
    
}

export default PostPreview