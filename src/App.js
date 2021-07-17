import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [food, setFood] = useState("dumpling");

  return (
    <div className="App">
      <input
        type="text"
        value={food}
        onChange={(event) => {
          const value = event.target.value;
          setFood(value);
        }}
      ></input>
      {food}
    </div>
  );
}

export default App;
