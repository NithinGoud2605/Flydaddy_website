import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const GlassCard = ({ children, className, hover = true, ...props }) => {
    return (
        <motion.div
            whileHover={hover ? { y: -8, scale: 1.02 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn(
                "relative backdrop-blur-xl bg-white/80 border border-white/20 shadow-2xl",
                "before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-white/40",
                "before:shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]",
                "after:absolute after:inset-0 after:rounded-[inherit]",
                "after:shadow-[0_20px_60px_rgba(0,0,0,0.1)]",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const BentoCard = ({ children, className, gradient = "from-blue/10 to-purple/10", ...props }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={cn(
                "group relative overflow-hidden rounded-3xl p-8",
                "bg-gradient-to-br",
                gradient,
                "border-2 border-gray-200/50 shadow-lg hover:shadow-2xl",
                "transition-all duration-300",
                className
            )}
            {...props}
        >
            {/* Animated gradient blob */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-primary/20 to-purple/20 blur-3xl transition-transform duration-700 group-hover:scale-150" />
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-gradient-to-tr from-secondary/20 to-pink/20 blur-3xl transition-transform duration-700 group-hover:scale-150" />
            
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};

export const NeuCard = ({ children, className, ...props }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn(
                "rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100",
                "shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff]",
                "hover:shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff]",
                "transition-all duration-300",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const IsometricCard = ({ children, className, color = "primary", ...props }) => {
    const colors = {
        primary: "from-blue to-blue/80",
        secondary: "from-secondary to-secondary/80",
        accent: "from-accent to-accent/80",
        purple: "from-purple to-purple/80",
    };

    return (
        <div className={cn("relative group perspective-1000", className)} {...props}>
            <motion.div
                whileHover={{ rotateX: 5, rotateY: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative transform-gpu transition-transform duration-300"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Shadow layer */}
                <div className="absolute inset-0 translate-y-4 translate-x-4 rounded-3xl bg-black/10 blur-xl" />
                
                {/* Main card */}
                <div className={cn(
                    "relative rounded-3xl bg-gradient-to-br",
                    colors[color],
                    "p-8 shadow-2xl border-2 border-white/20"
                )}>
                    {children}
                </div>
            </motion.div>
        </div>
    );
};



