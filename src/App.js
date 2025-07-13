import React, { Component } from "react";
import qBank from "./Components/QuestionBank";
import Question from "./Components/Question";
import Score from "./Components/Score";

class App extends Component {
  state = {
    currentQuestion: 0,
    selectedOption: "",
    score: 0,
    showScore: false,
    userAnswers: []
  };

  handleOptionChange = (option) => {
    this.setState({ selectedOption: option });
  };

  handleSubmit = () => {
    const { selectedOption, currentQuestion, score, userAnswers } = this.state;
    const isCorrect = selectedOption === qBank[currentQuestion].answer;
    const updatedUserAnswers = [...userAnswers, selectedOption];

    this.setState({
      score: isCorrect ? score + 1 : score,
      userAnswers: updatedUserAnswers,
      selectedOption: "",
      currentQuestion: currentQuestion + 1,
      showScore: currentQuestion + 1 === qBank.length
    });
  };

  handleClear = () => {
    this.setState({ selectedOption: "" });
  };

  render() {
    const {
      currentQuestion,
      selectedOption,
      score,
      showScore,
      userAnswers
    } = this.state;

    return (
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontFamily: "Arial",
          backgroundColor: "#f4f4f4"
        }}
      >
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            maxWidth: "600px",
            width: "100%"
          }}
        >
          <h1 style={{ textAlign: "center" }}>Quiz App</h1>

          {!showScore ? (
            <div>
              <Question
                questionObj={qBank[currentQuestion]}
                selectedOption={selectedOption}
                onOptionChange={this.handleOptionChange}
              />
              <br />
              <button
                onClick={this.handleSubmit}
                disabled={!selectedOption}
                style={{
                  padding: "8px 16px",
                  marginRight: "10px",
                  cursor: selectedOption ? "pointer" : "not-allowed"
                }}
              >
                Submit
              </button>
              <button
                onClick={this.handleClear}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#ccc",
                  cursor: "pointer"
                }}
              >
                Clear
              </button>
            </div>
          ) : (
            <Score
              score={score}
              total={qBank.length}
              questions={qBank}
              userAnswers={userAnswers}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
