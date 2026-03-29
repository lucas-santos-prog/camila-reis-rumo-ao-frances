"use client";

import { createContext, Dispatch, SetStateAction } from "react";

export type HeaderContextType = {
  isActiveMobileMenu: boolean;
  setIsActiveMobileMenu: Dispatch<SetStateAction<boolean>>;
};

const HeaderContextDefaultValues: HeaderContextType = {
  isActiveMobileMenu: false,
  setIsActiveMobileMenu: () => {},
};

export const HeaderContext = createContext(HeaderContextDefaultValues);
