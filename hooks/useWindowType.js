import { useState, useEffect } from "react";
import {
  BREAKPOINT_TABLET,
  BREAKPOINT_DESKTOP,
  TYPE_DESKTOP,
  TYPE_TABLET,
  TYPE_MOBILE,
  TYPE_UNDEFINED,
} from "/utils/consts/windowSize";

export default function useWindowType() {
  const [windowType, setWindowType] = useState(TYPE_UNDEFINED);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line no-inner-declarations
      function handleResize() {
        switch (true) {
          case window.innerWidth < BREAKPOINT_TABLET:
            setWindowType(TYPE_MOBILE);
            break;
          case window.innerWidth < BREAKPOINT_DESKTOP:
            setWindowType(TYPE_TABLET);
            break;
          default:
            setWindowType(TYPE_DESKTOP);
            break;
        }
      }

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowType;
}
