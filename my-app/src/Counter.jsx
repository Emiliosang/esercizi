import React from "react"
import { useState } from "react"
import CounterDisplay from './CounterDisplay';

export function Counter({ initialValue = 0 }) {

   const [ counter, setCounter ] = useState(initialValue)

   function handleCounterIncrement() {
      setCounter((c) => c + 1)
   }
   function handleCounterDecrement() {
      setCounter((c) => c - 1)
   }
   function handleReset() {
      setCounter(initialValue)
   }

   return (
      <div>
      <h2><CounterDisplay count={counter} /></h2>
         <button onClick={handleCounterIncrement}>Increment</button>
         <button onClick={handleCounterDecrement}>Decrement</button>
         <button onClick={handleReset}>Reset</button>

      </div>
   )
}

export default Counter