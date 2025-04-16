
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { WorkSection } from "@/components/WorkSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === "#") return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Set page title for SEO
    document.title = "Befog - Innovative Software Solutions | AI, Cloud & Custom Development";
  }, []);

  return (
    <div className="relative">
      <AnimatedBackground />
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <HeroSection />
        
        <ScrollAnimation>
          <ServicesSection />
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.1}>
          <ComparisonSection />
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <AboutSection />
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.3}>
          <WorkSection />
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.4}>
          <TestimonialsSection />
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.5}>
          <ContactSection />
        </ScrollAnimation>
      </motion.main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
