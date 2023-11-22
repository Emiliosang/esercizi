import React from "react"
import { useState } from "react"

function Counter({ initialCounter, incrementAmount }) {
   const [counter, setCounter] = useState(initialCounter);
    
   const handleIncrement = () => {
      setCounter(prevCounter => prevCounter + incrementAmount);
   };
    
   return (
      <div>
         <h2>Counter Value: {counter}</h2>
         <button onClick={handleIncrement}>Increment</button>
      </div>
   )
}
export default Counter
