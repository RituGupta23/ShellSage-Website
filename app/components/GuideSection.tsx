"use client";

import { useState } from "react";
import CodeBlock from "./CodeBlock";

const flags = [
  { flag: "--run", desc: "Execute the generated command after confirmation" },
  { flag: "--dry", desc: "Display only — never execute, even low-risk commands" },
  { flag: "--os <name>", desc: "Override detected OS: macos, linux, or windows" },
  { flag: "--provider <name>", desc: "Override provider: claude, openai, gemini, ollama" },
  { flag: "--model <name>", desc: "Override model (e.g. gpt-4o-mini)" },
  { flag: "--no-color", desc: "Disable colored output (plain text)" },
];

const envVars = [
  ["GEMINI_API_KEY", "API key for Google Gemini"],
  ["ANTHROPIC_API_KEY", "API key for Anthropic Claude"],
  ["OPENAI_API_KEY", "API key for OpenAI"],
  ["SHELLSAGE_API_KEY", "Generic fallback API key for any provider"],
  ["SHELLSAGE_PROVIDER", "Override the default provider"],
  ["NO_COLOR", "Set to any value to disable colored output"],
];

export default function GuideSection() {
  const [envTab, setEnvTab] = useState<"unix" | "win">("unix");

  return (
    <section id="guide" className="max-w-6xl mx-auto px-6 py-24">
      <p className="font-mono text-xs font-semibold tracking-widest text-sage uppercase mb-3">
        Guide
      </p>
      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
        First-time setup &amp; usage
      </h2>
      <p className="text-ghost text-lg max-w-xl leading-relaxed mb-12">
        Run the interactive wizard once, then just describe what you want.
      </p>

      {/* 1. Setup wizard */}
      <h3 className="text-base font-semibold mb-4">1. Run the setup wizard</h3>
      <CodeBlock label="bash — sg config init">{`$ sg config init

ShellSage Configuration Wizard
────────────────────────────────────────
AI provider [claude/openai/ollama/gemini] (default: claude): gemini
Model (default: gemini-2.5-flash):
API key (detected GEMINI_API_KEY in environment — press Enter to use it):
Default mode [dry/run] (default: dry):
Validating API key with gemini... OK

Config written to /Users/yourname/.shellsage/config.toml
You can now run: sg "your query here"`}</CodeBlock>

      {/* 2. Env vars */}
      <h3 className="text-base font-semibold mt-10 mb-4">
        2. Or skip the wizard — use environment variables
      </h3>
      <div className="flex gap-1 bg-slate-dark border border-white/[0.08] rounded-xl p-1 w-fit mb-4">
        {(["unix", "win"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setEnvTab(t)}
            className={`font-mono text-sm px-5 py-2 rounded-lg transition-all duration-150 cursor-pointer ${
              envTab === t ? "bg-slate-mid text-white" : "text-ghost hover:text-white"
            }`}
          >
            {t === "unix" ? "macOS / Linux" : "Windows"}
          </button>
        ))}
      </div>
      {envTab === "unix" ? (
        <CodeBlock label="bash">{`# Add to ~/.zshrc or ~/.bashrc
export GEMINI_API_KEY="your-key-here"
source ~/.zshrc`}</CodeBlock>
      ) : (
        <CodeBlock label="powershell">{`[Environment]::SetEnvironmentVariable("GEMINI_API_KEY", "your-key-here", [EnvironmentVariableTarget]::User)
$env:GEMINI_API_KEY = "your-key-here"`}</CodeBlock>
      )}

      {/* 3. Usage examples */}
      <h3 className="text-base font-semibold mt-10 mb-4">3. Usage examples</h3>
      <CodeBlock label="bash">{`# Describe what you want
$ sg "find all files larger than 100MB"

# Preview only, no execution
$ sg --dry "open port 8080 in the firewall"

# Target a specific OS
$ sg --dry --os linux "open port 8080 in the firewall"

# Run immediately after confirmation
$ sg --run "list all running processes sorted by memory"

# Override provider for this query
$ sg --provider claude "compress the src folder into a tar.gz"

# Use a specific model
$ sg --model gemini-2.5-flash "show all open network connections"

# Inspect config
$ sg config show

# Show version
$ sg version`}</CodeBlock>

      {/* 4. Flags */}
      <h3 className="text-base font-semibold mt-10 mb-4">4. All flags</h3>
      <div className="glass overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-dark border-b border-white/[0.08]">
              <th className="text-left px-4 py-3 text-ghost text-xs uppercase tracking-widest font-semibold">Flag</th>
              <th className="text-left px-4 py-3 text-ghost text-xs uppercase tracking-widest font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            {flags.map(({ flag, desc }) => (
              <tr key={flag} className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02]">
                <td className="px-4 py-3 font-mono text-amber text-xs whitespace-nowrap">{flag}</td>
                <td className="px-4 py-3 text-ghost">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 5. Config file */}
      <h3 className="text-base font-semibold mt-10 mb-2">5. Config file</h3>
      <p className="text-ghost text-sm mb-4">
        Lives at <code className="font-mono text-neon text-xs">~/.shellsage/config.toml</code> — created by{" "}
        <code className="font-mono text-neon text-xs">sg config init</code>.
      </p>
      <CodeBlock label="~/.shellsage/config.toml">{`[provider]
  name     = "gemini"         # claude | openai | ollama | gemini
  model    = "gemini-2.5-flash"
  api_key  = "your-api-key-here"
  base_url = ""               # only needed for ollama

[behavior]
  default_mode  = "dry"       # dry = display only | run = execute after confirm
  confirm_risky = true
  os_override   = ""          # force a specific OS
  no_color      = false

[prompt]
  override_path = ""          # path to a custom system prompt file`}</CodeBlock>

      {/* 6. Env vars table */}
      <h3 className="text-base font-semibold mt-10 mb-4">6. Environment variables</h3>
      <div className="glass overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-dark border-b border-white/[0.08]">
              <th className="text-left px-4 py-3 text-ghost text-xs uppercase tracking-widest font-semibold">Variable</th>
              <th className="text-left px-4 py-3 text-ghost text-xs uppercase tracking-widest font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            {envVars.map(([v, d]) => (
              <tr key={v} className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02]">
                <td className="px-4 py-3 font-mono text-neon text-xs whitespace-nowrap">{v}</td>
                <td className="px-4 py-3 text-ghost">{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 7. Go library */}
      <h3 className="text-base font-semibold mt-10 mb-4">7. Use as a Go library</h3>
      <CodeBlock label="bash">{`$ go get github.com/RituGupta23/ShellSage`}</CodeBlock>
      <CodeBlock label="go">{`package main

import (
    "context"
    "fmt"
    "log"
    "github.com/RituGupta23/ShellSage/pkg/shellsage"
)

func main() {
    cfg, err := shellsage.LoadConfig()
    if err != nil { log.Fatal(err) }

    resp, err := shellsage.RunQuery(context.Background(), cfg, "list all docker containers")
    if err != nil { log.Fatal(err) }

    fmt.Println(resp.Primary.Command)  // docker ps -a
    fmt.Println(resp.RiskLevel)        // low

    for _, v := range resp.Variants {
        fmt.Printf("%s (%s): %s\\n", v.OS, v.Shell, v.Command)
    }
}`}</CodeBlock>
    </section>
  );
}
