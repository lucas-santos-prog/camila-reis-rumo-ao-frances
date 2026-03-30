import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="default-padding bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 relative">
              <Image
                src={"/assets/logo.png"}
                alt="Rumo ao Francês"
                className="h-12 w-12 brightness-200"
                fill
                sizes="48px"
              />
            </div>
            <span className="font-display text-lg">Rumo ao Francês</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/rumo_ao_frances/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Instagram"
            >
              <BsInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/5511984599581"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/50 text-xs">
            © {new Date().getFullYear()} Rumo ao Francês — Camila Reis. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
