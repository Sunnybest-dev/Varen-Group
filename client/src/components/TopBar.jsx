import { MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="absolute top-0 left-0 w-full bg-[#0e1623]/50 backdrop-blur-sm text-white text-sm py-2 px-10 flex items-center gap-2 z-50">
      <MapPin size={14} />
      <span>California - Nevada - Texas - Oregon - Florida</span>
    </div>
  );
}
