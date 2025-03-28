import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const PRICES = {
  personal: 1500, // ₹1500 for personal session
  group: 800     // ₹800 for group session
};

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    type: 'personal'
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Verify Razorpay key exists
      const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;
      if (!razorpayKey) {
        throw new Error('Razorpay key is not configured');
      }

      // Send data to Google Sheets
      const response = await fetch('https://script.google.com/macros/s/AKfycbwEs7zZEEPROu3--BNNI0uMj8DedTqoz2r-LViCcqQU90R_Cj4m-6P_KHNW0AP9fjaM/exec', {
        method: 'POST',
        body: JSON.stringify({
          ...formData,
          amount: PRICES[formData.type as keyof typeof PRICES],
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) throw new Error('Failed to submit booking');

      // Initialize Razorpay payment
      const options = {
        key: razorpayKey,
        amount: PRICES[formData.type as keyof typeof PRICES] * 100, // Convert to paise
        currency: "INR",
        name: "Yoga With Neeraj Sharma",
        description: `${formData.type} Yoga Session`,
        handler: function(response: any) {
          toast.success('Payment successful! Booking confirmed.');
          // Send payment details to Google Sheets
          fetch('https://script.google.com/macros/s/AKfycbwEs7zZEEPROu3--BNNI0uMj8DedTqoz2r-LViCcqQU90R_Cj4m-6P_KHNW0AP9fjaM/exec', {
            method: 'POST',
            body: JSON.stringify({
              ...formData,
              paymentId: response.razorpay_payment_id,
              status: 'paid',
              timestamp: new Date().toISOString()
            })
          });
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: "#7C3AED"
        }
      };

      // Verify Razorpay is loaded
      if (typeof window.Razorpay === 'undefined') {
        throw new Error('Razorpay SDK is not loaded');
      }

      const rzp = new window.Razorpay(options);
      rzp.open();

      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        type: 'personal'
      });

    } catch (error) {
      console.error('Error:', error);
      toast.error(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Session Type</label>
          <motion.select
            whileFocus={{ scale: 1.01 }}
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          >
            <option value="personal">Personal Session (₹1500)</option>
            <option value="group">Group Session (₹800)</option>
          </motion.select>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isLoading}
          className="w-full bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Processing...' : 'Book Session'}
        </motion.button>
      </div>
    </motion.form>
  );
}

// Add TypeScript type for window.Razorpay
declare global {
  interface Window {
    Razorpay: any;
  }
}

export default BookingForm;