import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-6 py-3 rounded-xl border border-white/[0.08] bg-midnight/85 backdrop-blur-xl">
      <Link href="#" className="font-mono text-lg font-bold text-sage text-glow">
        $ sg
      </Link>

      <ul className="hidden md:flex items-center gap-7 list-none">
        {[
          ["#features", "Features"],
          ["#install", "Install"],
          ["#guide", "Guide"],
          ["#download", "Download"],
        ].map(([href, label]) => (
          <li key={href}>
            <Link
              href={href}
              className="text-ghost text-sm font-medium hover:text-white transition-colors duration-200"
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="https://github.com/RituGupta23/ShellSage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ghost text-sm font-medium hover:text-white transition-colors duration-200"
          >
            GitHub
          </Link>
        </li>
      </ul>
    </nav>
  );
}
