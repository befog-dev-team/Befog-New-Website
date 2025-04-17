
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { CodeAnimation } from "@/components/CodeAnimation";
import { TechStackLogos } from "@/components/TechStackLogos";

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Team at work" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-befog-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-befog-200 rounded-full -z-10"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Befog</h2>
              <p className="text-gray-600 dark:text-gray-300 text-balance">
                We are a team of passionate software engineers, designers, and strategists dedicated to 
                building innovative software solutions that drive business growth.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="shrink-0 w-6 h-6 rounded-full bg-befog-100 dark:bg-befog-800 flex items-center justify-center">
                  <Check className="w-4 h-4 text-befog-600 dark:text-befog-300" />
                </div>
                <p><strong>Founded in 2024</strong> with a mission to make advanced technology accessible to businesses of all sizes.</p>
              </div>
              <div className="flex gap-3">
                <div className="shrink-0 w-6 h-6 rounded-full bg-befog-100 dark:bg-befog-800 flex items-center justify-center">
                  <Check className="w-4 h-4 text-befog-600 dark:text-befog-300" />
                </div>
                <p><strong>successful projects</strong> delivered across multiple industries, from startups to enterprises.</p>
              </div>
              <div className="flex gap-3">
                <div className="shrink-0 w-6 h-6 rounded-full bg-befog-100 dark:bg-befog-800 flex items-center justify-center">
                  <Check className="w-4 h-4 text-befog-600 dark:text-befog-300" />
                </div>
                <p><strong>Team of experts</strong> with deep expertise in modern technologies and best practices.</p>
              </div>
              {/* <div className="flex gap-3">
                <div className="shrink-0 w-6 h-6 rounded-full bg-befog-100 dark:bg-befog-800 flex items-center justify-center">
                  <Check className="w-4 h-4 text-befog-600 dark:text-befog-300" />
                </div>
                <p><strong>Global client base</strong> spanning North America, Europe, and Asia-Pacific regions.</p>
              </div> */}
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 text-balance">
                To empower businesses with innovative software solutions that solve complex problems, 
                drive growth, and create exceptional user experiences.
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-20 flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="max-w-xl mx-auto lg:mx-0">
              <CodeAnimation />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
              <h3 className="text-2xl font-semibold">The Befog Difference</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We don't just build software – we craft solutions that perfectly fit your business. 
                Our approach combines deep technical expertise with strategic thinking to deliver 
                results that exceed expectations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-befog-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Agile Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Iterative approach for faster delivery</p>
                </div>
                <div className="bg-white dark:bg-befog-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">User-Centered</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Focus on exceptional experiences</p>
                </div>
                <div className="bg-white dark:bg-befog-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Secure By Design</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Security at every stage</p>
                </div>
                <div className="bg-white dark:bg-befog-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Scalable Solutions</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Built to grow with your business</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <TechStackLogos />
      </div>
    </section>
  );
}
