import React, { useState } from "react";
import DefaultButton from "./DefaultButton";
//import DefaultButton from "./DefaultButton.js";
import "./index.css";
import giveResultArray from "./Split.js";

export default function App() {
  const [text1Input, setTextInput] = useState("");
  const [text2Input, setText2Input] = useState("");
  const [resultArray, setResultArray] = useState([]);
  const [textChecker, setTextChecker] = useState(false);

  const text1Array = text1Input.split("\n");
  const text2Array = text2Input.split("\n");

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };
  const handle2Change = (e) => {
    setText2Input(e.target.value);
  };

  return (
    <div className="app">
      <div className="text-holders">
        <p className="desc-text">Paste your text here</p>
        <p className="middle"></p>
        <p className="desc-text">and the other text here</p>
        {textChecker ? (
          <div
            className="input-box-div"
            value={text1Array}
            placeholder="Compare File A"
          >
            {text1Array.map((bool, ind) => (
              <p
                key={ind}
                className={`${
                  text1Array[ind] === text2Array[ind]
                    ? "line-true"
                    : "line-false"
                } line`}
              >
                {bool}
              </p>
            ))}
          </div>
        ) : (
          <textarea
            className="input-box"
            value={text1Input /*.trim()*/}
            onChange={handleChange}
            placeholder="Compare File A"
          />
        )}
        {textChecker ? (
          <div className="result" value={resultArray}>
            {resultArray.map((bool, ind) => (
              <p key={ind} className={`result-line`}>
                {bool}
              </p>
            ))}
          </div>
        ) : (
          <div className="result"></div>
        )}
        {textChecker ? (
          <div
            className="input-box-div"
            value={text2Array}
            placeholder="Compare File B"
          >
            {text2Array.map((bool, ind) => (
              <p
                key={ind}
                className={`${
                  text1Array[ind] === text2Array[ind]
                    ? "line-true"
                    : "line-false"
                } line`}
              >
                {bool}
              </p>
            ))}
          </div>
        ) : (
          <textarea
            className="input-box"
            value={text2Input /*.trim()*/}
            onChange={handle2Change}
            placeholder="Compare File B"
          />
        )}
      </div>
      <DefaultButton
        type1="check-button"
        action={() => {
          setResultArray(giveResultArray(text1Input, text2Input));
          setTextChecker((prev) => !prev);
          console.log(text1Array);
        }}
        text="Check Diffs"
      />
    </div>
  );
}
