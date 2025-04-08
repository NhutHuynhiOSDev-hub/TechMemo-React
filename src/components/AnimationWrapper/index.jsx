import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function AnimationWrapper({
  children,
  className,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transistion = { duration: 1 },
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={initial}
        animate={animate}
        className={className}
        transition={transistion}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimationWrapper;
