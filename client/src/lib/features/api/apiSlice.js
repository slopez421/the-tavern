import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:5555'}),
    tagTypes: ['Post'],
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts',
            headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'}
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
                method: 'POST',
                body: {
                    ...initialPost,
                }
            }),
    }),
})
})

export const {useGetPostsQuery, useGetPostByIdQuery, useAddNewPostMutation} = apiSlice
