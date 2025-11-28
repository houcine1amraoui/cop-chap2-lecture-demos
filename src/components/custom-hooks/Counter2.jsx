import useCounter from "../../hooks/useCounter";

function Counter2() {
  const [count, increment, decrement, reset] = useCounter(10, 10);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Counter2;
