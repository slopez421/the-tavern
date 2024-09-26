import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { RefreshContext } from "../../../App";
import ThreadsContainer from "./ThreadsContainer";
import MessageBubble from "../messages/MessageBubble";
import MessageForm from "../messages/MessageForm";

function SingleThread({setRefresh}) {
    const refresh = useContext(RefreshContext)
    const [messages, setMessages] = useState([])
    const path = useParams()

    useEffect(() => {
        fetch(`/messages/threads/${path.id}`)
        .then((r) => r.json())
        .then((thread) => setMessages(thread))
    }, [path.id, refresh]);

    return (
        <div className="grid grid-cols-4 w-full">
            <div className="col-span-1 mt-16">
                <ThreadsContainer />
            </div>
            <div className="col-span-3 mt-6">
                <div className="messages-container mt-10">
                <div className="flex flex-col-reverse h-full">
                <div className="card mx-5">
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
                <MessageForm thread_id={path.id} setRefresh={setRefresh}/>
                </div>
            </div>
    </div>)
}

export default SingleThread