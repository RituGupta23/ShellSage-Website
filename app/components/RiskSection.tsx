const risks = [
  {
    level: "LOW",
    title: "Read-only & Informational",
    desc: "Safe commands that only inspect or read state. Prompted with a simple [y/N] before execution.",
    examples: "ls, grep, cat, find, ps, ping, df",
    badge: "bg-sage/15 text-sage",
    border: "hover:border-sage/30",
  },
  {
    level: "MEDIUM",
    title: "Mutates State",
    desc: "Commands that change system state but are recoverable. Shown with a warning banner and [y/N] prompt.",
    examples: "mv, cp -r, apt install, curl POST, systemctl",
    badge: "bg-amber/15 text-amber",
    border: "hover:border-amber/30",
  },
  {
    level: "HIGH",
    title: "Irreversible / Destructive",
    desc: 'Commands with permanent consequences. You must type "yes" in full — no shortcuts accepted.',
    examples: "rm -rf, dd, mkfs, shutdown, chmod 777",
    badge: "bg-rose/15 text-rose",
    border: "hover:border-rose/30",
  },
];

export default function RiskSection() {
  return (
    <section id="risk" className="max-w-6xl mx-auto px-6 py-24">
      <p className="font-mono text-xs font-semibold tracking-widest text-sage uppercase mb-3">
        Safety First
      </p>
      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
        Risk classification,<br />built in
      </h2>
      <p className="text-ghost text-lg max-w-xl leading-relaxed mb-14">
        Every command is rated before you see it. ShellSage runs both a local pattern
        classifier and AI — always using the stricter of the two.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {risks.map((r) => (
          <div
            key={r.level}
            className={`glass p-7 ${r.border} hover:-translate-y-0.5 transition-all duration-200 cursor-default`}
          >
            <span
              className={`inline-block font-mono text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-5 ${r.badge}`}
            >
              {r.level}
            </span>
            <h3 className="text-base font-semibold mb-2">{r.title}</h3>
            <p className="text-ghost text-sm leading-relaxed mb-4">{r.desc}</p>
            <div className="font-mono text-xs text-ghost bg-black/30 px-3 py-2 rounded-lg">
              {r.examples}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
