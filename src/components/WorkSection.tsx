import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.png";
import image3 from "@/assets/images/image3.png";
import image4 from "@/assets/images/image4.png";

const projects = [
  {
    title: "footloosemonkey.club",
    category: "Talent Platform",
    image: image1,
    description: "A vibrant online stage that celebrates performers of all ages and talents—be it singing, dancing, acting, or mimicry. Footloosemonkey.club offers inclusive competitions, creative exposure, and a supportive community to help individuals and groups express themselves and shine together.",
  },
  {
    title: "Modeweltjob",
    category: "Fashion Designers Job Platform",
    image: image2,
    description: "An integrated Job platform for fashion designers, stylists, photographers, and industry professionals to connect with top brands, recruiters, and creative opportunities worldwide.",
  },
  {
    title: "Lego House Architects",
    category: "Construction",
    image: image3,
    description: "A cutting-edge construction website showcasing the innovative designs and architectural services of Lego House Architects.",
  },
  {
    title: "Indie Street",
    category: "E-Commerce",
    image: image4,
    description: "Indie Street is an online marketplace dedicated to showcasing handcrafted products and local goods, empowering artisans and small vendors by bringing the vibrant essence of Indian streets to the digital world.",
  },
];

export function WorkSection() {
  return (
    <section id="work" className="py-24 bg-gray-50 dark:bg-befog-950/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-balance">
              Browse our portfolio of successful projects delivered across various industries.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-befog-900/30 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-transform transform hover:scale-[1.01] focus-within:ring-2 ring-befog-500"
              tabIndex={0}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-sm text-white/90 bg-befog-600/80 px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 flex justify-between items-center">
                  {project.title}
                  {/* <ExternalLink className="w-5 h-5 text-befog-500 opacity-0 group-hover:opacity-100 transition-opacity" /> */}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="px-6 py-3 border border-befog-300 rounded-lg text-befog-700 dark:text-befog-300 dark:border-befog-700 hover:bg-befog-50 dark:hover:bg-befog-900/50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-befog-500"
          >
            View All Case Studies
          </motion.button>
        </div>
      </div>
    </section>
  );
}
