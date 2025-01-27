import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/action/action';


const Counter  = () => {

  const count = useSelector((state) => state.count);

  console.log(count)

  const dispatch = useDispatch() ;


  return (
    <div>Count in Counter Component : {count}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
     </div>
  )
}

export default Counter 