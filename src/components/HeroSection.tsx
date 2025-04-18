import { ArrowRight, Database, Cpu, Cloud, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-32 flex items-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50/30 opacity-60 dark:opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/3 -left-20 w-72 h-72 blob bg-orange-300 mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 blob bg-blue-300 mix-blend-multiply pointer-events-none" style={{ animationDelay: "-3s" }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-60 h-60 blob bg-purple-300 mix-blend-multiply pointer-events-none" style={{ animationDelay: "-6s" }}></div>
      
      <div className="container relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-12 items-center">
          
          {/* Left Content */}
          <div
            className="space-y-8 text-center lg:text-left"
          >
            <div className="inline-block">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 text-sm font-medium border border-orange-200">
                Transforming Ideas into Reality
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              Innovative{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Software Solutions
              </span>{" "}
              for Your Business
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 text-balance max-w-xl mx-auto lg:mx-0">
              We deliver custom software that drives growth, streamlines operations, and creates exceptional digital experiences tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 shadow-md">
                Get Started
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Link to="/services">
              <Button size="lg" variant="outline" className="border-orange-200 hover:bg-orange-50 text-orange-700 shadow-sm">
                Our Services
              </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Feature Cards */}
          <div
            className="relative"
          >
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Database className="text-orange-600 dark:text-orange-300" />,
                  title: "UI/UX Design",
                  desc: "Creating intuitive and engaging user experiences with thoughtful design",
                  delay: 0.3,
                },
                {
                  icon: <Cloud className="text-orange-600 dark:text-orange-300" />,
                  title: "Web Development",
                  desc: "Build fast, responsive, and secure websites with cutting-edge technologies",
                  delay: 0.4,
                  extraClass: "mt-10 sm:mt-0",
                },
                {
                  icon: <Cpu className="text-orange-600 dark:text-orange-300" />,
                  title: "Digital Marketing",
                  desc: "Boost your brand’s reach with effective online strategies",
                  delay: 0.5,
                },
                {
                  icon: <Code className="text-orange-600 dark:text-orange-300" />,
                  title: "Custom Development",
                  desc: "Tailored solutions for your unique business needs",
                  delay: 0.6,
                  extraClass: "mt-10 sm:mt-0",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-white/90 dark:bg-orange-900/30 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-orange-100 dark:border-orange-800/30 hover:scale-[1.02] transition-transform ${item.extraClass}`}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-700 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Animated Blurred Gradient */}
            <div className="absolute -right-10 -bottom-10 -z-10 w-80 h-80 opacity-20 dark:opacity-10 pointer-events-none">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-300 to-purple-300 blur-3xl animate-blob"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
