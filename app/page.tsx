import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Providers from "./components/Providers";
import RiskSection from "./components/RiskSection";
import InstallGuide from "./components/InstallGuide";
import GuideSection from "./components/GuideSection";
import Download from "./components/Download";
import Footer from "./components/Footer";

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Features />
        <Divider />
        <Providers />
        <Divider />
        <RiskSection />
        <Divider />
        <InstallGuide />
        <Divider />
        <GuideSection />
        <Divider />
        <Download />
      </main>
      <Footer />
    </>
  );
}
