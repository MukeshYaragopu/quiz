import React from "react";

const Option = ({ option, selectedOption, onChange }) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          name="option"
          value={option}
          checked={selectedOption === option}
          onChange={() => onChange(option)}
        />
        {option}
      </label>
    </div>
  );
};

export default Option;
