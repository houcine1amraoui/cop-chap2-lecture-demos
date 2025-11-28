import { useState } from "react";
import Mouse from "./Mouse";

function MouseContainer() {
  const [isDisplay, setIsDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setIsDisplay(!isDisplay)}>Toggle</button>
      {isDisplay && <Mouse />}
    </div>
  );
}

export default MouseContainer;
