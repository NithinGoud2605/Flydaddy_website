import React, { useEffect, Suspense, lazy, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '../components/home/HeroSection';

// Lazy load non-critical sections
const CategoriesSection = lazy(() => import('../components/home/CategoriesSection'));
const FeaturedDestinationsSection = lazy(() => import('../components/home/FeaturedDestinationsSection'));
const InteractiveMapSection = lazy(() => import('../components/home/InteractiveMapSection'));
const WhyChooseUsSection = lazy(() => import('../components/home/WhyChooseUsSection'));
const CTASection = lazy(() => import('../components/home/CTASection'));

// Lazy load plane animation (heavy component)
const ScrollPlane = lazy(() => 
    import('../components/3d/AnimatedPlane').then(module => ({ default: module.ScrollPlane }))
);

// Register GSAP plugins once
gsap.registerPlugin(ScrollTrigger);

// Section loader placeholder
const SectionLoader = memo(() => (
    <div className="py-24 flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
));

const Home = () => {
    useEffect(() => {
        // Delay ScrollTrigger refresh for better initial load
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);
        
        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            {/* Scroll-triggered flying plane - lazy loaded */}
            <Suspense fallback={null}>
                <ScrollPlane />
            </Suspense>
            
            {/* Hero Section - loads immediately (critical) */}
            <HeroSection />
            
            {/* Other sections - lazy loaded */}
            <Suspense fallback={<SectionLoader />}>
                <CategoriesSection />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <FeaturedDestinationsSection />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <InteractiveMapSection />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <WhyChooseUsSection />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <CTASection />
            </Suspense>
        </div>
    );
};

export default memo(Home);
