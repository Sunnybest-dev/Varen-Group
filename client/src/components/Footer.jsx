import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const quickLinks = ["Contact Us", "About Us", "Careers", "Wholesale", "Corporate Information"];

const col = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function Footer() {
  return (
    <footer className="bg-[#020d23] text-white pt-10 sm:pt-16">
      <div className="max-w-[1450px] mx-auto px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 pb-10 sm:pb-16">

        {/* BRAND */}
        <motion.div
          custom={0}
          variants={col}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="space-y-4"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <img src="/Varen-Group.png" alt="Varen Group" className="h-10 w-auto object-contain" />
            <h2 className="text-2xl font-bold text-[#1da1f2]">
              Varen <span className="text-white">Group</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm text-gray-400 leading-relaxed max-w-[260px]"
          >
            Practical HR solutions that reduce risk, ensure compliance, and keep your organization moving forward.
          </motion.p>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          custom={1}
          variants={col}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <h3 className="text-base font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {quickLinks.map((l, i) => (
              <motion.li
                key={l}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                whileHover={{ x: 4, color: "#14aef5" }}
                className="cursor-pointer transition-colors hover:text-[#14aef5]"
              >
                {l}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          custom={2}
          variants={col}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <h3 className="text-base font-bold mb-6">Contact Us</h3>
          <div className="space-y-5">
            {[
              { icon: <Mail size={16} />, label: "Mail", value: "info@varengroup.org" },
              { icon: <Phone size={16} />, label: "Call Us", value: "(818) 306-1995" },
            ].map(({ icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.15, backgroundColor: "#0c9de0" }}
                  className="bg-[#14aef5] p-2 rounded-sm shrink-0"
                >
                  {icon}
                </motion.div>
                <div>
                  <p className="text-xs text-gray-400">{label}</p>
                  <p className="text-sm">{value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* BOTTOM BAR */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="bg-[#14aef5] h-10 flex items-center justify-center text-white text-xs"
      >
        Varen Group © 2026
      </motion.div>
    </footer>
  );
}
