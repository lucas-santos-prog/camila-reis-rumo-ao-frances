import { Button } from "@/components/ui/button";
import { WHATSAPP_CTA_HERO } from "@/database/data";
import { MessageCircle } from "lucide-react";

export default function ContactButton() {
  return (
    <Button
      variant="hero"
      size="lg"
      onClick={() => window.open(WHATSAPP_CTA_HERO, "_blank")}
      className="group"
    >
      <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
      Falar com a Camila
    </Button>
  );
}
