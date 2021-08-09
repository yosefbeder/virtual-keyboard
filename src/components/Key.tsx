import React from "react";
import { KeyProps } from "../types";
import classes from "../styles/keyboard.module.css";
// import { IoBackspaceOutline as BackspaceIcon } from "react-icons/io5";
import { BsShift as ShiftIcon } from "react-icons/bs";
import {
  MdKeyboardBackspace as BackspaceIcon,
  MdKeyboardTab as TabIcon,
  MdKeyboardReturn as ReturnIcon,
  MdKeyboardCapslock as CapsIcon,
  MdSpaceBar as SpacebarIcon
} from "react-icons/md";

const IconsMap = new Map([
  ["tab", <TabIcon />],
  ["caps", <CapsIcon />],
  ["shift", <ShiftIcon />],
  ["space", <SpacebarIcon />],
  ["enter", <ReturnIcon />],
  ["backspace", <BackspaceIcon />]
]);

const Key: React.FC<KeyProps> = props => {
  const emptyFunction = () => {};

  const onDown = props.onDown || emptyFunction;
  const onPress = props.onPress || emptyFunction;
  const onUp = props.onUp || emptyFunction;

  const className = `${classes.key} ${/(tab|caps|enter|backspace)/g.test(
    props.type
  ) && classes["key--span-2"]} ${/(shift|space|caps)/g.test(props.type) &&
    classes[`key--${props.type}`]}`;

  const content =
    props.type === "normal" ? props.character : IconsMap.get(props.type);

  return (
    <button
      className={className}
      onMouseDown={() => {
        /*
          STEPS
          1. onmousedown
          2. set interaval for onmousepress
          3. set a an event on the dom for mouse ups to remove the interval and excute onmouseup
        */
        onDown();

        let onPressInterval: NodeJS.Timer;

        const onPressTimeout = setTimeout(() => {
          onPressInterval = setInterval(onPress, 100);
        }, 500);

        const onUpHanlder = () => {
          clearTimeout(onPressTimeout);
          clearInterval(onPressInterval);
          onUp();
        };

        window.addEventListener("mouseup", onUpHanlder, {
          once: true
        });
      }}
    >
      {content}
      {props.type === "caps" && (
        <div
          className={`${classes["key--caps__badge"]} ${props.isActive &&
            classes["key--caps__badge--active"]}`}
        />
      )}
    </button>
  );
};

export default Key;
