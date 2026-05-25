import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full bg-[#0e1623]/50 backdrop-blur-sm text-white text-[10px] sm:text-sm py-1.5 px-4 sm:px-10 flex items-center gap-2 z-50"
    >
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <MapPin size={14} />
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        California - Nevada - Texas - Oregon - Florida
      </motion.span>
    </motion.div>
  );
}
