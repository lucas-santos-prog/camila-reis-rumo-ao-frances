"use client";
import { Button } from "@/components/ui/button";
import { plans } from "@/database/data";
import { Check, MessageCircle } from "lucide-react";
import React, { useState } from "react";

export default function HomePricingSection() {
  const [nome, setNome] = useState("");

  const buildLink = (plan: string) => {
    const n = nome.trim() || "Visitante";
    return `https://wa.me/5511984599581?text=${encodeURIComponent(
      `Olá Camila, meu nome é ${n} e tenho interesse no ${plan}. Vi a promoção VIM_PELO_WEBSITE!`,
    )}`;
  };
  return (
    <section id="investimento" className="default-padding py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">
            Investimento
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Invista no seu francês
          </h2>
          <p className="text-muted-foreground">
            Escolha o plano ideal para o seu objetivo. Todos incluem primeira
            aula gratuita!
          </p>
        </div>

        <div className="max-w-xs mx-auto mb-10">
          <input
            type="text"
            placeholder="Seu nome (para a mensagem)"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full h-11 px-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:border-accent/50"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 border transition-all duration-300 relative ${
                plan.highlight
                  ? "bg-primary text-primary-foreground border-accent shadow-elevated scale-[1.02]"
                  : "bg-card text-card-foreground border-border hover:shadow-elevated"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <h3 className="font-display text-2xl mb-1">{plan.name}</h3>
              <p
                className={`text-sm mb-4 ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}
              >
                {plan.description}
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display text-4xl font-bold">
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${plan.highlight ? "text-primary-foreground/60" : "text-muted-foreground"}`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlight ? "hero" : "outline"}
                size="lg"
                className="w-full group"
                onClick={() => window.open(buildLink(plan.name), "_blank")}
              >
                <MessageCircle className="w-4 h-4" />
                {plan.ctaLabel}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
