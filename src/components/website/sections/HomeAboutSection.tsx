"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle } from "lucide-react";
import Image from "next/image";
const WHATSAPP_CTA =
  "https://wa.me/5511984599581?text=Olá%20Camila!%20Vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20método%20Rumo%20ao%20Francês.";

const highlights = [
  "Mais de 100 alunos transformados",
  "Aulas 100% online — de qualquer lugar do Brasil",
  "Método objetivo com foco em gramática e prática",
  "Do zero ao intermediário em 6 meses",
  "Preparação para DELF, DALF e DILF",
];
export default function HomeAboutSection() {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="default-padding container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center px 4 py-12 rounded-md shadow-md">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <Image
                src="/assets/camila-profil.jpeg"
                alt="Camila Reis — Professora de Francês"
                className="rounded-3xl object-cover shadow-elevated"
                loading="lazy"
                fill
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground font-display text-lg font-bold px-5 py-2 rounded-2xl shadow-gold">
                +100 alunos
              </div>
            </div>
          </div>

          <div>
            {/* Subtitle */}
            <h3 className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">
              Quem é a Camila?
            </h3>
            {/* Title */}
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5 leading-tight">
              Sua professora de francês com método comprovado
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Sou Camila Reis, fundadora do{" "}
              <strong className="text-foreground">Rumo ao Francês</strong>.
              Ensino francês de forma objetiva, com foco na gramática e na
              prática real da língua. Minhas aulas são 100% online e atendem
              alunos de todo o Brasil — desde iniciantes até quem busca
              certificações internacionais.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-foreground"
                >
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <Button
              variant="hero"
              size="lg"
              onClick={() => window.open(WHATSAPP_CTA, "_blank")}
              className="group"
            >
              <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
              Falar com a Camila
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
