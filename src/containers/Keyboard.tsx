import React, { useState } from "react";
import Key from "../components/Key";
import { c, cShift, n, nShift } from "../data/variants";
import { KeyType, KeyProps, KeyboardProps } from "../types";
import classes from "../styles/keyboard.module.css";

const charactersMap = new Map<"tab" | "enter" | "space", string>([
  ["tab", "     "],
  ["space", " "],
  ["enter", "\n"]
]);

const KeyBoard: React.FC<KeyboardProps> = ({
  onKeyDown,
  onKeyPress,
  onKeyUp
}) => {
  const [isCapsActive, setIsCapsActive] = useState(false);
  const [isShiftActive, setIsShiftActive] = useState(false);

  // getting the variant
  let variant;

  if (isCapsActive) {
    if (isShiftActive) variant = cShift;
    else variant = c;
  } else {
    if (isShiftActive) variant = nShift;
    else variant = n;
  }

  // transfering the row data into valid props
  const keys = variant.map((keyValue, index) => {
    const keyType = /(tab|caps|shift|space|enter|backspace)/g.test(keyValue)
      ? (keyValue as KeyType)
      : "normal";

    const props: Partial<KeyProps> = { type: keyType };

    if (props.type === "normal") {
      props.character = keyValue;
      props.onDown = onKeyDown?.bind(null, {
        type: "normal",
        character: keyValue
      });
      props.onPress = onKeyPress?.bind(null, {
        type: "normal",
        character: keyValue
      });
      props.onUp = onKeyUp?.bind(null, { type: "normal", character: keyValue });
    } else if (props.type === "caps") {
      props.isActive = isCapsActive;
      props.onDown = () => setIsCapsActive(prev => !prev);
    } else if (props.type === "shift") {
      props.onDown = () => setIsShiftActive(true);
      props.onUp = () => setIsShiftActive(false);
    } else {
      props.onDown = onKeyDown?.bind(null, {
        type: props.type,
        character:
          props.type === "backspace" ? "" : charactersMap.get(props.type!)
      });
      props.onPress = onKeyPress?.bind(null, {
        type: props.type,
        character:
          props.type === "backspace" ? "" : charactersMap.get(props.type!)
      });
    }

    return <Key key={index} {...(props as KeyProps)} />;
  });

  return <div className={classes.container}>{keys}</div>;
};

export default KeyBoard;
