import {createSlice, PayloadAction } from "@reduxjs/toolkit";

//define initial state, will replace later with api call
const initialState = [
    { 
        id: "1",
        title: 'Thus affect small morning thousand sort.',
        body: 'Throw wait eight forward leave road.',
        preferred_weekday : 'Wednesday',
        preferred_time : 'Evening',
        timezone : 'Mountain Time (US) | MDT UTC-6',
        players_have : 2,
        players_need : 5,
        ttrpg : 'Pathfinder',
        user_id : 5
    },
    { 
        id: "2",
        title: 'Position civil though property.',
        body: 'Authority different sister effort town purpose to moment.',
        preferred_weekday : 'Wednesday',
        preferred_time : 'Morning',
        timezone : 'Mountain Time (US) | MDT UTC-6',
        players_have : 6,
        players_need : 5,
        ttrpg : 'Vampire: The Masquerade',
        user_id : 3
    }
]

// create slice and pass initial state
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.push(action.payload)
        }
    },
    selectors: {
        selectAllPosts: postsState => postsState,
      }
})

export const {postAdded} = postsSlice.actions
export default postsSlice.reducer
export const {selectAllPosts} = postsSlice.selectors

export const selectPostById = (state, postId) =>
    state.posts.find(post => post.id === postId)

export const selectPostByGame = (state, ttrpg) =>
    state.posts.filter(post => post.ttrpg === ttrpg)
