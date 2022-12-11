import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://docs.docker.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>oh boss nai jaata!</h1>
          {`Hello ${process.env.REACT_APP_NAME}`}! Do you know docker?
        </a>
      </header>
    </div>
  );
}

export default App;
