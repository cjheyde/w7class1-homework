import React, { useState } from "react";

const ClickCounterFunctional = () => {
  const [count, setCount] = useState(0);

  const handleClickAdd = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleClickExclude = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="aqua">
      <h2>Click Counter - Functional Component</h2>
      <p>Count: {count}</p>
      <button onClick={handleClickAdd}>Click Me To Add</button>
      <button onClick={handleClickExclude}>Click Me To Exclude</button>
    </div>
  );
};

export default ClickCounterFunctional;
