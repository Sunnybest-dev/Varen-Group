import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 drop-shadow-xl"
          aria-label="Back to top"
        >
          <svg width="52" height="52" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(128 128) rotate(45) translate(-128 -128)">
              <rect x="38" y="38" width="180" height="180" rx="8" fill="#1EA7E1"/>
            </g>
            <g transform="translate(128 122)">
              <path d="M0-46 C18-46 30-28 30-8 L30 22 L18 12 L18 32 L0 24 L-18 32 L-18 12 L-30 22 L-30 -8 C-30 -28 -18 -46 0 -46Z" fill="white"/>
              <circle cx="0" cy="-20" r="7" fill="#1EA7E1"/>
              <path d="M0 24 C8 36 8 48 0 58 C-8 48 -8 36 0 24Z" fill="white"/>
            </g>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
