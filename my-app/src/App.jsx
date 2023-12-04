import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";
import GithubUserList from "./GithubUserList";
import MainPage from "./MainPage";
import Contact from "./Contact";
import NotFound from "./NotFound";

export default function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/users">Show Github User</Link>
        <br />
        <Link to="/Contact">Contact us</Link>
        <hr />
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users/*" element={<GithubUserList />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}