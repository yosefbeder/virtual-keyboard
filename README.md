# @yosefbeder/virtual-keyboard

> A virtual keyboard made by react

[![NPM](https://img.shields.io/npm/v/@yosefbeder/virtual-keyboard.svg)](https://www.npmjs.com/package/@yosefbeder/virtual-keyboard) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install @yosefbeder/virtual-keyboard
```

## Usage

```jsx
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
```

## License

MIT © [yosefbeder](https://github.com/yosefbeder)
