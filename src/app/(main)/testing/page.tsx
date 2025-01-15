import AboutSection from "@/components/modules/home/AboutSection";
import HeroSlider from "@/components/modules/home/HeroSlider";
import ServiceSection from "@/components/modules/home/ServiceSection";

export default function TestPage() {
  return (
    <div className="flex flex-col">
      {/* Home page */}
      <HeroSlider />
      <AboutSection />
      <ServiceSection />
    </div>
  );
}
