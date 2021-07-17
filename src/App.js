import { useState } from "react";

function DumplingComponent() {
  return "dumpling is available";
}

function App() {
  const [food, setFood] = useState("Dumpling");

  const conditionView = () => {
    if (food === "Dumpling") {
      return <DumplingComponent />;
    } else {
      return "not available";
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={food}
        onChange={(event) => {
          const value = event.target.value;
          setFood(value);
        }}
      />
      {conditionView()}
    </div>
  );
}

export default App;
