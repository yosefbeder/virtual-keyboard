
# @yosefbeder/virtual-keyboard

A keyboard that can be used by a mouse!

> A virtual keyboard made by react

[![NPM](https://img.shields.io/npm/v/@yosefbeder/virtual-keyboard.svg)](https://www.npmjs.com/package/@yosefbeder/virtual-keyboard) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Screenshot 2021-08-10 at 07-21-39  yosefbeder virtual-keyboard](https://user-images.githubusercontent.com/78495625/128812418-c1d66c9a-bd42-4e1c-aef9-5bfbbbf4b2ea.png)



## Install

The purpose of creating this package is just practicing react, so you won't be able to install it, but if I decided to publish it you would be able to install it with.

```bash
npm install @yosefbeder/virtual-keyboard
```

or

```bash
yarn add @yosefbeder/virtual-keyboard
```

## Usage

This package isn't easy to use so keep that in mind.

```jsx
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
```

## License

MIT © [yosefbeder](https://github.com/yosefbeder)
