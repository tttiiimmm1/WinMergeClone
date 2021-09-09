import React, { useState } from "react";
import DefaultButton from "./DefaultButton";
//import DefaultButton from "./DefaultButton.js";
import "./index.css";
import giveResultArray from "./Split.js";
//{} -> deconstructor

export default function AddTodo(resultArray) {
  const [text1Input, setTextInput] = useState("");
  const [text2Input, setText2Input] = useState("");

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };
  const handle2Change = (e) => {
    setText2Input(e.target.value);
  };

  const checkDiff = () => {
    if (text1Input === text2Input) {
      return "true";
    } else {
      return "false";
    }
  };

  return (
    <div className="app">
      <div className="text-holders">
        <p className="desc-text">Paste your text here</p>
        <p className="middle"></p>
        <p className="desc-text">and the other text here</p>
        <textarea 
          className="input-box"
          value={text1Input/*.trim()*/}
          onChange={handleChange}
          placeholder="Compare File A"
        />
        <textarea className="result"></textarea>
        <textarea 
          className="input-box"
          value={text2Input/*.trim()*/}
          onChange={handle2Change}
          placeholder="Compare File B"
        />
      </div>
      <DefaultButton
        type1="check-button"
        action=
          {() => giveResultArray({text1Input, text2Input})}
        text="Check Diffs"
      />
      <h1>{checkDiff()}</h1>
    </div>
  );
}
