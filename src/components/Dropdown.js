import React from "react";

const Dropdown = ({ data, setSelection }) => {
  const handleChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setSelection(selectedOptions);
  };

  return (
    <select multiple onChange={handleChange}>
      <option value="alphabets">Alphabets</option>
      <option value="numbers">Numbers</option>
      <option value="highestLowercase">Highest lowercase alphabet</option>
    </select>
  );
};

export default Dropdown;
