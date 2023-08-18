import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Nguyễn Đình Trưng</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kin T
        </a>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
