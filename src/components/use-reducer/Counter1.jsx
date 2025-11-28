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

function Counter1() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}

export default Counter1;
