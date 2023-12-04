import React, { useState } from 'react';
import GithubUser from './GithubUser';

function App() {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <GithubUser username={username} />
    </>
  );
}

export default App;