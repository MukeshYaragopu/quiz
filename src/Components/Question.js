import React from "react";
import Option from "./Option";

const Question = ({ questionObj, selectedOption, onOptionChange }) => {
  return (
    <div>
      <h3>{questionObj.question}</h3>
      {questionObj.options.map((option, index) => (
        <Option
          key={index}
          option={option}
          selectedOption={selectedOption}
          onChange={onOptionChange}
        />
      ))}
    </div>
  );
};

export default Question;
