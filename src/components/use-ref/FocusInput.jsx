import { useEffect, useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <div>
        <label>Username: </label>
        <input type="text" ref={inputRef} />
      </div>
      <label>Password: </label> <input type="text" />
    </div>
  );
}

export default FocusInput;
