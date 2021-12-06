import { useState } from "react";
import Another from "./Another";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const someStyle = {
    background: "red",
    color: "white",
  };

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="">
          <span>{count}</span>

          <br />
          <button onClick={add}>Add</button>

          <br />
          <button onClick={subtract}>Subtract</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />

        {count > 0 && (
          // single brackets allow js code to be executed. when this statement is true, the && means that the folowing code gets displayed.
          <p>
            {
              3 + 2 // you can do math in here
            }
            <div style={someStyle}>
              Emmet automatically changes class to className. Cool.{" "}
            </div>
          </p>
        )}

        {count > 2 && <Another name="[Name prop]" />}
      </header>
    </div>
  );
}

export default App;
