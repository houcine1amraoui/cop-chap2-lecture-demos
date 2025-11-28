import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";

function CompA() {
  const { count, dispatch } = useContext(CounterContext);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}

export default CompA;
