import React from 'react'
import { useSelector } from 'react-redux'

const Counter2 = () => {

    const count = useSelector((state) => state.count) ;
 
    return (
    <div>   
        <h2>The Counter2 Count : {count}</h2>
    </div>
  )
}

export default Counter2
