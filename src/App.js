import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

function App() {
  const [food, setFood] = useState(["Burger", "Pizza", "Sandwich"]);

  return (
    <div className="App">
      <Multiselect
        isObject={false}
        onRemove={(event) => {
          console.log(event);
        }}
        onSelect={(event) => {
          console.log(event);
        }}
        options={food}
        selectedValues={["Burger"]}
        showCheckbox
      />
    </div>
  );
}

export default App;
