import { motion } from "framer-motion";
import { Briefcase, Users, Headphones, User, Scale, Brain } from "lucide-react";

const services = [
  { title: "Recruitment", icon: <Briefcase size={28} />, desc: "From sourcing strategy to offer letters, we keep your hiring aligned with labor laws and business goals." },
  { title: "Payroll Management", icon: <Users size={28} />, desc: "We set up and oversee accurate, compliant payroll systems, including wage and hour rules, classifications and recordkeeping." },
  { title: "HR Consulting", icon: <Headphones size={28} />, desc: "We advise on policies, discipline, terminations, investigations, and day-to-day issues with a risk-based approach." },
  { title: "Employee Relations", icon: <User size={28} />, desc: "We step in early to investigate, document, and resolve conflicts before they turn into complaints or litigation." },
  { title: "Training & Management Coaching", icon: <User size={28} />, desc: "We train supervisors on workplace investigations, compliance, communication and employee management." },
  { title: "AI Integration", icon: <Brain size={28} />, desc: "We help you implement AI tools in HR workflows while maintaining compliance and operational efficiency." },
  { title: "Litigation Support", icon: <Scale size={28} />, desc: "We help you prepare claims, review employment practices and support legal strategy documentation." },
  { title: "Labor Relations", icon: <Users size={28} />, desc: "We advise on organizing campaigns, negotiations, labor compliance and workforce communication." },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section className="py-24 px-6 bg-[#f5f6f8]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="text-[#14aef5] text-xs font-semibold tracking-[3px] uppercase">What We Offer</span>
        <h2 className="font-display text-[#0e1623] text-4xl font-bold mt-2">Human Resources Services</h2>
        <div className="w-12 h-1 bg-[#14aef5] mx-auto mt-4 rounded" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 max-w-[1400px] mx-auto"
      >
        {services.map((s, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(20,174,245,0.12)" }}
            className="bg-white rounded-xl py-10 px-7 text-center flex flex-col items-center cursor-default transition-shadow"
          >
            <div className="w-16 h-16 rounded-full bg-[#eaf7fe] flex items-center justify-center text-[#14aef5]">
              {s.icon}
            </div>
            <h3 className="text-[#0e1623] font-semibold text-base mt-5 leading-snug">{s.title}</h3>
            <div className="w-8 h-[2px] bg-[#14aef5] mx-auto my-3" />
            <p className="text-[#777] text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
