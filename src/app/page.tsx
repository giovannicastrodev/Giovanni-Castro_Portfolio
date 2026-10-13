import { Navbar } from "@/components/navigation/navbar";
import { IntroSequence } from "@/components/intro/intro-sequence";
import { HeroSection } from "@/components/hero/hero-section";
import { ProcessSection } from "@/components/process/process-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { ExtracurricularSection } from "@/components/extracurricular/extracurricular-section";
import { EducationSection } from "@/components/education/education-section";
import { FooterConnect } from "@/components/footer/footer-connect";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#05070d] text-zinc-100 flex flex-col items-center">
      {/* Persistent Navigation */}
      <Navbar />

      {/* 1. Full-Screen Intro Sequence with Prism Background */}
      <IntroSequence />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. "How I Work" (Process Section) */}
      <ProcessSection />

      {/* 4. Experience / Timeline Section */}
      <ExperienceSection />

      {/* 4b. Extracurricular & Projects Section */}
      <ExtracurricularSection />

      {/* 5. Education Section & Mystery Card */}
      <EducationSection />

      {/* 6. Footer / Connect Section */}
      <FooterConnect />
    </main>
  );
}

