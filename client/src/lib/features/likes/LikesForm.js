import React from "react";
import { FaDiceD20 } from "react-icons/fa";

function LikesForm({formik}) {

    return (
        <form onSubmit={formik.handleSubmit}>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow">
                <div className="join">
                    <button className="btn btn-sm btn-ghost join-item" name="heart_color" value="pink" onClick={() => formik.setFieldValue("heart_color","pink")} type="submit">
                    <FaDiceD20 color="pink" className="h-6 w-6"/>  
                    </button>
                    <button className="btn btn-sm btn-ghost join-item" name="heart_color" value="red" onClick={() => formik.setFieldValue("heart_color","red")} type="submit">
                    <FaDiceD20 color="red" className="h-6 w-6"/>
                    </button>
                    <button className="btn btn-sm btn-ghost join-item" name="heart_color" value="orange" onClick={() => formik.setFieldValue("heart_color","orange")} type="submit">
                    <FaDiceD20 color="orange" className="h-6 w-6"/>                       
                    </button>
                    <button className="btn btn-sm btn-ghost join-item" name="heart_color" value="yellow" onClick={() => formik.setFieldValue("heart_color","yellow")} type="submit">
                    <FaDiceD20 color="yellow" className="h-6 w-6"/>
                    </button>
                    <button className="btn btn-sm btn-ghost join-item" name="heart_color" value="green" onClick={() => formik.setFieldValue("heart_color","green")} type="submit">
                    <FaDiceD20 color="green" className="h-6 w-6"/>
                    </button>
                    <button className="btn btn-sm btn-ghost join-item" name="heart_color" value="blue" onClick={() => formik.setFieldValue("heart_color","blue")} type="submit">
                    <FaDiceD20 color="blue" className="h-6 w-6"/>
                    </button>
                    <button className="btn btn-sm btn-ghost join-item" name="heart_color" value="purple" onClick={() => formik.setFieldValue("heart_color","purple")} type="submit">
                    <FaDiceD20 color="purple" className="h-6 w-6"/>
                    </button>
                    </div>
                    </ul>
                    </form>
    )
}

export default LikesForm