import axios from 'axios';
import React, { useEffect, useState } from 'react'

const TestAxios = () => {

    const [data, setData] = useState([]) ;
    const[loading, setLoading] = useState(false) ;
    const[error, setError] = useState(null) ;

    useEffect(() => {
        setLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/todos')
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
    <div>

        {data.map(
            <p></p>
        )}

    </div>
  )
}

export default TestAxios