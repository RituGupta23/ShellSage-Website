import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jbm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ShellSage — Plain English to Shell Commands",
  description:
    "ShellSage translates plain English into shell commands using AI. Supports macOS, Linux, and Windows. Risk classification built in.",
  keywords: ["CLI", "shell", "AI", "terminal", "developer tool", "ShellSage"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
