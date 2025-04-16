"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [result, setResult] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("");
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "18d72c19-fa53-4842-8841-7fe716992f9b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        form.reset();
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setResult("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-lg">
                Ready to transform your business with innovative software solutions? 
                Reach out to us to discuss your project.
              </p>
            </div>

            <div className="space-y-6">
              {/* Contact Items */}
              {[
                {
                  icon: MapPin,
                  title: "Our Location",
                  content: "1234 Innovation Way\nLucknow, India 226001",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+91 92353 20323\nMon–Fri, 10AM–6:30PM PST",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  content: "contact.us@befog.in\nmarketing@befog.in",
                },
              ].map((item, i) => (
                <div className="flex items-start space-x-4" key={i}>
                  <div className="w-12 h-12 rounded-lg bg-befog-100 dark:bg-befog-800 flex items-center justify-center text-befog-600 dark:text-befog-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-befog-900/30 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                    <Input id="name" name="name" placeholder="John Doe" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" name="subject" placeholder="How can we help you?" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" name="message" rows={5} placeholder="Tell us about your project..." required />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-600 hover:bg-befog-700 text-white flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-4 w-4" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                {result && (
                  <p className="mt-4 text-sm font-medium text-center text-befog-600 dark:text-befog-300">
                    {result}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
