"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function RouteTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 w-full overflow-y-hidden h-full">
      <motion.div
        className="flex flex-col flex-grow w-screen md:w-full min-h-full"
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
