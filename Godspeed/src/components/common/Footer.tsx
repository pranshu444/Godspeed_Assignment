import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Zap size={32} className="text-primary-400" />
              <span className="font-bold text-xl">Godspeed</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Empowering developers to build faster, better, and more efficiently.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/meta-framework" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Meta Framework
                </Link>
              </li>
              <li>
                <Link to="/products/cloud-platform" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Cloud Platform
                </Link>
              </li>
              <li>
                <Link to="/products/studio" className="text-gray-400 hover:text-white transition-colors duration-200">
                  AI Studio
                </Link>
              </li>
              <li>
                <Link to="/products/templates" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Templates & Integrations
                </Link>
              </li>
              <li>
                <Link to="/products/teams" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Teams Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@godspeed.systems" className="text-gray-400 hover:text-white transition-colors duration-200">
                  info@godspeed.systems
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md inline-block transition-colors duration-200"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Godspeed Systems. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 text-sm hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-500 text-sm hover:text-white transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;