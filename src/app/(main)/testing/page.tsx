import AboutSection from "@/components/modules/home/AboutSection";
import HeroSlider from "@/components/modules/home/HeroSlider";
import ServiceSection from "@/components/modules/home/ServiceSection";
import ProjectSection from "@/components/modules/home/ProjectSection";

export default function TestPage() {
  return (
    <div className="flex flex-col">
      <HeroSlider />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
    </div>
  );
}
