"use client";
import Banner from "@/components/Banner";
import { usePathname } from "next/navigation";

export default function CommonServicePage() {
  const pathname = usePathname();

  return (
    <section className="">
      <Banner
        heading="Services"
        path={pathname}
        bgImageSrc="/buildings/photodune-3979102-superb-backyard-m-1024x754.jpg"
      />
      Service details page
    </section>
  );
}
