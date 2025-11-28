import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialState;

    default:
      return state;
  }
};

function Counter5() {
  const [count, dispatch] = useReducer(reducer, 10);
  const [count2, dispatch2] = useReducer(reducer, 100);
  return (
    <>
      <div>
        <h2>{count}</h2>
        <button onClick={() => dispatch("decrement")}>-</button>
        <button onClick={() => dispatch("increment")}>+</button>
        <button onClick={() => dispatch("reset")}>reset</button>
      </div>
      <div>
        <h2>{count2}</h2>
        <button onClick={() => dispatch2("decrement")}>-</button>
        <button onClick={() => dispatch2("increment")}>+</button>
        <button onClick={() => dispatch2("reset")}>reset</button>
      </div>
    </>
  );
}

export default Counter5;
