import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";

function About() {
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, []);
  return (
    <div>
      About Component{" "}
      <button
        onClick={() => {
          //history.goBack();
          console.log(history);
        }}
      >
        Go back()
      </button>
    </div>
  );
}

export default About;
