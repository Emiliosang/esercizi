import React, { useEffect, useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
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
      <p>Add a user and select it</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route index element={<Navigate to="/users" replace />} />
        <Route path=":username" element={<ShowGithubUser />} />
      </Routes>
    </>
  );
}