import React, { useEffect, useRef, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * AnimatedPlane - Hero section airplane (optimized)
 */
const AnimatedPlane = memo(({ className = '', size = 'lg' }) => {
    const planeRef = useRef(null);

    const sizeClasses = {
        sm: 'w-40 h-28',
        md: 'w-56 h-40',
        lg: 'w-72 h-52',
        xl: 'w-96 h-64',
    };

    useEffect(() => {
        const plane = planeRef.current;
        if (!plane) return;

        const anim = gsap.to(plane, {
            y: -20,
            duration: 2.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
        });

        return () => anim.kill();
    }, []);

    return (
        <div className={`relative ${className} ${sizeClasses[size]}`}>
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl scale-125 -z-10" />
            <div ref={planeRef} className="relative w-full h-full">
                <img
                    src="https://img.icons8.com/3d-fluency/512/airplane-take-off.png"
                    alt="Airplane"
                    className="w-full h-full object-contain"
                    loading="eager"
                    style={{ filter: 'drop-shadow(0 15px 30px rgba(59, 130, 246, 0.3))' }}
                />
            </div>
        </div>
    );
});

/**
 * ScrollPlane - Lightweight scroll-triggered plane
 */
export const ScrollPlane = memo(() => {
    const planeRef = useRef(null);
    const trailRef = useRef(null);

    useEffect(() => {
        const plane = planeRef.current;
        const trail = trailRef.current;
        if (!plane) return;

        // Simple flight path
        const flightPath = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 2,
                onUpdate: (self) => {
                    const velocity = Math.abs(self.getVelocity());
                    if (trail) {
                        const opacity = Math.min(velocity / 800, 0.7);
                        gsap.to(trail, { opacity, duration: 0.1 });
                    }
                }
            }
        });

        flightPath
            .fromTo(plane,
                { left: "5%", top: "10%" },
                { left: "25%", top: "9%", duration: 3, ease: "none" }
            )
            .to(plane, { left: "50%", top: "10%", duration: 3, ease: "none" })
            .to(plane, { left: "75%", top: "9%", duration: 3, ease: "none" })
            .to(plane, { left: "100%", top: "10%", duration: 2, ease: "none" });

        return () => {
            flightPath.kill();
            ScrollTrigger.getAll().forEach(t => {
                if (t.vars?.trigger === "body") t.kill();
            });
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
            <div
                ref={planeRef}
                className="absolute w-20 h-16 md:w-28 md:h-24"
                style={{ willChange: 'transform' }}
            >
                {/* Simple trail */}
                <div
                    ref={trailRef}
                    className="absolute top-1/2 right-full w-32 h-1.5 -translate-y-1/2 opacity-0"
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8))',
                        filter: 'blur(1px)',
                    }}
                />
                <img
                    src="https://img.icons8.com/3d-fluency/512/airplane-take-off.png"
                    alt=""
                    className="w-full h-full object-contain"
                    loading="lazy"
                    style={{ filter: 'drop-shadow(0 8px 16px rgba(59, 130, 246, 0.4))' }}
                />
            </div>
        </div>
    );
});

/**
 * Cloud Component (simplified)
 */
export const Cloud = memo(({ delay = 0, size = 'md', position = 'top' }) => {
    const cloudRef = useRef(null);

    const sizes = { sm: 'w-24 h-16', md: 'w-40 h-24', lg: 'w-56 h-32' };
    const positions = { top: 'top-[8%]', middle: 'top-[32%]', bottom: 'top-[58%]' };

    useEffect(() => {
        const cloud = cloudRef.current;
        if (!cloud) return;

        const anim = gsap.fromTo(cloud,
            { xPercent: -25 },
            { xPercent: 115, duration: 80, ease: "none", repeat: -1, delay }
        );

        return () => anim.kill();
    }, [delay]);

    return (
        <div ref={cloudRef} className={`absolute ${positions[position]} ${sizes[size]} pointer-events-none opacity-60`}>
            <div className="w-full h-full bg-white rounded-full blur-xl" />
        </div>
    );
});

/**
 * ParallaxClouds - Removed for performance, just static clouds
 */
export const ParallaxClouds = memo(() => null);

export default AnimatedPlane;
