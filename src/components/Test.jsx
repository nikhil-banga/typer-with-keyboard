import React, { useState, useEffect } from "react";

const Test = () => {
  const [sentence, setSentence] = useState("");
  const [input, setInput] = useState("");
  const [incorrectIndexes, setIncorrectIndexes] = useState([]);
  const [accuracy, setAccuracy] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [wordCountPerMinute, setWordCountPerMinute] = useState(0);

  useEffect(() => {
    generateSentence();
  }, []);

  useEffect(() => {
    if (startTime && input.trim() !== "") {
      const elapsedTime = Date.now() - startTime;
      const wordsTyped = input.trim().split(/\s+/).length;
      const wpm = calculateWPM(wordsTyped, elapsedTime); // Calculate words per minute
      setWordCountPerMinute(wpm.toFixed(2));
    }
  }, [input, startTime]);

  const calculateWPM = (typedWordsCount, elapsedTime) => {
    const minutes = elapsedTime / 60000; // Convert elapsed time to minutes
    return Math.floor(typedWordsCount / minutes);
  };

  const generateSentence = () => {
    const sentences = [
      "The majestic mountain range loomed in the distance, its peaks covered in a glistening blanket of snow. The crisp air filled my lungs as I stood in awe of nature's grandeur. Each jagged peak seemed to reach for the sky, casting long shadows on the valley below. I couldn't help but feel a sense of serenity and humility in the presence of such breathtaking beauty.",
      "The bustling city streets were alive with a symphony of sounds. Horns honked, people chattered, and music blared from every corner. Tall buildings stretched towards the heavens, their glass facades reflecting the vibrant energy of urban life. The cityscape was a mosaic of colors, cultures, and stories waiting to be discovered. It was a place where dreams collided and possibilities flourished.",
      "In the heart of the dense jungle, a chorus of exotic creatures sang their melodious tunes. The lush greenery enveloped me, creating a world of its own. Vibrant flowers bloomed in a riot of colors, while ancient trees reached their gnarled branches towards the sunlight. I could feel the pulse of nature with every step, the rhythm of life beating in harmony with my own heartbeat.",
      "The ancient castle stood as a testament to bygone eras. Its weathered stone walls whispered stories of knights, kings, and legendary battles. As I walked through its corridors, a sense of history surrounded me, transporting me to a time long past. The echoes of footsteps seemed to mingle with the whispers of ghosts, reminding me that the past is never truly forgotten.",
      "On the tranquil beach, the waves crashed against the shore in a hypnotic dance. The sun dipped below the horizon, painting the sky in hues of orange and pink. The sand slipped through my toes as I strolled along the water's edge, feeling a deep connection to the rhythm of the ocean. With each passing wave, my worries washed away, leaving behind a sense of peace and renewal.",
    ];

    const randomIndex = Math.floor(Math.random() * sentences.length);
    const randomSentence = sentences[randomIndex];
    setSentence(randomSentence);
    setStartTime(Date.now()); // Set the start time to the current time
    setInput(""); // Reset the input
    setIncorrectIndexes([]); // Reset incorrect indexes
    setAccuracy(0); // Reset accuracy
    setWordCountPerMinute(0); // Reset words per minute
  };

  const handleInputChange = (e) => {
    if (!startTime) {
      setStartTime(Date.now());
    }

    const inputValue = e.target.value;
    setInput(inputValue);

    let incorrectIndexes = [];
    let i = 0;

    while (i < inputValue.length && i < sentence.length) {
      if (inputValue[i] !== sentence[i]) {
        incorrectIndexes.push(i);
      }
      i++;
    }

    setIncorrectIndexes(incorrectIndexes);

    const accuracy = (1 - incorrectIndexes.length / inputValue.length) * 100; // Calculate accuracy based on input length
    setAccuracy(accuracy.toFixed(2));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const renderSentence = () => {
    const highlightColor = "green";

    const renderCharacter = (char, index) => {
      const isIncorrect = incorrectIndexes.includes(index);
      const isNextCharacter = index === input.length;
      const color = isIncorrect ? "red" : "inherit";
      const backgroundColor = isNextCharacter ? highlightColor : "transparent";
      const fontWeight = isNextCharacter ? "bold" : "normal";

      return (
        <span key={index} style={{ color, backgroundColor, fontWeight }}>
          {char}
        </span>
      );
    };

    const characters = sentence.split("");

    return (
      <div className="">
        {!isSubmitted && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={generateSentence} // Call the generateSentence function on button click
          >
            Refresh
          </button>
        )}
        <p
          className="text-xl text-white p-2 rounded bg-black font-medium mb-2 text-left"
          style={{ width: "780px", margin: "0 auto" }}
        >
          {characters.map(renderCharacter)}
        </p>

        <textarea
          className="border border-gray-300 px-4 py-2 m-2 rounded-lg w-full h-20 resize-none focus:outline-none focus:border-blue-500"
          value={input}
          onChange={handleInputChange}
          disabled={isSubmitted}
          placeholder="Start typing..."
          autoFocus
        />
      </div>
    );
  };

  const renderStats = () => {
    return (
      <div className="flex justify-center space-x-4 my-1">
        <div>
          <p className="text-white">Accuracy</p>
          <p className="text-xl text-white font-medium">{accuracy}%</p>
        </div>
        <div>
          <p className="text-white">Words Per Minute</p>
          <p className="text-xl text-white font-medium">{wordCountPerMinute}</p>
        </div>
        <div>
          <p className="text-white">Word Count</p>
          <p className="text-xl text-white font-medium">
            {input.trim().split(/\s+/).length}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto max-w-3xl">
      {renderSentence()}
      {renderStats()}
    </div>
  );
};

export default Test;
