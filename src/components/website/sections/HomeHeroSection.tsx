"use client";
import { Wheat } from "lucide-react";
import Image from "next/image";
import HeroCTAForm from "../forms/HeroCTAForm";

const HeroContent = () => (
  <>
    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.15] mb-5 animate-fade-up animation-delay-200">
      Do zero ao intermediário em <span className="text-gold">6 meses</span>
    </h1>
    <p className="text-lg md:text-xl text-primary-foreground/80 mb-3 animate-fade-up animation-delay-400 font-body leading-relaxed">
      Aprenda francês de verdade com{" "}
      <strong className="text-accent">Camila Reis</strong> — aulas 100% online,
      objetivas e focadas em gramática e prática real.
    </p>
    <p className="text-base text-primary-foreground/60 mb-8 animate-fade-up animation-delay-400 font-body">
      Ideal para quem quer viajar, passar em provas como{" "}
      <strong>DELF, DALF e DILF</strong> ou simplesmente se apaixonar pela
      língua francesa.
    </p>
  </>
);

const HeroBackground = () => (
  <div className="h-270 w-480 absolute inset-0">
    <Image
      src="/assets/hero-french.jpeg"
      alt="Aprender francês com a Torre Eiffel ao fundo"
      className="w-full h-full object-cover"
      fill
      sizes="100vw"
      loading="eager"
    />
    <div className="absolute inset-0 bg-linear-to-r from-[hsl(222,47%,18%)]/95 via-[hsl(222,47%,18%)]/80 to-[hsl(222,47%,18%)]/50" />
  </div>
);

const HeroCTAFormBox = () => (
  <div className="animate-fade-up animation-delay-600 space-y-3">
    <HeroCTAForm />
    <a
      href="https://www.instagram.com/rumo_ao_frances/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent transition-colors"
    >
      <Wheat className="w-4 h-4" />
      Dicas diárias no Instagram
    </a>
  </div>
);

const HeroTrustIndicators = () => (
  <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-primary-foreground/10 animate-fade-up animation-delay-600">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 relative">
        <Image
          src="/assets/camila-profil.jpeg"
          alt="Camila Reis"
          className="rounded-full object-cover border-2 border-accent/40"
          fill
          sizes="40px"
        />
      </div>
      <span className="text-primary-foreground/70 text-sm">
        Prof. Camila Reis
      </span>
    </div>
    <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
      <span className="text-accent">✦</span> Aulas 100% Online
    </div>
    <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
      <span className="text-accent">✦</span> Método Exclusivo
    </div>
  </div>
);

export default function HomeHeroSection() {
  return (
    <section
      id="inicio"
      className="default-padding relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <HeroBackground />
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <HeroContent />
          <HeroCTAFormBox />

          <HeroTrustIndicators />
        </div>
      </div>
    </section>
  );
}
