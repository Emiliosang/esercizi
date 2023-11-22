import React from 'react';
import AlertClock from './AlertClock';

function App() {
  const handleAlertClick = () => {
      const currentTime = new Date().toLocaleTimeString();
      alert(`Current time is: ${currentTime}`);
  };

  return (
    <div>
      <AlertClock handleAlertClick={handleAlertClick} />
    </div>
  );
}

export default App;