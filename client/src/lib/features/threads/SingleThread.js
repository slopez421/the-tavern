import React, { useState, useEffect } from "react";
import { useParams, useResolvedPath } from "react-router";
import { useContext } from "react";
import { RefreshContext } from "../../../App";
import ThreadsContainer from "./ThreadsContainer";
import MessageBubble from "../messages/MessageBubble";

function SingleThread({setRefresh}) {
    const refresh = useContext(RefreshContext)
    const [messages, setMessages] = useState([])
    const path = useParams()

    console.log(path.id)
    useEffect(() => {
        fetch(`/messages/threads/${path.id}`)
        .then((r) => r.json())
        .then((thread) => setMessages(thread))
    }, [refresh]);
    console.log(messages)

    return (
        <div className="grid grid-cols-4 w-full mx-10">
            <div className="col-span-1 mt-20">
                <ThreadsContainer />
            </div>
            <div className="col-span-3 mt-10">
                <div className="messages-container mt-10">
                <div className="card mx-20">
                    { messages.length !== 0 ?
                    (messages.map((message) => <MessageBubble key={message.id} message={message} />)) 
                    : 
                   ( <div className="card card-normal bg-ghost text-info items-center">
                    <div className="card-title mt-40">
                        <center>
                        No messages to display.<br />
                        Try sending one!
                         </center>
                    </div>
                </div>)}

                </div>
                </div>
            </div>
    </div>)
}

export default SingleThread