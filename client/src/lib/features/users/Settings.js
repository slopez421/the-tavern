import React, { useContext, useState } from "react";
import { UserIdContext, FirstNameContext, UsernameContext, LastNameContext} from "../../../App";
import UpdateAccountForm from "./UpdateAccountForm";

function Settings({setRefresh, setUser}) {
    const firstname = useContext(FirstNameContext);
    const lastname = useContext(LastNameContext);
    const username = useContext(UsernameContext);
    const user_id = useContext(UserIdContext);

    const [updating, setUpdating] = useState(false)
    
    return (
        <div className="grid grid-cols-4">
            <div className="col-span-1 mt-16">
            <div className="threads-menu">
            <div className="card-title bg-success text-secondary h-10 justify-center">
                <p className="justify-center">Settings</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 p-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </div>
                </div>
            </div>
            <div className="col-span-3">
                <div className="settings-container mt-10">
                <div className="card">
                    <div className="card card-normal bg-ghost text-info items-center">
                        <div className="card-title mt-10">
                        <div className="table">
            {updating ? 
            <UpdateAccountForm setUpdating={setUpdating} firstname={firstname} lastname={lastname} username={username} user_id={user_id} setRefresh={setRefresh} setUser={setUser}/> 
            :  <table className="table table-lg mx-10">
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
       <td>{firstname ? firstname : "No First Name Set"}</td>
       <td>{lastname ? lastname : "No Last Name Set"}</td>
       <td>{username ? username : "No Username Set"}</td>
        <td>
           <button  className="btn btn-sm bg-info-content text-info hover:bg-warning" onClick={() => setUpdating(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
               <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
           </svg>
           </button>
        </td>
          </tr>
               </tbody>
           </table>}
               
                </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    </div>)
}

export default Settings;