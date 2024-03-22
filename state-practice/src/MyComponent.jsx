import React, { useState } from "react";

function MyComponent() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };
  const decrement = () => {
    setNumber(number - 1);
  };

  const setZero = () => {
    setNumber(0);
  };

  return (
    <div className="container">
      <p>{number}</p>
      <div>
        <button className="btn btn1" onClick={increment}>
          Increment
        </button>
        <button className="btn btn2" onClick={decrement}>
          Decrement
        </button>
        <button className="btn btn3" onClick={setZero}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default MyComponent;
