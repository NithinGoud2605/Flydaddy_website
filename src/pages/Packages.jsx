import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, Star, Check, ChevronDown, MapPin, Tag, TrendingUp, Calendar, Shield } from 'lucide-react';
import { indianPackages, internationalPackages } from '../data/packages';
import { GlassCard, BentoCard } from '../components/ui/GlassCard';
import { ContactButtons } from '../components/ui/ContactButtons';

const Packages = () => {
    const [category, setCategory] = useState('all');
    const [expandedPackage, setExpandedPackage] = useState(null);
    const [sortBy, setSortBy] = useState('popular');

    const getFilteredPackages = () => {
        let packages = [];
        if (category === 'indian') {
            packages = indianPackages;
        } else if (category === 'international') {
            packages = internationalPackages;
        } else {
            packages = [...indianPackages, ...internationalPackages];
        }

        // Sort packages
        if (sortBy === 'price-low') {
            packages = [...packages].sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            packages = [...packages].sort((a, b) => b.price - a.price);
        } else if (sortBy === 'rating') {
            packages = [...packages].sort((a, b) => b.rating - a.rating);
        }

        return packages;
    };

    const packages = getFilteredPackages();

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50 pt-24 pb-12 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/20 to-pink-100/30" />
            <motion.div
                className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 via-pink-400/15 to-rose-400/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-7xl font-black mb-4">
                        <span 
                            style={{
                                background: 'linear-gradient(to right, #7c3aed, #ec4899, #f59e0b, #10b981)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Tour Packages
                        </span>
                    </h1>
                    <p className="text-xl text-indigo-800 font-semibold max-w-2xl mx-auto">
                        Curated itineraries designed for unforgettable experiences
                    </p>
                </motion.div>

                {/* Filters & Sort */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                    {/* Category Filters */}
                    <div className="flex gap-3 flex-wrap justify-center">
                        <button
                            onClick={() => setCategory('all')}
                            className={`px-6 py-3 rounded-xl font-black transition-all ${
                                category === 'all'
                                    ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-xl'
                                    : 'bg-white text-indigo-700 hover:bg-indigo-50 border-2 border-indigo-200 hover:border-indigo-400'
                            }`}
                        >
                            All Packages
                        </button>
                        <button
                            onClick={() => setCategory('indian')}
                            className={`px-6 py-3 rounded-xl font-black transition-all ${
                                category === 'indian'
                                    ? 'bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white shadow-xl'
                                    : 'bg-white text-orange-700 hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-400'
                            }`}
                        >
                            🇮🇳 India Tours
                        </button>
                        <button
                            onClick={() => setCategory('international')}
                            className={`px-6 py-3 rounded-xl font-black transition-all ${
                                category === 'international'
                                    ? 'bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 text-white shadow-xl'
                                    : 'bg-white text-cyan-700 hover:bg-cyan-50 border-2 border-cyan-200 hover:border-cyan-400'
                            }`}
                        >
                            ✈️ International
                        </button>
                    </div>

                    {/* Sort Dropdown */}
                    <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-6 py-3 bg-white border-2 border-indigo-200 rounded-xl text-indigo-700 font-black cursor-pointer focus:outline-none focus:border-indigo-400 appearance-none pr-10 hover:bg-indigo-50"
                        >
                            <option value="popular">Most Popular</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="rating">Highest Rated</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-600 pointer-events-none" size={20} />
                    </div>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <AnimatePresence>
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={pkg.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-indigo-300 transition-all shadow-xl group"
                            >
                                {/* Image Section */}
                                <div className="relative h-72 overflow-hidden">
                                    <img 
                                        src={pkg.image} 
                                        alt={pkg.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                    
                                    {/* Badges */}
                                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                                        <div className="bg-rose-600 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                                            <Tag size={16} className="text-white" />
                                            <span className="text-white font-black text-sm">
                                                {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
                                            </span>
                                        </div>
                                        <div className="bg-amber-500 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-1 shadow-lg">
                                            <Star size={16} fill="white" className="text-white" />
                                            <span className="text-white font-black text-sm">{pkg.rating}</span>
                                        </div>
                                    </div>

                                    {/* Title Overlay */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="inline-block px-4 py-1.5 bg-indigo-600 backdrop-blur-md border border-indigo-400 rounded-full mb-3">
                                            <span className="text-white font-black text-sm">{pkg.category}</span>
                                        </div>
                                        <h3 className="text-3xl font-black text-white mb-2 drop-shadow-lg">{pkg.title}</h3>
                                        <p className="text-white/90 text-sm font-semibold flex items-center gap-2 drop-shadow-md">
                                            <MapPin size={16} className="text-amber-400" />
                                            {pkg.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8">
                                    {/* Quick Info */}
                                    <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-200">
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <Clock size={18} className="text-indigo-600" />
                                            <span className="font-black">{pkg.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <Users size={18} className="text-amber-600" />
                                            <span className="font-black">{pkg.groupSize}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <TrendingUp size={18} className="text-emerald-600" />
                                            <span className="font-black">{pkg.reviews} reviews</span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-3 mb-6">
                                        {pkg.features.map((feature, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 + (i * 0.1) }}
                                                className="flex items-center gap-3 text-gray-700"
                                            >
                                                <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                                                    <Check size={14} className="text-emerald-600" />
                                                </div>
                                                <span>{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Expandable Itinerary */}
                                    <button
                                        onClick={() => setExpandedPackage(expandedPackage === pkg.id ? null : pkg.id)}
                                        className="w-full mb-6 px-4 py-3 bg-indigo-50 hover:bg-indigo-100 rounded-xl border-2 border-indigo-200 hover:border-indigo-400 transition-all flex items-center justify-between"
                                    >
                                        <span className="text-indigo-700 font-black flex items-center gap-2">
                                            <Calendar size={18} className="text-indigo-600" />
                                            View Full Itinerary
                                        </span>
                                        <ChevronDown 
                                            size={20} 
                                            className={`text-indigo-600 transition-transform ${expandedPackage === pkg.id ? 'rotate-180' : ''}`}
                                        />
                                    </button>

                                    <AnimatePresence>
                                        {expandedPackage === pkg.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="mb-6 space-y-3 overflow-hidden"
                                            >
                                                {pkg.itinerary.map((day, i) => (
                                                    <div key={i} className="bg-indigo-50 rounded-xl p-4 border-2 border-indigo-100">
                                                        <div className="flex items-start gap-3">
                                                            <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-black text-white">
                                                                {day.day}
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="text-gray-900 font-black mb-1">{day.title}</h4>
                                                                <p className="text-sm text-gray-600 font-semibold">{day.activities.join(' • ')}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Price & CTA */}
                                    <div className="pt-6 border-t border-gray-200">
                                        <div className="flex items-end justify-between mb-6">
                                            <div>
                                                <p className="text-gray-600 text-sm font-black uppercase tracking-wide mb-2">Starting from</p>
                                                <div className="flex items-baseline gap-3">
                                                    <span className="text-4xl font-black text-indigo-600">
                                                        ₹{pkg.price.toLocaleString('en-IN')}
                                                    </span>
                                                    <span className="text-lg text-gray-400 line-through font-semibold">
                                                        ₹{pkg.originalPrice.toLocaleString('en-IN')}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-gray-500 mt-1 font-semibold">per person • Tax included</p>
                                            </div>
                                            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 border-2 border-emerald-300 rounded-xl">
                                                <Shield size={18} className="text-emerald-600" />
                                                <span className="text-emerald-700 font-black text-sm">Best Price</span>
                                            </div>
                                        </div>
                                        
                                        <ContactButtons variant="stacked" message={`Hi! I'm interested in ${pkg.title}. Can you provide more details and help with booking?`} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* No Results */}
                {packages.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-2xl text-indigo-700 font-semibold">No packages found</p>
                    </motion.div>
                )}

                {/* Why Book With Us */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-3xl p-12 border-2 border-indigo-200"
                >
                    <h2 className="text-4xl font-black text-center mb-12 text-indigo-700">
                        Why Book Your Package With Us?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <Tag size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-black text-gray-900 mb-2">Best Price Guarantee</h3>
                            <p className="text-gray-700 font-semibold">We offer the most competitive prices on all packages</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <Shield size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-black text-gray-900 mb-2">Secure Booking</h3>
                            <p className="text-gray-700 font-semibold">Your data is protected with bank-level security</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <Star size={32} className="text-white" fill="currentColor" />
                            </div>
                            <h3 className="text-xl font-black text-gray-900 mb-2">Expert Guidance</h3>
                            <p className="text-gray-700 font-semibold">24/7 support from our travel experts</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Packages;
