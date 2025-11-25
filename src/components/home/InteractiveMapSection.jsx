import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InteractiveMap from '../InteractiveMap';
import IndiaMap from '../IndiaMap';
import { GlassCard } from '../ui/GlassCard';

gsap.registerPlugin(ScrollTrigger);

const InteractiveMapSection = () => {
    const navigate = useNavigate();
    const [activeMap, setActiveMap] = useState('world');
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const mapRef = useRef(null);
    const statsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation
            gsap.from(headingRef.current, {
                y: 80,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 85%",
                }
            });

            // Map reveal animation
            gsap.from(mapRef.current, {
                scale: 0.8,
                opacity: 0,
                y: 50,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: mapRef.current,
                    start: "top 80%",
                }
            });

            // Stats cards stagger
            statsRef.current.forEach((stat, i) => {
                gsap.from(stat, {
                    y: 80,
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: stat,
                        start: "top 90%",
                    },
                    delay: i * 0.1,
                });

                // Floating effect
                gsap.to(stat, {
                    y: -15 - (i * 5),
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.5,
                    }
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-b from-sky-50 via-blue-50 to-white relative overflow-hidden">
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 via-transparent to-blue-100/20" />
            
            {/* Floating orbs */}
            <motion.div
                className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 via-cyan-400/15 to-teal-400/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-sky-400/15 via-blue-400/15 to-cyan-400/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.45, 0.3] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Section dividers */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-sky-50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div ref={headingRef} className="text-center mb-12">
                    <div className="inline-block mb-4 px-6 py-2 bg-white/90 backdrop-blur-xl rounded-full shadow-lg border border-gray-100">
                        <span className="text-blue-600 font-black">🗺️ Interactive Maps</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
                        <span 
                            style={{
                                background: 'linear-gradient(to right, #1d4ed8, #0891b2, #0d9488)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Explore on the Map
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 font-medium">Click any destination to discover packages and prices</p>
                </div>

                {/* Map Toggle */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveMap('world')}
                        className={`px-8 py-4 rounded-2xl font-black transition-all shadow-lg text-lg ${
                            activeMap === 'world'
                                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-blue-500/30 scale-105'
                                : 'bg-white text-gray-700 hover:shadow-xl border-2 border-gray-200'
                        }`}
                    >
                        <span className="text-2xl mr-2">🌍</span>
                        World Destinations
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveMap('india')}
                        className={`px-8 py-4 rounded-2xl font-black transition-all shadow-lg text-lg ${
                            activeMap === 'india'
                                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-orange-500/30 scale-105'
                                : 'bg-white text-gray-700 hover:shadow-xl border-2 border-gray-200'
                        }`}
                    >
                        <span className="text-2xl mr-2">🇮🇳</span>
                        Explore India
                    </motion.button>
                </div>

                {/* Map Container */}
                <div
                    ref={mapRef}
                    className="rounded-3xl shadow-2xl border-4 border-white bg-white relative"
                    style={{ height: '550px' }}
                >
                    <div className="w-full h-full overflow-hidden rounded-2xl">
                        {activeMap === 'world' ? (
                            <InteractiveMap onDestinationClick={(dest) => navigate(`/destination/${dest.id}`)} />
                        ) : (
                            <IndiaMap onDestinationClick={(dest) => navigate(`/destination/${dest.id}`)} />
                        )}
                    </div>
                </div>

                {/* Map Features */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                    {[
                        { icon: '📍', number: '50+', label: 'Destinations', gradient: 'from-blue-500 to-cyan-500' },
                        { icon: '🗺️', number: 'Interactive', label: 'Explore Mode', gradient: 'from-purple-500 to-pink-500' },
                        { icon: '✈️', number: '500+', label: 'Packages', gradient: 'from-orange-500 to-red-500' },
                        { icon: '⭐', number: '4.9/5', label: 'Rating', gradient: 'from-amber-500 to-orange-500' },
                    ].map((item, i) => (
                        <div
                            key={i}
                            ref={el => statsRef.current[i] = el}
                        >
                            <GlassCard className="text-center p-6 rounded-2xl relative overflow-hidden group hover:shadow-xl transition-shadow">
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                                <div className="relative z-10">
                                    <motion.div
                                        animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                                        className="text-5xl mb-3"
                                    >
                                        {item.icon}
                                    </motion.div>
                                    <div className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${item.gradient} mb-1`}>
                                        {item.number}
                                    </div>
                                    <div className="text-sm text-gray-600 font-bold uppercase tracking-wide">{item.label}</div>
                                </div>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InteractiveMapSection;
