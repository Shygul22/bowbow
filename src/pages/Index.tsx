import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import FeedbackSection from "@/components/FeedbackSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <AboutUs />
      <Testimonials />
      <FeedbackSection />
      <Footer />
    </div>
  );
};

export default Index;
