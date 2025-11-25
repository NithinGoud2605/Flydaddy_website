import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Compass, Umbrella, Mountain, Building2, Building, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CategoriesSection = () => {
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef([]);

    const categories = [
        { 
            name: 'Beach Paradise', 
            icon: Umbrella, 
            count: '150+ Places', 
            gradient: 'from-blue-500 via-cyan-400 to-teal-500',
            bgPattern: '🌊',
            description: 'Tropical beaches & crystal waters'
        },
        { 
            name: 'Mountain Adventures', 
            icon: Mountain, 
            count: '200+ Destinations', 
            gradient: 'from-emerald-500 via-green-400 to-teal-500',
            bgPattern: '⛰️',
            description: 'Peaks, valleys & breathtaking views'
        },
        { 
            name: 'Cultural Tours', 
            icon: Building2, 
            count: '180+ Sites', 
            gradient: 'from-purple-500 via-pink-400 to-rose-500',
            bgPattern: '🏛️',
            description: 'Historic sites & cultural heritage'
        },
        { 
            name: 'City Escapes', 
            icon: Building, 
            count: '100+ Cities', 
            gradient: 'from-orange-500 via-red-400 to-pink-500',
            bgPattern: '🌆',
            description: 'Urban adventures & city life'
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation
            gsap.from(headingRef.current, {
                y: 60,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 85%",
                }
            });

            // Staggered card animations
            cardsRef.current.forEach((card, i) => {
                gsap.from(card, {
                    y: 80,
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.7,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                    delay: i * 0.12,
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-b from-sky-100 via-white to-white relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-cyan-50/30" />
            
            {/* Floating orbs */}
            <motion.div
                className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/15 via-cyan-400/10 to-sky-400/15 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-cyan-400/15 via-teal-400/10 to-blue-400/15 rounded-full blur-3xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="container mx-auto px-6 relative z-10">
                <div ref={headingRef} className="text-center mb-16">
                    <motion.div
                        className="inline-block mb-4"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <div className="relative">
                            <Compass className="text-blue-600 mx-auto" size={48} />
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                animate={{ rotate: [0, -360] }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            >
                                <Sparkles className="text-cyan-500" size={24} />
                            </motion.div>
                        </div>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
                        <span 
                            style={{
                                background: 'linear-gradient(to right, #1d4ed8, #0891b2, #0d9488)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Choose Your Adventure
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 font-medium">Find the perfect experience tailored for you</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, index) => {
                        const IconComponent = cat.icon;
                        return (
                            <motion.div
                                key={index}
                                ref={el => cardsRef.current[index] = el}
                                onClick={() => navigate('/packages')}
                                className="relative h-full cursor-pointer group"
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                {/* Gradient Background with pattern */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} rounded-3xl opacity-95 group-hover:opacity-100 transition-all duration-500 shadow-xl group-hover:shadow-2xl`}>
                                    {/* Decorative pattern overlay */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute inset-0" style={{
                                            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                            backgroundSize: '24px 24px'
                                        }}></div>
                                    </div>
                                </div>
                                
                                {/* Shine effect on hover */}
                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                </div>
                                
                                {/* Content */}
                                <div className="relative p-8 h-full flex flex-col justify-between rounded-3xl border-2 border-white/40 min-h-[320px] overflow-hidden">
                                    {/* Floating sparkles */}
                                    <motion.div 
                                        className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full"
                                        animate={{ 
                                            scale: [1, 1.5, 1],
                                            opacity: [0.5, 1, 0.5]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                                    />
                                    <motion.div 
                                        className="absolute top-8 right-8 w-1.5 h-1.5 bg-white rounded-full"
                                        animate={{ 
                                            scale: [1, 1.3, 1],
                                            opacity: [0.4, 0.8, 0.4]
                                        }}
                                        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.5 }}
                                    />
                                    
                                    {/* Icon Container */}
                                    <motion.div
                                        animate={{ 
                                            y: [-8, 8, -8],
                                            rotate: [0, 5, -5, 0]
                                        }}
                                        transition={{ 
                                            duration: 4, 
                                            repeat: Infinity, 
                                            ease: "easeInOut",
                                            delay: index * 0.2
                                        }}
                                        className="relative mb-6"
                                    >
                                        {/* Icon glow */}
                                        <div className="absolute inset-0 bg-white/30 rounded-2xl blur-xl scale-150"></div>
                                        
                                        {/* Icon container */}
                                        <div className="relative w-24 h-24 rounded-2xl bg-white/25 backdrop-blur-md flex items-center justify-center shadow-2xl border border-white/50">
                                            <IconComponent 
                                                className="text-white drop-shadow-lg" 
                                                size={48}
                                                strokeWidth={2.5}
                                            />
                                            
                                            {/* Rotating ring */}
                                            <motion.div
                                                className="absolute inset-0 rounded-2xl border-2 border-white/30"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            />
                                        </div>
                                    </motion.div>
                                    
                                    {/* Text Content */}
                                    <div>
                                        <h3 className="text-2xl font-black text-white mb-2 drop-shadow-lg">
                                            {cat.name}
                                        </h3>
                                        <p className="text-white/80 text-sm mb-1 font-medium">
                                            {cat.description}
                                        </p>
                                        <p className="text-white/90 font-bold text-lg mb-6">
                                            {cat.count}
                                        </p>
                                        
                                        {/* CTA Button */}
                                        <motion.div 
                                            className="flex items-center text-white font-black gap-2 group-hover:gap-4 transition-all"
                                            whileHover={{ x: 4 }}
                                        >
                                            <span className="text-lg">Explore Now</span>
                                            <motion.div
                                                animate={{ x: [0, 6, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                <ArrowRight size={22} strokeWidth={3} />
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                    
                                    {/* Bottom accent line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/40 rounded-b-3xl"></div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;
