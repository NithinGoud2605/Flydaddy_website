import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Plane } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ContactButtons } from '../ui/ContactButtons';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const planesRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Content reveal animation
            gsap.from(contentRef.current, {
                y: 100,
                opacity: 0,
                scale: 0.9,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });

            // Flying planes animation across the section
            planesRef.current.forEach((plane, i) => {
                gsap.fromTo(plane,
                    {
                        x: -100,
                        y: i * 50,
                        opacity: 0,
                        rotation: 15,
                    },
                    {
                        x: "calc(100vw + 100px)",
                        y: i * 30 - 50,
                        opacity: [0, 0.4, 0.4, 0],
                        rotation: -5,
                        duration: 15 + i * 3,
                        ease: "none",
                        repeat: -1,
                        delay: i * 2,
                    }
                );
            });

            // Parallax effect on the whole section
            gsap.to(sectionRef.current, {
                backgroundPosition: "50% 100%",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section 
            ref={sectionRef} 
            className="py-32 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 relative overflow-hidden"
            style={{ backgroundSize: '200% 200%', backgroundPosition: '50% 0%' }}
        >
            {/* Animated Pattern Background */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
            
            {/* Flying planes in background */}
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    ref={el => planesRef.current[i] = el}
                    className="absolute pointer-events-none"
                    style={{ top: `${20 + i * 25}%` }}
                >
                    <img
                        src="https://img.icons8.com/3d-fluency/94/airplane-take-off.png"
                        alt=""
                        className="w-16 h-12 object-contain opacity-40"
                        style={{ filter: 'brightness(2)' }}
                    />
                </div>
            ))}
            
            {/* Gradient Orbs */}
            <motion.div
                className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.15, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="container mx-auto px-6 text-center relative z-10">
                <div ref={contentRef}>
                    <motion.div
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Plane className="text-white" size={20} />
                        <span className="text-white font-bold">Limited Time Offer</span>
                    </motion.div>
                    
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        Ready to Start Your Journey?
                    </motion.h2>
                    
                    <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-medium">
                        Book now and save up to <span className="font-black text-yellow-300 text-3xl">30%</span> on selected packages
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-xl mx-auto mb-8">
                        <ContactButtons variant="stacked" message="Hi! I'm ready to start my dream journey. Please help me with the best packages!" />
                    </div>
                    
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/packages')}
                        className="px-10 py-4 bg-white/20 backdrop-blur-xl border-2 border-white text-white font-black text-lg rounded-2xl hover:bg-white hover:text-blue-600 transition-all inline-flex items-center gap-2"
                    >
                        <span>Or Browse All Packages</span>
                        <ArrowRight size={20} />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
