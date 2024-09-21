import React, {useState} from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAddNewPostMutation } from "../api/apiSlice";
import { selectCurrentUsername } from "../auth/authSlice";

function AddPostForm() {

const [addPost, {isLoading}] = useAddNewPostMutation()

const postFormSchema = yup.object().shape({
    title: yup.string().required("A title is required.").min(10),
    body: yup.string().required("A description is required.").min(10).max(200),
    preferred_weekday: yup.string().required("Please choose a weekday."),
    preferred_time: yup.string().required("Please choose a time of day."),
    timezone: yup.string().required("Please choose your timezone."),
    players_need: yup.number().positive().required("Must be a number between 1 and 6.").integer().typeError("Please enter a number.").max(6),
    players_have: yup.number().positive().required("Must be a number between 1 and 6.").integer().typeError("Please enter a number.").max(6),
    ttrpg: yup.string().required("Please choose which game rulebook will be used.")
});

const postFormik = useFormik({
    initialValues: {
        title: "",
        body: "",
        preferred_weekday: "",
        preferred_time : "",
        timezone : "",
        players_have : "",
        players_need : "",
        ttrpg : "",
        user_id : 11
    },

    validationSchema : postFormSchema,
    onSubmit: async (values) => {
        try {
            await addPost(values).unwrap()
        } catch (err) {
            console.log(err)
        }
        postFormik.resetForm()
        },
    });

    return <div className="card-compact bg-base-100 shadow-xl max-w-lg mt-10 mx-2">
        <form className="card-body" onSubmit={postFormik.handleSubmit}>
            <p className="card-title text-primary justify-center">Adventuring Board</p><br />
            <label className="form-control w-full max-w-s-xs">
            <div className="label">
                <span className="input-xs input-bordered flex items-center gap-2">Title</span>
                <span className="label-text-alt" style={{ color: "red" }}>{postFormik.errors.title}</span>
            </div>
            <input id="title" type="text" className="input input-xs input-bordered input-success" placeholder="Title your post" name="title" onChange={postFormik.handleChange} value={postFormik.values.title} />
            </label>
            <div className="join">
            <div className="join-item">
            <label className="form-control w-full max-w-s-xs">
            <div className="label">
                <span className="input-xs input-bordered flex items-center gap-2">How many players are in your party?</span>
            </div>
            <input id="players_have" type="text" className="input input-xs input-bordered input-success w-11/12" name="players_have" onChange={postFormik.handleChange} value={postFormik.values.players_have} />
            <div className="label">
                <span className="label-text-alt" style={{ color: "red" }}> {postFormik.errors.players_have}</span>
            </div>
            </label>
            </div>
            <div className="join-item">
            <label className="form-control w-full max-w-s-xs">
            <div className="label">
                <span className="input-xs input-bordered flex items-center gap-2">How many more are you looking for?</span>
            </div>
            <input id="players_need" name="players_need" className="input input-xs input-bordered input-success w-11/12" onChange={postFormik.handleChange} value={postFormik.values.players_need} />
            <div className="label">
                <span className="label-text-alt" style={{ color: "red" }}> {postFormik.errors.players_need}</span>
            </div>
            </label>
            </div>
            </div>
            <div className="join">
            <div className="join-item">
            <label className="form-control w-full max-w-s-xs">
            <div className="label">
                <span className="input-xs input-bordered flex items-center gap-2">What day are sessions held on?</span>
            </div>
            <select id="preferred_weekday" className="select select-xs select-bordered select-success w-11/12" name="preferred_weekday" onChange={postFormik.handleChange} value={postFormik.values.preferred_weekday}>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
            </select>
            <div className="label">
                <span className="label-text-alt" style={{ color: "red" }}> {postFormik.errors.preferred_weekday}</span>
            </div>
            </label>
            </div>
            <div className="join-item">
            <label className="form-control w-full max-w-s-xs">
            <div className="label">
                <span className="input-xs input-bordered flex items-center gap-2">What time of day are sessions held?</span>
            </div>
            <select id="preferred_time" className="select select-xs select-bordered select-success w-11/12" name="preferred_time" onChange={postFormik.handleChange} value={postFormik.values.preferred_time}>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
            </select>            
            <div className="label">
                <span className="label-text-alt" style={{ color: "red" }}> {postFormik.errors.players_need}</span>
            </div>
            </label>
            </div>
            </div>

            <div className="join">
            <div className="join-item">
            <label className="form-control w-full max-w-s-xs">
            <div className="label">
                <span className="input-xs select-bordered flex items-center gap-2">What timezone best fits this schedule?</span>
            </div>
            <select id="timezone" className="select select-xs select-bordered select-success w-11/12" name="timezone" onChange={postFormik.handleChange} value={postFormik.values.timezone}>
                <option value="(HST) UTC - 10">(HST) UTC - 10</option>
                <option value="(AKST) UTC - 9">(AKST) UTC - 9</option>
                <option value="(PST) UTC - 8">(PST) UTC - 8</option>
                <option value="(MST) UTC - 7">(MST) UTC - 7</option>
                <option value="(CST) UTC - 6">(CST) UTC - 6</option>
                <option value="(EST) UTC - 5">(EST) UTC - 5</option>
            </select>
            <div className="label">
                <span className="label-text-alt" style={{ color: "red" }}> {postFormik.errors.timezone}</span>
            </div>
            </label>
            </div>
            <div className="join-item">
            <label className="form-control w-full max-w-s-xs">
            <div className="label">
                <span className="input-xs input-bordered flex items-center gap-2">Which TTRPG rulebook is bring used?</span>
            </div>
            <select id="ttrpg" className="select select-xs select-bordered select-success w-11/12" name="ttrpg" onChange={postFormik.handleChange} value={postFormik.values.ttrpg}>
                <option value="Dungeons and Dragons">Dungeons and Dragons</option>
                <option value="Pathfinder">Pathfinder</option>
                <option value="Magic: The Gathering">Magic: The Gathering</option>
                <option value="Vampire: The Masquerade">Vampire: The Masquerade</option>
                <option value="Fallout: The TTRPG">Fallout: The TTRPG</option>
                <option value="Shadowrun">Shadowrun</option>
                <option value="Cyberpunk">Cyberpunk</option>
            </select>            
            <div className="label">
                <span className="label-text-alt" style={{ color: "red" }}> {postFormik.errors.ttrpg}</span>
            </div>
            </label>
            </div>
            </div>
            <div className="label">
                <span className="input-xs input-bordered flex items-center gap-2">Description</span>
                <span className="label-text-alt" style={{ color: "red" }}> {postFormik.errors.body}</span>
            </div>
            <textarea id="body" type="text" className="textarea input-xs textarea-bordered textarea-success" placeholder="Describe your campaign!" name="body" onChange={postFormik.handleChange} value={postFormik.values.body} /><br></br>
        <button className="btn btn-primary" type="submit" disabled={isLoading} onClick={() => console.log(postFormik.values)}>Submit</button>
        </form>
    </div>
}

export default AddPostForm