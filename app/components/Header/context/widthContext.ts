import { useEffect, useState } from "react";

export const useScreenDetector = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleWidthSizeChange = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleWidthSizeChange);

    return () => window.removeEventListener("resize", handleWidthSizeChange);
  }, []);

  return { width };
};
