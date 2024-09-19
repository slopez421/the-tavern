import {createSlice} from "@reduxjs/toolkit";
import { userLoggedOut } from "../auth/authSlice";

//define initial state, will replace later with api call
const initialState = {
    posts:[
    { 
        id: 1,
        title: 'Thus affect small morning thousand sort.',
        body: 'Throw wait eight forward leave road.',
        preferred_weekday : 'Wednesday',
        preferred_time : 'Evening',
        timezone : 'Mountain Time (US) | MDT UTC-6',
        players_have : 2,
        players_need : 5,
        ttrpg : 'Pathfinder',
        user_id : 1
    },
    { 
        id: 2,
        title: 'Position civil though property.',
        body: 'Authority different sister effort town purpose to moment.',
        preferred_weekday : 'Wednesday',
        preferred_time : 'Morning',
        timezone : 'Mountain Time (US) | MDT UTC-6',
        players_have : 6,
        players_need : 5,
        ttrpg : 'Vampire: The Masquerade',
        user_id : 2
    }
],
    status: "idle",
    error: null
}
// create slice and pass initial state
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.posts.push(action.payload)
        },
        postUpdated: (state, action) => {
            const { id, title, body, preferred_weekday, preferred_time, timezone, players_have, players_need, ttrpg} = action.payload
            const currentPost = state.posts.find(post => post.id === id)
            if (currentPost) {
              currentPost.title = title
              currentPost.body = body
              currentPost.preferred_weekday = preferred_weekday
              currentPost.preferred_time = preferred_time
              currentPost.timezone = timezone
              currentPost.players_have = players_have
              currentPost.players_need = players_need
              currentPost.ttrpg = ttrpg
            }
    },
    extraReducers: (builder) => {
        builder.addCase(userLoggedOut, (state) => {
            return initialState
        })
    }
}}
)


export const {postAdded, postUpdated} = postsSlice.actions
export default postsSlice.reducer

export const selectAllPosts = (state) => state.posts.posts

export const selectPostById = (state, postId) =>
    state.posts.posts.find(post => post.id === parseInt(postId))

export const selectPostByGame = (state, ttrpg) =>
    state.posts.posts.filter(post => post.ttrpg === ttrpg)
