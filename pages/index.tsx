import Contact from "@/components/contact";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Statistics from "@/components/statistics";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
     <Navbar />
     <Hero />
     <Features />
     <Statistics />
     <Testimonials />
     <Contact />
     <Footer />
    </>
  )
}