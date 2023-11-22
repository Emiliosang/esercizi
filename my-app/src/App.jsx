import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Counter initialCounter={0} incrementAmount={1} />
      <Counter initialCounter={10} incrementAmount={5} />
    </div>
  );
}

export default App;