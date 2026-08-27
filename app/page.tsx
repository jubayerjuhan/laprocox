import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import Capabilities from "./components/Capabilities";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-body text-text">
      <div className="bg-grid bg-ink">
        <Nav />
        <Hero />
      </div>
      <Stats />
      <Services />
      <WhyUs />
      <Process />
      <Capabilities />
      <Work />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
