import React from "react";
import * as yup from "yup"
import { useFormik } from "formik";
import { useNavigate } from "react-router";

import { useAppDispatch} from "../../hooks";
import { userLoggedIn } from "./authSlice";

function LoginForm({setShowLogin}) {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const loginFormSchema = yup.object().shape({
        username: yup.string().required("Username is required to login."),
      });
      
      const loginFormik = useFormik({
        initialValues: {
            username: "",
        },
      
        validationSchema : loginFormSchema,
        onSubmit: (values) => {
            dispatch(userLoggedIn(values))
            navigate('/')
            },
        });

    return <div className="card bg-base-100 w-96 max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={loginFormik.handleSubmit}>
        <div className="card-title justify-center">Welcome Back to The Tavern!</div><br />
        <label className="input input-bordered flex items-center gap-2">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
        <input type="text" className="grow" placeholder="Username" id="username" name="username" onChange={loginFormik.handleChange} value={loginFormik.values.username}/>
        </label>
        <p style={{ color: "red" }}>{loginFormik.errors.username}</p>
        <label className="input input-bordered flex items-center gap-2">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd" />
            </svg>
            </label>
            <button className="btn btn-primary" type="submit">Login</button>
            <button className="btn btn-primary" onClick={() => {setShowLogin(false)}}>Don't have an account?</button>
        </form>
    </div>
}

export default LoginForm