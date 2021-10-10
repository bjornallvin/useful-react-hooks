import { useState } from "react";

export default function useToggle(
  defaultValue: boolean
): [boolean, (value?: unknown) => void] {
  const [value, setValue] = useState<boolean>(defaultValue);

  const toggleValue = (value?: unknown) => {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  };

  return [value, toggleValue];
}
