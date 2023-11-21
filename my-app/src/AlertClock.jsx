import React from 'react';

function AlertClock({ handleAlertClick }) {
  const showAlert = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current time is: ${currentTime}`);
  };

  return (
    <button onClick={handleAlertClick}>Show Current Time</button>
  );
}

export default AlertClock;