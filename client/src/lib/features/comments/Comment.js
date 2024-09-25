import React from "react";

function Comment({comment, user_id}) {
    if (comment.user_id === user_id) {
            return <div className="text-right">
            <p className="text-primary">{comment.user?.username}</p>
            <p>{comment.body}</p>
        </div>
    } else return (
        <>
         <p className="text-primary">{comment.user?.username}</p>
         <p>{comment.body}</p>
         </>
    )
}

export default Comment;