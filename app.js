// src/App.js
import React, { useState } from "react";
import TextInput from "./components/TextInput";
import Dropdown from "./components/Dropdown";
import ResponseDisplay from "./components/ResponseDisplay";

const App = () => {
  const [response, setResponse] = useState(null);
  const [selection, setSelection] = useState([]);

  return (
    <div>
      <h1>ABCD123</h1> {/* Replace with your roll number */}
      <TextInput setResponse={setResponse} />
      {response && (
        <>
          <Dropdown setSelection={setSelection} />
          <ResponseDisplay data={response} selection={selection} />
        </>
      )}
    </div>
  );
};

export default App;
