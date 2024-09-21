import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/api/apiSlice';
import { listenerMiddleware } from './listenerMiddleware';
import postsReducer from './features/posts/postsSlice'
import usersReducer from './features/users/usersSlice'
import authReducer from './features/auth/authSlice'


export const store = configureStore({
        reducer: {
            auth: authReducer,
            posts: postsReducer,
            user: usersReducer,
            [apiSlice.reducerPath]: apiSlice.reducer
        },
        middleware: getDefaultMiddleware => 
            getDefaultMiddleware()
            .prepend(listenerMiddleware.middleware)
            .concat(apiSlice.middleware),
        devTools: true
        }
    )
