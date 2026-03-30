"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import * as z from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "O nome deve ter pelo menos 2 caractères.")
    .max(100, "O nome deve ter no máximo 100 caractères."),
});

interface PlansCTAFormProps {
  onNomeChange: (nome: string) => void;
}

export default function PlansCTAForm({ onNomeChange }: PlansCTAFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const watchedName = form.watch("name");

  useEffect(() => {
    onNomeChange(watchedName);
  }, [watchedName, onNomeChange]);
  function onSubmit(data: z.infer<typeof formSchema>) {
    const nomeParam = data.name.trim() || "Visitante";

    const url = `https://wa.me/5511984599581?text=${encodeURIComponent(
      `Olá Camila, meu nome é ${nomeParam} gostaria de agendar a aula gratuita da promoção VIM_PELO_WEBSITE.`,
    )}`;

    window.open(url, "_blank");
  }
  return (
    <form id="pricing-cta-form" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <Field
              data-invalid={fieldState.invalid}
              className="h-11 max-w-xs mx-auto mb-10"
            >
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="Seu nome (para a mensagem)"
                autoComplete="off"
                className="w-full h-11 px-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:border-accent/50"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
    </form>
  );
}
