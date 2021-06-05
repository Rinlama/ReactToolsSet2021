import { BrowserRouter, Link, Route } from "react-router-dom";
import LiveStream from "./components/livestream/LiveStream";
import BrowserHistory from "./components/browserhistory/BrowserHistory";
import Nav from "./components/nav/Nav";
import React from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav></Nav>
        <div className="container mt-4">
          <Route path="/" exact>
            <LiveStream></LiveStream>
          </Route>
          <Route path="/browserhistory" exact>
            <BrowserHistory></BrowserHistory>
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
