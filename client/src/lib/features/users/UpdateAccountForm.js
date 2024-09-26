import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function UpdateAccountForm({firstname, lastname, username, user_id, setUpdating, setUser, setRefresh}) {
    const accountSchema = yup.object().shape({
        first_name: yup.string().required("If there are no changes to your first name, leave first name in place."),
        last_name: yup.string().required("If there are no changes to your last name, leave your last name in place."),
        username: yup.string().required("If there are no changes to your username, leave the current username in place."),
    });
    
    const accountFormik = useFormik({
        initialValues: {
            first_name: firstname,
            last_name: lastname,
            username: username,
        },
        validationSchema: accountSchema,
        onSubmit: (values) => {
            fetch(`/users/${user_id}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values, null, 2),
              }).then((res) => {
                if (res.status === 201) {
                    res.json().then((user) => setUser(user));
            } else {
                res.json().then((error) => alert(error.error))
            }

              });    
        }
    })

    return (
    <form className="account-update-container" onSubmit={accountFormik.handleSubmit}>
    <table className="table table-lg">
    <thead>
       <tr className="text-info">
            <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        <th></th>
        </tr>
    </thead>
    <tbody>
        
    <tr className="text-primary">
    <td>
            <span className="label-text-alt text-error">{accountFormik.errors.first_name}</span>
            <label className="input input-bordered input-xs w-full flex items-center text-secondary-content">
            <input id="first_name" type="text" className="grow" placeholder="" name="first_name" onChange={accountFormik.handleChange} value={accountFormik.values.first_name} />
            </label>
    </td>
    <td>
            <span className="label-text-alt text-error">{accountFormik.errors.last_name}</span>
            <label className="input input-bordered input-xs w-full flex items-center text-secondary-content">
            <input id="last_name" type="text" className="grow" placeholder="" name="last_name" onChange={accountFormik.handleChange} value={accountFormik.values.last_name} />
            </label>
    </td>
    <td>
            <span className="label-text-alt text-error">{accountFormik.errors.username}</span>
            <label className="input input-bordered input-xs w-full flex items-center text-secondary-content"> 
            <input id="username" type="text" className="grow" placeholder="" name="username" onChange={accountFormik.handleChange} value={accountFormik.values.username} />
            </label>
    </td>
    <td>
    </td>
    </tr>
    </tbody>
   </table>
   <button className="btn btn-sm" type="submit">Update Account</button>
    <button className="btn btn-sm" onClick={() => setUpdating(false)}>Cancel</button>
   </form>)
}

export default UpdateAccountForm