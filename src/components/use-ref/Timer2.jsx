import { useEffect, useRef, useState } from "react";

function Timer2() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  // Start timer on mount
  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startTimer = () => {
    // avoid multiple intervals
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null; // so startTimer can run again
  };

  return (
    <div>
      <h2>Timer: {timer}</h2>

      <button onClick={pauseTimer}>Pause</button>
      <button onClick={startTimer}>Continue</button>
    </div>
  );
}

export default Timer2;
