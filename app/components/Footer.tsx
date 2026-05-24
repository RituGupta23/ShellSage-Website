import Link from "next/link";

const links = [
  ["https://github.com/RituGupta23/ShellSage", "GitHub"],
  ["https://github.com/RituGupta23/ShellSage/releases", "Releases"],
  ["https://github.com/RituGupta23/ShellSage/blob/main/README.md", "README"],
  ["https://github.com/RituGupta23/ShellSage/blob/main/Contribution.md", "Contributing"],
  ["https://github.com/RituGupta23/ShellSage/blob/main/LICENSE", "MIT License"],
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-5 text-center">
        <span className="font-mono text-xl font-bold text-sage text-glow">$ sg</span>
        <div className="flex flex-wrap justify-center gap-6">
          {links.map(([href, label]) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ghost text-sm hover:text-white transition-colors duration-150"
            >
              {label}
            </Link>
          ))}
        </div>
        <p className="text-ghost text-xs">
          ShellSage &mdash; plain English to shell commands, powered by AI.
        </p>
      </div>
    </footer>
  );
}
