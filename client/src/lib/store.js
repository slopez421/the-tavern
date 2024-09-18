import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './features/posts/postsSlice'
import usersReducer from './features/users/usersSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            posts: postsReducer,
            users: usersReducer
        },
    })
}
