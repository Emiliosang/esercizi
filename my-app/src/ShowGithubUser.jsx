import React from 'react';
import { useParams } from 'react-router-dom';
import GithubUser from './GithubUser';

export default function ShowGithubUser() {
  const { username } = useParams();

  return (
    <>
      <h1>Github User Details for {username}</h1>
      <GithubUser username={username} />
    </>
  );
}