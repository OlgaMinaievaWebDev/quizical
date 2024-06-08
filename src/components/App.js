import { useEffect, useReducer } from "react";
import Main from "./Main";

const initialState = {
  questions: [],
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataFetched":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  //useReducer instate of useState
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  //fetch data from free API
  useEffect(function () {
    fetch("https://the-trivia-api.com/v2/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataFetched", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default App;
