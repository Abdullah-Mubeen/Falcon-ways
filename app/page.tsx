"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Circle,
  Code2,
  Globe2,
  MonitorSmartphone,
  Menu,
  Network,
  Shield,
  X,
  Zap,
  Phone,
  Mail,
  MapPin,
  Send
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const slides = [
    {
      title: "Global Trade Excellence",
      subtitle: "Bridging International Markets with Saudi Arabia",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    {
      title: "Advanced Technology Solutions",
      subtitle: "Leading the Digital Transformation in the Middle East",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    {
      title: "Security & Infrastructure",
      subtitle: "Building the Foundation of Tomorrow's Business",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setIsContactOpen(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const contactModalVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-2"
            >
              <Globe2 className="h-6 w-6 text-white" />
              <span className="text-2xl font-light tracking-wider">Falcon-Ways</span>
            </motion.div>
            
            {/* Desktop Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsMenuOpen(true)}
              className="hidden md:flex items-center space-x-2 px-6 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Menu className="h-5 w-5" />
              <span>Menu</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="text-center">
              {['home', 'solutions', 'about', 'contact'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }}
                  exit={{ opacity: 0, y: 20 }}
                  onClick={() => {
                    if (item === 'contact') {
                      setIsContactOpen(true);
                    }
                    setActiveSection(item);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-center py-6"
                >
                  <span className={`text-5xl font-light tracking-wider hover:text-white transition-colors relative group ${
                    activeSection === item ? 'text-white' : 'text-white/60'
                  }`}>
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={contactModalVariants}
              className="bg-white text-black rounded-3xl w-full max-w-2xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Contact Info */}
                <div className="w-full md:w-2/5 bg-black text-white p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-light mb-8">Contact Info</h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Phone className="h-5 w-5 text-white/60" />
                        <span>+966 123 456 789</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Mail className="h-5 w-5 text-white/60" />
                        <span>contact@falcon-ways.com</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <MapPin className="h-5 w-5 text-white/60" />
                        <span>Eastern Province, Saudi Arabia</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsContactOpen(false)}
                    className="text-white/60 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <X className="h-5 w-5" />
                    <span>Close</span>
                  </button>
                </div>

                {/* Contact Form */}
                <div className="w-full md:w-3/5 p-8">
                  <h3 className="text-3xl font-light mb-6">Get in Touch</h3>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        rows={4}
                        placeholder="Your message"
                        required
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-4 bg-black text-white rounded-xl flex items-center justify-center space-x-2 hover:bg-black/90 transition-colors"
                    >
                      <span>Send Message</span>
                      <Send className="h-5 w-5" />
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
            <img 
              src={slides[currentSlide].image}
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="max-w-2xl"
              >
                <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-xl text-white/80 mb-8">
                  {slides[currentSlide].subtitle}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 bg-white text-black rounded-full flex items-center space-x-2 hover:bg-white/90 transition-colors"
                >
                  <span className="text-sm uppercase tracking-[0.2em]">Explore Work</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-12 left-6 flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-12 h-1 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white text-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Our Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Falcon-Ways delivers comprehensive solutions across multiple sectors, providing high-quality products and services that exceed expectations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: MonitorSmartphone,
                title: "Audiovisual Systems",
                desc: "State-of-the-art audiovisual solutions for modern communication needs"
              },
              {
                icon: Network,
                title: "IT & Networking",
                desc: "Comprehensive IT infrastructure and networking solutions"
              },
              {
                icon: Shield,
                title: "Security Systems",
                desc: "Advanced security solutions to protect your assets"
              },
              {
                icon: Zap,
                title: "Electrical Supplies",
                desc: "High-quality electrical components and solutions"
              },
              {
                icon: Boxes,
                title: "Industrial Materials",
                desc: "Premium industrial supplies for various sectors"
              },
              {
                icon: Code2,
                title: "Digital Services",
                desc: "Cutting-edge digital solutions for business growth"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-10 rounded-3xl bg-gray-50 hover:bg-black hover:text-white transition-colors duration-300"
              >
                <service.icon className="h-12 w-12 mb-8" />
                <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                <p className="text-lg opacity-80 leading-relaxed">{service.desc}</p>
                <ArrowUpRight className="h-8 w-8 mt-8 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Featured Projects</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses across Saudi Arabia transform and grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Smart Building Integration",
                category: "Infrastructure",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              },
              {
                title: "Security Command Center",
                category: "Security Systems",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 p-10 flex flex-col justify-end z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-3xl font-light mb-3">{project.title}</h3>
                  <p className="text-xl text-white/60">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">Start a Project</h2>
              <p className="text-gray-600 mb-8">
                Let's create something extraordinary together
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-4 bg-black text-white rounded-full flex items-center space-x-2 mx-auto hover:bg-black/90 transition-colors"
              >
                <span className="text-sm uppercase tracking-[0.2em]">Get in Touch</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Circle className="h-3 w-3 text-white" />
              <span className="text-lg font-light tracking-[0.2em]">Falcon-Ways</span>
            </div>
            <div className="text-white/60 text-sm">
              © {new Date().getFullYear()} Falcon-Ways. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}