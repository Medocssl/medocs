import { Link } from "@remix-run/react";

export default function Navbar() {
  // 🔁 CHANGE THIS: Your actual hotline
  const hotline = "+94 76 440 0400";

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO AREA */}
        <Link to="/" className="flex items-center gap-2">
          {/* 🖼️ CHANGE THIS: Path to your logo */}
          <div className="font-bold text-2xl tracking-tight text-[#004680]">
            MEDOCS<span className="text-[#00a0e3]">.</span>
          </div>
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
          
          {/* CALL TO ACTION */}
          <a href={`tel:${hotline}`} className="bg-[#004680] text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">
            Call: {hotline}
          </a>
        </div>
      </div>
    </nav>
  );
}
