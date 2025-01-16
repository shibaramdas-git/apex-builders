import AboutSection from "@/components/modules/home/AboutSection";
import HeroSlider from "@/components/modules/home/HeroSlider";
import ProjectSection from "@/components/modules/home/ProjectSection";

export default function TestPage() {
  return (
    <div className="flex flex-col">
      {/* Home page */}
      <HeroSlider />
      <AboutSection />
      <ProjectSection />
    </div>
  );
}
