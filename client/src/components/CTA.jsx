import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="w-full px-10 py-20 bg-[#f5f6f8]">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative h-[300px] max-w-[1450px] mx-auto overflow-hidden rounded-2xl"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#060f1e]/75" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display text-white text-4xl md:text-5xl font-bold"
          >
            Elevate Your HR Strategy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-white/70 text-sm md:text-base mt-3 max-w-lg"
          >
            Ready to take your HR strategy to the next level? Contact us at your convenience.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-7 bg-[#14aef5] hover:bg-[#0f9de0] transition-colors text-white px-10 py-3.5 font-semibold text-sm tracking-widest rounded-lg"
          >
            CONTACT US
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
