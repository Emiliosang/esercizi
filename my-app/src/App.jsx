import GithubUser from "./GithubUser"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import ShowGithubUser from "./ShowGithubUser"
import MainPage from "./MainPage"

export default function App() {
  return (
  <Router>
    <Link to="/">Home</Link>
    <br />
    <Link to="/users/emiliosang">Show Github User</Link>
    <hr />
    <Routes>
      <Route path="/users/:username" element={<ShowGithubUser />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  </Router>
  )
}