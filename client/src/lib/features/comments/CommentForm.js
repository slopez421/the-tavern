import React from "react";
import {useFormik} from "formik";
import * as yup from "yup";
import { UserIdContext } from "../../../App";
import { useContext } from "react";

function CommentForm({post_id, setRefresh}) {
const user_id = useContext(UserIdContext)

const commentFormSchema = yup.object().shape({
    body: yup.string().required("Comments will not post if left empty.").max(100),
});

const commentFormik = useFormik({
    initialValues: {
        body: "",
        user_id: user_id,
        post_id: post_id,
    },

    validationSchema : commentFormSchema,
    onSubmit: (values) => {
        console.log(values)
        commentFormik.resetForm({body: ""})
        fetch("/comments", {
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
    return <form className="form-control w-full" onSubmit={commentFormik.handleSubmit}> 
        <input id="body" type="text" className="input input-xs input-bordered input-success" placeholder="Leave a comment!" name="body" onChange={commentFormik.handleChange} value={commentFormik.values.body} /><br></br>
        <p className="text-error text-xs">{commentFormik.errors.body}</p>
    </form>
   

}

export default CommentForm;