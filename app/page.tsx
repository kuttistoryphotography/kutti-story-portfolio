import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import FeaturedGallery from "@/components/FeaturedGallery";
import WhyKuttiStory from "@/components/WhyKuttiStory";
import Testimonials from "@/components/Testimonials";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import InstagramFeed from "@/components/InstagramFeed";
import FAQ from "@/components/FAQ";
import FeaturedFilms from "@/components/FeaturedFilms";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <FeaturedGallery />
      <WhyKuttiStory />
      <Testimonials />
      <FeaturedFilms />
      <TestimonialsSlider />
      <InstagramFeed />
      <FAQ />
      <BookingCTA />
      <Footer />
    </main>
  );
}