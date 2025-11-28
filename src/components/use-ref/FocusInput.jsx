import { useEffect, useRef } from "react";

function FocusInput() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" />
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default FocusInput;
