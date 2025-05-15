import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, Mail, Calendar, Phone, Menu, X, Home, User, BookOpen, MessageSquare } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import BookingForm from './components/BookingForm';
import QueryForm from './components/QueryForm';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'booking':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-8"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Book Your Yoga Session</h2>
            <BookingForm />
          </motion.div>
        );
      case 'query':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-8"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Send Your Query</h2>
            <QueryForm />
          </motion.div>
        );
      default:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-8"
          >
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold mb-4 text-purple-900">Welcome to a space where you matter.</h2>
                <p className="text-xl text-gray-600">Transform Your Life Through Mindful Practice</p>
              </motion.div>

              <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                <motion.div 
                  className="relative w-64 h-64 flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="absolute inset-0 bg-purple-200 rounded-full transform -rotate-6"></div>
                  <img
                    src="https://raw.githubusercontent.com/theshivammaheshwari/yoga/main/neeraj.png"
                    alt="Neeraj Sharma"
                    className="relative z-10 w-64 h-64 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Hi, I’m Neeraj Sharma, a licensed psychologist with a passion for helping people navigate life’s complexities with compassion, clarity, and care.

With over 5 years of experience in mental health and therapy, I’ve worked with individuals from all walks of life — guiding them through anxiety, stress, trauma, relationship challenges, and self-discovery. My goal is simple: to offer a safe, non-judgmental space where you can explore your thoughts, reconnect with yourself, and grow at your own pace.

Every individual is unique, and so is their journey. I combine evidence-based approaches like Cognitive Behavioral Therapy (CBT), Mindfulness, and Humanistic Therapy to tailor sessions that align with your needs and goals. Whether you're dealing with something specific or just feeling a little "off", we’ll work together to help you understand, heal, and thrive.

This isn’t just therapy. It’s a friendly couch, a space where you are heard, supported, and empowered.

Let’s begin your journey — together.
                  </p>
                  
                  <motion.div 
                    className="grid grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <motion.h3 
                        className="text-2xl font-bold text-purple-600"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1, type: "spring" }}
                      >
                        5+
                      </motion.h3>
                      <p className="text-sm text-gray-600">Years Experience</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <motion.h3 
                        className="text-2xl font-bold text-purple-600"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.2, type: "spring" }}
                      >
                        500+
                      </motion.h3>
                      <p className="text-sm text-gray-600">Happy Students</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <motion.h3 
                        className="text-2xl font-bold text-purple-600"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.4, type: "spring" }}
                      >
                        10+
                      </motion.h3>
                      <p className="text-sm text-gray-600">Yoga Styles</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <motion.h3 
                        className="text-2xl font-bold text-purple-600"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.6, type: "spring" }}
                      >
                        20+
                      </motion.h3>
                      <p className="text-sm text-gray-600">Weekly Classes</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div 
                className="grid md:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-purple-900">Personal Sessions</h3>
                  <p className="text-gray-600 mb-4">
                    One-on-one attention to help you achieve your specific goals and address individual needs.
                  </p>
                  <p className="text-2xl font-bold text-purple-600">₹1,500</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveSection('booking')}
                    className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
                  >
                    Book Now
                  </motion.button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-purple-900">Group Sessions</h3>
                  <p className="text-gray-600 mb-4">
                    Join our community classes for an energizing and social yoga experience.
                  </p>
                  <p className="text-2xl font-bold text-purple-600">₹800</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveSection('booking')}
                    className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
                  >
                    Book Now
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        );
    }
  };

  const sidebarContent = (
    <div className="h-full flex flex-col">
      <div className="p-6 bg-purple-900">
        <h1 className="text-2xl font-bold text-white mb-2">Neeraj Sharma</h1>
        <p className="text-purple-200">Transform Your Life Through Mindful Practice</p>
      </div>
      
      <nav className="flex-1 p-6 space-y-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveSection('home')}
          className={`w-full flex items-center space-x-2 p-3 rounded-lg transition-colors ${
            activeSection === 'home' ? 'bg-purple-100 text-purple-900' : 'text-white hover:bg-purple-700'
          }`}
        >
          <Home size={20} />
          <span>Home</span>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveSection('booking')}
          className={`w-full flex items-center space-x-2 p-3 rounded-lg transition-colors ${
            activeSection === 'booking' ? 'bg-purple-100 text-purple-900' : 'text-white hover:bg-purple-700'
          }`}
        >
          <BookOpen size={20} />
          <span>Book Session</span>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveSection('query')}
          className={`w-full flex items-center space-x-2 p-3 rounded-lg transition-colors ${
            activeSection === 'query' ? 'bg-purple-100 text-purple-900' : 'text-white hover:bg-purple-700'
          }`}
        >
          <MessageSquare size={20} />
          <span>Send Query</span>
        </motion.button>

        <div className="pt-6 border-t border-purple-700">
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
          <div className="space-y-4">
            <p className="flex items-center space-x-2 text-purple-200">
              <Phone size={18} />
              <span>+91 7219993999</span>
            </p>
            <p className="flex items-center space-x-2 text-purple-200">
              <Mail size={18} />
              <span>neerajsharma11992@gmail.com</span>
            </p>
            <p className="flex items-center space-x-2 text-purple-200">
              <Calendar size={18} />
              <span>Mon-Sat: 6AM-8PM</span>
            </p>
          </div>
        </div>

        <div className="flex space-x-4 pt-6">
          <motion.a 
            whileHover={{ scale: 1.1 }}
            href="https://www.instagram.com/uchiha_neeraj/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-purple-200 transition-colors"
          >
            <Instagram size={24} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            href="mailto:neerajsharma11992@gmail.com" 
            className="text-white hover:text-purple-200 transition-colors"
          >
            <Mail size={24} />
          </motion.a>
        </div>
      </nav>

      <div className="p-6 border-t border-purple-700">
        <p className="text-sm text-purple-200">
          Created by{' '}
          <a
            href="https://www.linkedin.com/in/theshivammaheshwari/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-100"
          >
            Shivam Maheshwari
          </a>
          {' '}[Web Developer]
        </p>
        <p className="text-sm text-purple-300 mt-2">© 2024 All rights reserved</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-80 bg-purple-800 fixed h-full overflow-y-auto">
        {sidebarContent}
      </div>

      {/* Mobile Menu Button */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMobileMenuOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-purple-600 p-2 rounded-full text-white shadow-lg"
      >
        <Menu size={24} />
      </motion.button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed md:hidden w-80 bg-purple-800 h-full z-50 overflow-y-auto"
          >
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-white"
            >
              <X size={24} />
            </motion.button>
            {sidebarContent}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 md:ml-80">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>

      {/* Toast Notifications */}
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;