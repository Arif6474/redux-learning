import React from 'react'

export default function Child({count , setCount}) {
   
  return (
    <div style={{ background : "gray" , width : "200px" , padding : "10px" , border : "1px solid yellow" , margin : "auto"}}>
    <div>
        <p>Child</p>
    <h2>{count}</h2>
    </div>
        <button onClick={() =>setCount(count -1)}>DECREMENT</button>
        <button onClick={() =>setCount((prvState) => prvState + 1)}>INCREMENT</button>
    </div>
  )
}
