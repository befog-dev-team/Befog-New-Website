
import { motion } from "framer-motion";
import { ArrowRight, Database, Cpu, Cloud, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-32 flex items-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50/30 opacity-60 dark:opacity-20"></div>
      <div className="absolute top-1/3 -left-20 w-72 h-72 blob bg-orange-300 mix-blend-multiply"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 blob bg-blue-300 mix-blend-multiply" style={{ animationDelay: "-3s" }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-60 h-60 blob bg-purple-300 mix-blend-multiply" style={{ animationDelay: "-6s" }}></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 text-sm font-medium border border-orange-200">
                Transforming Ideas into Reality
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              Innovative 
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Software Solutions</span> for Your Business
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-balance max-w-xl">
              We deliver custom software that drives growth, streamlines operations, and creates exceptional digital experiences tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 shadow-md">
                Get Started
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-orange-200 hover:bg-orange-50 text-orange-700 shadow-sm">
                Our Services
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/90 dark:bg-orange-900/30 p-6 rounded-xl shadow-lg backdrop-blur-sm hover-scale border border-orange-100 dark:border-orange-800/30"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-700 flex items-center justify-center mb-4">
                  <Database className="text-orange-600 dark:text-orange-300" />
                </div>
                <h3 className="text-lg font-semibold mb-1">UI/UX Design</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Creating intuitive and engaging user experiences with thoughtful design</p>
              </motion.div>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/90 dark:bg-orange-900/30 p-6 rounded-xl shadow-lg backdrop-blur-sm hover-scale mt-10 border border-orange-100 dark:border-orange-800/30"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-700 flex items-center justify-center mb-4">
                  <Cloud className="text-orange-600 dark:text-orange-300" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Web Development</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Build fast, responsive, and secure websites with cutting-edge technologies</p>
              </motion.div>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white/90 dark:bg-orange-900/30 p-6 rounded-xl shadow-lg backdrop-blur-sm hover-scale border border-orange-100 dark:border-orange-800/30"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-700 flex items-center justify-center mb-4">
                  <Cpu className="text-orange-600 dark:text-orange-300" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Digital Marketing</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Boost your brands reach with effective online strategies</p>
              </motion.div>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white/90 dark:bg-orange-900/30 p-6 rounded-xl shadow-lg backdrop-blur-sm hover-scale mt-10 border border-orange-100 dark:border-orange-800/30"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-700 flex items-center justify-center mb-4">
                  <Code className="text-orange-600 dark:text-orange-300" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Custom Development</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Tailored solutions for your unique business needs</p>
              </motion.div>
            </div>
            
            {/* Animated gradient element */}
            <div className="absolute -right-10 -bottom-10 -z-10 w-80 h-80 opacity-20 dark:opacity-10">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-300 to-purple-300 blur-3xl animate-blob"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
