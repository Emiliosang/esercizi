import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';

function Clock() {
  const { language } = useContext(LanguageContext);

  function getCurrentTimeMessage() {
    switch (language) {
      case 'en':
        return 'Current time:';
      case 'it':
        return 'Orario attuale:';
      default:
        return 'Current time:';
    }
  };

  return (
    <div>
      <h2>{getCurrentTimeMessage()}</h2>
    </div>
  );
};

export default Clock;