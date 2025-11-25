import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Globe, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InteractiveMap from '../InteractiveMap';
import IndiaMap from '../IndiaMap';

gsap.registerPlugin(ScrollTrigger);

const InteractiveMapSection = () => {
    const navigate = useNavigate();
    const [activeMap, setActiveMap] = useState('world');
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const mapRef = useRef(null);

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


        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-12 bg-gradient-to-b from-blue-100 via-cyan-100 to-teal-100 relative overflow-hidden">
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300/70 via-cyan-300/60 to-teal-300/70" />
            
            {/* Floating orbs */}
            <motion.div
                className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-500/50 via-cyan-500/45 to-teal-500/50 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.9, 0.7] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-indigo-500/45 via-blue-500/45 to-cyan-500/50 rounded-full blur-3xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.7, 0.85, 0.7] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Section dividers */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-100 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-teal-100 to-transparent" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div ref={headingRef} className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 leading-tight">
                        <span 
                            style={{
                                background: 'linear-gradient(to right, #7c3aed, #ec4899, #f59e0b, #10b981)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Explore on the Map
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-indigo-800 font-semibold max-w-2xl mx-auto leading-relaxed">
                        Click any destination to discover packages and prices
                    </p>
                </div>

                {/* Map Toggle */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveMap('world')}
                        className={`relative px-10 py-5 rounded-2xl font-black transition-all shadow-xl text-lg overflow-hidden group ${
                            activeMap === 'world'
                                ? 'bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white border-2 border-indigo-400 shadow-indigo-500/60'
                                : 'bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800 hover:shadow-2xl border-2 border-indigo-300 hover:border-indigo-400 hover:from-indigo-200 hover:to-blue-200'
                        }`}
                    >
                        {activeMap === 'world' && (
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/60"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                            />
                        )}
                        <span className="relative flex items-center gap-3">
                            <Globe className={activeMap === 'world' ? 'text-white' : 'text-indigo-700'} size={24} />
                            <span>World Destinations</span>
                        </span>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveMap('india')}
                        className={`relative px-10 py-5 rounded-2xl font-black transition-all shadow-xl text-lg overflow-hidden group ${
                            activeMap === 'india'
                                ? 'bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 text-white border-2 border-rose-400 shadow-rose-500/60'
                                : 'bg-gradient-to-r from-rose-100 to-orange-100 text-rose-800 hover:shadow-2xl border-2 border-rose-300 hover:border-rose-400 hover:from-rose-200 hover:to-orange-200'
                        }`}
                    >
                        {activeMap === 'india' && (
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/60"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                            />
                        )}
                        <span className="relative flex items-center gap-3">
                            <MapPin className={activeMap === 'india' ? 'text-white' : 'text-rose-700'} size={24} />
                            <span>Explore India</span>
                        </span>
                    </motion.button>
                </div>

                {/* Map Container */}
                <div
                    ref={mapRef}
                    className="rounded-3xl shadow-2xl border-4 border-blue-400/80 bg-white relative overflow-hidden"
                    style={{ height: '500px' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 via-cyan-200/40 to-teal-200/50 pointer-events-none z-10" />
                    <div className="w-full h-full overflow-hidden rounded-2xl relative z-0">
                        {activeMap === 'world' ? (
                            <InteractiveMap onDestinationClick={(dest) => navigate(`/destination/${dest.id}`)} />
                        ) : (
                            <IndiaMap onDestinationClick={(dest) => navigate(`/destination/${dest.id}`)} />
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default InteractiveMapSection;
