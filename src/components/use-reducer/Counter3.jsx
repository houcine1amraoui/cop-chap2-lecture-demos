import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.value };

    case "decrement":
      return { count: state.count - action.value };

    case "reset":
      return { count: action.value };

    default:
      return state;
  }
};

function Counter3() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "decrement", value: 2 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 4 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "reset", value: 100 })}>
        reset
      </button>
    </div>
  );
}

export default Counter3;
