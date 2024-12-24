import React from 'react'
import { useState } from 'react'

export default function Message() {
    const [message,setMessage] = useState("message")
  return (
    <div>
        <b><p className='mess'>{message}</p></b>
        <button onClick={()=>setMessage("Message1")}>Show message 1</button>
        <button onClick={()=>setMessage("Message2")}>Show message 2</button>
        
    </div>
  )
}
