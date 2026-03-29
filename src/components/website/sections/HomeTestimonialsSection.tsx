import { testimonials } from "@/database/data";
import { Star } from "lucide-react";

export default function HomeTestimonialsSection() {
  return (
    <section id="depoimentos" className="default-padding py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            O que nossos alunos dizem
          </h2>
          <p className="text-muted-foreground">
            Histórias reais de quem transformou sua vida com o francês.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-background rounded-2xl p-6 border border-border hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                "{t.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center text-accent font-display font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
