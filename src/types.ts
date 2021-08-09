export type KeyType =
  | "backspace"
  | "tab"
  | "caps"
  | "enter"
  | "shift"
  | "space"
  | "normal";

interface KeyEvents {
  onDown?: () => void;
  onPress?: () => void;
  onUp?: () => void;
}

interface NormalKeyProps {
  type: "normal";
  character: string;
}

type SpecialKeyProps =
  | {
      type: "tab" | "shift" | "space" | "enter" | "backspace";
    }
  | {
      type: "caps";
      isActive: boolean;
    };

export type KeyProps =
  | (NormalKeyProps & KeyEvents)
  | (SpecialKeyProps & KeyEvents);

interface KeyObjType {
  type: "normal" | "special";
  character: string;
}

export interface KeyboardProps {
  onKeyDown?: (keyObj: KeyObjType) => void;
  onKeyPress?: (keyObj: KeyObjType) => void;
  onKeyUp?: (keyObj: KeyObjType) => void;
  onBackspaceDown: () => void;
}
