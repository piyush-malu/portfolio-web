import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-base">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-8"
      >
        {/* Logo */}
        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur-xl opacity-50" />
          <p
            id="custom-logo"
            className="relative text-7xl bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent"
          >
            P.M
          </p>
        </div>

        {/* Bouncing dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-violet-500"
              animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.18,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Loading;
