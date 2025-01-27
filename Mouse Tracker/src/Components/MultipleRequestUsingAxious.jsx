import axios from 'axios';
import React, { useEffect, useState } from 'react'

const TestAxios = () => {

    const [data, setData] = useState([]) ;
    const[loading, setLoading] = useState(false) ;
    const[error, setError] = useState(null) ;

    useEffect(() => {
        setLoading(true)

        axios.all([

            axios.get('https://jsonplaceholder.typicode.com/todos') ,
            axios.get('https://jsonplaceholder.typicode.com/users')     
        ])

        .then(axios.spread((posts, users) =>{

            console.log(posts) ;
            console.log(users)
            setData(posts.data) ;
            setLoading(false)
        }))


        .then((response) => {
            console.log(response) ;
            setData(response.data) ;
            setLoading(false) ;
        })
        .catch((error) =>{
            console.log('Error Fecthing the data ')
            setError('Failed to Fetch the Data')
            setLoading(false) ;
        }) ;

    }, []) ;

    if(loading){
        return <p>Loading...</p>
    }

  return (
    <div>Test Multiple Request</div>
  )
}

export default TestAxios