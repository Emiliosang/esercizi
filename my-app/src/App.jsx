import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Counter from './Counter';

function App() {
  return (
    <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/counter">Counter</Link></li>
        </ul>
      <Routes>
        <Route path="/counter" element={<Counter initialCounter={0} incrementAmount={1} />} />
        <Route path="/" element={<div>Home Page</div>} />
        
      </Routes>
    </Router>
  );
}

export default App;
