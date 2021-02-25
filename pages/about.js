import React, { useState } from "react";

function about() {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <div>
      <h1>ABOUT</h1>
      <p>Johy kym was born to succeed so help me God Amen</p>
      <small>{counter}</small>
      <button onClick={addCounter}>ADD</button>
    </div>
  );
}

export default about;
