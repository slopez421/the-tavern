import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserIdContext } from "../../../App";
import { ThreadsContext } from "../../../App";
import ThreadPreview from "./ThreadPreview";

function ThreadsContainer() {
    const userid = useContext(UserIdContext)
    const threads = useContext(ThreadsContext)
    const user_threads = threads.filter((thread) =>  ( userid === thread.thread_creator_id) || ( userid === thread.thread_receiver_id)  )

    return <div className="threads-menu">
            <div className="card-title bg-success text-secondary h-10">
                <p className="mx-10">Messages</p>
                <Link to="/messages/new">
                <div className="btn btn-sm shadow-none btn-square border-none bg-success hover:bg-info mx-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                </div>
            </Link>
            </div>
            {user_threads.length !== 0 ? (user_threads.map((thread) => 
            <ThreadPreview key={thread.id} thread={thread}/>
            )) : <div className="card-body items-center text-success-content">Send your very first message!</div>}
    </div>
    
}

export default ThreadsContainer