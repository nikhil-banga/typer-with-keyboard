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
    <div className="text-center p-4 bg-gray-700 ">
      <Test className="" />

      {/* <p className="text-white">Pressed Key: {pressedKey}</p> */}
      <div className="border-2  border-double   rounded ">
        <Keyboard onKeyPress={handleKeyPress} className="" />
      </div>
    </div>
  );
}
