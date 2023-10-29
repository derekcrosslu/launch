import { useState } from "react";
import "./App.css";

import PropTypes from "prop-types";

const Flashcard = ({ question, answers, addAnswer, deleteAnswer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [newAnswer, setNewAnswer] = useState("");

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  const handleAddAnswer = () => {
    addAnswer(newAnswer);
    setNewAnswer("");
  };

  return (
    <div className="flashcard">
      <div className="question" onClick={toggleAnswer}>
        {question}
      </div>
      {showAnswer && (
        <div className="flex  flex-col items-center gap-10">
          {/* <div className="top-20 justify-center items-center">{answer}</div> */}
          {answers.map((answer, index) => (
            <pre key={index} className="flex  h-full justify-between w-full">
              {answer}
              <button onClick={() => deleteAnswer(index)} className="h-12 ">
                Delete
              </button>
            </pre>
          ))}
          <textarea
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            placeholder="Add new answer"
            className="w-full h-20"
          />
          <button onClick={handleAddAnswer} className="w-52 h-12">
            Add Answer
          </button>
        </div>
      )}
    </div>
  );
};

Flashcard.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  addAnswer: PropTypes.func.isRequired,
  deleteAnswer: PropTypes.func.isRequired,
};

const App = () => {
  const [flashcards, setFlashcards] = useState([
    { question: "Question 1", answers: ["Answer 1"] },
    { question: "Question 2", answers: ["Answer 2"] },
    { question: "Question 3", answers: ["Answer 3"] },
  ]);

  const [newQuestion, setNewQuestion] = useState("");
  const [showAddQuestion, setShowAddQuestion] = useState(false);

  const addAnswer = (index, newAnswer) => {
    const newFlashcards = [...flashcards];
    newFlashcards[index].answers.push(newAnswer);
    setFlashcards(newFlashcards);
  };

  const deleteAnswer = (flashcardIndex, answerIndex) => {
    const newFlashcards = flashcards.map((flashcard, index) => {
      if (index === flashcardIndex) {
        return {
          ...flashcard,
          answers: flashcard.answers.filter((_, idx) => idx !== answerIndex),
        };
      }
      return flashcard;
    });
    setFlashcards(newFlashcards);
  };

  const addQuestion = () => {
    if (newQuestion.trim() !== "") {
      setFlashcards([...flashcards, { question: newQuestion, answers: [] }]);
      setNewQuestion("");
    }
    setShowAddQuestion(!showAddQuestion);
  };

  return (
    <div className=" h-screen p-8">
      {flashcards.map((flashcard, index) => (
        <Flashcard
          key={index}
          question={flashcard.question}
          answers={flashcard.answers}
          addAnswer={(newAnswer) => addAnswer(index, newAnswer)}
          deleteAnswer={(answerIndex) => deleteAnswer(index, answerIndex)}
          onClick={() => setShowAddQuestion(!showAddQuestion)}
        />
      ))}
      <div className="flex flex-col p-4 gap-4">
        {showAddQuestion && (
          <textarea
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Enter new question"
            className="w-full h-20 bg-black p-2 rounded-lg"
          />
        )}
        <button onClick={addQuestion}>Add Question</button>
      </div>
    </div>
  );
};

export default App;
