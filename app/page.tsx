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
import OpeningIntro from "@/components/OpeningIntro";

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
            "@type": ["ProfessionalService", "LocalBusiness"],
            "@id": "https://kuttistoryphotography.in/#business",

            name: "Kutti Story Photography",

            alternateName: [
              "Kutti Story",
              "Kutti Story Photography Madurai"
            ],

            description:
              "Kutti Story Photography is a wedding photography and videography studio in Madurai, specializing in candid wedding photography, cinematic wedding films, pre-wedding photography, engagement photography, maternity photography, baby photography and event photography across Tamil Nadu.",

            url: "https://kuttistoryphotography.in",

            image: [
              "https://kuttistoryphotography.in/og-image.jpg"
            ],

            logo: {
              "@type": "ImageObject",
              url: "https://kuttistoryphotography.in/logo.png"
            },

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
              {
                "@type": "City",
                name: "Madurai"
              },
              {
                "@type": "City",
                name: "Chennai"
              },
              {
                "@type": "City",
                name: "Coimbatore"
              },
              {
                "@type": "City",
                name: "Trichy"
              },
              {
                "@type": "City",
                name: "Dindigul"
              },
              {
                "@type": "AdministrativeArea",
                name: "Tamil Nadu"
              }
            ],

            knowsAbout: [
              "Wedding Photography",
              "Candid Wedding Photography",
              "Wedding Videography",
              "Cinematic Wedding Films",
              "Pre Wedding Photography",
              "Engagement Photography",
              "Maternity Photography",
              "Baby Photography",
              "Event Photography"
            ],

            sameAs: [
              "https://www.instagram.com/kuttistory_photography/",
              "https://www.facebook.com/share/17MKRZ2Pgi/"
            ]
          })
        }}
      />
      <OpeningIntro />
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