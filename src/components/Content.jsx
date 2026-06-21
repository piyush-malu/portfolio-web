import React from "react";
import Image from "../assets/images/piyush.jpg";
import LT from "../assets/images/LT.png";

import Snazzy from "../assets/images/Snazzy.png";
import MyInfo from "./MyInfo";
import { motion } from "framer-motion";
import { knownTechStack, lambdatestWorkEx, snazzyWorkEx } from "../utils/constants";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import Contact from "./Contact";
import Lambdatest from "../assets/images/Lambdatest.svg";
import snazzyLogo from "../assets/images/snazzy.svg";
import DevRevLogo from "../assets/images/devrev.svg";
import DevRevScreenshot from "../assets/images/devrev-screenshot.png";
// ─── Animation variants ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const staggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

// ─── Reusable section header ──────────────────────────────────────────────────
const SectionHeader = ({ label, title, centered = false }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    className={`mb-14 ${centered ? "text-center" : ""}`}
  >
    <p className="text-violet-400 text-xs font-mono tracking-[0.2em] uppercase mb-2">
      {label}
    </p>
    <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
    <div
      className={`mt-4 h-[3px] w-14 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full ${
        centered ? "mx-auto" : ""
      }`}
    />
  </motion.div>
);

// ─── Work experience card ─────────────────────────────────────────────────────
const WorkCard = ({ company, logo, role, period, bullets, tech, link, githubLink, screenshot, flip }) => (
  <motion.div
    variants={fadeUp}
    className="group relative rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden hover:border-violet-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(124,58,237,0.1)]"
  >
    {/* Hover gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    <div className={`grid lg:grid-cols-5 ${flip ? "lg:[direction:rtl]" : ""}`}>
      {/* Screenshot */}
      {screenshot && (
        <div className="lg:col-span-2 overflow-hidden max-h-64 lg:max-h-none [direction:ltr]">
          <a href={link || githubLink} target="_blank" rel="noreferrer">
            <img
              src={screenshot}
              alt={company}
              className="w-full h-full object-contain object-center opacity-70 group-hover:opacity-90 transition-all duration-700 p-3"
            />
          </a>
        </div>
      )}

      {/* Content */}
      <div className="lg:col-span-3 p-7 lg:p-9 flex flex-col justify-center [direction:ltr]">
        {/* Header row */}
        <div className="flex items-center justify-between mb-3">
          {logo ? (
            <img src={logo} alt={company} className="h-5 object-contain" />
          ) : (
            <span className="text-lg font-bold text-white">{company}</span>
          )}
          <div className="flex gap-3 text-slate-500">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noreferrer" className="hover:text-violet-400 transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {link && (
              <a href={link} target="_blank" rel="noreferrer" className="hover:text-violet-400 transition-colors">
                <LuExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-violet-400 font-semibold text-sm mb-1">{role}</p>
        <p className="text-slate-500 text-xs font-mono mb-5">{period}</p>

        <ul className="space-y-2 mb-6">
          {bullets.map((item, i) => (
            <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
              <span className="text-violet-500 mt-[3px] flex-shrink-0 text-xs">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span key={i} className="tech-badge">{t}</span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

// ─── Main Content component ───────────────────────────────────────────────────
const Content = () => {
  const workExperiences = [
    {
      company: "DevRev",
      logo: DevRevLogo,
      role: "Member of Technical Staff",
      period: "October 2025 – Present",
      bullets: [
        "Built the Teams feature from scratch structured ticket ownership and segregation, becoming a key upsell driver for the Build product line.",
        "Introduced typeahead intelligent search, cutting part-selection time by 30% through improved result relevance and reduced user effort.",
        "Optimized search with debouncing, caching, and efficient rendering reducing unnecessary API calls by 40% in high-frequency workflows.",
        "Built and shipped the Sprint Board feature, improving task visibility and planning workflows, directly driving increased customer adoption and engagement.",
                "Designed team-based workflow architecture improving sprint planning clarity and reducing ownership ambiguity, yielding ~25–30% gains in workflow efficiency.",
      ],
      tech: ["React", "Go", "TypeScript"],
      link: "https://devrev.ai",
      screenshot: DevRevScreenshot,
      flip: false,
    },
    {
      company: "LambdaTest",
      logo: Lambdatest,
      role: "Software Engineer",
      period: "Jan 2022 – October 2025",
      bullets: lambdatestWorkEx,
      tech: ["React", "Go", "Redux", "TypeScript", "AWS", "OpenSearch"],
      link: "https://analytics.lambdatest.com/",
      screenshot: LT,
      flip: false,
    },
    {
      company: "Snazzy Care",
      logo: snazzyLogo,
      role: "Full Stack Developer Intern",
      period: "April 2021 – June 2021",
      bullets: snazzyWorkEx,
      tech: ["React", "JavaScript", "CSS"],
      link: "https://snazzy.in/aligner-solution",
      screenshot: Snazzy,
      flip: true,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-12">
      {/* ── Hero / About ─────────────────────────────────────────────────────── */}
      <section id="about" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-violet-700/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-72 h-72 bg-indigo-700/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center w-full">
          {/* Left — text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 flex flex-col"
          >
            <motion.p variants={fadeUp} className="text-violet-400 font-mono text-sm tracking-widest mb-3">
              &gt;_ Hello, World! 👋
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-[3.8rem] font-extrabold text-white leading-[1.1] mb-5">
              I'm{" "}
              <span className="gradient-text">Piyush Malu</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg leading-relaxed mb-9 max-w-lg">
              Full Stack Developer crafting scalable, performant web products with a sharp eye for great user experience.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
              <a href="#work" className="btn-primary">View My Work</a>
              <a
                href="https://drive.google.com/file/d/1Od3soq-B-BQSujZ07LQwEHicN63pasgX/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Download Resume
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={fadeUp} className="flex gap-5">
              {[
                { href: "https://github.com/piyush-malu", Icon: FaGithub },
                { href: "https://www.linkedin.com/in/piyush-malu-915a1816b/", Icon: FaLinkedin },
                { href: "mailto:piyushmalu99@gmail.com", Icon: SiGmail },
              ].map(({ href, Icon }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer"
                  className="text-slate-500 hover:text-violet-400 transition-colors duration-200">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — photo + code block */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex flex-col items-center gap-8"
          >
            {/* Profile photo with glow ring */}
            <div className="relative">
              <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 blur-[8px] opacity-70" />
              <img
                src={Image}
                alt="Piyush Malu"
                className="relative w-44 h-44 md:w-52 md:h-52 rounded-full object-cover border-2 border-violet-500/20 photo-glow"
              />
              {/* Location badge */}
              <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-[#1a1a2e] border border-violet-500/30 text-xs text-slate-400 font-mono whitespace-nowrap">
                📍 India
              </div>
            </div>

            {/* Code block */}
            <div className="w-full max-w-sm">
              <MyInfo />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-[11px] font-mono"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
        </motion.div>
      </section>

      {/* ── Work Experience ───────────────────────────────────────────────────── */}
      <section id="work" className="py-24">
        <SectionHeader label="// experience" title="Work & Projects" />

        {/* GitHub Calendar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-2xl border border-white/8 bg-white/[0.03] overflow-x-auto"
        >
          <p className="text-violet-400 font-mono text-xs mb-5 tracking-widest uppercase">
            GitHub Activity 🗓
          </p>
          <GitHubCalendar
            username="piyush-malu"
            fontSize={13}
            blockSize={13}
            hideColorLegend
          >
            <ReactTooltip delayShow={10} html />
          </GitHubCalendar>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-6"
        >
          {workExperiences.map((exp, i) => (
            <WorkCard key={i} {...exp} />
          ))}
        </motion.div>

        {/* Show more */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://github.com/piyush-malu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-violet-500/30 text-violet-400 hover:bg-violet-500/10 hover:border-violet-500/60 transition-all duration-300 font-mono text-sm"
          >
            <FaGithub className="w-4 h-4" />
            View All on GitHub
          </a>
        </motion.div>
      </section>

      {/* ── Skills ───────────────────────────────────────────────────────────── */}
      <section id="skills" className="py-24">
        <SectionHeader label="// skills" title="Technologies I Work With" />

        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {knownTechStack.map((tech, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              className="flex items-center gap-3 p-4 rounded-xl border border-white/8 bg-white/[0.03] hover:bg-violet-500/8 hover:border-violet-500/30 transition-colors duration-300 cursor-default group"
            >
              <img
                src={tech.link}
                alt={tech.name}
                className="w-8 h-8 group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
              />
              <span className="text-slate-300 font-medium text-sm truncate">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-700/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10">
          <SectionHeader title="Get In Touch" centered />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center"
          >
            <p className="text-slate-400 mb-10 leading-relaxed">
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
            <Contact />
            <div className="mt-6">
              <a
                href="https://www.linkedin.com/in/piyush-malu-915a1816b/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-white/15 text-slate-400 hover:border-violet-500/50 hover:text-violet-300 transition-all duration-300 text-sm"
              >
                <FaLinkedin className="w-4 h-4" />
                Reach Out via LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-white/5 text-slate-600 text-xs font-mono space-y-1">
        <a
          href="https://github.com/piyush-malu"
          target="_blank"
          rel="noreferrer"
          className="hover:text-violet-400 transition-colors"
        >
          Built with ❤️  Code on GitHub
        </a>
        <p>📍 Based in India</p>
      </footer>
    </div>
  );
};

export default Content;
