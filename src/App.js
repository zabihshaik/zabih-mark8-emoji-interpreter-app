import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling Face with Smiling Eyes",
  "😀": "Grinning Face",
  "😋": "Face Savoring Food",
  "😒": "Unamused Face",
  "😭": "Loudly Crying Face",
  "😇": "Smiling Face with Halo",
  "😜": "Winking Face with Tongue",
  "😱": "Face Screaming in Fear",
  "❤️": "Red Heart",
  "💯": "Hundred Points",
  "🔥": "Fire",
  "👍": "Thumbs Up",
  "🙏": "High Five",
  "✌️": "Victory Hand",
  "🙌": "Raising Hands",
  "👋": "Waving Hand"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry! Emoji Not Found in our Database ";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>

      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>

      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem 0.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
