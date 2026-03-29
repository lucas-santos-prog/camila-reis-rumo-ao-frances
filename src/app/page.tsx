import HomeAboutSection from "@/components/website/sections/HomeAboutSection";
import HomeBenefitsSection from "@/components/website/sections/HomeBenefitsSection";
import HomeContactSection from "@/components/website/sections/HomeContactSection";
import HomeFAQSection from "@/components/website/sections/HomeFAQSection";
import HomeHeroSection from "@/components/website/sections/HomeHeroSection";
import HomePricingSection from "@/components/website/sections/HomePricingSection";
import HomeTestimonialsSection from "@/components/website/sections/HomeTestimonialsSection";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeBenefitsSection />
      <HomeAboutSection />
      <HomeTestimonialsSection />
      <HomePricingSection />
      <HomeFAQSection />
      <HomeContactSection />
    </>
  );
}
