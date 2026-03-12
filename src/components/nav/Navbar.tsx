import { useState } from "react";
import {
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Menu,
  Twitter,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "About", path: "/about" },
    { name: "Culture", path: "/culture" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Visit Mepe", path: "/visit-mepe" },
    { name: "Events", path: "/events" },
    { name: "Youth", path: "/youth" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full py-6 sticky top-0 z-50 transition-all duration-500 glass-nav">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 font-bold text-2xl text-mda-maroon hover:opacity-80 transition-all relative z-[60] hover:scale-105 active:scale-95"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src="/mda-logo.png"
            alt="Mepe MDA Logo"
            className="w-24 h-26 object-contain drop-shadow-md"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-10 items-center">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name} className="group relative">
                <Link
                  to={link.path}
                  className={`text-[0.65rem] font-bold uppercase flex items-center gap-1 transition-all duration-300 tracking-[0.2em] ${
                    isActive
                      ? "text-mda-maroon scale-110"
                      : "text-mda-dark/40 group-hover:text-mda-maroon group-hover:translate-y-[-2px]"
                  }`}
                >
                  {link.name}
                </Link>
                <div
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-mda-pink rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(244,114,182,0.5)] ${
                    isActive
                      ? "w-4 opacity-100"
                      : "w-0 opacity-0 group-hover:w-2 group-hover:opacity-100"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="premium-gradient text-white px-10 py-4 rounded-2xl font-bold tracking-[0.2em] text-[10px] uppercase hover:shadow-[0_20px_40px_-10px_rgba(93,26,26,0.3)] transform hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-3 border border-white/10">
            <Heart
              size={14}
              fill="currentColor"
              className="text-mda-pink animate-pulse"
            />
            Donate
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-[60] w-12 h-12 flex items-center justify-center bg-mda-maroon text-white rounded-2xl shadow-lg shadow-mda-maroon/20 transition-transform active:scale-95"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-mda-maroon z-50 transition-all duration-500 ease-in-out lg:hidden ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col p-8 pt-32">
          <ul className="space-y-6 mb-12">
            {links.map((link, i) => {
              const isActive = location.pathname === link.path;
              return (
                <li
                  key={link.name}
                  className={`transform transition-all duration-500 delay-[${
                    i * 50
                  }ms] ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-8 opacity-0"
                  }`}
                >
                  <Link
                    to={link.path}
                    className={`text-5xl font-display uppercase transition-colors block ${
                      isActive
                        ? "text-mda-pink"
                        : "text-white hover:text-mda-pink"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            className={`mt-auto space-y-8 transform transition-all duration-700 delay-300 ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <button className="w-full bg-mda-pink text-mda-maroon py-6 rounded-3xl font-bold uppercase tracking-widest flex items-center justify-center gap-4 text-lg">
              <Heart size={24} fill="currentColor" />
              Support Mepe
            </button>
            <div className="flex items-center gap-4 pt-2">
              {[
                { Icon: Facebook, link: "#" },
                { Icon: Twitter, link: "#" },
                { Icon: Instagram, link: "#" },
                { Icon: Linkedin, link: "#" },
              ].map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  className="w-10 h-10 rounded-full border border-mda-cream/10 flex items-center justify-center hover:bg-mda-pink hover:text-mda-maroon transition-all group text-white"
                >
                  <Icon
                    size={18}
                    className="transition-transform group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
