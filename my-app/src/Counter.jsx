import React, { useState, useEffect } from 'react';

function Counter({ initialValue, incrementAmount }) {
  const [counter, setCounter] = useState(initialValue);

   useEffect(() => {
      console.log(`Current counter value: ${counter}`);
   }, [counter]);

   const handleIncrement = () => {
      setCounter((prevCounter) => prevCounter + incrementAmount);
   };

   return (
      <div>
         <h2>Counter: {counter}</h2>
         <button onClick={handleIncrement}>Increment</button>
      </div>
   );
}

export default Counter;