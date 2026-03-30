import LogoLink from "../Links/LogoLink";
import MobileNavLinks from "../Links/MobileNavLinks";

export default function Header() {
  return (
    <header className="default-padding fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <LogoLink />
      <MobileNavLinks />
    </header>
  );
}
