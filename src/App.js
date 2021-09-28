import "./App.css";
import { useState } from "react";

function App() {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
    checkMeOut: false,
  });

  return (
    <div className="container my-5">
      {JSON.stringify(loginState)}
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(event) => {
              const value = event.target.value;
              setLoginState({ ...loginState, email: value });
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(event) => {
              const value = event.target.value;
              setLoginState({ ...loginState, password: value });
            }}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={(event) => {
              const value = event.target.checked;
              setLoginState({ ...loginState, checkMeOut: value });
            }}
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!loginState.email || !loginState.password}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
