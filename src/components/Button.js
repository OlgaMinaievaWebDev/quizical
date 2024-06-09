function Button({ dispatch, index, answer }) {
  if (answer === null) return null;
  return (
    <button onClick={() => dispatch({ type: "nextQuestion" })}>Next</button>
  );
}

export default Button;
