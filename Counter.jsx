import React from 'react'
import { useState } from 'react'

export default function Counter() {
    const [counter,setCounter] = useState(0)
  return (
    <div>
        <b><p>{counter}</p></b>
        <button onClick={()=>setCounter(counter + 1)}>Increment</button>
        <button onClick={()=>setCounter(counter - 1)}>Decrement</button>
   
    </div>
  )
}
