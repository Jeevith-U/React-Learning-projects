import axios from 'axios'
import React, { useState } from 'react'

const PostData = () => {

    const[data, setData] = useState([]) ;

    const handleSubmit = (event) => {

        event.preventDefault() 

        const newPost = {
            title : 'foo',
            body : 'bat',
            userId : '1'}

        axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
        .then(
            response => 
            {
                console.log('New Post Added..! : ',response.data ) ;
                setData([response.data]) ;
        })
        .catch( error => {
            console.log('Error Handling New Post : ', error)
        }) ;
    } ;


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <button type='submit'>Add Button</button>
        </form>
    </div>
  )
}

export default PostData