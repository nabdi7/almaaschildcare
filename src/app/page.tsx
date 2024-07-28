import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Programs from "@/components/programs/Programs";
import Testimonial from "@/components/testimonials/Testimonial";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Programs />
      <Testimonial />
    </main>
  );
}
