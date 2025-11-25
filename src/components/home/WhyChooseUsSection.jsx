import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, CalendarCheck, HeadphonesIcon, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BentoCard } from '../ui/GlassCard';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUsSection = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef([]);

    const features = [
        { 
            icon: <Award className="text-white" size={40} />, 
            title: 'Best Prices', 
            desc: 'We guarantee the lowest prices or refund 110% of the difference', 
            gradient: 'from-indigo-500/30 to-purple-500/30', 
            bgGradient: 'from-indigo-600 via-purple-600 to-pink-600',
            delay: 0,
        },
        { 
            icon: <CalendarCheck className="text-white" size={40} />, 
            title: 'Easy Booking', 
            desc: 'Book your dream trip in minutes with our simple booking process', 
            gradient: 'from-emerald-500/30 to-teal-500/30', 
            bgGradient: 'from-emerald-600 via-teal-600 to-cyan-600',
            delay: 0.1,
        },
        { 
            icon: <HeadphonesIcon className="text-white" size={40} />, 
            title: '24/7 Support', 
            desc: 'Our travel experts are always here to help you', 
            gradient: 'from-rose-500/30 to-pink-500/30', 
            bgGradient: 'from-rose-600 via-pink-600 to-fuchsia-600',
            delay: 0.2,
        },
        { 
            icon: <TrendingUp className="text-white" size={40} />, 
            title: '50K+ Travelers', 
            desc: '4.9/5 rating from thousands of happy customers', 
            gradient: 'from-amber-500/30 to-orange-500/30', 
            bgGradient: 'from-amber-600 via-orange-600 to-red-600',
            delay: 0.3,
        },
    ];

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

            // Cards animation with bounce effect
            cardsRef.current.forEach((card, i) => {
                gsap.from(card, {
                    y: 150,
                    opacity: 0,
                    scale: 0.7,
                    rotation: i % 2 === 0 ? -10 : 10,
                    duration: 1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                    },
                    delay: i * 0.15,
                });

                // Floating animation on scroll
                gsap.to(card, {
                    y: -40 + (i * 10),
                    rotation: i % 2 === 0 ? 2 : -2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 2,
                    }
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-12 bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 via-purple-100/30 to-pink-100/40" />
            
            {/* Animated background shapes */}
            <motion.div
                className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-indigo-400/30 via-purple-400/25 to-pink-400/30 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-rose-400/25 via-orange-400/25 to-amber-400/30 rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="container mx-auto px-6 relative z-10">
                <div ref={headingRef} className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3">
                        <span 
                            style={{
                                background: 'linear-gradient(to right, #7c3aed, #ec4899, #f59e0b, #10b981)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Why Book With Flydaddy?
                        </span>
                    </h2>
                    <p className="text-lg text-indigo-800 font-semibold">Your trusted travel partner since 2009</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                        >
                            <BentoCard gradient={feature.gradient} className="h-full">
                                <motion.div
                                    animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                                    transition={{ duration: 5, repeat: Infinity, delay: feature.delay }}
                                    className={`inline-block p-4 bg-gradient-to-br ${feature.bgGradient} rounded-2xl mb-6 shadow-xl`}
                                >
                                    {feature.icon}
                                </motion.div>
                                <h3 className="text-2xl font-black text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">{feature.desc}</p>
                            </BentoCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
