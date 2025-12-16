import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Send, Loader2, Clock, MessageCircle } from 'lucide-react';
import { branches } from '@/components/branchData';
import SEO from '@/components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: '',
    branch_interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const branchName = params.get('branch');
    if (branchName) {
      setFormData(prev => ({ ...prev, branch_interest: branchName }));
    }
  }, []);

  // Email validation helper
  function validateEmail(email) {
    if (!email) return true;
    // Simple regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate fields
    const newErrors = {};
    if (!formData.full_name.trim()) newErrors.full_name = 'Full name is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (formData.email && !validateEmail(formData.email)) newErrors.email = 'This email is invalid';
    if (!formData.branch_interest) newErrors.branch_interest = 'Please select a branch.';
    // No message required
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSuccess(true);
      setFormData({ full_name: '', phone: '', email: '', branch_interest: '', message: '' });
      setIsSubmitting(false);
      setErrors({});
    }, 1200);
  };

  return (
    <div className="min-h-screen pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Wave */}
      <svg className="absolute bottom-0 left-0 w-full h-32 z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path fill="url(#waveGradient)" fillOpacity="0.1" d="M0,192L48,197.3C96,203,192,213,288,213.3C384,213,480,203,576,186.7C672,171,768,149,864,154.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="1440" y2="320" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" />
            <stop offset="1" stopColor="#ef4444" />
          </linearGradient>
        </defs>
      </svg>

      <SEO
        title="Contact Us"
        description="Get in touch with WOW Residency for bookings and inquiries. Call us or visit our head office in Kathmandu."
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4 inline-block"
          >
            Contact Us
          </motion.span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white">
            Let's Start Your <span className="text-red-500">Journey</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to upgrade your living experience? Contact us today to book a visit or reserve your spot at WOW Residency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <motion.a
                href="tel:+9779851414556"
                className="group bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-white font-bold mb-1">Phone</h3>
                <p className="text-blue-400 group-hover:text-blue-300 text-sm font-medium">+977 985-1414556</p>
              </motion.a>

              <motion.a
                href="tel:015445920"
                className="group bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-white font-bold mb-1">Landline</h3>
                <p className="text-blue-400 group-hover:text-blue-300 text-sm font-medium">01-5445920</p>
              </motion.a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <motion.div
                className="group bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:border-blue-500/50 transition-all shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-white font-bold mb-1">Email</h3>
                <p className="text-blue-400 text-sm font-medium">info@wowresidency.com</p>
              </motion.div>

              <motion.div
                className="group bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:border-blue-500/50 transition-all shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-white font-bold mb-1">Location</h3>
                <p className="text-blue-400 text-sm font-medium">Kathmandu, Nepal</p>
              </motion.div>
            </div>

            <motion.div
              className="bg-gradient-to-r from-blue-500/20 to-red-500/20 backdrop-blur-lg p-6 rounded-2xl border border-blue-500/30 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                <Clock className="text-blue-400" size={20} />
                <h3 className="text-white font-bold">Business Hours</h3>
              </div>
              <p className="text-slate-300 text-sm">Monday - Sunday: 9:00 AM - 7:00 PM</p>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
            id="contact-form"
          >
            <div className="bg-white/10 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20 overflow-hidden relative">
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-0"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -z-0"></div>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative z-10 h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <Send className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-300 mb-8">Thank you for contacting us. We will get back to you shortly.</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <MessageCircle className="text-white" size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Book Your Space</h2>
                      <p className="text-slate-400 text-sm">Fill out the form below and we'll get back to you</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="relative">
                      <input
                        required
                        type="text"
                        id="full_name"
                        className={`peer w-full px-4 pt-5 pb-2 rounded-lg border-2 bg-white/5 backdrop-blur-sm text-white transition-all outline-none
                          ${errors.full_name ? 'border-red-400' : 'border-white/20'}
                          focus:border-blue-500 focus:bg-white/10`}
                        placeholder=" "
                        value={formData.full_name}
                        onChange={e => setFormData({ ...formData, full_name: e.target.value })}
                      />
                      <label htmlFor="full_name" className={`absolute left-4
                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400
                        top-1 text-xs px-1 bg-transparent text-slate-300 transition-all duration-200 pointer-events-none
                        peer-focus:top-1 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400
                        ${formData.full_name ? 'top-1 -translate-y-0 text-xs text-blue-400' : ''}
                        ${errors.full_name ? 'text-red-400' : ''}`}>Full Name</label>
                      {errors.full_name && <span className="text-xs text-red-400 mt-1 absolute left-4 -bottom-5">{errors.full_name}</span>}
                    </div>

                    {/* Phone Number */}
                    <div className="relative">
                      <input
                        required
                        type="tel"
                        id="phone"
                        className={`peer w-full px-4 pt-5 pb-2 rounded-lg border-2 bg-white/5 backdrop-blur-sm text-white transition-all outline-none
                          ${errors.phone ? 'border-red-400' : 'border-white/20'}
                          focus:border-blue-500 focus:bg-white/10`}
                        placeholder=" "
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                      <label htmlFor="phone" className={`absolute left-4
                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400
                        top-1 text-xs px-1 bg-transparent text-slate-300 transition-all duration-200 pointer-events-none
                        peer-focus:top-1 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400
                        ${formData.phone ? 'top-1 -translate-y-0 text-xs text-blue-400' : ''}
                        ${errors.phone ? 'text-red-400' : ''}`}>Phone Number</label>
                      {errors.phone && <span className="text-xs text-red-400 mt-1 absolute left-4 -bottom-5">{errors.phone}</span>}
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        className={`peer w-full px-4 pt-5 pb-2 rounded-lg border-2 bg-white/5 backdrop-blur-sm text-white transition-all outline-none
                          ${errors.email ? 'border-red-400' : 'border-white/20'}
                          focus:border-blue-500 focus:bg-white/10`}
                        placeholder=" "
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                      />
                      <label htmlFor="email" className={`absolute left-4
                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400
                        top-1 text-xs px-1 bg-transparent text-slate-300 transition-all duration-200 pointer-events-none
                        peer-focus:top-1 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400
                        ${formData.email ? 'top-1 -translate-y-0 text-xs text-blue-400' : ''}
                        ${errors.email ? 'text-red-400' : ''}`}>Email (Optional)</label>
                      {errors.email && <span className="text-xs text-red-400 mt-1 absolute left-4 -bottom-5 flex items-center gap-1">
                        <svg className="inline-block" width="16" height="16" fill="none" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" stroke="#f43f5e" strokeWidth="2" />
                          <path d="M12 8v4m0 4h.01" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
                        </svg> {errors.email}
                      </span>}
                    </div>

                    {/* Branch Select */}
                    <div className="relative">
                      <select
                        id="branch_interest"
                        className={`w-full px-4 py-4 rounded-lg border-2 bg-white/10 backdrop-blur-sm text-white transition-all outline-none
                          ${errors.branch_interest ? 'border-red-400' : 'border-white/20'}
                          focus:border-blue-500 focus:bg-white/15`}
                        value={formData.branch_interest}
                        onChange={e => setFormData({ ...formData, branch_interest: e.target.value })}
                      >
                        <option value="" disabled hidden className="bg-slate-800 text-white">Select a branch</option>
                        {branches.map(b => (
                          <option key={b.id} value={b.name} className="bg-slate-800 text-white">{b.name}</option>
                        ))}
                      </select>
                      {errors.branch_interest && <span className="text-xs text-red-400 mt-1 absolute left-4 -bottom-5">{errors.branch_interest}</span>}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      id="message"
                      className="peer w-full px-4 pt-5 pb-2 rounded-lg border-2 bg-white/5 backdrop-blur-sm text-white transition-all outline-none border-white/20 focus:border-blue-500 focus:bg-white/10 min-h-[120px] placeholder-transparent resize-none"
                      placeholder=" "
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                    <label htmlFor="message" className={`absolute left-4
                      peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400
                      top-1 text-xs px-1 bg-transparent text-slate-300 transition-all duration-200 pointer-events-none
                      peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-400
                      ${formData.message ? 'top-1 text-xs text-blue-400' : ''}`}>Message</label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 text-lg tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}