import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLorem } from "./store/features/lorem/loremSlice";

function App() {
  const dispatch = useDispatch();
  const lorem = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(getLorem());
  }, []);

  return <div>{JSON.stringify(lorem)}</div>;
}

export default App;
