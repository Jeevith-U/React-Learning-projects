import React, { useEffect, useState } from 'react'

const Timer = () => {

  const [time, setTime] = useState(new Date()) ;

  useEffect(() => {
    const timeId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timeId)
  },[])

  const formatTime = time.toLocaleTimeString('en-US',
    {
      hour : '2-digit',
      minute : '2-digit',
      second : '2-digit'
    }
  )

  return (
    <div>
      <h1>Welcome</h1>
      {formatTime}
    </div>
  );
}

export default Timer ;