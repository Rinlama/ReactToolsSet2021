import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/features/counter/counterSlice";

function App() {
  const count = useSelector((state) => {
    return state.counter.value;
  });
  const dispatch = useDispatch();
  return (
    <div className="container my-5">
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
