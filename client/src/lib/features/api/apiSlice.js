import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:5555'}),
    tagTypes: ['Post'],
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Content-type' : 'application/json'},
        }),
        getPostById: builder.query({
            query: (postId) => ({url : `/posts/${postId}`}),
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Content-type' : 'application/json'},
        }),
        addNewPost: builder.mutation({
            query: initialPost => ({
            url: '/posts',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Content-type' : 'application/json'},
            method: 'POST',
            body: {
                    ...initialPost,
                }
            })
        }),
        login: builder.mutation({
            query: credentials => ({
            url: '/login',
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Content-type' : 'application/json'},
            body: {
                    ...credentials
            }    
        }),
        logout: builder.mutation({
            query: () => ({
            url: '/logout',
            method: 'DELETE',
        }),  
        checkSession: builder.query({
            query: () => '/check_session',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Content-type' : 'application/json'},
        }) 
 })    
})
})
})

export const {useGetPostsQuery, useGetPostByIdQuery, useAddNewPostMutation, useLoginMutation, useLogoutMutation, checkSession} = apiSlice
