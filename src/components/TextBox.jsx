import React, { useState } from "react";
import Keyboard from "./Keyboard";
import Test from "./Test";

export default function TextBox() {
  const [test, setTest] = useState("");

  const handleTestChange = (event) => {
    setTest(event.target.value);
  };

  const [pressedKey, setPressedKey] = useState("");

  const handleKeyPress = (key) => {
    setPressedKey(key);
  };

  return (
    <div className="text-center p-4  bg-gray-700 ">
      <Test className="" onChildTextChange={handleTestChange} />
      <p>test: {test}</p>
      <textarea
        placeholder="type here"
        className="w-3/4 h-24 text-lg p-1"
      ></textarea>
      <p className="text-white">Pressed Key: {pressedKey}</p>
      <div className="border-2  border-double  border-red-500 p-4 rounded ">
        <Keyboard onKeyPress={handleKeyPress} className="" />
      </div>
    </div>
  );
}
