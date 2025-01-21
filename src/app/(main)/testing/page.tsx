import AboutSection from "@/components/modules/home/AboutSection";
import HeroSlider from "@/components/modules/home/HeroSlider";
import ServiceSection from "@/components/modules/home/ServiceSection";
import ProjectSection from "@/components/modules/home/ProjectSection";
import ArticleSection from "@/components/modules/home/ArticleSection";
import Testimonial from "@/components/Testimonial";
import TestimonialSection from "@/components/modules/home/TestimonialSection";
import ServiceSection2 from "@/components/modules/home/ServiceSection2";

export default function TestPage() {
  return (
    <div className="flex flex-col">
      {/* <HeroSlider /> */}
      {/* <AboutSection /> */}
      <ServiceSection />
      {/* Curved serivce list */}
      {/* <ServiceSection2 /> */}
      {/* <ProjectSection /> */}
      {/* <ArticleSection /> */}
      {/* <TestimonialSection /> */}
    </div>
  );
}
