"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle, Wheat } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function HomeHeroSection() {
  const [name, setName] = useState("");
  const buildWhatsappLink = () => {
    const nomeParam = name.trim() || "Visitante";
    return `https://wa.me/5511984599581?text=${encodeURIComponent(
      `Olá Camila, meu nome é ${nomeParam} gostaria de agendar a aula gratuita da promoção VIM_PELO_WEBSITE.`,
    )}`;
  };
  return (
    <section
      id="inicio"
      className="default-padding relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-french.jpeg"
          alt="Aprender francês com a Torre Eiffel ao fundo"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-linear-to-r from-[hsl(222,47%,18%)]/95 via-[hsl(222,47%,18%)]/80 to-[hsl(222,47%,18%)]/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          {/* Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.15] mb-5 animate-fade-up animation-delay-200">
            Do zero ao intermediário em{" "}
            <span className="text-gold">6 meses</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-3 animate-fade-up animation-delay-400 font-body leading-relaxed">
            Aprenda francês de verdade com{" "}
            <strong className="text-accent">Camila Reis</strong> — aulas 100%
            online, objetivas e focadas em gramática e prática real.
          </p>

          <p className="text-base text-primary-foreground/60 mb-8 animate-fade-up animation-delay-400 font-body">
            Ideal para quem quer viajar, passar em provas como{" "}
            <strong>DELF, DALF e DILF</strong> ou simplesmente se apaixonar pela
            língua francesa.
          </p>

          {/* CTA with name input */}
          <div className="animate-fade-up animation-delay-600 space-y-3">
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <input
                type="text"
                placeholder="Seu nome"
                value={`${name}`}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 h-12 px-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-body text-sm focus:outline-none focus:border-accent/50"
              />
              <Button
                variant="hero"
                size="lg"
                onClick={() => window.open(buildWhatsappLink(), "_blank")}
                className="group whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
                Agendar Aula Grátis
              </Button>
            </div>
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

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-primary-foreground/10 animate-fade-up animation-delay-600">
            <div className="flex items-center gap-3">
              <img
                src={"/assets/camila-profil.jpeg"}
                alt="Camila Reis"
                className="w-10 h-10 rounded-full object-cover border-2 border-accent/40"
                width={40}
                height={40}
              />
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
        </div>
      </div>
    </section>
  );
}
