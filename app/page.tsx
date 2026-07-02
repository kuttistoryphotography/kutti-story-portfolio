import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import FeaturedGallery from "@/components/FeaturedGallery";
import WhyKuttiStory from "@/components/WhyKuttiStory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>

      <Navbar />

      <HeroSlider />

      <FeaturedGallery />

      <WhyKuttiStory />

      <Footer />

    </main>
  );
}