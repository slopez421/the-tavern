import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:5555'}),
    tagTypes: ['Posts', 'User', 'Likes'],
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts',
            providesTags: (result)  =>
                result ? [...result.map(({id}) => ({ type: 'Posts', id })), {type: 'Posts', id: 'LIST'},] : [{ type: 'Posts', id: 'LIST' }],
            credentials: 'include',
        }),
        getPostById: builder.query({
            query: (postId) => ({url : `/posts/${postId}`}),
            credentials: 'include',
        }),
        addNewPost: builder.mutation({
            query: initialPost => ({
            url: '/posts',
            credentials: 'include',
            method: 'POST',
            body: {
                    ...initialPost,
            }
            }),
            invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
        }),
        login: builder.mutation({
            query: user_credentials => ({
            url: '/login',
            credentials: 'include',
            method: 'POST',
            body: {
                    ...user_credentials
            }    
        }),
    }),
        logout: builder.mutation({
            query: () => ({
            url: '/logout',
            credentials: 'include',
            method: 'DELETE',
        }),  
    }), 
        addNewLike: builder.mutation({
            query: like => ({
            url: '/likes',
            credentials: 'include',
            method: 'POST',
            body: {
                ...like,
            }
        }),
            invalidatesTags: [{ type: 'Likes', id: 'LIST' }, { type: 'Posts', id: 'LIST' }],
    }),
        deleteLike: builder.mutation({
            query: like => ({
            url: '/likes',
            credentials: 'include',
            method: 'DELETE',
            body: {
                ...like,
            }
        }),
        invalidatesTags: [{ type: 'Likes', id: 'LIST' }, { type: 'Posts', id: 'LIST' }],
    }),
        getLikes: builder.query({
            query: () => ({
            url: '/likes',
            providesTags: (result)  =>
                result ? [...result.map(({id}) => ({ type: 'Likes', id })), {type: 'Likes', id: 'LIST'},] : [{ type: 'Likes', id: 'LIST' }],
            credentials: 'include',
            }),
        }),
        checkSession: builder.query({
            query: () => ({
            url: '/check_session',
            credentials: 'include',
            })
        })
})
})


export const {useGetPostsQuery, useGetPostByIdQuery, useAddNewPostMutation, useLoginMutation, useLogoutMutation, useCheckSessionMutation, useAddNewLikeMutation, useGetLikesQuery, useDeleteLikeMutation} = apiSlice


