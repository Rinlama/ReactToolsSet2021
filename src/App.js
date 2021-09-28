import "./App.css";
import { Button, Progress } from "semantic-ui-react";
import { useState } from "react";

function App() {
  const [percent, setPercent] = useState(0);

  return (
    <div className="App">
      <Progress percent={percent} indicating />
      <Button
        onClick={() => {
          setPercent((p) => p + 10);
        }}
      >
        Increment
      </Button>
    </div>
  );
}

export default App;
