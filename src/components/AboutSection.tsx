import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { CodeAnimation } from "@/components/CodeAnimation";
import { TechStackLogos } from "@/components/TechStackLogos";

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Team at work" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 sm:w-64 sm:h-64 bg-befog-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-befog-200 rounded-full -z-10"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Befog</h2>
              <p className="text-gray-600 dark:text-gray-300 text-balance mb-4">
                We are a team of passionate software engineers, designers, and strategists dedicated to 
                building innovative software solutions that drive business growth.
              </p>
              <div className="space-y-4">
                {[
                  "Founded in 2024 with a mission to make advanced technology accessible to businesses of all sizes.",
                  "Successful projects delivered across multiple industries, from startups to enterprises.",
                  "Team of experts with deep expertise in modern technologies and best practices.",
                ].map((text, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-befog-100 dark:bg-befog-800 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-befog-600 dark:text-befog-300" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
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
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="max-w-xl mx-auto lg:mx-0 w-full">
              <CodeAnimation />
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 max-w-xl mx-auto lg:mx-0 w-full">
              <h3 className="text-2xl font-semibold">The Befog Difference</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We don't just build software – we craft solutions that perfectly fit your business. 
                Our approach combines deep technical expertise with strategic thinking to deliver 
                results that exceed expectations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Agile Development", desc: "Iterative approach for faster delivery" },
                  { title: "User-Centered", desc: "Focus on exceptional experiences" },
                  { title: "Secure By Design", desc: "Security at every stage" },
                  { title: "Scalable Solutions", desc: "Built to grow with your business" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white dark:bg-befog-900/30 p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <TechStackLogos />
        </div>
      </div>
    </section>
  );
}
