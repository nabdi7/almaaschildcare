import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Programs from "@/components/programs/Programs";
import { Gallery } from "@/components/gallery/Gallery";
import Testimonial from "@/components/testimonials/Testimonial";
import WhyChoose from "@/components/whyChoose/WhyChoose";
import Cta from "@/components/cta/Cta";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Testimonial />
      <WhyChoose />
      <Cta />
    </main>
  );
}
