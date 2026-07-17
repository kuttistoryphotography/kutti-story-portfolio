"use client";

import HeroSection from "./HeroSection";
import PortfolioCardsSection from "./PortfolioCardsSection";
import FeaturedFilmsSection from "./FeaturedFilmsSection";

export default function HomepageForm() {
  return (
    <div className="space-y-10">
      <HeroSection />

      <PortfolioCardsSection />

      <FeaturedFilmsSection />
    </div>
  );
}