import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

export default function GithubUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <p>Github User List</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path=":username" element={<ShowGithubUser />} />
      </Routes>
    </>
  );
}