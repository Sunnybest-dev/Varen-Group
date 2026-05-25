import { Mail, Phone } from "lucide-react";

const quickLinks = ["Contact Us", "About Us", "Careers", "Wholesale", "Corporate Information"];

export default function Footer() {
  return (
    <footer className="bg-[#020d23] text-white pt-16">
        <div className="max-w-[1450px] mx-auto px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pb-16">

          {/* BRAND */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex flex-col gap-[3px]">
                <div className="w-8 h-[5px] bg-gray-500 rounded" />
                <div className="w-6 h-[5px] bg-gray-400 rounded" />
                <div className="w-10 h-[5px] bg-green-500 rounded" />
              </div>
              <h2 className="text-2xl font-bold text-[#1da1f2]">
                Varen <span className="text-white">Group</span>
              </h2>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-[260px]">
              Practical HR solutions that reduce risk, ensure compliance, and keep your organization moving forward.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-base font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {quickLinks.map((l) => (
                <li key={l} className="hover:text-[#14aef5] cursor-pointer transition-colors">{l}</li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-base font-bold mb-6">Contact Us</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="bg-[#14aef5] p-2 rounded-sm shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Mail</p>
                  <p className="text-sm">info@varengroup.org</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#14aef5] p-2 rounded-sm shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Call Us</p>
                  <p className="text-sm">(818) 306-1995</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="bg-[#14aef5] h-10 flex items-center justify-center text-white text-xs">
          Varen Group © 2025
        </div>
      </footer>
  );
}
