import React from "react";
import HeroSection from "./components/hero";
import PartnersSection from "./components/partners";
import FeaturedEpisodes from "./components/featured-episodes";
import SubscriptionSection from "./components/subscription-section";
import MeetTheHost from "./components/meet-the-host";

async function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <FeaturedEpisodes />
      <MeetTheHost />
      <SubscriptionSection />
      <PartnersSection />
    </React.Fragment>
  );
}

export default Home;
