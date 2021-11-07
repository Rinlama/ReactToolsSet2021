import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/features/counter/counterSlice";

function App() {
  const [input, setInput] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(input));
        }}
      >
        Increment by Amount
      </button>
      <input
        type="text"
        onChange={(event) => {
          const val = event.target.value;
          setInput(val);
        }}
      ></input>
      <br />

      {count}
    </div>
  );
}

export default App;
