import React, { useState, memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Users, Star, ArrowRight, Shield, Award, CheckCircle, Plane } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import AnimatedPlane from '../3d/AnimatedPlane';

const HeroSection = memo(() => {
    const navigate = useNavigate();
    const [searchData, setSearchData] = useState({ location: '', date: '', travelers: '' });

    const handleNavigate = useCallback((path) => () => navigate(path), [navigate]);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
            {/* Static Sky Background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100" />
            
            {/* Static clouds for performance */}
            <div className="absolute top-[10%] left-[5%] w-32 h-20 bg-white/60 rounded-full blur-2xl" />
            <div className="absolute top-[20%] right-[15%] w-48 h-28 bg-white/50 rounded-full blur-2xl" />
            <div className="absolute top-[40%] left-[60%] w-40 h-24 bg-white/40 rounded-full blur-2xl" />
            
            {/* Gradient Orb - static */}
            <div className="absolute top-20 right-10 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-400/20 via-cyan-400/15 to-sky-400/20 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
                        
                        {/* Plane Section */}
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex justify-center mb-8 lg:mb-0 lg:order-2 lg:flex-1"
                        >
                            <AnimatedPlane size="lg" className="lg:hidden" />
                            <AnimatedPlane size="xl" className="hidden lg:block" />
                        </motion.div>

                        {/* Text Content */}
                        <div className="text-center lg:text-left lg:order-1 lg:flex-1">
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/50 mb-6"
                            >
                                <Star className="text-amber-400 fill-amber-400" size={18} />
                                <span className="text-gray-900 font-bold text-xs md:text-sm">4.9 RATING</span>
                                <span className="text-gray-300 hidden sm:inline">•</span>
                                <span className="text-gray-600 font-medium text-xs md:text-sm hidden sm:inline">979+ Reviews</span>
                            </motion.div>

                            {/* Main Headline */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight"
                            >
                                <span className="block text-gray-900">Your Journey</span>
                                <span 
                                    className="block"
                                    style={{
                                        background: 'linear-gradient(to right, #1d4ed8, #0891b2, #0d9488)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    Starts Here
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                            >
                                Discover <span className="font-bold text-blue-600">breathtaking destinations</span> across India and the world with Fly Daddy Tours & Travels.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
                            >
                                <button
                                    onClick={handleNavigate('/destinations')}
                                    className="px-6 py-3.5 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-base md:text-lg rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                                >
                                    <Plane size={20} />
                                    <span>Explore Destinations</span>
                                    <ArrowRight size={18} />
                                </button>
                                <button
                                    onClick={handleNavigate('/packages')}
                                    className="px-6 py-3.5 md:px-8 md:py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold text-base md:text-lg rounded-xl shadow-md hover:bg-blue-600 hover:text-white transition-colors"
                                >
                                    View Packages
                                </button>
                            </motion.div>

                            {/* Quick Stats */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap justify-center lg:justify-start gap-3"
                            >
                                {[
                                    { icon: Shield, text: 'Best Price', color: 'text-blue-600' },
                                    { icon: CheckCircle, text: 'Instant Booking', color: 'text-teal-600' },
                                    { icon: Award, text: '15+ Years', color: 'text-amber-600' },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 text-xs md:text-sm"
                                    >
                                        <item.icon size={16} className={item.color} />
                                        <span className="font-semibold text-gray-700">{item.text}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Search Box */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 md:mt-16 max-w-4xl mx-auto"
                    >
                        <GlassCard className="rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/50">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                                <div>
                                    <label className="text-xs font-bold text-gray-500 mb-1.5 block uppercase tracking-wider">Location</label>
                                    <div className="flex items-center gap-2 p-2.5 md:p-3 bg-gray-50 rounded-xl">
                                        <MapPin className="text-blue-500" size={18} />
                                        <input
                                            type="text"
                                            placeholder="Where to?"
                                            value={searchData.location}
                                            onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                                            className="w-full text-gray-800 font-medium outline-none bg-transparent placeholder-gray-400 text-sm md:text-base"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-500 mb-1.5 block uppercase tracking-wider">Check In</label>
                                    <div className="flex items-center gap-2 p-2.5 md:p-3 bg-gray-50 rounded-xl">
                                        <Calendar className="text-blue-500" size={18} />
                                        <input type="date" className="w-full text-gray-800 font-medium outline-none bg-transparent text-sm md:text-base" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-500 mb-1.5 block uppercase tracking-wider">Travelers</label>
                                    <div className="flex items-center gap-2 p-2.5 md:p-3 bg-gray-50 rounded-xl">
                                        <Users className="text-blue-500" size={18} />
                                        <input type="number" placeholder="2 guests" min="1" className="w-full text-gray-800 font-medium outline-none bg-transparent placeholder-gray-400 text-sm md:text-base" />
                                    </div>
                                </div>
                                <div className="flex items-end">
                                    <button
                                        onClick={handleNavigate('/destinations')}
                                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 md:py-3.5 px-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                                    >
                                        <Search size={18} />
                                        <span>Search</span>
                                    </button>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
});

export default HeroSection;
