import React, { useState } from "react";

// import App from '../App.css';

export default function TextFrom(props) {
  const handleUpClick = () => {
    console.log("Upper case is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };

  const handleDnClick = () => {
    console.log("Lower case is clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };
  const handleClear = () => {
    console.log("Clear is clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };
  const handleExtra = () => {
    console.log("Clear is clicked");
    let newText = text.split(/[ ]+/);
    setText(newText.join(""));
    props.showAlert("Extra space removed", "success");
  };
  const handleOnChange = (event) => {
    console.log("On chnage");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div>
        <div className="mb-3">
          <label for="myBox" className="form-label">
            {props.text}
          </label>
          <textarea
            className="form-control"
            id="mybox"
            onChange={handleOnChange}
            value={text}
            placeholder="enter your text "
            rows="3"
          ></textarea>

          {/* <textarea className={`form-control color bg-${props.mode} text-`} id="mybox"   onChange={handleOnChange} value={text} placeholder="enter your text "  rows="3"></textarea> */}
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          convert to uppercase{" "}
        </button>
        <button className="btn btn-primary mx-2 " my-4 onClick={handleDnClick}>
          convert to lowercase{" "}
        </button>
        <button className="btn btn-primary mx-2 " my-4 onClick={handleClear}>
          clear text{" "}
        </button>
        <button className="btn btn-primary mx-2 " my-4 onClick={handleExtra}>
          clear extra space{" "}
        </button>
      </div>

      <div className="container">
        <h1>Your text summer</h1>
        <p>
          {" "}
          {
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length
          }{" "}
          words and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} time is required to read</p>
      </div>
    </>
  );
}
