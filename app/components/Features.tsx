const features = [
  {
    title: "Plain English Input",
    desc: "Describe what you want in natural language. ShellSage figures out the exact command — no syntax memorization required.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "Multi-OS Aware",
    desc: "Generates commands for macOS, Linux, and Windows simultaneously. Override detected OS with --os anytime.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Risk Classification",
    desc: "Every command is classified Low / Medium / High using both a local pattern classifier and AI. The stricter rating always wins.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "4 AI Providers",
    desc: "Gemini (free), Claude, OpenAI, and Ollama (local, offline). Switch providers per-query with a flag — no config edit needed.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Dry & Run Modes",
    desc: "Use --dry to preview the command without running it, or --run to execute after a safety confirmation prompt.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Go Library API",
    desc: "Use ShellSage as a Go package in your own programs. No CLI, no terminal UI — just a clean RunQuery() function.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="max-w-6xl mx-auto px-6 py-24">
      <p className="font-mono text-xs font-semibold tracking-widest text-sage uppercase mb-3">
        Why ShellSage
      </p>
      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
        Everything you need,<br />nothing you don&apos;t
      </h2>
      <p className="text-ghost text-lg max-w-xl leading-relaxed mb-14">
        Stop searching Stack Overflow for shell commands. Just describe what you want.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => (
          <div
            key={f.title}
            className="glass p-7 hover:border-sage/25 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-sage/10 border border-sage/25 text-sage mb-5">
              {f.icon}
            </div>
            <h3 className="text-base font-semibold mb-2">{f.title}</h3>
            <p className="text-ghost text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
