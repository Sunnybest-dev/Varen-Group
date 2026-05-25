import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const navLinks = ["HOME", "SERVICE", "ABOUT", "PROJECT", "BLOG"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="absolute top-[42px] left-1/2 -translate-x-1/2 w-[92%] max-w-[1400px] bg-white rounded-xl px-4 sm:px-8 h-[60px] sm:h-[70px] flex items-center justify-between shadow-md z-50">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src="/Varen-Group.png" alt="Varen Group" className="h-10 sm:h-12 w-auto object-contain" />
          <h1 className="text-xl sm:text-3xl font-bold text-[#1da1f2]">
            Varen <span className="text-[#3d4d5f]">Group</span>
          </h1>
        </div>

        {/* DESKTOP LINKS */}
        <ul className="hidden lg:flex items-center gap-8 font-semibold text-sm text-[#222]">
          {navLinks.map((link) => (
            <li
              key={link}
              className={`cursor-pointer hover:text-[#1da1f2] transition-colors ${
                link === "HOME" ? "text-[#1da1f2]" : ""
              }`}
            >
              {link}
            </li>
          ))}
        </ul>

        {/* SEARCH — desktop only */}
        <input
          type="text"
          placeholder="Search..."
          className="border border-[#1da1f2] rounded-full px-4 py-2 outline-none text-sm w-[180px] hidden lg:block"
        />

        {/* HAMBURGER — mobile/tablet */}
        <button
          onClick={() => setOpen((p) => !p)}
          className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 focus:outline-none"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-[2px] bg-[#222] rounded origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-[2px] bg-[#222] rounded"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-[2px] bg-[#222] rounded origin-center"
          />
        </button>
      </motion.nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[75%] max-w-[320px] bg-white z-50 shadow-2xl flex flex-col lg:hidden"
            >
              {/* DRAWER HEADER */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <img src="/Varen-Group.png" alt="Varen Group" className="h-9 w-auto object-contain" />
                  <h1 className="text-lg font-bold text-[#1da1f2]">Varen <span className="text-[#3d4d5f]">Group</span></h1>
                </div>
                <button onClick={() => setOpen(false)} className="text-[#555] hover:text-[#1da1f2] transition-colors">
                  <X size={22} />
                </button>
              </div>

              {/* SEARCH */}
              <div className="px-6 pt-5">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border border-[#1da1f2] rounded-full px-4 py-2.5 outline-none text-sm"
                />
              </div>

              {/* LINKS */}
              <ul className="flex flex-col px-6 pt-6 gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                    onClick={() => setOpen(false)}
                    className={`py-3.5 px-4 rounded-lg font-semibold text-sm cursor-pointer transition-colors hover:bg-[#eaf7fe] hover:text-[#1da1f2] ${
                      link === "HOME" ? "text-[#1da1f2] bg-[#eaf7fe]" : "text-[#333]"
                    }`}
                  >
                    {link}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
