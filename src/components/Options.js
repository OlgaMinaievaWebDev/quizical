function Options({ question, answer, dispatch }) {
  const hasAnswered = answer !== null;

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const allAnswers = [...question.incorrectAnswers, question.correctAnswer];
  const shuffledAnswers = shuffleArray(allAnswers);

  return (
    <div>
      {shuffledAnswers.map((option, index) => (
        <button
          key={index}
          onClick={() => dispatch({ type: "newAnswer", payload: option })}
          disabled={hasAnswered}
          style={{
            backgroundColor: hasAnswered
              ? option === question.correctAnswer
                ? "green"
                : ""
              : "",
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
