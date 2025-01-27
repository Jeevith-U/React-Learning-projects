import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../store/action/postActions';

const PostList = () => {

    const dispatch = useDispatch() ;

    const {posts, loading, error } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(fetchPosts()) ;
    },[dispatch])

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>

    if (posts != null) {
        console.log(posts)
    }

  return (
    <div>
        <h1>Posts</h1>
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <strong>{post.title}</strong>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PostList