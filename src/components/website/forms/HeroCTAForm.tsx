"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "O nome deve ter pelo menos 2 caractères.")
    .max(100, "O nome deve ter no máximo 100 caractères."),
});

export default function HeroCTAForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    const nomeParam = data.name.trim() || "Visitante";

    const url = `https://wa.me/5511984599581?text=${encodeURIComponent(
      `Olá Camila, meu nome é ${nomeParam} gostaria de agendar a aula gratuita da promoção VIM_PELO_WEBSITE.`,
    )}`;

    window.open(url, "_blank");
  }

  return (
    <form
      id="hero-cta"
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col sm:flex-row gap-3 max-w-lg"
    >
      <FieldGroup>
        <Controller
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="h-12">
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="Seu nome"
                autoComplete="off"
                className="flex-1 h-12 px-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-body text-sm focus:outline-none focus:border-accent/50"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button
        type="submit"
        variant="hero"
        className="group whitespace-nowrap h-auto"
      >
        <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
        Agendar Aula Grátis
      </Button>
    </form>
  );
}
