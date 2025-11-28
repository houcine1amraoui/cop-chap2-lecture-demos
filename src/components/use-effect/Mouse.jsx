import { useEffect, useState } from "react";

function Mouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("use effect called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("compo will unmount");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      X - {x}, Y - {y}
    </div>
  );
}

export default Mouse;
