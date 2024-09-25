import React from "react";
import ThreadsContainer from "../features/threads/ThreadsContainer";

function MessagesPage() {

    return (
        <div className="grid grid-cols-4 w-full">
            <div className="col-span-1 mt-16">
                <ThreadsContainer />
            </div>
            <div className="col-span-3 mt-6">
                <div className="messages-container mt-10">
                <div className="card mx-20">
                    <div className="card card-normal bg-ghost text-info items-center">
                        <div className="card-title mt-40">
                            <center>
                            No messages to display.<br />
                             Select an existing message or create a new one.
                             </center>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    </div>)
}

export default MessagesPage