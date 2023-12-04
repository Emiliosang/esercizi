import useSWR from 'swr';

function fetcher(url) {
  return fetch(url).then((res) => res.json());
}

function useGithubUser(username) {
  const { data, error } = useSWR(
    username ? `https://api.github.com/search/users?q=${username}` : null,
    fetcher
  );

  return {
    data,
    error,
  };
}

export default useGithubUser;