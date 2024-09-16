import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './features/posts/postsSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            posts: postsReducer
        },
    })
}
