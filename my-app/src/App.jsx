import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome name="John" />} />
        <Route path="/" element={<Welcome name='Emilio' />} />

      </Routes>
    </Router>
  );
}

export default App
