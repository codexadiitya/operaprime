import React from "react";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import TrustStrip from "@/components/site/TrustStrip";
import Services from "@/components/site/Services";
import Offers from "@/components/site/Offers";
import Team from "@/components/site/Team";
import Gallery from "@/components/site/Gallery";
import Testimonials from "@/components/site/Testimonials";
import BookingForm from "@/components/site/BookingForm";
import FAQ from "@/components/site/FAQ";
import Location from "@/components/site/Location";
import Footer from "@/components/site/Footer";
import FloatingActions from "@/components/site/FloatingActions";

export default function Home() {
  return (
    <div className="min-h-screen bg-op-bg text-ivory" data-testid="home-page">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Offers />
        <Team />
        <Gallery />
        <Testimonials />
        <BookingForm />
        <FAQ />
        <Location />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
