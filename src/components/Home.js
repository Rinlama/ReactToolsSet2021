import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <div>
      Home Component
      <button
        onClick={() => {
          history.push("/about", { state: "fromHome" });
          // console.log(history);
        }}
      >
        Go to About
      </button>
    </div>
  );
}

export default Home;
