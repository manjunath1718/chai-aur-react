import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);

  const addValue = function () {
    if (counter < 20) {
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);

      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      // setCounter(++counter);
      // setCounter(++counter);
      // setCounter(++counter);
      // setCounter(++counter);
    }
  };
  // const addValue = function () {
  //   if (counter < 20) setCounter(++counter);
  // };
  const removeValue = function () {
    if (counter > 0) setCounter(--counter);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
