import { useState, useEffect } from "react";

export default function useGithubUser() {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState("");

  const fetchGithubUser = async () => {
    if (username) {
      const response = await fetch(`https://api.github.com/search/users?q=${username}`);
      const json = await response.json();
      setData(json);
    }
  };

  useEffect(() => {
    fetchGithubUser();
  }, [username]);

  return {
    data,
    setUsername,
    refetch: fetchGithubUser,
  };
}