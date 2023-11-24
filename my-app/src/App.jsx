import Container from "./Container"
import "./style.css"

function App() {
  return (
    <Container title={<h1>Questo è il titolo</h1>}>
      <div className="styledDiv">Ciao</div>
    </Container>
  )
}

export default App
