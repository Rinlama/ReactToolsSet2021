import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLorems } from "./store/reducers/lorem/loremSlice";

function App() {
  const dispatch = useDispatch();
  const lorem = useSelector((state) => state);

  useEffect(() => {
    dispatch(getLorems());
  }, []);

  return <div className="App">{JSON.stringify(lorem)}</div>;
}

export default App;
