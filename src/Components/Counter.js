import React, { useState } from "react";
import "../Counter.css";

function Counter() {
  const count = 0;
  const [Count, setCount] = useState(count);
  const handleClick = () => {
    setCount(Count + 1);
  };

  return (
    <>
      <div className="counter-parent">
        <h3>Counter</h3>
        <button onClick={handleClick}>{Count} </button>
      </div>
    </>
  );
}

export default Counter;
