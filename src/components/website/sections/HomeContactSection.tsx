"use client";
import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BsInstagram } from "react-icons/bs";

export default function HomeContactSection() {
  const [nome, setNome] = useState("");

  const buildWhatsappLink = () => {
    const n = nome.trim() || "Visitante";
    return `https://wa.me/5511984599581?text=${encodeURIComponent(
      `Olá Camila, meu nome é ${n} gostaria de agendar a aula gratuita da promoção VIM_PELO_WEBSITE.`,
    )}`;
  };
  return (
    <section id="contato" className="default-padding py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">
              Vamos conversar?
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5 leading-tight">
              Pronta para começar sua jornada no francês?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Entre em contato pelo WhatsApp ou me siga no Instagram para dicas
              diárias de francês.
            </p>

            <div className="space-y-4 mb-6">
              <a
                href="https://wa.me/5511984599581"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border hover:border-accent/40 hover:shadow-soft transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    WhatsApp
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Resposta rápida • Agende sua aula
                  </p>
                </div>
              </a>

              <Link
                href="https://www.instagram.com/rumo_ao_frances/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border hover:border-accent/40 hover:shadow-soft transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-full bg-[#E4405F]/10 flex items-center justify-center group-hover:bg-[#E4405F]/20 transition-colors">
                  <BsInstagram className="w-5 h-5 text-[#E4405F]" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Instagram
                  </p>
                  <p className="text-muted-foreground text-xs">
                    @rumo_ao_frances • Dicas diárias
                  </p>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4" />
              <span>Aulas 100% online • Centro de São Paulo</span>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-primary rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-5">
                <span className="text-3xl">🇫🇷</span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-3">
                Sua primeira aula é grátis!
              </h3>
              <p className="text-primary-foreground/60 mb-6 text-sm">
                Preencha seu nome e agende agora mesmo pelo WhatsApp.
              </p>

              <div className="space-y-3 max-w-sm mx-auto">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm font-body focus:outline-none focus:border-accent/50"
                />
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full group"
                  onClick={() => window.open(buildWhatsappLink(), "_blank")}
                >
                  <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
                  Agendar Aula Grátis
                </Button>
              </div>

              <p className="text-primary-foreground/40 text-xs mt-4">
                Respondo em até 24 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
