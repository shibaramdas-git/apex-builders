import AboutSection from "@/components/modules/home/AboutSection";
import HeroSlider from "@/components/modules/home/HeroSlider";

export default function TestPage() {
  return (
    <div className="flex flex-col">
      {/* Home page */}
      <HeroSlider />
      <AboutSection />
    </div>
  );
}
