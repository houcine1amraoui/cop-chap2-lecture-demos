import { useEffect, useRef, useState } from "react";

function Timer1() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      Timer: {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>Pause</button>
    </div>
  );
}

export default Timer1;
