"use client";

import { useState } from "react";
import CodeBlock from "./CodeBlock";
import Link from "next/link";

const RELEASES = "https://github.com/RituGupta23/ShellSage/releases/latest";

const tabs = ["macOS", "Linux", "Windows", "go install", "Source"] as const;
type Tab = (typeof tabs)[number];

export default function InstallGuide() {
  const [active, setActive] = useState<Tab>("macOS");

  return (
    <section id="install" className="max-w-6xl mx-auto px-6 py-24">
      <p className="font-mono text-xs font-semibold tracking-widest text-sage uppercase mb-3">
        Installation
      </p>
      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
        Up and running<br />in under a minute
      </h2>
      <p className="text-ghost text-lg max-w-xl leading-relaxed mb-10">
        Three ways to install — pick what fits your workflow.
      </p>

      {/* Tab bar */}
      <div className="flex gap-1 bg-slate-dark border border-white/[0.08] rounded-xl p-1 w-fit mb-8 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`font-mono text-sm px-5 py-2 rounded-lg transition-all duration-150 cursor-pointer ${
              active === t
                ? "bg-slate-mid text-white"
                : "text-ghost hover:text-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Panels */}
      {active === "macOS" && (
        <div className="space-y-7">
          <Step n={1} title="Find your architecture">
            <CodeBlock label="bash">{`$ uname -m
# arm64  → Apple Silicon (M1/M2/M3/M4) → download sg_darwin_arm64
# x86_64 → Intel Mac                    → download sg_darwin_amd64`}</CodeBlock>
          </Step>
          <Step n={2} title="Download the binary">
            <p className="text-ghost text-sm mb-2">
              Get the correct file from the{" "}
              <Link href={RELEASES} target="_blank" rel="noopener noreferrer" className="text-sage hover:underline">
                latest release
              </Link>{" "}
              on GitHub.
            </p>
          </Step>
          <Step n={3} title="Install system-wide">
            <CodeBlock label="bash">{`$ cd ~/Downloads
$ chmod +x sg_darwin_arm64
$ sudo mv sg_darwin_arm64 /usr/local/bin/sg`}</CodeBlock>
          </Step>
          <Step n={4} title="Remove macOS quarantine">
            <p className="text-ghost text-sm mb-2">macOS blocks unsigned binaries. Run this once:</p>
            <CodeBlock label="bash">{`$ xattr -d com.apple.quarantine /usr/local/bin/sg`}</CodeBlock>
            <p className="text-ghost text-sm mt-2">
              Or go to <strong className="text-white">System Settings → Privacy &amp; Security</strong> and click <strong className="text-white">Allow Anyway</strong>.
            </p>
          </Step>
          <Step n={5} title="Verify installation">
            <CodeBlock label="bash">{`$ sg version`}</CodeBlock>
          </Step>
        </div>
      )}

      {active === "Linux" && (
        <div className="space-y-7">
          <Step n={1} title="Download the binary">
            <p className="text-ghost text-sm">
              Download <code className="font-mono text-neon text-xs">sg_linux_amd64</code> from the{" "}
              <Link href={RELEASES} target="_blank" rel="noopener noreferrer" className="text-sage hover:underline">
                latest release
              </Link>.
            </p>
          </Step>
          <Step n={2} title="Install & verify">
            <CodeBlock label="bash">{`$ cd ~/Downloads
$ chmod +x sg_linux_amd64
$ sudo mv sg_linux_amd64 /usr/local/bin/sg
$ sg version`}</CodeBlock>
          </Step>
          <Step n={3} title="PATH not set? Add it">
            <CodeBlock label="bash">{`$ echo 'export PATH="$PATH:/usr/local/bin"' >> ~/.bashrc
$ source ~/.bashrc`}</CodeBlock>
          </Step>
        </div>
      )}

      {active === "Windows" && (
        <div className="space-y-7">
          <Step n={1} title="Download the binary">
            <p className="text-ghost text-sm">
              Download <code className="font-mono text-neon text-xs">sg_windows_amd64.exe</code> from the{" "}
              <Link href={RELEASES} target="_blank" rel="noopener noreferrer" className="text-sage hover:underline">
                latest release
              </Link>.
            </p>
          </Step>
          <Step n={2} title="Install (Option A — System32, requires Admin)">
            <CodeBlock label="powershell">{`Copy-Item "$env:USERPROFILE\\Downloads\\sg_windows_amd64.exe" "C:\\Windows\\System32\\sg.exe"`}</CodeBlock>
          </Step>
          <Step n={3} title="Install (Option B — user bin, no Admin)">
            <CodeBlock label="powershell">{`New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\\bin"
Copy-Item "$env:USERPROFILE\\Downloads\\sg_windows_amd64.exe" "$env:USERPROFILE\\bin\\sg.exe"
[Environment]::SetEnvironmentVariable("PATH", $env:PATH + ";$env:USERPROFILE\\bin", [EnvironmentVariableTarget]::User)
$env:PATH += ";$env:USERPROFILE\\bin"`}</CodeBlock>
          </Step>
          <Step n={4} title="Verify (new PowerShell window)">
            <CodeBlock label="powershell">{`sg version`}</CodeBlock>
          </Step>
        </div>
      )}

      {active === "go install" && (
        <div className="space-y-7">
          <Step n={1} title="Requires Go 1.21+">
            <CodeBlock label="bash">{`$ go install github.com/RituGupta23/ShellSage/cmd@latest`}</CodeBlock>
          </Step>
          <Step n={2} title="Rename to sg (macOS/Linux)">
            <CodeBlock label="bash">{`$ mv "$(go env GOPATH)/bin/cmd" "$(go env GOPATH)/bin/sg"
$ echo 'export PATH="$PATH:$(go env GOPATH)/bin"' >> ~/.zshrc
$ source ~/.zshrc`}</CodeBlock>
          </Step>
          <Step n={3} title="Rename to sg (Windows PowerShell)">
            <CodeBlock label="powershell">{`Rename-Item "$env:GOPATH\\bin\\cmd.exe" "sg.exe"
$gopath = go env GOPATH
[Environment]::SetEnvironmentVariable("PATH", $env:PATH + ";$gopath\\bin", [EnvironmentVariableTarget]::User)`}</CodeBlock>
          </Step>
        </div>
      )}

      {active === "Source" && (
        <div className="space-y-7">
          <Step n={1} title="Clone & build (macOS/Linux)">
            <CodeBlock label="bash">{`$ git clone https://github.com/RituGupta23/ShellSage.git
$ cd ShellSage
$ make install   # installs to ~/go/bin/sg
# OR
$ make build     # builds to ./dist/sg`}</CodeBlock>
          </Step>
          <Step n={2} title="Build (Windows PowerShell)">
            <CodeBlock label="powershell">{`git clone https://github.com/RituGupta23/ShellSage.git
cd ShellSage
go build -trimpath -o dist\\sg.exe .\\cmd
.\\dist\\sg.exe version`}</CodeBlock>
          </Step>
          <Step n={3} title="Available make targets">
            <div className="glass overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-dark border-b border-white/[0.08]">
                    <th className="text-left px-4 py-3 text-ghost text-xs uppercase tracking-widest font-semibold">Command</th>
                    <th className="text-left px-4 py-3 text-ghost text-xs uppercase tracking-widest font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["make build", "Compile binary to ./dist/sg"],
                    ["make install", "Build and install to ~/go/bin/sg"],
                    ["make test", "Run all tests with race detector"],
                    ["make lint", "Run golangci-lint"],
                    ["make clean", "Remove build artifacts"],
                  ].map(([cmd, desc]) => (
                    <tr key={cmd} className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02]">
                      <td className="px-4 py-3 font-mono text-amber text-xs">{cmd}</td>
                      <td className="px-4 py-3 text-ghost text-sm">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Step>
        </div>
      )}
    </section>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-7 h-7 mt-0.5 flex items-center justify-center rounded-full bg-sage/10 border border-sage/30 font-mono text-xs font-bold text-sage">
        {n}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold mb-1.5">{title}</h4>
        {children}
      </div>
    </div>
  );
}
