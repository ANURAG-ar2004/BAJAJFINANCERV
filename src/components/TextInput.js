import React, { useState } from "react";
import axios from "axios";

const TextInput = ({ setResponse }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      JSON.parse(inputValue);

      const response = await axios.post(
        "http://localhost:5000/bfhl",
        JSON.parse(inputValue)
      );
      setResponse(response.data);
    } catch (err) {
      setError("Invalid JSON input.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          rows="10"
          cols="50"
          placeholder='Enter JSON here, e.g., {"data": ["A", "C", "z"]}'
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default TextInput;
