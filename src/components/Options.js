function Options({ question }) {
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
      {shuffledAnswers.map((answer, index) => (
        <button key={index}>{answer}</button>
      ))}
    </div>
  );
}

export default Options;
