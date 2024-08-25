import React from "react";

const ResponseDisplay = ({ data, selection }) => {
  if (!data) return null;

  const { alphabets, numbers, highest_lowercase_alphabet } = data;

  const renderData = () => {
    const result = [];
    if (selection.includes("alphabets"))
      result.push(<p key="alphabets">Alphabets: {alphabets.join(", ")}</p>);
    if (selection.includes("numbers"))
      result.push(<p key="numbers">Numbers: {numbers.join(", ")}</p>);
    if (selection.includes("highestLowercase"))
      result.push(
        <p key="highestLowercase">
          Highest lowercase alphabet: {highest_lowercase_alphabet.join(", ")}
        </p>
      );
    return result;
  };

  return <div>{renderData()}</div>;
};

export default ResponseDisplay;
