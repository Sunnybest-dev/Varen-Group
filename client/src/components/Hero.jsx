import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Mail, Phone, ChevronLeft } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    tag: "HR Excellence",
    heading: "The Right People\nFor Your",
    highlight: "Team",
    sub: "Let VarenGroup guide you with clear, practical steps to address your business needs and manage risk.",
  },
  {
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
    tag: "Compliance & Strategy",
    heading: "Protecting Your\nBusiness With",
    highlight: "Expertise",
    sub: "From labor relations to workforce strategy, we build HR practices that hold up under pressure.",
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    tag: "Growth & Innovation",
    heading: "Empowering\nOrganizations To",
    highlight: "Grow",
    sub: "We help you make sound decisions, implement clear processes, and respond quickly when issues arise.",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const imageVariants = {
  enter: { scale: 1.08, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  return (
    <section className="relative h-[580px] sm:h-[700px] overflow-hidden">
      {/* SLIDES */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          variants={imageVariants}
          initial="enter"
          animate="visible"
          exit="exit"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${slides[current].image}')` }}
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060f1e]/90 via-[#060f1e]/70 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-start pl-6 sm:pl-16 pr-6 sm:pr-10 pt-28 sm:pt-36 max-w-[780px]">
        <AnimatePresence mode="wait">
          <motion.div key={current} className="flex flex-col gap-4">
            {/* TAG */}
            <motion.span
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-[#14aef5] text-sm font-semibold tracking-[3px] uppercase"
            >
              {slides[current].tag}
            </motion.span>

            {/* HEADING */}
            <motion.h1
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="font-display text-white text-3xl sm:text-5xl xl:text-6xl font-bold leading-tight whitespace-pre-line"
            >
              {slides[current].heading}{" "}
              <span className="text-[#14aef5]">{slides[current].highlight}</span>
            </motion.h1>

            {/* DIVIDER */}
            <motion.div
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-16 h-1 bg-[#14aef5] rounded"
            />

            {/* SUB */}
            <motion.p
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-white/75 text-sm sm:text-base leading-relaxed max-w-[520px]"
            >
              {slides[current].sub}
            </motion.p>

            {/* BUTTON */}
            <motion.button
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 self-start bg-[#14aef5] hover:bg-[#0c9de0] transition-colors text-white rounded-lg px-8 py-4 flex items-center gap-2 font-semibold text-sm tracking-wide shadow-lg"
            >
              LET'S TALK <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ARROWS */}
      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-[#14aef5] border border-white/20 text-white p-3 rounded-full transition-colors"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-[#14aef5] border border-white/20 text-white p-3 rounded-full transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-24 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[3px] rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-[#14aef5]" : "w-4 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* CONTACT BAR */}
      <div className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm py-4 px-6 flex flex-wrap gap-6 z-20">
        <div className="flex items-center gap-3">
          <div className="bg-[#14aef5] p-2.5 rounded-md text-white">
            <Mail size={18} />
          </div>
          <div>
            <p className="font-semibold text-sm text-[#222]">Mail</p>
            <p className="text-xs text-[#666]">info@varengroup.org</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-[#14aef5] p-2.5 rounded-md text-white">
            <Phone size={18} />
          </div>
          <div>
            <p className="font-semibold text-sm text-[#222]">Call Us</p>
            <p className="text-xs text-[#666]">(818) 306-1995</p>
          </div>
        </div>
      </div>
    </section>
  );
}
