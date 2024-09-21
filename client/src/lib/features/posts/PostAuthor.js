import React from 'react'

function PostAuthor({userId}) {
    const author = ""
    return <span>Posted by {author ? author.username : "Unknown Author"}</span>
}

export default PostAuthor