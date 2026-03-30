"use client";

import { benefits, BenefitType } from "@/database/data";

const BenefitsContent = () => (
  <div className="text-center max-w-2xl mx-auto mb-14">
    <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">
      Por que aprender francês?
    </span>
    <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
      O francês abre portas que você nem imagina
    </h2>
    <p className="text-muted-foreground">
      Seja qual for seu motivo, o método Rumo ao Francês te leva do zero ao
      intermediário de forma rápida e consistente.
    </p>
  </div>
);

const BenefitsList = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {benefits.map((b: BenefitType, i: number) => (
      <div
        key={i}
        className="bg-background rounded-2xl p-6 border border-border hover:shadow-elevated hover:border-accent/30 transition-all duration-300 group"
      >
        <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
          <b.icon className="w-5 h-5 text-accent" />
        </div>
        <h3 className="font-display text-xl text-foreground mb-2">{b.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {b.description}
        </p>
      </div>
    ))}
  </div>
);

export default function HomeBenefitsSection() {
  return (
    <section id="metodo" className="py-20 default-padding bg-secondary">
      <div className="container mx-auto px-4">
        <BenefitsContent />
        <BenefitsList />
      </div>
    </section>
  );
}
