import React from "react";


function PostPreview({post}) {
    const {title, body, players_have, players_need, timezone, ttrpg, preferred_time, preferred_weekday, user_id} = post;
    //const matched_like = likes.find((like) => like.user_id === currentUser.id)

    // const formik = useFormik({
    //     initialValues: {
    //         //heart_color: "none",
    //         user_id: user_id,
    //         listing_id: listing.id,
    //     },

    //     onSubmit: (values) => {
    //         formik.resetForm()
    //         fetch("/likes", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(values),
    //         }
    //     ).then((res) => {
    //             if (res.ok) {
    //                 setRefreshPage(!refreshPage);
    //             }
    //             });
    //         },
    // })

    // function handleDelete() {
    //     matched_like ?
    //     fetch("/likes", {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(matched_like)
    //         }).then((r) => {
    //             if (r.status === 204) {
    //                 setRefreshPage(!refreshPage)
    //             }
    //         }) :
    //         <></>
    //     }
    
    
    return <div className="card-compact shrink-1 shadow-2xl rounded-box bg-primary text-primary-content mt-10">
            <div className="card-body">
            <h3>Username: {user_id}</h3>
                <h2 className="card-title">{title}</h2>
                    <h3>This adventuring party has {players_have} players and is seeking {players_need} more players.</h3>
                <p>{body}</p>
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
}

export default PostPreview