import React from 'react'

export default function Child({count , setCount}) {
   
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={() =>setCount(count -1)}>DECREMENT</button>
        <button onClick={() =>setCount((prvState) => prvState + 1)}>INCREMENT</button>
    </div>
  )
}
