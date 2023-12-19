import { useState, useEffect } from "react";

type UseBackToTopProps = {
  initialValue?: boolean;
};

export default function useBackToTop({
  initialValue = false,
}: UseBackToTopProps) {
  const [backToTop, setBackToTop] = useState(initialValue);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return {
    backToTop,
    scrollUp,
  };
}
