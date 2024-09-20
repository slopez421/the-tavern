import {createSlice} from "@reduxjs/toolkit";
import { userLoggedOut } from "../auth/authSlice";
import { createEntityAdapter } from "@reduxjs/toolkit";

const postsAdapter = createEntityAdapter({
})

const initialState = postsAdapter.getInitialState()


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
    extraReducers: builder => {
        builder
        .addCase(userLoggedOut, state => {
            return initialState
        })
    }
}}
)

export const {postAdded, postUpdated} = postsSlice.actions
export default postsSlice.reducer