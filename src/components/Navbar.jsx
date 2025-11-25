import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-100' 
                    : 'bg-white'
            }`}
            style={{ height: scrolled ? '64px' : '80px' }}
        >
            <div className="w-full flex justify-between items-center h-full">
                <Link to="/" className="flex items-center h-full pl-4 md:pl-6">
                    <img 
                        src="/logo.png" 
                        alt="Fly Daddy Logo" 
                        className="h-full w-auto object-contain"
                        style={{ maxHeight: scrolled ? '56px' : '72px', minHeight: '48px' }}
                    />
                </Link>
                
                <div className="container mx-auto px-6 flex justify-end items-center h-full flex-1">

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/destinations">Destinations</NavLink>
                        <NavLink to="/packages">Packages</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <Link
                            to="/contact"
                            className="ml-4 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-rose-500/30 hover:scale-105 transition-all"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-800 hover:text-blue-600 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-lg shadow-xl border-t border-gray-100 md:hidden"
                    >
                        <div className="flex flex-col items-center py-8 gap-6">
                            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                            <MobileNavLink to="/destinations" onClick={() => setIsOpen(false)}>Destinations</MobileNavLink>
                            <MobileNavLink to="/packages" onClick={() => setIsOpen(false)}>Packages</MobileNavLink>
                            <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-full hover:shadow-lg transition-all"
                            >
                                Book Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const NavLink = ({ to, children }) => (
    <Link
        to={to}
        className="text-gray-700 font-semibold hover:text-blue-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-cyan-500 after:transition-all hover:after:w-full"
    >
        {children}
    </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
    <Link
        to={to}
        onClick={onClick}
        className="text-xl text-gray-700 font-semibold hover:text-blue-600 transition-colors"
    >
        {children}
    </Link>
);

export default Navbar;
