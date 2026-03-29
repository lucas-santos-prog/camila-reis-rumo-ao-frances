"use client";

import { useContext } from "react";
import { HeaderContext } from "@/contexts/HeaderContext";
import Link from "next/link";
import Image from "next/image";
import { navItems, WHATSAPP_CTA } from "@/database/data";
import { Button } from "@/components/ui/button";
import { Menu, MessageCircle, X } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function LogoLink() {
  const { isActiveMobileMenu, setIsActiveMobileMenu } =
    useContext(HeaderContext);
  const { scrollToSection } = useSmoothScroll();

  const handleNavClick = (href: string) => {
    scrollToSection(href);
  };
  return (
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <Link href="#inicio" className="flex items-center gap-1">
        <div className="h-24 w-24 relative">
          <Image src="/assets/logo.png" alt="Rumo ao Francês" fill />
        </div>
        <span className="font-display text-xl font-semibold text-foreground">
          Rumo ao Francês
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => handleNavClick(item.href)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {item.label}
          </button>
        ))}
        <Button
          variant="hero"
          size="sm"
          onClick={() => window.open(WHATSAPP_CTA, "_blank")}
        >
          <MessageCircle className="w-4 h-4" />
          Agendar Aula
        </Button>
      </nav>

      <button
        className="md:hidden text-foreground relative z-60"
        onClick={() => setIsActiveMobileMenu(true)}
      >
        <Menu className="w-6 h-6" />
      </button>
    </div>
  );
}
