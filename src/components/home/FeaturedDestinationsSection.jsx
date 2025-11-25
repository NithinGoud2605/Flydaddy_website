import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Globe, Star, MapPin, Heart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { indianDestinations, internationalDestinations } from '../../data/destinations';
import { GlassCard } from '../ui/GlassCard';
import { ContactButtons } from '../ui/ContactButtons';

gsap.registerPlugin(ScrollTrigger);

const FeaturedDestinationsSection = () => {
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef([]);

    const featuredDestinations = [
        indianDestinations[0],
        internationalDestinations[0],
        indianDestinations[4],
        internationalDestinations[3],
        indianDestinations[2],
        internationalDestinations[1],
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading reveal
            gsap.from(headingRef.current, {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 85%",
                }
            });

            // Cards stagger animation with 3D effect
            cardsRef.current.forEach((card, i) => {
                const row = Math.floor(i / 3);
                const col = i % 3;
                
                gsap.from(card, {
                    y: 120,
                    x: (col - 1) * 50,
                    opacity: 0,
                    rotateY: (col - 1) * 15,
                    scale: 0.8,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                    },
                    delay: row * 0.2 + col * 0.1,
                });

                // Parallax on scroll
                gsap.to(card, {
                    y: -30 - (i % 3) * 20,
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
        <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white via-slate-50 to-sky-50 relative overflow-hidden">
            {/* Decorative gradient elements */}
            <motion.div 
                className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/20 via-cyan-400/15 to-sky-400/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
                className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-cyan-400/15 via-teal-400/15 to-blue-400/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="container mx-auto px-6 relative z-10">
                <div ref={headingRef} className="text-center mb-16">
                    <motion.div
                        className="inline-block mb-4"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <Globe className="text-blue-600 mx-auto" size={48} />
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
                            Trending Destinations
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 font-medium">Handpicked by our travel experts</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredDestinations.map((dest, index) => (
                        <div
                            key={dest.id}
                            ref={el => cardsRef.current[index] = el}
                            className="group"
                        >
                            <GlassCard className="rounded-3xl overflow-hidden h-full">
                                {/* Image */}
                                <div
                                    className="relative h-72 overflow-hidden cursor-pointer"
                                    onClick={() => navigate(`/destination/${dest.id}`)}
                                >
                                    <img
                                        src={dest.image}
                                        alt={dest.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800';
                                        }}
                                    />
                                    
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    
                                    {/* Heart Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="absolute top-4 right-4 w-12 h-12 backdrop-blur-xl bg-white/30 border border-white/40 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-xl"
                                    >
                                        <Heart size={20} />
                                    </motion.button>
                                    
                                    {/* Rating Badge */}
                                    <div className="absolute top-4 left-4 backdrop-blur-xl bg-white/90 rounded-2xl px-4 py-2 flex items-center gap-2 shadow-xl">
                                        <Star size={16} fill="#FFB400" className="text-amber-400" />
                                        <span className="text-gray-900 font-black">{dest.rating}</span>
                                    </div>
                                    
                                    {/* Location Badge */}
                                    <div className="absolute bottom-4 left-4 backdrop-blur-xl bg-white/20 border border-white/40 rounded-xl px-4 py-2 shadow-xl">
                                        <p className="text-white font-black flex items-center gap-2">
                                            <MapPin size={16} />
                                            {dest.country}
                                        </p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 bg-white/80 backdrop-blur-sm">
                                    <div className="mb-4 cursor-pointer" onClick={() => navigate(`/destination/${dest.id}`)}>
                                        <h3 className="text-2xl font-black text-gray-900 mb-2">{dest.name}</h3>
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold">{dest.category}</span>
                                            <span className="text-gray-600 font-bold">{dest.duration}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-baseline gap-2 mb-4">
                                        <span className="text-gray-500 text-sm font-bold">From</span>
                                        <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">₹{(dest.price / 1000).toFixed(0)}k</span>
                                        <span className="text-gray-500 text-sm">per person</span>
                                    </div>

                                    <ContactButtons message={`Hi! I'm interested in ${dest.name} package. Can you provide more details?`} />
                                </div>
                            </GlassCard>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/destinations')}
                        className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black rounded-full hover:shadow-2xl shadow-blue-500/30 transition-all inline-flex items-center gap-2 text-lg"
                    >
                        <span>View All Destinations</span>
                        <ArrowRight size={20} />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedDestinationsSection;
