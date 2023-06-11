import React, { useState, useEffect } from "react";

export default function Keyboard({ onKeyPress }) {
  const [pressedKey, setPressedKey] = useState("");

  const handleKeyDown = (event) => {
    const key = event.key;
    if (key.length === 1 && key >= "A" && key <= "Z") {
      const lowerCaseKey = key.toLowerCase();
      setPressedKey(lowerCaseKey);
      onKeyPress(lowerCaseKey);
    } else {
      setPressedKey(key);
      onKeyPress(key);
    }
  };

  const handleKeyUp = () => {
    setPressedKey("");
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const keys = [
    [
      "`",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "-",
      "=",
      "Backspace",
    ],
    ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
    [
      "CapsLock",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      ";",
      "'",
      "Enter",
    ],
    ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"],
    ["Control", "Meta", "Alt", " ", "Alt", "Control"],
  ];
  const printkeys = [
    [
      "`",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "-",
      "=",
      "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Backspace\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0",
    ],
    [
      "\u00A0\u00A0\u00A0\u00A0Tab\u00A0\u00A0\u00A0\u00A0",
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "[",
      "]",
      "\\",
    ],
    [
      "Caps Lock",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      ";",
      "'",
      "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Enter\u00A0\u00A0\u00A0\u00A0\u00A0",
    ],
    [
      "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Shift\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      ",",
      ".",
      "/",
      "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Shift\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0",
    ],
    [
      "Ctrl",
      "Win",
      "Alt",
      "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Space\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0",
      "Alt",
      "Ctrl",
    ],
  ];

  return (
    <div className="w-3/5 mx-auto border rounded-md p-4">
      <div className="text-lg text-black bg-gray-700 text-center" tabIndex={0}>
        {keys.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((key, colIndex) => (
              <button
                className={`bg-black text-white py-2 px-3 mx-1 my-1 ${
                  pressedKey === key && "bg-green-500"
                }`}
                key={colIndex}
              >
                {printkeys[rowIndex][colIndex]}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
