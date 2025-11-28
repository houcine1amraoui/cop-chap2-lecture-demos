import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";

function CompD() {
  const counter = useContext(CounterContext);
  return (
    <div>
      <h2>{counter.count}</h2>
      <button onClick={() => counter.dispatch("decrement")}>-</button>
      <button onClick={() => counter.dispatch("increment")}>+</button>
      <button onClick={() => counter.dispatch("reset")}>reset</button>
    </div>
  );
}

export default CompD;
