import LanguageProvider from "./LanguageContext";
import Clock from "./Clock"

function App() {
  return (
    <LanguageProvider>
      <div>
        <h1>Language Selector</h1>
        <select name="LanguageSelector" id="LanguageSelector">
          <option value="it">IT</option>
          <option value="en">EN</option>
        </select>
      </div>
      <Clock />
    </LanguageProvider>
  );
}

export default App