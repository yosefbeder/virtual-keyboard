import React, { useEffect, useState } from "react";

import Keyboard from "@yosefbeder/virtual-keyboard";
import "@yosefbeder/virtual-keyboard/dist/index.css";

const App = () => {
  const [value, setValue] = useState("");
  const [lineIsSown, setLineIsShown] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLineIsShown(prev => !prev);
    }, 500);
  }, []);

  return (
    <>
      <div className="typing-area">
        {`${value}${lineIsSown ? "|" : ""}`.split("\n").map(line => (
          <pre>{line}</pre>
        ))}
      </div>
      <Keyboard
        onKeyUp={({ _, character }) => {
          {
            setValue(prev => prev.concat(character));
          }
        }}
        onKeyDown={({ type, character }) => {
          if (type !== "normal") {
            if (type === "backspace") {
              setValue(prev => prev.slice(0, -1));
              console.log("backspace-button");
            } else {
              setValue(prev => prev.concat(character));
            }
          }
        }}
        onKeyPress={({ type, character }) => {
          if (type !== "normal") {
            if (type === "backspace") {
              setValue(prev => prev.slice(0, -1));
              console.log("backspace-button");
            } else {
              setValue(prev => prev.concat(character));
            }
          } else {
            setValue(prev => prev.concat(character));
          }
        }}
      />
    </>
  );
};

export default App;
