"use client";
import { HeaderContext } from "@/contexts/HeaderContext";
import { ReactElement, useState } from "react";

export default function HeaderContextProvider({
  children,
}: {
  children: ReactElement;
}) {
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useState(false);
  return (
    <HeaderContext.Provider
      value={{ isActiveMobileMenu, setIsActiveMobileMenu }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
