import { useReducer } from "react";

const initialState = { count1: 0, count2: 10 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, count1: state.count1 + action.value };

    case "decrement1":
      return { ...state, count1: state.count1 - action.value };

    case "increment2":
      return { ...state, count2: state.count2 + action.value };

    case "decrement2":
      return { ...state, count2: state.count2 - action.value };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

function Counter4() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <A />
      <h2>{state.count1}</h2>

      <button onClick={() => dispatch({ type: "decrement1", value: 2 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment1", value: 4 })}>
        +
      </button>

      <h2>{state.count2}</h2>
      <button onClick={() => dispatch({ type: "decrement2", value: 10 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 10 })}>
        +
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default Counter4;
