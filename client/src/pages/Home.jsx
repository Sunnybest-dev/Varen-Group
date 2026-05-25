import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full bg-[#f4f4f4] text-[#222] overflow-x-hidden">
      <div className="relative">
        <TopBar />
        <Navbar />
        <Hero />
      </div>
      <Services />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}
