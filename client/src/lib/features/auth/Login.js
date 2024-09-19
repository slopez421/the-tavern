import React from "react";
import { useState } from "react";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Login() {

const [showLogin, setShowLogin] = useState(true);
    
    return (
        <div className="grid place-content-center m-40">
            {showLogin ? (
                <>
                <LoginForm setShowLogin={setShowLogin}/>
                </>
                ): (
                <>
                <SignUpForm setShowLogin={setShowLogin}/>
                </>
                )}
        </div>)
    }
    
export default Login