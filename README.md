# Shellsage

Marketing and documentation website for [ShellSage](https://github.com/RituGupta23/ShellSage) — an AI-powered CLI tool that translates plain English into shell commands.

Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## What's on the site

- **Hero** — headline, CTA buttons, and an animated terminal demo
- **Features** — six key capabilities (plain-English input, multi-OS, risk classification, 4 AI providers, dry/run modes, Go library API)
- **AI Providers** — Gemini, Claude, OpenAI, and Ollama cards with model info and required env vars
- **Risk Section** — explanation of the Low / Medium / High classification system
- **Install Guide** — tabbed instructions for macOS, Linux, Windows, `go install`, and building from source
- **Usage Guide** — command reference and flag documentation
- **Download** — links to the latest GitHub release

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Tech stack

- [Next.js 16](https://nextjs.org) — App Router
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — loaded via `next/font`
- TypeScript 5

## Project structure

```
app/
├── layout.tsx          # Root layout, fonts, metadata
├── page.tsx            # Page composition
├── globals.css         # Tailwind base + custom tokens
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── Features.tsx
    ├── Providers.tsx
    ├── RiskSection.tsx
    ├── InstallGuide.tsx
    ├── GuideSection.tsx
    ├── Download.tsx
    ├── Footer.tsx
    ├── Terminal.tsx     # Animated terminal demo
    └── CodeBlock.tsx    # Syntax-highlighted code snippets
```

## Related

- [ShellSage CLI](https://github.com/RituGupta23/ShellSage) — the actual tool this site documents
