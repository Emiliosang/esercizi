import GithubUser from "./GithubUser"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import ShowGithubUser from "./ShowGithubUser"
import MainPage from "./MainPage"
import Contact from "./Contact"

export default function App() {
  return (
  <Router>
    <Link to="/">Home</Link>
    <br />
    <Link to="/users/emiliosang">Show Github User</Link>
    <br />
    <Link to="/Contact">Contact us</Link>
    <hr />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/users/:username" element={<ShowGithubUser />} />
      <Route path="/Contact" element={<Contact />} />

    </Routes>
  </Router>
  )
}