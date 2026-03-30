"use client";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import ContactButton from "../buttons/ContactButton";
import { highlights } from "@/database/data";

export const HeroImagery = () => (
  <div className="flex justify-center">
    <div className="relative w-72 h-72 md:w-80 md:h-80">
      <Image
        src="/assets/camila-profil.jpeg"
        alt="Camila Reis — Professora de Francês"
        className="rounded-3xl object-cover shadow-elevated"
        loading="lazy"
        fill
        sizes="(max-width: 768px) 288px, 320px"
      />
      <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground font-display text-lg font-bold px-5 py-2 rounded-2xl shadow-gold">
        +100 alunos
      </div>
    </div>
  </div>
);

export const HeroContent = () => (
  <>
    <h3 className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">
      Quem é a Camila?
    </h3>
    {/* Title */}
    <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5 leading-tight">
      Sua professora de francês com método comprovado
    </h2>
    <p className="text-muted-foreground mb-6 leading-relaxed">
      Sou Camila Reis, fundadora do{" "}
      <strong className="text-foreground">Rumo ao Francês</strong>. Ensino
      francês de forma objetiva, com foco na gramática e na prática real da
      língua. Minhas aulas são 100% online e atendem alunos de todo o Brasil —
      desde iniciantes até quem busca certificações internacionais.
    </p>
  </>
);

export const HeroCTA = () => (
  <div>
    <ul className="space-y-3 mb-8">
      {highlights.map((h: string, i: number) => (
        <li key={i} className="flex items-start gap-3 text-sm text-foreground">
          <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
          {h}
        </li>
      ))}
    </ul>

    <ContactButton />
  </div>
);

export default function HomeAboutSection() {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="default-padding container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center px 4 py-12 rounded-md shadow-md">
          <HeroImagery />
          <div>
            <HeroContent />
            <HeroCTA />
          </div>
        </div>
      </div>
    </section>
  );
}
