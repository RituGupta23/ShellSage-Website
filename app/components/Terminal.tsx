export default function Terminal() {
  return (
    <div className="w-full max-w-2xl rounded-xl overflow-hidden border border-white/[0.08] shadow-[0_24px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(34,197,94,0.08)] bg-midnight/90 backdrop-blur-xl text-left">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-dark border-b border-white/[0.08]">
        <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        <span className="mx-auto font-mono text-xs text-ghost">bash — 80×24</span>
      </div>

      {/* Body */}
      <div className="px-6 py-5 font-mono text-sm leading-[1.85]">
        <p>
          <span className="text-sage">❯ </span>
          <span className="text-white">sg &quot;find all log files modified in the last 3 days&quot;</span>
        </p>
        <p>&nbsp;</p>
        <p>
          <span className="text-ghost text-xs">  macOS / Linux </span>
          <span className="text-neon">  find . -name &quot;*.log&quot; -mtime -3</span>
        </p>
        <p>
          <span className="text-ghost text-xs">  Windows       </span>
          <span className="text-neon">  Get-ChildItem -Recurse -Filter *.log | Where-Object {"{"} $_.LastWriteTime -gt (Get-Date).AddDays(-3) {"}"}</span>
        </p>
        <p>&nbsp;</p>
        <p>
          <span className="text-sage">  ● LOW RISK</span>
          <span className="text-ghost"> — Read-only file search</span>
        </p>
        <p>&nbsp;</p>
        <p>
          <span className="text-amber">  Run? [y/N] </span>
          <span className="inline-block w-2 h-[14px] bg-sage align-middle animate-[blink_1s_step-end_infinite]" />
        </p>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
