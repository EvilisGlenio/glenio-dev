import { useEffect, useState } from "react";

export const useScreenDetector = (initialWidth = 0) => {
  const [width, setWidth] = useState(initialWidth);
  useEffect(() => {
    const handleWidthSizeChange = () => setWidth(window.innerWidth);

    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);

      window.addEventListener("resize", handleWidthSizeChange);

      return () => window.removeEventListener("resize", handleWidthSizeChange);
    }
  }, []);

  return { width };
};
