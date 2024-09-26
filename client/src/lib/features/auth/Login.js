import React from "react";
import { useState } from "react";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Login({setUser}) {

const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="grid place-content-center m-20">
                <div className="hero rounded-box bg-success min-w-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Welcome!</h1>
                    <p className="py-6">
                    The Tavern is a cozy resting place for digital travellers seeking
                    adventuring parties to join or host. Find other players who share the same schedule 
                    or timezone as you. Send a message if a post catches your eye, or save your likes to chat later. 
                    Adventures await inside.
                </p>
            </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    {showLogin ? (
                <>
                <LoginForm setUser={setUser} setShowLogin={setShowLogin}/>
                </>
                ): (
                <>
                <SignUpForm setUser={setUser} setShowLogin={setShowLogin}/>
                </>
                )}
    </div>
  </div>
</div>
        </div>)
    }
    
export default Login