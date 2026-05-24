import Link from "next/link";

const RELEASES = "https://github.com/RituGupta23/ShellSage/releases/latest";

const platforms = [
  {
    name: "macOS",
    arch: "arm64 (Apple Silicon) · amd64 (Intel)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    name: "Linux",
    arch: "amd64",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    name: "Windows",
    arch: "amd64 (.exe)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

export default function Download() {
  return (
    <section id="download" className="max-w-6xl mx-auto px-6 py-24 text-center">
      <p className="font-mono text-xs font-semibold tracking-widest text-sage uppercase mb-3">
        Download
      </p>
      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
        Get ShellSage
      </h2>
      <p className="text-ghost text-lg max-w-xl mx-auto leading-relaxed mb-14">
        Pre-built binaries for all platforms — no Go required. Or build from source.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-left">
        {platforms.map((p) => (
          <div
            key={p.name}
            className="glass p-6 hover:border-sage/40 hover:glow-green hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-center gap-2.5 text-base font-semibold mb-1.5">
              <span className="text-ghost">{p.icon}</span>
              {p.name}
            </div>
            <div className="font-mono text-xs text-ghost mb-5">{p.arch}</div>
            <Link
              href={RELEASES}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sage text-midnight text-sm font-semibold px-4 py-2 rounded-lg hover:bg-sage-dim transition-colors duration-150 cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download
            </Link>
          </div>
        ))}
      </div>

      <p className="text-ghost text-sm">
        All releases are on{" "}
        <Link
          href="https://github.com/RituGupta23/ShellSage/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sage hover:underline"
        >
          GitHub Releases
        </Link>
        . Licensed under the{" "}
        <Link
          href="https://github.com/RituGupta23/ShellSage/blob/main/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sage hover:underline"
        >
          MIT License
        </Link>
        .
      </p>
    </section>
  );
}
