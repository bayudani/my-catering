import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "~/components/sections/Navbar";
import { Hero } from "~/components/sections/Hero";
import { WhyChooseUs } from "~/components/sections/WhyChooseUs";
import { WeeklyMenu } from "~/components/sections/WeeklyMenu";
import { Pricing } from "~/components/sections/Pricing";
import { Testimonials } from "~/components/sections/Testimonials";
import { ConsultationCTA } from "~/components/sections/ConsultationCTA";
import { Newsletter } from "~/components/sections/Newsletter";
import { Footer } from "~/components/sections/Footer";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <WeeklyMenu />
      <Pricing />
      <Testimonials />
      <ConsultationCTA />
      <Newsletter />
      <Footer />
    </>
  );
}
