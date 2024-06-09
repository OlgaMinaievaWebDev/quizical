function StartPage({ numQuestions, dispatch }) {
  return (
    <div>
      <h2>Welcome to Quiz</h2>
      <p>
        Take on the challenge and race against time by answering
        {numQuestions} multiple-choice trivia questions as quickly and
        accurately as possible in each themed game. Your score will be displayed
        upon completing each trivia quiz you play.
      </p>
      <button onClick={() => dispatch({ type: "start" })}>Start Quiz</button>
    </div>
  );
}

export default StartPage;
