
import { ScrollAnimation } from "./ScrollAnimation";
import { Server, Timer, Zap, LayoutDashboard, FileCode, Smartphone, CloudCog, ShieldCheck, PieChart } from "lucide-react";

const services = [
  {
    icon: <FileCode className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Launch Iconic Brands at the Intersection of Creativity and Technology."
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Solutions",
    description: "Intuitive, high-performance apps that deliver exceptional user experiences across all devices."
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Web Development",
    description: "We are Creative Nerds. We Donot Just Develop Websites, But Also Crafting a Successful Brand for You."
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "SEO/CRM",
    description: "Optimize your online presence and drive organic traffic with our expert SEO strategies.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "AI Integration",
    description: "Harness the power of artificial intelligence to automate processes and enhance decision making."
  },
  // {
  //   icon: <ShieldCheck className="w-6 h-6" />,
  //   title: "Cybersecurity",
  //   description: "Comprehensive protection strategies to safeguard your digital assets and sensitive information."
  // },
  {
    icon: <Server className="w-6 h-6" />,
    title: "DevOps Services",
    description: "Streamline development workflows and optimize deployment cycles for faster time to market."
  },
  {
    icon: <Timer className="w-6 h-6" />,
    title: "Digital Marketing",
    description: "Nurture Your Vision, Magnify Your Brand by Increasing Your Sales with Inspiring Digital Marketing Solutions."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-orange-50 dark:from-orange-950/30 dark:to-orange-900/20">
      <div className="container">
        <div className="text-center mb-16">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-balance">
              We deliver comprehensive software solutions that help businesses leverage 
              technology for growth, innovation, and competitive advantage.
            </p>
          </ScrollAnimation>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollAnimation 
              key={index}
              delay={index * 0.1}
              className="h-full"
            >
              <div className="bg-white dark:bg-orange-900/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow h-full border border-orange-100/50 dark:border-orange-800/20">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-700 flex items-center justify-center mb-4 text-orange-600 dark:text-orange-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
