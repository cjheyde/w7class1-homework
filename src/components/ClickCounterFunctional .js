import React, { useState } from "react";

const ClickCounterFunctional = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="aqua">
      <h2>Click Counter - Functional Component</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ClickCounterFunctional;
