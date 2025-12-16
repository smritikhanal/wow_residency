import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Send, Loader2, Quote, User, MapPin, Upload, X } from 'lucide-react';
import { branches } from '@/components/branchData';
import SEO from '@/components/SEO';
import { useNavigate } from 'react-router-dom';

export default function LeaveReview() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        role: 'Resident',
        branch: '',
        rating: 5,
        review: '',
        image: null
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [hoveredStar, setHoveredStar] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, image: file });
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setFormData({ ...formData, image: null });
        setImagePreview(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            // Optional: Redirect back to reviews after delay
            setTimeout(() => {
                navigate('/Reviews');
            }, 2000);
        }, 1500);
    };

    return (
        <div className="min-h-screen pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            <SEO
                title="Leave a Review"
                description="Share your experience at WOW Residency. We value your feedback."
            />

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-10"
                >
                    <span className="text-blue-300 font-semibold tracking-widest uppercase text-sm">
                        Feedback
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
                        Share Your <span className="text-red-500">Experience</span>
                    </h1>
                    <p className="text-blue-100/80 max-w-2xl mx-auto text-lg">
                        Your feedback helps us create a better living experience for everyone.
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="backdrop-blur-xl bg-white/10 p-8 sm:p-10 rounded-3xl border border-white/20 shadow-2xl relative overflow-hidden"
                    >
                        {/* Success State */}
                        {isSuccess ? (
                            <div className="text-center py-12">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-6 shadow-lg shadow-green-500/30"
                                >
                                    <Send className="text-white" size={32} />
                                </motion.div>
                                <h2 className="text-3xl font-bold text-white mb-2">Thank You!</h2>
                                <p className="text-blue-200 text-lg">Your review has been submitted successfully.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Rating Input */}
                                <div className="flex flex-col items-center justify-center mb-8">
                                    <label className="text-white text-lg font-medium mb-3">How would you rate your experience?</label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, rating: star })}
                                                onMouseEnter={() => setHoveredStar(star)}
                                                onMouseLeave={() => setHoveredStar(0)}
                                                className="p-1 transition-transform hover:scale-110 focus:outline-none"
                                            >
                                                <Star
                                                    size={32}
                                                    className={`transition-colors duration-200 ${star <= (hoveredStar || formData.rating)
                                                        ? "fill-yellow-400 text-yellow-400 drop-shadow-lg"
                                                        : "text-white/20"
                                                        }`}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Profile Image Upload */}
                                <div className="flex flex-col items-center mb-6">
                                    <label className="text-white text-sm font-medium mb-3">Profile Photo (Optional)</label>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="hidden"
                                            id="profile-upload"
                                        />
                                        {imagePreview ? (
                                            <div className="relative">
                                                <img
                                                    src={imagePreview}
                                                    alt="Preview"
                                                    className="w-24 h-24 rounded-full object-cover border-4 border-white/20 shadow-lg"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={removeImage}
                                                    className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1 text-white hover:bg-red-600 transition-colors shadow-lg"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        ) : (
                                            <label
                                                htmlFor="profile-upload"
                                                className="w-24 h-24 rounded-full bg-white/5 border-2 border-dashed border-white/20 flex flex-col items-center justify-center cursor-pointer hover:bg-white/10 hover:border-blue-400/50 hover:text-blue-300 transition-all group"
                                            >
                                                <Upload size={24} className="text-white/40 group-hover:text-blue-400 transition-colors mb-1" />
                                                <span className="text-xs text-white/40 group-hover:text-blue-300">Upload</span>
                                            </label>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <label className="text-blue-200 text-sm font-medium ml-1">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                                            <input
                                                required
                                                type="text"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Branch */}
                                    <div className="space-y-2">
                                        <label className="text-blue-200 text-sm font-medium ml-1">Branch</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                                            <select
                                                required
                                                value={formData.branch}
                                                onChange={e => setFormData({ ...formData, branch: e.target.value })}
                                                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all cursor-pointer"
                                            >
                                                <option value="" className="bg-slate-800 text-gray-400">Select Branch</option>
                                                {branches.map(branch => (
                                                    <option key={branch.id} value={branch.name} className="bg-slate-800 text-white">
                                                        {branch.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Role Selection (Optional but good for context) */}
                                <div className="space-y-2">
                                    <label className="text-blue-200 text-sm font-medium ml-1">I am a...</label>
                                    <div className="flex gap-4">
                                        {['Resident', 'Student', 'Visitor'].map((role) => (
                                            <button
                                                key={role}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, role })}
                                                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${formData.role === role
                                                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                                                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                                                    }`}
                                            >
                                                {role}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Review Text */}
                                <div className="space-y-2">
                                    <label className="text-blue-200 text-sm font-medium ml-1">Your Review</label>
                                    <div className="relative">
                                        <Quote className="absolute left-4 top-4 text-white/40" size={18} />
                                        <textarea
                                            required
                                            placeholder="Share your thoughts..."
                                            rows={4}
                                            value={formData.review}
                                            onChange={e => setFormData({ ...formData, review: e.target.value })}
                                            className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all resize-none"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="animate-spin" size={20} />
                                            <span>Submitting...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            <span>Submit Review</span>
                                        </>
                                    )}
                                </button>

                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
