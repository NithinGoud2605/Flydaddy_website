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
        <div className="min-h-screen bg-gradient-to-br from-dark via-dark-lighter to-dark pt-24 pb-12">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-purple to-accent bg-clip-text text-transparent">
                        Tour Packages
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Curated itineraries designed for unforgettable experiences
                    </p>
                </motion.div>

                {/* Filters & Sort */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                    {/* Category Filters */}
                    <div className="flex gap-3 flex-wrap justify-center">
                        <button
                            onClick={() => setCategory('all')}
                            className={`px-6 py-3 rounded-xl font-bold transition-all ${
                                category === 'all'
                                    ? 'bg-gradient-to-r from-primary to-purple text-white shadow-xl'
                                    : 'bg-dark-lighter text-gray-400 hover:text-white border border-white/10'
                            }`}
                        >
                            All Packages
                        </button>
                        <button
                            onClick={() => setCategory('indian')}
                            className={`px-6 py-3 rounded-xl font-bold transition-all ${
                                category === 'indian'
                                    ? 'bg-gradient-to-r from-orange to-success text-white shadow-xl'
                                    : 'bg-dark-lighter text-gray-400 hover:text-white border border-white/10'
                            }`}
                        >
                            🇮🇳 India Tours
                        </button>
                        <button
                            onClick={() => setCategory('international')}
                            className={`px-6 py-3 rounded-xl font-bold transition-all ${
                                category === 'international'
                                    ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-xl'
                                    : 'bg-dark-lighter text-gray-400 hover:text-white border border-white/10'
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
                            className="px-6 py-3 bg-dark-lighter border border-primary/30 rounded-xl text-white font-semibold cursor-pointer focus:outline-none focus:border-primary appearance-none pr-10"
                        >
                            <option value="popular">Most Popular</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="rating">Highest Rated</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary pointer-events-none" size={20} />
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
                                className="bg-dark-lighter rounded-3xl overflow-hidden border-2 border-white/10 hover:border-primary/50 transition-all shadow-2xl group"
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
                                    
                                    {/* Badges */}
                                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                                        <div className="bg-secondary/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                                            <Tag size={16} className="text-white" />
                                            <span className="text-white font-bold text-sm">
                                                {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
                                            </span>
                                        </div>
                                        <div className="bg-yellow-500/90 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-1">
                                            <Star size={16} fill="white" className="text-white" />
                                            <span className="text-white font-bold text-sm">{pkg.rating}</span>
                                        </div>
                                    </div>

                                    {/* Title Overlay */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md border border-primary/40 rounded-full mb-3">
                                            <span className="text-primary font-bold text-sm">{pkg.category}</span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-2">{pkg.title}</h3>
                                        <p className="text-gray-300 text-sm flex items-center gap-2">
                                            <MapPin size={16} className="text-accent" />
                                            {pkg.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8">
                                    {/* Quick Info */}
                                    <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-white/10">
                                        <div className="flex items-center gap-2 text-gray-300">
                                            <Clock size={18} className="text-primary" />
                                            <span className="font-semibold">{pkg.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-300">
                                            <Users size={18} className="text-accent" />
                                            <span className="font-semibold">{pkg.groupSize}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-300">
                                            <TrendingUp size={18} className="text-success" />
                                            <span className="font-semibold">{pkg.reviews} reviews</span>
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
                                                className="flex items-center gap-3 text-gray-300"
                                            >
                                                <div className="flex-shrink-0 w-6 h-6 bg-success/20 rounded-full flex items-center justify-center">
                                                    <Check size={14} className="text-success" />
                                                </div>
                                                <span>{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Expandable Itinerary */}
                                    <button
                                        onClick={() => setExpandedPackage(expandedPackage === pkg.id ? null : pkg.id)}
                                        className="w-full mb-6 px-4 py-3 bg-dark/50 hover:bg-dark/70 rounded-xl border border-white/10 hover:border-primary/30 transition-all flex items-center justify-between"
                                    >
                                        <span className="text-white font-semibold flex items-center gap-2">
                                            <Calendar size={18} className="text-primary" />
                                            View Full Itinerary
                                        </span>
                                        <ChevronDown 
                                            size={20} 
                                            className={`text-primary transition-transform ${expandedPackage === pkg.id ? 'rotate-180' : ''}`}
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
                                                    <div key={i} className="bg-dark/30 rounded-xl p-4 border border-white/5">
                                                        <div className="flex items-start gap-3">
                                                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-purple rounded-xl flex items-center justify-center font-bold text-white">
                                                                {day.day}
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="text-white font-bold mb-1">{day.title}</h4>
                                                                <p className="text-sm text-gray-400">{day.activities.join(' • ')}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Price & CTA */}
                                    <div className="pt-6 border-t border-white/10">
                                        <div className="flex items-end justify-between mb-6">
                                            <div>
                                                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-2">Starting from</p>
                                                <div className="flex items-baseline gap-3">
                                                    <span className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                                        ₹{pkg.price.toLocaleString('en-IN')}
                                                    </span>
                                                    <span className="text-lg text-gray-500 line-through font-medium">
                                                        ₹{pkg.originalPrice.toLocaleString('en-IN')}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-gray-400 mt-1 font-medium">per person • Tax included</p>
                                            </div>
                                            <div className="flex items-center gap-2 px-4 py-2 bg-success/20 border border-success/30 rounded-xl">
                                                <Shield size={18} className="text-success" />
                                                <span className="text-success font-bold text-sm">Best Price</span>
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
                        <p className="text-2xl text-gray-400">No packages found</p>
                    </motion.div>
                )}

                {/* Why Book With Us */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-gradient-to-r from-primary/10 via-purple/10 to-accent/10 rounded-3xl p-12 border-2 border-primary/20"
                >
                    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Why Book Your Package With Us?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Tag size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Best Price Guarantee</h3>
                            <p className="text-gray-400">We offer the most competitive prices on all packages</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Shield size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Secure Booking</h3>
                            <p className="text-gray-400">Your data is protected with bank-level security</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-success to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Star size={32} className="text-white" fill="currentColor" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Expert Guidance</h3>
                            <p className="text-gray-400">24/7 support from our travel experts</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Packages;
