import React from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  function handleClickAdd() {
    setCount(count + 1);
  }
  function handleClickSub() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClickSub();
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            handleClickAdd();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
