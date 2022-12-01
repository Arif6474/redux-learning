import React, { useContext } from "react";
import { useReducer } from "react";
import { COUNTER_CONTEXT } from "../App";

export default function Child() {
  // const {count, setCount} = useContext(COUNTER_CONTEXT)
  const initialState = 0;
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + action.payload.count;
    }
    if (action.type === "DECREMENT") {
      return state - action.payload.count;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div
      style={{
        background: "gray",
        width: "300px",
        padding: "10px",
        border: "1px solid yellow",
        margin: "auto",
      }}
    >
      <div>
        <p>Child</p>
        <h2>{state}</h2>
      </div>
      <div className="flex flex-row max-w-xs">
        <button
          className="btn btn-primary m-3 btn-xs"
          onClick={() => dispatch({ type: "DECREMENT", payload: { count: 5 } })}
        >
          DECREMENT
        </button>
        <button
          className="btn btn-success m-3 btn-xs"
          onClick={() => dispatch({ type: "INCREMENT", payload: { count: 5 } })}
        >
          INCREMENT
        </button>
      </div>
    </div>
  );
}
