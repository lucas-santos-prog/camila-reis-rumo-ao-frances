"use client";

import { useCallback } from "react";

export function useSmoothScroll() {
  const scrollToSection = useCallback((href: string) => {
    // Remove o # do href para obter o ID da seção
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Calcula o offset considerando o header fixo
      const headerHeight = 64; // h-16 = 64px
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return { scrollToSection };
}