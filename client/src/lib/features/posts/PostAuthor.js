import React from 'react'
import { useAppSelector } from '../../hooks'
import { selectUserById } from '../users/usersSlice'

function PostAuthor({userId}) {
    const author = useAppSelector(state => selectUserById(state, userId))
    return <span>by {author ? author.username : "Unknown Author"}</span>
}

export default PostAuthor