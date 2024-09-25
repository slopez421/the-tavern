import React, { useContext } from "react";
import { useFormik } from "formik";
import LikesForm from "../likes/LikesForm";
import { UserIdContext } from "../../../App";
import Comment from "../comments/Comment";
import CommentForm from "../comments/CommentForm";
import { RefreshContext } from "../../../App";

function PostPreview({post, setRefresh}) {
    const user = post.user
    const user_id = useContext(UserIdContext)
    const refresh = useContext(RefreshContext)

    const matched_like = post.likes.find((like) => like.user_id === user_id)
    
    function ttrpgName(name) {
        let ttrpg = "";
        switch (name) {
            case "dnd":
                ttrpg = "Dungeons and Dragons";
                break;
            case "mtg":
                ttrpg = "Magic: The Gathering";
                break;
            case "shadowrun":
                ttrpg = "Shadowrun";
                break;
            case "fallout":
                ttrpg = "Fallout: The Tabletop Game";
                break;
            case "pathfinder":
                ttrpg = "Pathfinder";
                break;
                default:
                    ttrpg = ""
                break; 
        }
        return ttrpg
    }

    const formik = useFormik({
        initialValues: {
            heart_color: "none",
            user_id: user_id,
            post_id: post.id,
        },
        onSubmit: (values) => {
        formik.resetForm();
        fetch("/likes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            }
        ).then((res) => {
                if (res.ok) {
                    setRefresh(!refresh)
                }
                });
        }
    })

    function handleDelete() {
        matched_like ?
        fetch(`/likes/${matched_like.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(matched_like.id)
            }).then((r) => {
                if (r.status === 204) {
                    setRefresh()
                }
            }) :
            <></>
        }

    return(
        <div>
            <div className="card card-normal shadow-xl max-w-lg mt-10 mx-2 rounded-box bg-success text-secondary">
                    <div className="card-body">
                    <p>Posted by: {user?.username}</p>
                    <h2 className="card-title"><u>{post.title}</u></h2>
                    <p><span className="badge badge-sm badge-primary">Has {post.players_have} {post.players_have === 1 ? "Player": "Players"}</span> | <span className="badge badge-sm badge-error">Needs {post.players_need} {post.players_need === 1 ? "Player": "Players"}</span> | <span className="badge badge-sm badge-info">{post.timezone}</span> | <span className="badge badge-sm badge-warning-content">{ttrpgName(post.ttrpg)}</span></p>
                    <p>{post.body}</p>
                   <div className="card-actions">
                       <div className="dropdown dropdown-hover dropdown-top"> 
                           <button className="btn btn-sm bg-primary-content" onClick={handleDelete}>
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
                           {matched_like ? "" : 
                            <LikesForm formik={formik}/>
                                }
                           </div>
                           </div>
                            </div>
                            <details className="collapse collapse-arrow join-item border-info">
                            <summary className="collapse-title text-sm font-medium bg-info text-success box border-info">Comments</summary>
                            <div className="collapse-content bg-primary-content box"><br />
                            {post.comments[0] ? post.comments.map((comment) => <Comment key={comment.id} user_id={user_id} comment={comment}/>) : <div className="text-primary">Be the first to comment!</div>} <br />
                            <CommentForm setRefresh={setRefresh} post_id={post.id}/>
                            </div>
                            </details>
             </div>
             
                </div>
    )
    
}

export default PostPreview