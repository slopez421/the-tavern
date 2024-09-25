import React from "react";
import {useFormik} from "formik";
import * as yup from "yup";
import { UserIdContext } from "../../../App";
import { useContext } from "react";

function MessageForm({thread_id, setRefresh}) {
const user_id = useContext(UserIdContext)

const messageFormSchema = yup.object().shape({
    body: yup.string().required("Messages cannot be empty.").min(2),
});

const messageFormik = useFormik({
    initialValues: {
        body: "",
        user_id: user_id,
        thread_id: thread_id,
    },

    validationSchema : messageFormSchema,
    onSubmit: (values) => {
        console.log(values)
        messageFormik.resetForm({body: ""})
        fetch("/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        }
    ).then((res) => {
            if (res.ok) {
                setRefresh();
            }
            });
        },
    });
    return <form className="form-control w-full mt-5" onSubmit={messageFormik.handleSubmit}> 
        <input id="body" type="text" className="input input-md input-bordered input-success" placeholder="Send a message!" name="body" onChange={messageFormik.handleChange} value={messageFormik.values.body} />
        <p className="text-error text-md">{messageFormik.errors.body}</p>
    </form>
   

}

export default MessageForm;