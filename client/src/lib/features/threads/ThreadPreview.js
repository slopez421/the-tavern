import React from "react";
import { useContext } from "react";
import { UserIdContext } from "../../../App";
import { Link } from "react-router-dom";

function ThreadPreview({thread}) {
//link to thread_id messages for the opening up area 

    const  currentUserId = useContext(UserIdContext)
    let displayName;
    if (thread.thread_creator_id === currentUserId){
        displayName = thread.thread_receiver.username
    }

    return (<>
        <div className="btn btn-ghost w-full hover:text-primary-content hover:bg-info">
            <Link to={`/messages/threads/${thread.id}`}>{displayName}</Link>
            </div>
            <div className="divider divider-success"></div>
    </>) 
}

export default ThreadPreview;