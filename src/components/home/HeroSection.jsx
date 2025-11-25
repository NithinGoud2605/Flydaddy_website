import React, { useState, memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MapPin, Star, ArrowRight, Shield, Award, CheckCircle, Plane, TrendingUp, Globe } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import AnimatedPlane from '../3d/AnimatedPlane';
import { indianDestinations, internationalDestinations } from '../../data/destinations';

const HeroSection = memo(() => {
    const navigate = useNavigate();

    const handleNavigate = useCallback((path) => () => navigate(path), [navigate]);
    
    // Get featured destinations
    const featuredDestinations = [
        indianDestinations[0], // Delhi
        internationalDestinations[0], // Paris
        indianDestinations[4], // Goa
    ];

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

                    {/* Featured Destinations Quick View */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 md:mt-16 max-w-6xl mx-auto"
                    >
                        <div className="text-center mb-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-3">
                                <TrendingUp className="text-blue-600" size={18} />
                                <span className="text-blue-600 font-bold text-sm">Trending Now</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                                Popular Destinations
                            </h3>
                            <p className="text-gray-600 font-medium">Discover our most loved travel experiences</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {featuredDestinations.map((dest, index) => (
                                <motion.div
                                    key={dest.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 + index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    onClick={() => navigate(`/destination/${dest.id}`)}
                                    className="group cursor-pointer"
                                >
                                    <GlassCard className="rounded-2xl overflow-hidden h-full">
                                        <div className="relative h-40 overflow-hidden">
                                            <img
                                                src={dest.image}
                                                alt={dest.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                onError={(e) => {
                                                    e.target.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400';
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                            <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                                                <Star className="text-amber-500 fill-amber-500" size={14} />
                                                <span className="text-gray-900 font-black text-xs">{dest.rating}</span>
                                            </div>
                                            <div className="absolute bottom-3 left-3 right-3">
                                                <h4 className="text-white font-black text-lg mb-1 drop-shadow-lg">{dest.name}</h4>
                                                <div className="flex items-center gap-2 text-white/90 text-xs font-semibold">
                                                    <Globe size={12} />
                                                    <span>{dest.country}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-white">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                                                    {dest.category}
                                                </span>
                                                <span className="text-gray-600 text-xs font-semibold">{dest.duration}</span>
                                            </div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-2xl font-black text-blue-600">
                                                    ₹{(dest.price / 1000).toFixed(0)}k
                                                </span>
                                                <span className="text-gray-500 text-xs">per person</span>
                                            </div>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </div>
                        
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="text-center mt-6"
                        >
                            <button
                                onClick={handleNavigate('/destinations')}
                                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all"
                            >
                                <span>View All Destinations</span>
                                <ArrowRight size={18} />
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
});

export default HeroSection;
