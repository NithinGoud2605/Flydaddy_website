import React from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

const LoadingSpinner = ({ fullScreen = false, message = "Loading..." }) => {
    const containerClass = fullScreen 
        ? "fixed inset-0 bg-dark/95 backdrop-blur-sm z-50 flex items-center justify-center"
        : "flex items-center justify-center py-20";

    return (
        <div className={containerClass}>
            <div className="text-center">
                {/* Animated Plane */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="mb-6"
                >
                    <div className="inline-block p-6 bg-gradient-to-br from-primary/20 to-purple/20 rounded-3xl border-2 border-primary/30">
                        <Plane size={48} className="text-primary" />
                    </div>
                </motion.div>

                {/* Animated Dots */}
                <div className="flex items-center justify-center gap-2 mb-4">
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [1, 0.5, 1]
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: index * 0.2
                            }}
                            className="w-3 h-3 bg-primary rounded-full"
                        />
                    ))}
                </div>

                {/* Loading Text */}
                <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-white text-lg font-semibold"
                >
                    {message}
                </motion.p>
            </div>
        </div>
    );
};

export default LoadingSpinner;



