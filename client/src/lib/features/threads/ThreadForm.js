import React, { useState } from "react";
import { useContext } from "react";
import { UsersContext, UserIdContext} from "../../../App";
import { useFormik } from "formik";
import * as yup from 'yup';
import { useNavigate } from "react-router";


function ThreadForm({setRefresh}) {
    const users = useContext(UsersContext)
    const [search, setSearch] = useState("")
    const currentUserId = useContext(UserIdContext)
    const navigate = useNavigate()
    
    const thread_schema = yup.object().shape({
        thread_creator_id: yup.string().required("user must be logged in to send a message."),
        thread_receiver_id: yup.string().required("user must be logged in to send a message."),
    });
    

    function handleChange(e) {
        e.preventDefault();
        setSearch(e.target.value);
    };
    const matched_users = users.filter((user) => {
        return (user.username.includes(search) && search.length!= 0)
    })

const formik = useFormik({
    initialValues: {
        thread_receiver_id: "",
        thread_creator_id: currentUserId,
    },
    validationSchema: thread_schema,
    onSubmit: (values) => {
        formik.resetForm()
        fetch("/threads", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        }
    ).then((res) => {
            if (res.ok) {
            res.json().then((thread) => {
                setRefresh()
                navigate(`/messages/threads/${thread.id}`)
            })} else {
                res.json().then((error) => alert(error.error))
            } 
            });
        },
    
})
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
            <label className="input input-success input-bordered input-sm flex items-center gap-2 mt-6">
            <svg
             xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
            <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd" />
        </svg>
        <input type="text" className="w-full" onChange={handleChange} value={search} placeholder="Search for a username" />
        <button type="submit" disabled={formik.values.thread_receiver_id === ""} className="btn btn-success mt-20">Starts a Chat</button>
        </label>
        <div className="w-full mt-2">
        {search.length === 0 ? <></> :
         <select id="thread_receiver_id" className="select select-success" name="thread_receiver_id" onChange={formik.handleChange} value={formik.values.thread_receiver_id}>
         {matched_users?.length !== 0 ? matched_users.map((user) => 
         <option key={user.id} value={user.id} className="btn btn-info m-1 hover:bg-success text-primary-content">
             {user.username}
         </option>) : <></>}
         </select> }
       
        </div>
        </form>
    </div>
    )
}

export default ThreadForm;