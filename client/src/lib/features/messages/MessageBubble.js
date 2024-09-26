import React from "react";
import { UserIdContext } from "../../../App";
import { useContext } from "react";

function MessageBubble({message}) {

    const currentUserId = useContext(UserIdContext);
    
    return <div>
        <div className={message.user_id === currentUserId ? "chat chat-end" : "chat chat-start"}>
        <div className="chat-header">
            {message.user.username}
        </div>
        <div className="chat-bubble bg-success">{message.body}</div>
            </div>
         </div>
}

export default MessageBubble