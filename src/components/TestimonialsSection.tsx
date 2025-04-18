import { motion } from "framer-motion";
import { Star } from "lucide-react";

import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";

const logos = [logo1, logo2, logo3, logo4];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechVision Inc.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "Befog transformed our outdated systems into a sleek, modern platform. Their team was professional, responsive, and delivered beyond our expectations.",
    stars: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, HealthPlus",
    image: "https://randomuser.me/api/portraits/men/79.jpg",
    text: "Working with Befog was a game-changer for our healthcare startup. They built a secure, HIPAA-compliant platform that our users love.",
    stars: 5,
  },
  {
    name: "Jessica Williams",
    role: "Product Manager, RetailGiant",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The e-commerce solution Befog developed for us increased our online sales by 45% in the first quarter. Their attention to detail is remarkable.",
    stars: 4,
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-br from-befog-50 to-white dark:from-befog-950 dark:to-befog-900/30"
    >
      <div className="container">
        <div className="text-center mb-16">
          <div
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-balance">
              Don't take our word for it. Here's what our clients have to say
              about working with Befog.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              className="bg-white dark:bg-befog-900/30 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="absolute -top-5 right-8">
                <div className="w-10 h-10 rotate-45 bg-white dark:bg-befog-900/30"></div>
              </div>
              <div className="flex space-x-1 mb-4 text-yellow-400">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                {[...Array(5 - testimonial.stars)].map((_, i) => (
                  <Star
                    key={i + testimonial.stars}
                    className="w-5 h-5 text-gray-300"
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-4">
                {/* <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                /> */}
                {/* <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="text-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            >
              <div className="h-22 flex items-center justify-center">
                <motion.img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="h-12 w-24 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
