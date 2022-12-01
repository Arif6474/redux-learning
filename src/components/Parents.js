import React, { useState } from "react";
import Child from "./Child";

const Parents = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      
    >
      <div style={{
        background: "gray",
        width: "200px",
        padding: "10px",
        border: "1px solid yellow",
        margin: "20px auto",
      }}>
        <p>Parents</p>
        <h2>{count}</h2>
      </div>
      <Child count={count} setCount={setCount} />
    </div>
  );
};

export default Parents;
