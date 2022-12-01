import React from "react";
import { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";
import Child from "./Child";

const Parents = () => {
  const {count} = useContext(COUNTER_CONTEXT)
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
      <Child />
    </div>
  );
};

export default Parents;
