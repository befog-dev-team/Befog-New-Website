
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { WorkSection } from "@/components/WorkSection";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ScrollToTop } from "@/components/ScrollToTop";

const WorkPage = () => {
  return (
    <div className="relative">
      <AnimatedBackground />
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="pt-32 pb-16 text-center container">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <span className="text-gradient">Work</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-balance"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore our portfolio of successful projects and innovative solutions that have transformed businesses.
          </motion.p>
        </div>
        <WorkSection />
      </motion.main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default WorkPage;
