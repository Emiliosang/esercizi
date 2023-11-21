import React from 'react';
import AlertClock from './AlertClock';

function App() {
  const handleAlertClick = () => {
    AlertClock();
  };

  return (
    <div>
      <AlertClock handleAlertClick={handleAlertClick} />
    </div>
  );
}

export default App;