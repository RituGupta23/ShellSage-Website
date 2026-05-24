import Link from "next/link";
import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Badge */}
      <div className="relative inline-flex items-center gap-2 bg-sage/10 border border-sage/30 text-sage font-mono text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
        AI-Powered CLI Tool
      </div>

      {/* Headline */}
      <h1 className="relative text-4xl sm:text-5xl md:text-[4rem] font-bold leading-[1.1] max-w-3xl mb-5">
        Turn plain English into{" "}
        <span className="text-sage text-glow">shell commands</span> instantly
      </h1>

      {/* Subheadline */}
      <p className="relative text-ghost text-lg sm:text-xl max-w-xl leading-relaxed mb-10">
        ShellSage translates what you want to do into the correct shell command for your
        OS — with AI-powered risk classification and optional auto-execution.
      </p>

      {/* CTA buttons */}
      <div className="relative flex flex-wrap gap-3 justify-center mb-16">
        <Link
          href="#download"
          className="inline-flex items-center gap-2 bg-sage text-midnight font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-sage-dim hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:-translate-y-px transition-all duration-200 cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download ShellSage
        </Link>
        <Link
          href="#guide"
          className="inline-flex items-center gap-2 border border-white/10 text-white font-medium text-sm px-7 py-3.5 rounded-xl hover:bg-slate-dark hover:border-white/20 hover:-translate-y-px transition-all duration-200 cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          Read the Guide
        </Link>
      </div>

      {/* Terminal */}
      <div className="relative w-full flex justify-center">
        <Terminal />
      </div>
    </section>
  );
}
