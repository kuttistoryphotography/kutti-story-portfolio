import { HomepageProvider } from "@/context/HomepageContext";
import Navbar from "@/components/layout/Navbar";
import HeroSlider from "@/components/HeroSlider";
import FeaturedGallery from "@/components/FeaturedGallery";
import WhyKuttiStory from "@/components/WhyKuttiStory";
import Testimonials from "@/components/Testimonials";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import InstagramFeed from "@/components/InstagramFeed";
import FAQ from "@/components/FAQ";
import FeaturedFilms from "@/components/FeaturedFilms";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/layout/Footer";
import { connectDB } from "@/lib/mongodb";
import Homepage from "@/models/Homepage";

export default async function Home() {
  await connectDB();

  const homepage = await Homepage.findOne().lean();

  const initialHeroImage =
    homepage?.settings?.hero?.heroSliderImages?.[0]?.image || "";
  return (
    <HomepageProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://kuttistoryphotography.in/#business",

            name: "Kutti Story Photography",

            description:
              "Kutti Story Photography is the best wedding photographer in Madurai, specializing in candid wedding photography, cinematic wedding films, pre-wedding shoots, engagement photography, maternity photography, baby photography, and wedding videography across Tamil Nadu.",

            image: "https://kuttistoryphotography.in/og-image.jpg",

            logo: "https://kuttistoryphotography.in/logo.png",

            url: "https://kuttistoryphotography.in",

            telephone: "+919342013600",

            priceRange: "₹₹",

            address: {
              "@type": "PostalAddress",
              addressLocality: "Madurai",
              addressRegion: "Tamil Nadu",
              postalCode: "625001",
              addressCountry: "IN"
            },

            areaServed: [
              "Madurai",
              "Chennai",
              "Coimbatore",
              "Trichy",
              "Dindigul",
              "Tamil Nadu"
            ],

            sameAs: [
              "https://www.instagram.com/kuttistory_photography/",
              "https://www.facebook.com/share/17MKRZ2Pgi/"
            ]
          }),
        }}
      />
      <Navbar />
      <HeroSlider initialHeroImage={initialHeroImage} />
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