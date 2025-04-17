
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const comparisonData = [
  {
    feature: "Custom Software Development",
    befog: true,
    others: true,
    befogAdvantage: "Tailored solutions with continuous client involvement"
  },
  {
    feature: "Mobile App Development",
    befog: true,
    others: true,
    befogAdvantage: "Cross-platform expertise with native performance"
  },
  {
    feature: "AI Integration",
    befog: true,
    others: false,
    befogAdvantage: "Advanced machine learning & predictive analysis"
  },
  // {
  //   feature: "Cloud Infrastructure",
  //   befog: true,
  //   others: true,
  //   befogAdvantage: "Multi-cloud strategy with automated scaling"
  // },
  {
    feature: "24/7 Support",
    befog: true,
    others: false,
    befogAdvantage: "Dedicated support team with under 1-hour response time"
  },
  {
    feature: "Transparent Pricing",
    befog: true,
    others: false,
    befogAdvantage: "No hidden costs or unexpected fees"
  },
  {
    feature: "Agile Development",
    befog: true,
    others: true,
    befogAdvantage: "True agile with bi-weekly deliverables & feedback loops"
  },
  // {
  //   feature: "Data Security Compliance",
  //   befog: true,
  //   others: false,
  //   befogAdvantage: "GDPR, HIPAA, & industry-specific compliance expertise"
  // }
];

export function ComparisonSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="comparison" className="py-24 bg-befog-50/50 dark:bg-befog-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Befog</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-balance">
            See how we compare to other service providers and why our clients consistently choose us 
            for their most important software projects.
          </p>
        </motion.div>

        <div className="mb-10 overflow-x-auto">
          <Card className="min-w-[768px] lg:min-w-full border-befog-200 dark:border-befog-800">
            <CardContent className="p-0">
              <div className="grid grid-cols-12 font-semibold text-lg">
                <div className="col-span-6 p-5 border-b border-r border-befog-200 dark:border-befog-800">Features</div>
                <div className="col-span-3 p-5 text-center border-b border-r border-befog-200 dark:border-befog-800 bg-befog-100/50 dark:bg-befog-800/40">
                  <span className="text-befog-600 dark:text-befog-300">Befog</span>
                </div>
                <div className="col-span-3 p-5 text-center border-b border-befog-200 dark:border-befog-800">Others</div>
              </div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {comparisonData.map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="grid grid-cols-12 border-b border-befog-200 dark:border-befog-800 last:border-b-0"
                  >
                    <div className="col-span-6 p-5 border-r border-befog-200 dark:border-befog-800">
                      <p className="font-medium">{item.feature}</p>
                      {item.befogAdvantage && item.befog && !item.others && (
                        <p className="text-sm text-befog-600 dark:text-befog-400 mt-1">{item.befogAdvantage}</p>
                      )}
                    </div>
                    <div className="col-span-3 p-5 flex justify-center items-center border-r border-befog-200 dark:border-befog-800 bg-befog-100/50 dark:bg-befog-800/40">
                      {item.befog ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-500" />
                      )}
                    </div>
                    <div className="col-span-3 p-5 flex justify-center items-center">
                      {item.others ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-500" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-orange-500 text-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Ready to Experience the Befog Difference?</h3>
          <p className="mb-6">Join our growing list of satisfied clients who trust us with their most critical software needs.</p>
          <button className="bg-[#ffe8d1] text-orange-500 px-8 py-3 rounded-lg font-medium hover:bg-befog-50 transition-colors">
            Contact Us Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
