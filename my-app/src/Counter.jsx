import React, { useState, useEffect, useRef } from "react";

function Counter({ initialValue, onDirectionChange }) {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef(null);
  const prevCounterValue = useRef(initialValue);

  useEffect(() => {
    directionRef.current = counter > prevCounterValue.current ? "up" : "down";
    prevCounterValue.current = counter;
    onDirectionChange && onDirectionChange(directionRef.current);
  }, [counter, initialValue, onDirectionChange]);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div>
      <h2>Counter Value: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;