import { ReactElement } from "react";
import { motion } from "framer-motion";
import { isMobile, isTablet } from "react-device-detect";
import { GlobalState, WindowKey } from "../hooks/State";

interface WindowProps {
  children: ReactElement;
  windowKey: WindowKey;
}

export default function Window({ children, windowKey }: WindowProps) {
  const { window, bringToFront } = GlobalState();
  const zIndex = window[windowKey].zIndex;

  const handleClick = () => {
    bringToFront(windowKey);
  };

  const isTouch = isMobile || isTablet;

  return (
    <motion.main
      drag
      dragConstraints={{
        left: -Infinity,
        right: Infinity,
        top: -Infinity,
        bottom: Infinity,
      }}
      dragMomentum={false}
      className='window'
      style={{
        zIndex,
        position: isTouch ? "relative" : "absolute",
      }}
      tabIndex={0}
      onMouseDown={handleClick}
      onTouchStart={handleClick}
    >
      {children}
    </motion.main>
  );
}
