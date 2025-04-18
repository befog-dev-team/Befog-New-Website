
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import logo from '@/assets/logo.svg'; 
export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-befog-950 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              {/* <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-befog-500 to-befog-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div> */}
              <span className="text-xl font-bold text-befog-900 dark:text-white"><img src={logo} alt="logo" /></span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-balance max-w-xs">
              Innovative software solutions for businesses of all sizes. Transform your ideas into powerful software.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61573944255983" className="w-8 h-8 rounded-full bg-gray-200 dark:bg-befog-900 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-befog-500 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              {/* <a href="#" className="w-8 h-8 rounded-full bg-gray-200 dark:bg-befog-900 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-befog-500 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a> */}
              <a href="https://www.instagram.com/befogtech/" className="w-8 h-8 rounded-full bg-gray-200 dark:bg-befog-900 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-befog-500 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/befog-aw-technologies/posts/?feedView=all" className="w-8 h-8 rounded-full bg-gray-200 dark:bg-befog-900 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-befog-500 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              {/* <a href="#" className="w-8 h-8 rounded-full bg-gray-200 dark:bg-befog-900 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-befog-500 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a> */}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            {/* <ul className="space-y-4">
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-befog-600 dark:hover:text-befog-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-befog-600 dark:hover:text-befog-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-befog-600 dark:hover:text-befog-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-befog-600 dark:hover:text-befog-400 transition-colors">
                  Press
                </a>
              </li>
            </ul> */}
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-befog-600 dark:hover:text-befog-400 transition-colors">
                  Custom Software
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-befog-600 dark:hover:text-befog-400 transition-colors">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-befog-600 dark:hover:text-befog-400 transition-colors">
                  Web Applications
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-befog-600 dark:hover:text-befog-400 transition-colors">
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="text-gray-600 dark:text-gray-300">
                Lucknow, India 226001
              </li>
              <li>
                <a href="tel:+91 92353 20323" className="text-gray-600 dark:text-gray-300 hover:text-befog-600 dark:hover:text-befog-400 transition-colors">
                  +91 92353 20323
                </a>
              </li>
              <li>
                <a href="mailto:contact.us@befog.in" className="text-gray-600 dark:text-gray-300 hover:text-befog-600 dark:hover:text-befog-400 transition-colors">
                  contact.us@befog.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Befog. All rights reserved.
          </p>
          {/* <div className="flex space-x-6">
            <a href="#" className="text-gray-500 dark:text-gray-400 text-sm hover:text-befog-600 dark:hover:text-befog-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 text-sm hover:text-befog-600 dark:hover:text-befog-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 text-sm hover:text-befog-600 dark:hover:text-befog-400 transition-colors">
              Cookie Policy
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
