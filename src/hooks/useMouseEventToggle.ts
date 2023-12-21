import { useState } from "react";

type UseMouseEventToggleProps = {
  initialValue?: boolean;
};

export default function useMouseEventToggle({
  initialValue = false,
}: UseMouseEventToggleProps = {}) {
  const [mouseEventToggle, setMouseEventToggle] = useState(initialValue);

  const handleMouseEnter = () => {
    setMouseEventToggle(true);
  };

  const handleMouseLeave = () => {
    setMouseEventToggle(false);
  };
  return { mouseEventToggle, handleMouseEnter, handleMouseLeave };
}
