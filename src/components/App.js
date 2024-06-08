import { useEffect, useReducer } from "react";
import Main from "./Main";

const initialState = {
  questions: [],
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataFetched":
      return { ...state, questions: action.payload };
    default:
      throw new Error("Error");
  }
}

function App() {
  //useReducer instate of useState
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  //fetch data from free API
  useEffect(function () {
    fetch("https://the-trivia-api.com/v2/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataFetched", payload: data }));
  }, []);

  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default App;
