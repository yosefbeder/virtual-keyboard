import React, { useState } from "react";

import Keyboard from "@yosefbeder/virtual-keyboard";
import "@yosefbeder/virtual-keyboard/dist/index.css";

const App = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <textarea value={`${value}|`} />
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
