"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import AIWorks from "@/components/AIWorks";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Cases />
      <AIWorks />
      <Pricing />
      <ContactForm />
      <Footer />
    </>
  );
}
