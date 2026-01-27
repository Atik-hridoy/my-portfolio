"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [code, setCode] = useState(["", "", "", ""]);
  const [isComplete, setIsComplete] = useState(false);
  const targetCode = ["A", "T", "I", "K"];

  useEffect(() => {
    // Auto-fill animation - Slower timing
    const fillCode = async () => {
      for (let i = 0; i < 4; i++) {
        await new Promise((resolve) => setTimeout(resolve, 600)); // Increased from 300ms to 600ms
        setCode((prev) => {
          const newCode = [...prev];
          newCode[i] = targetCode[i];
          return newCode;
        });
      }
      
      // Wait longer before completing
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Increased from 500ms to 1000ms
      setIsComplete(true);
      
      // Trigger completion after animation
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Increased from 800ms to 1000ms
      onComplete();
    };

    fillCode();
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                Hy there !
              </h1>
              
            </motion.div>

            {/* OTP Input Boxes */}
            <div className="flex gap-3">
              {code.map((digit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Glow effect */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg transition-opacity duration-300 ${
                      digit ? 'opacity-60' : 'opacity-0'
                    }`}
                  />
                  
                  {/* Input box */}
                  <div
                    className={`relative w-16 h-20 rounded-xl border-2 flex items-center justify-center text-2xl font-bold transition-all duration-300 ${
                      digit
                        ? 'border-cyan-500 bg-cyan-500/10 text-white'
                        : 'border-zinc-700 bg-zinc-900/50 text-zinc-600'
                    }`}
                  >
                    {digit ? (
                      <motion.span
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      >
                        {digit}
                      </motion.span>
                    ) : (
                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-2 h-8 bg-zinc-700 rounded-full"
                      />
                    )}
                  </div>

                  {/* Particle effect when filled */}
                  {digit && (
                    <>
                      <motion.div
                        className="absolute top-0 left-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                        animate={{
                          y: [-20, -40],
                          x: [-10, 10],
                          opacity: [1, 0],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: 2,
                        }}
                      />
                      <motion.div
                        className="absolute top-0 right-0 w-1 h-1 bg-purple-400 rounded-full"
                        animate={{
                          y: [-20, -40],
                          x: [10, -10],
                          opacity: [1, 0],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: 2,
                          delay: 0.2,
                        }}
                      />
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex items-center gap-2 text-zinc-500 text-sm"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-cyan-500 border-t-transparent rounded-full"
              />
              <span>Verifying access...</span>
            </motion.div>

            {/* Success checkmark */}
            {code.every((d) => d !== "") && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
