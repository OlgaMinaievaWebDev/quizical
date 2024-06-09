import { useEffect, useReducer } from "react";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartPage from "./StartPage";
import Question from "./Question";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataFetched":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  //useReducer instate of useState
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQuestions = questions.length;
  //fetch data from free API
  useEffect(function () {
    fetch("https://the-trivia-api.com/v2/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataFetched", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="App">
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartPage numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && <Question question={questions[index]} />}
      </Main>
    </div>
  );
}

export default App;
