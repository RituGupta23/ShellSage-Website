"use client";

import { useState } from "react";

interface CodeBlockProps {
  label?: string;
  children: string;
}

export default function CodeBlock({ label, children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const clean = children.replace(/^\$ /gm, "");
    navigator.clipboard.writeText(clean).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-black/50 my-4">
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border-b border-white/[0.08]">
        <span className="font-mono text-xs text-ghost">{label ?? "bash"}</span>
        <button
          onClick={handleCopy}
          className={`font-mono text-[11px] px-2.5 py-1 rounded-md border transition-colors duration-150 cursor-pointer ${
            copied
              ? "border-sage text-sage"
              : "border-white/10 text-ghost hover:text-white hover:border-white/30"
          }`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="px-5 py-4 overflow-x-auto font-mono text-sm leading-[1.75] text-slate-200 whitespace-pre">
        {children}
      </pre>
    </div>
  );
}
