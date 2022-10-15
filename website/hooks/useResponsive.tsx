import { useEffect, useState } from "react";

export default function useResponsive() {
  const [width, setWidth] = useState(0);

  const handler = (e: UIEvent) => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  const isLessThanSm = width < 576;

  const isGreaterThanSm = width >= 576;

  const isGreaterThanMd = width >= 768;

  const isGreaterThanLg = width >= 992;

  const isGreaterThanXl = width >= 1200;

  const isGreaterThanXxl = width >= 1400;

  return {
    isLessThanSm,
    isGreaterThanSm,
    isGreaterThanMd,
    isGreaterThanLg,
    isGreaterThanXl,
    isGreaterThanXxl,
  };
}
