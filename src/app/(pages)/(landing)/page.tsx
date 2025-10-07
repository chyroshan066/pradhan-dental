import { About } from "@/components/About/About";
import { Appointment } from "@/components/Appointment/Appointment";
import { CallToAction } from "@/components/CallToAction/CallToAction";
import { Dentist } from "@/components/Dentist/Dentist";
import { Facility } from "@/components/Facility/Facility";
import { Hero } from "@/components/Hero/Hero";
import { Intro } from "@/components/Intro/Intro";
import { Maps } from "@/components/Maps";
import { Review } from "@/components/Review";
import { Service } from "@/components/Service/Service";
import { TestimonialSlider } from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <main>
        <article>
          <Hero />
          <Appointment />
          <Intro />
          <Service />
          <Facility />
          <About />
          <Dentist />
          <CallToAction />
          <TestimonialSlider />
          <Review />
          <Maps />
        </article>
      </main>
    </>
  );
}
