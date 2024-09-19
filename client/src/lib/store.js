import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './features/posts/postsSlice'
import usersReducer from './features/users/usersSlice'
import authReducer from './features/auth/authSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            auth: authReducer, 
            posts: postsReducer,
            users: usersReducer
        },
    })
}
