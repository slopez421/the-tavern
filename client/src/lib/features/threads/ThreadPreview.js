import React from "react";
import { useContext } from "react";
import { UserIdContext } from "../../../App";
import { NavLink } from "react-router-dom";

function ThreadPreview({thread}) {

    const  currentUserId = useContext(UserIdContext)
    let displayName;
    if (thread.thread_creator_id === currentUserId){
        displayName = thread.thread_receiver.username
    }
    if (thread.thread_receiver_id === currentUserId){
        displayName = thread.thread_creator.username
    }

    return (<>
        <div className="btn btn-ghost btn-square w-full hover:text-primary-content hover:bg-info">
            <NavLink to={`/messages/threads/${thread.id}`}>{displayName}</NavLink>
            </div>
            <div className="divider divider-success"></div>
    </>) 
}

export default ThreadPreview;