import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-white py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="text-[#14aef5] text-xs font-semibold tracking-[3px] uppercase">Who We Are</span>
        <h2 className="font-display text-[#0e1623] text-4xl font-bold mt-2">About Us</h2>
        <div className="w-12 h-1 bg-[#14aef5] mx-auto mt-4 rounded" />
      </motion.div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
            alt="Team"
            className="rounded-2xl w-full h-[280px] object-cover shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute -right-5 top-1/2 -translate-y-1/2 bg-[#14aef5] text-white w-[110px] h-[110px] rounded-2xl flex flex-col items-center justify-center shadow-xl z-10"
          >
            <span className="text-3xl font-bold font-display">15+</span>
            <span className="text-[10px] text-center leading-tight mt-1 font-medium px-2">Years of Experience</span>
          </motion.div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-4 text-[#555] text-sm leading-relaxed"
        >
          <p>
            VarenGroup advises organizations where risk, regulation, and growth intersect. We work closely with FQHCs, healthcare employers, and startups to build HR and employment practices that hold up under pressure. From labor relations and workforce strategy to targeted healthcare recruiting, we focus on practical solutions that reduce exposure and keep operations moving.
          </p>
          <p>
            Our approach is direct and grounded in experience. We help you make sound decisions, implement clear processes, and respond quickly when issues arise — so your organization can stay compliant, staffed, and positioned to grow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
