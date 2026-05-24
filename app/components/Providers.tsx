const providers = [
  {
    name: "Gemini",
    model: "gemini-2.5-flash",
    free: "Free tier available",
    envVar: "GEMINI_API_KEY",
    freeColor: "text-sage",
    iconColor: "#22c55e",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    name: "Claude",
    model: "claude-sonnet-4",
    free: "Paid API",
    envVar: "ANTHROPIC_API_KEY",
    freeColor: "text-ghost",
    iconColor: "#f472b6",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    model: "gpt-4o",
    free: "Paid API",
    envVar: "OPENAI_API_KEY",
    freeColor: "text-ghost",
    iconColor: "#06b6d4",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    name: "Ollama",
    model: "llama3",
    free: "Local — completely free",
    envVar: "No key needed",
    freeColor: "text-sage",
    iconColor: "#fbbf24",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /><path d="M9 12h6M12 9v6" />
      </svg>
    ),
  },
];

export default function Providers() {
  return (
    <section id="providers" className="max-w-6xl mx-auto px-6 py-24">
      <p className="font-mono text-xs font-semibold tracking-widest text-sage uppercase mb-3">
        AI Backends
      </p>
      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
        Your AI, your choice
      </h2>
      <p className="text-ghost text-lg max-w-xl leading-relaxed mb-14">
        ShellSage works with the providers you already use — including a fully local option.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {providers.map((p) => (
          <div
            key={p.name}
            className="glass p-6 text-center hover:border-sage/25 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
          >
            <div className="flex justify-center mb-3">{p.icon}</div>
            <div className="text-base font-semibold mb-2">{p.name}</div>
            <div className="inline-block font-mono text-xs text-sage bg-sage/10 px-3 py-1 rounded-full mb-3">
              {p.model}
            </div>
            <div className={`text-sm ${p.freeColor} mb-1`}>{p.free}</div>
            <div className="font-mono text-xs text-ghost">{p.envVar}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
