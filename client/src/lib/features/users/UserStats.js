import React, { useContext } from "react";
import { PostsContext, UserIdContext, ThreadsContext} from "../../../App";


function UserStats() {
    const posts = useContext(PostsContext)
    const user_id = useContext(UserIdContext)
    const threads = useContext(ThreadsContext)
    
    const user_threads = threads.filter((thread) => (thread.thread_creator_id === user_id) || (thread.thread_receiver_id === user_id))

    const user_posts = posts.filter((post) => post.user_id === user_id)

    return (
        <div className="stats stats-vertical shadow-lg mt-10">
            <div className="stat text-info">
                <div className="stat-title">Total Posts on the Board</div>
                <div className="stat-value">{user_posts?.length}</div>
                <div className="stat-desc">Adventures waiting to be had!</div>
            </div>
        <div className="stat text-info">
            <div className="stat-title">Adventurers</div>
            <div className="stat-value">{user_threads?.length}</div>
            <div className="stat-desc">spoken to in the Tavern</div>
        </div>
    </div>
    )
}

export default UserStats;