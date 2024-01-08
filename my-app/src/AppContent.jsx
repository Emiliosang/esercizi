import React from 'react';
import useSWR from 'swr';
import useGithubUser from './useGithubUser';

export default function AppContent() {
  const { username } = useGithubUser();
  const { data, error } = useSWR(`https://api.github.com/search/users?q=${username}`);

  if (error) return <div>Error fetching data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Dati ottenuti:</h1>
      <ul>
        {data.items.map((item, index) => (
          <li key={index}>{item.login}</li>
        ))}
      </ul>
    </div>
  );
}