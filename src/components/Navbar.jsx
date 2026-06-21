import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for background blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver to highlight active section
  useEffect(() => {
    const sections = ["about", "work", "skills", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const closeNav = () => setIsNavOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" onClick={closeNav}>
          <div className="flex items-center space-x-1 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
            <span className="text-slate-400">&lt;</span>
            <span className="text-4xl md:text-5xl" id="custom-logo">P.M</span>
            <span className="text-slate-400">/&gt;</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive ? "text-violet-400" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-lg bg-violet-500/10 border border-violet-500/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative">{label}</span>
              </a>
            );
          })}
          <a
            href="https://drive.google.com/file/d/1E6jzIC7hVsnoO5PQG5TD0LVDbHcn6h1f/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="ml-4 px-5 py-2 text-sm font-medium rounded-lg border border-violet-500/40 text-violet-300 hover:bg-violet-500/10 hover:border-violet-500/70 transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-slate-200 transition-colors"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-label="Toggle menu"
        >
          {isNavOpen ? <RxCross2 className="w-6 h-6" /> : <RxHamburgerMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5 px-6 pb-6"
          >
            <ul className="space-y-1 pt-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={closeNav}
                    className="block py-3 px-4 rounded-lg text-slate-300 hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="https://drive.google.com/file/d/1E6jzIC7hVsnoO5PQG5TD0LVDbHcn6h1f/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeNav}
                  className="block w-full text-center py-3 rounded-lg border border-violet-500/40 text-violet-300 hover:bg-violet-500/10 transition-all duration-300 text-sm font-medium"
                >
                  Resume ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
