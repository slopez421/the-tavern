import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RefreshContext } from "../../../App";
import { UserIdContext } from "../../../App";
import { ThreadsContext } from "../../../App";
import ThreadPreview from "./ThreadPreview";

function ThreadsContainer() {
    const refresh = useContext(RefreshContext)
    const userid = useContext(UserIdContext)
    const threads = useContext(ThreadsContext)
    const user_threads = threads.filter((thread) => userid === (thread.thread_creator_id || thread.thread.receiver_id)  )
    
    console.log(user_threads)

    return <div className="threads-menu">
            <div className="divider divider-success"><div className="text-secondary">Messages</div></div>
            {user_threads.length !== 0 ? (user_threads.map((thread) => 
            <ThreadPreview thread={thread}/>
            )) : <p>No Messages yet!</p>}
    </div>
    
}

export default ThreadsContainer