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
            gradient: 'from-cyan-500 via-blue-500 to-sky-500',
            gradientHover: 'from-cyan-400 via-blue-400 to-sky-400',
            iconBg: 'from-cyan-400 to-blue-500',
            iconColor: 'text-white',
            textColor: 'text-white',
            borderColor: 'border-cyan-300/50',
            description: 'Tropical beaches & crystal waters'
        },
        { 
            name: 'Mountain Adventures', 
            icon: Mountain, 
            count: '200+ Destinations', 
            gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
            gradientHover: 'from-emerald-400 via-teal-400 to-cyan-400',
            iconBg: 'from-emerald-400 to-teal-500',
            iconColor: 'text-white',
            textColor: 'text-white',
            borderColor: 'border-emerald-300/50',
            description: 'Peaks, valleys & breathtaking views'
        },
        { 
            name: 'Cultural Tours', 
            icon: Building2, 
            count: '180+ Sites', 
            gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
            gradientHover: 'from-violet-400 via-purple-400 to-fuchsia-400',
            iconBg: 'from-violet-400 to-purple-500',
            iconColor: 'text-white',
            textColor: 'text-white',
            borderColor: 'border-violet-300/50',
            description: 'Historic sites & cultural heritage'
        },
        { 
            name: 'City Escapes', 
            icon: Building, 
            count: '100+ Cities', 
            gradient: 'from-amber-500 via-orange-500 to-rose-500',
            gradientHover: 'from-amber-400 via-orange-400 to-rose-400',
            iconBg: 'from-amber-400 to-orange-500',
            iconColor: 'text-white',
            textColor: 'text-white',
            borderColor: 'border-amber-300/50',
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
        <section ref={sectionRef} className="py-12 bg-gradient-to-b from-sky-100 via-white to-white relative overflow-hidden">
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
                <div ref={headingRef} className="text-center mb-8">
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
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3">
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
                    <p className="text-lg text-gray-600 font-medium">Find the perfect experience tailored for you</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                                {/* Gradient Background */}
                                <motion.div 
                                    className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500`}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {/* Animated shimmer effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        animate={{ 
                                            x: ['-100%', '200%'],
                                        }}
                                        transition={{ 
                                            duration: 3, 
                                            repeat: Infinity, 
                                            repeatDelay: 2,
                                            ease: "linear"
                                        }}
                                    />
                                    
                                    {/* Subtle pattern overlay */}
                                    <div className="absolute inset-0 opacity-5">
                                        <div className="absolute inset-0" style={{
                                            backgroundImage: `radial-gradient(circle at 3px 3px, white 1.5px, transparent 0)`,
                                            backgroundSize: '30px 30px'
                                        }}></div>
                                    </div>
                                    
                                    {/* Gradient overlay for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-3xl"></div>
                                </motion.div>
                                
                                {/* Shine effect on hover */}
                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                </div>
                                
                                {/* Content */}
                                <div className={`relative p-6 h-full flex flex-col justify-between rounded-3xl border-2 ${cat.borderColor} min-h-[300px] overflow-hidden`}>
                                    {/* Floating sparkles */}
                                    <motion.div 
                                        className="absolute top-4 right-4 w-3 h-3 bg-white/80 rounded-full shadow-lg"
                                        animate={{ 
                                            scale: [1, 1.5, 1],
                                            opacity: [0.6, 1, 0.6]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                                    />
                                    <motion.div 
                                        className="absolute top-8 right-8 w-2 h-2 bg-white/70 rounded-full shadow-md"
                                        animate={{ 
                                            scale: [1, 1.3, 1],
                                            opacity: [0.5, 0.9, 0.5]
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
                                        <div className="absolute inset-0 bg-white/40 rounded-2xl blur-2xl scale-150"></div>
                                        
                                        {/* Icon container */}
                                        <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${cat.iconBg} flex items-center justify-center shadow-2xl border-2 border-white/50 group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent 
                                                className={`${cat.iconColor} drop-shadow-lg`}
                                                size={40}
                                                strokeWidth={2.5}
                                            />
                                            
                                            {/* Rotating ring */}
                                            <motion.div
                                                className="absolute inset-0 rounded-2xl border-2 border-white/40"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            />
                                        </div>
                                    </motion.div>
                                    
                                    {/* Text Content */}
                                    <div>
                                        <h3 className={`text-2xl font-black ${cat.textColor} mb-2 drop-shadow-lg`}>
                                            {cat.name}
                                        </h3>
                                        <p className={`${cat.textColor}/90 text-sm mb-2 font-semibold`}>
                                            {cat.description}
                                        </p>
                                        <p className={`${cat.textColor} font-black text-xl mb-6 drop-shadow-md`}>
                                            {cat.count}
                                        </p>
                                        
                                        {/* CTA Button */}
                                        <motion.button
                                            whileHover={{ x: 4, scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-black gap-2 px-4 py-2.5 rounded-xl border border-white/40 transition-all group-hover:gap-4"
                                        >
                                            <span className="text-base">Explore Now</span>
                                            <motion.div
                                                animate={{ x: [0, 6, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                <ArrowRight size={18} strokeWidth={3} />
                                            </motion.div>
                                        </motion.button>
                                    </div>
                                    
                                    {/* Bottom accent line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/40 rounded-b-3xl"></div>
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
