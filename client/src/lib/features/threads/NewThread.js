import React, { useState} from "react";
import { useContext } from "react";
import { RefreshContext, UserIdContext } from "../../../App";
import ThreadsContainer from "./ThreadsContainer";
import ThreadForm from "./ThreadForm";



function NewThread({setRefresh}) {

    return (
        <div className="grid grid-cols-4 w-full">
            <div className="col-span-1 mt-16">
                <ThreadsContainer />
            </div>
            <div className="col-span-3 mt-6">
                <div className="messages-container mt-10">
                <div className="flex flex-col h-full">
                <div className="card mx-5">
                <ThreadForm setRefresh={setRefresh} />
                </div>
                </div>
                </div>
            </div>
    </div>)
}

export default NewThread