import { useState, useEffect } from "react";

export default function MultipleEffects() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // increment counter every second
    console.log("interval created");
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // update document title whenever count changes
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
