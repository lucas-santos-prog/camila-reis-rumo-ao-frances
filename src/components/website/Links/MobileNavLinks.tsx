"use client";
import { Button } from "@/components/ui/button";
import { HeaderContext } from "@/contexts/HeaderContext";
import { navItems, WHATSAPP_CTA } from "@/database/data";
import { MessageCircle, X } from "lucide-react";
import { useContext, useEffect } from "react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function MobileNavLinks() {
  const { isActiveMobileMenu, setIsActiveMobileMenu } =
    useContext(HeaderContext);
  const { scrollToSection } = useSmoothScroll();

  // Previne scroll do body quando menu está ativo
  useEffect(() => {
    if (isActiveMobileMenu) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px"; // Evita shift de layout
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    // Cleanup ao desmontar
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isActiveMobileMenu]);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsActiveMobileMenu(false);
  };

  return (
    <>
      {isActiveMobileMenu && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsActiveMobileMenu(false)}
        />
      )}

      <nav
        className={`md:hidden fixed top-0 right-0 h-screen w-full max-w-sm bg-primary z-60 border-l border-border transform transition-transform duration-300 ease-in-out ${
          isActiveMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header do menu mobile */}
        <div className="flex items-center justify-between p-4">
          <button
            className="md:hidden text-foreground relative z-60"
            onClick={() => setIsActiveMobileMenu(!isActiveMobileMenu)}
          >
            <X className="w-6 h-6 stroke-white" />
          </button>
        </div>

        {/* Links de navegação */}
        <div className="pt-6 px-4 pb-4 space-y-4 bg-primary">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left text-base text-card hover:text-foreground py-2 transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}

          {/* Botão CTA */}
          <div className="pt-4">
            <Button
              variant="hero"
              size="lg"
              className="w-full"
              onClick={() => {
                window.open(WHATSAPP_CTA, "_blank");
                setIsActiveMobileMenu(false);
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Aula
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
