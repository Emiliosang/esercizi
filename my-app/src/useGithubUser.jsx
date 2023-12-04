import { useState, useEffect } from "react";

export default function useGithubUser() {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (username) {
      const fetchGithubUser = async () => {
        const response = await fetch(`https://api.github.com/search/users?q=${username}`);
        const json = await response.json();
        setData(json);
      };

      fetchGithubUser();
    }
  }, [username]);

  return {
    data,
    setUsername,
  };
}