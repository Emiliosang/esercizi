import React, { useState } from 'react';

function GithubUser() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState(null);

  const handleFetchUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${username}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Errore nel recupero dell\'utente GitHub', error);
    }
  };

  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Inserisci il nome utente di GitHub"
      />
      <button onClick={handleFetchUser}>Recupera Utente</button>
      {data && (
        <>
          <h1>Username: {data.items[0].login}</h1>
          <h2>ID: {data.items[0].id}</h2>
          <img src={data.items[0].avatar_url} alt="Avatar" />
        </>
      )}
    </>
  );
}

export default GithubUser;