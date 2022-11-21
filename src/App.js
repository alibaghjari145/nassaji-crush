import "./App.css";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState(0);
  const [num, setNum] = useState("");

  function createNum() {
    let x = Math.floor(Math.random() * 6) + 96;
    if (x > 99) {
      x = x + 300;
    }
    let y = Math.floor(Math.random() * 100) + 1;
    setNum(x + "280" + y);
  }

  function calc() {
    setState(1);
    createNum();
    const myTime = setTimeout(endLoad, 2000);
  }
  function endLoad() {
    setState(2);
  }
  return (
    <div className="App">
      <div className="container">
        {state === 0 && (
          <div className="default">
            <p>
              If you want to have a Nassaj crush and you can not choose, we will
              help you.
              <br />
              <br />
              if number does not exist, you will be "SINGLE BE GOOR"
            </p>
            <button onClick={calc}>click me</button>
          </div>
        )}
        {state === 2 && (
          <div className="default">
            <p>
              Your crush's number is:
              <br />
              <br />
              <span className="resNum">{num}</span>
            </p>
            <button
              onClick={() => {
                setState(0);
              }}
            >
              AGAIN
            </button>
          </div>
        )}
        {state === 1 && (
          <div class="ring">
            LOADING
            <span className="span"></span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
