import { HomepageProvider } from "@/context/HomepageContext";
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
    <HomepageProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://kuttistoryphotography.in/#business",
            name: "Kutti Story Photography",
            image: "https://kuttistoryphotography.in/og-image.jpg",
            url: "https://kuttistoryphotography.in",
            telephone: "+919342013600",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Madurai",
              addressRegion: "Tamil Nadu",
              postalCode: "625001",
              addressCountry: "IN",
            },
            areaServed: [
              "Madurai",
              "Chennai",
              "Coimbatore",
              "Trichy",
              "Dindigul",
              "Tamil Nadu",
            ],
            priceRange: "₹₹",
            sameAs: [
              "https://www.instagram.com/kuttistory_photography?igsh=cTVwdmJlZm9qZ2xj",
              "https://www.facebook.com/share/17MKRZ2Pgi/"
            ]
          }),
        }}
      />
      <Navbar />
      <HeroSlider />
      <FeaturedGallery />
      <WhyKuttiStory />
      <FeaturedFilms />
      <Testimonials />
      <TestimonialsSlider />
      <InstagramFeed />
      <FAQ />
      <BookingCTA />
      <Footer />
    </HomepageProvider>
  );
}