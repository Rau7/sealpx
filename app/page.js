import Image from "next/image";
import HeroComponent from "./components/HeroComponent";
import AboutComponent from "./components/AboutComponent";
import SpecialitiesComponent from "./components/SpecialitiesComponent";
import PricingComponent from "./components/PricingComponent";
import BlogComponent from "./components/BlogComponent";
import ContactComponent from "./components/ContactComponent";
import FooterComponent from "./components/FooterComponent";

export default function Home() {
  return (
    <>
      <HeroComponent />
      <AboutComponent />
      <SpecialitiesComponent />
      <PricingComponent />
      <BlogComponent />
      <ContactComponent />
      <FooterComponent />
    </>
  );
}
