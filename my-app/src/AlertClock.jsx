import React from 'react';

function AlertClock({ handleAlertClick }) {

  return (
    <button onClick={handleAlertClick}>Show Current Time</button>
  );
}

export default AlertClock;