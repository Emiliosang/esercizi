import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';

function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialCounter);

  function handleIncrement() {
   setCounter((c) => c + 1)
}

function handleDecrement() {
   setCounter((c) => c - 1)
}

function handleReset() {
   setCounter(initialValue)
}


  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;