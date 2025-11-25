import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MapPin, Star, Plane, Map as MapIcon, Globe2, Heart } from 'lucide-react';
import { indianDestinations, internationalDestinations } from '../data/destinations';
import IndiaMap from '../components/IndiaMap';
import InteractiveMap from '../components/InteractiveMap';
import { GlassCard } from '../components/ui/GlassCard';
import { ContactButtons } from '../components/ui/ContactButtons';

const Destinations = () => {
    const navigate = useNavigate();
    const [view, setView] = useState('grid'); // 'grid', 'india-map', 'world-map'
    const [filter, setFilter] = useState('All');
    const [category, setCategory] = useState('all'); // 'all', 'indian', 'international'

    const getFilteredDestinations = () => {
        let destinations = [];
        
        if (category === 'indian') {
            destinations = indianDestinations;
        } else if (category === 'international') {
            destinations = internationalDestinations;
        } else {
            destinations = [...indianDestinations, ...internationalDestinations];
        }

        if (filter === 'All') return destinations;
        return destinations.filter(d => d.region === filter);
    };

    const filteredDestinations = getFilteredDestinations();

    const allRegions = ['All', 'North India', 'South India', 'West India', 'East India', 'Europe', 'Asia', 'Southeast Asia', 'Middle East', 'North America', 'South America', 'Oceania', 'Africa'];
    
    const handleDestinationClick = (destination) => {
        navigate(`/destination/${destination.id}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-cyan-50 to-white pt-24 pb-12 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/20 to-pink-100/30" />
            <motion.div
                className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 via-cyan-400/15 to-teal-400/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-7xl font-black mb-4">
                        <span 
                            style={{
                                background: 'linear-gradient(to right, #7c3aed, #ec4899, #f59e0b, #10b981)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Explore Destinations
                        </span>
                    </h1>
                    <p className="text-xl text-indigo-800 font-semibold max-w-2xl mx-auto">
                        Discover amazing places across India and around the world
                    </p>
                </motion.div>

                {/* View Toggle & Category Filter */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                    {/* Category Tabs */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => { setCategory('all'); setFilter('All'); }}
                            className={`px-6 py-3 rounded-xl font-black transition-all ${
                                category === 'all'
                                    ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-xl'
                                    : 'bg-white text-indigo-700 hover:bg-indigo-50 border-2 border-indigo-200 hover:border-indigo-400'
                            }`}
                        >
                            <Globe2 className="inline mr-2" size={20} />
                            All Destinations
                        </button>
                        <button
                            onClick={() => { setCategory('indian'); setFilter('All'); }}
                            className={`px-6 py-3 rounded-xl font-black transition-all ${
                                category === 'indian'
                                    ? 'bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white shadow-xl'
                                    : 'bg-white text-orange-700 hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-400'
                            }`}
                        >
                            🇮🇳 India
                        </button>
                        <button
                            onClick={() => { setCategory('international'); setFilter('All'); }}
                            className={`px-6 py-3 rounded-xl font-black transition-all ${
                                category === 'international'
                                    ? 'bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 text-white shadow-xl'
                                    : 'bg-white text-cyan-700 hover:bg-cyan-50 border-2 border-cyan-200 hover:border-cyan-400'
                            }`}
                        >
                            <Plane className="inline mr-2" size={20} />
                            International
                        </button>
                    </div>

                    {/* View Toggle */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => setView('grid')}
                            className={`px-5 py-3 rounded-xl font-black transition-all ${
                                view === 'grid'
                                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                                    : 'bg-white text-blue-700 hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-400'
                            }`}
                        >
                            Grid View
                        </button>
                        {category !== 'international' && (
                            <button
                                onClick={() => setView('india-map')}
                                className={`px-5 py-3 rounded-xl font-black transition-all ${
                                    view === 'india-map'
                                        ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg'
                                        : 'bg-white text-orange-700 hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-400'
                                }`}
                            >
                                <MapIcon className="inline mr-2" size={18} />
                                India Map
                            </button>
                        )}
                        {category !== 'indian' && (
                            <button
                                onClick={() => setView('world-map')}
                                className={`px-5 py-3 rounded-xl font-black transition-all ${
                                    view === 'world-map'
                                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                                        : 'bg-white text-indigo-700 hover:bg-indigo-50 border-2 border-indigo-200 hover:border-indigo-400'
                                }`}
                            >
                                <Globe2 className="inline mr-2" size={18} />
                                World Map
                            </button>
                        )}
                    </div>
                </div>

                {/* Map Views */}
                <AnimatePresence mode="wait">
                    {view === 'india-map' && (
                        <motion.div
                            key="india-map"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="mb-12 rounded-3xl overflow-hidden border-4 border-blue-200/80 shadow-2xl bg-white"
                            style={{ height: '700px' }}
                        >
                            <IndiaMap onDestinationClick={handleDestinationClick} />
                        </motion.div>
                    )}

                    {view === 'world-map' && (
                        <motion.div
                            key="world-map"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="mb-12 rounded-3xl overflow-hidden border-4 border-blue-200/80 shadow-2xl bg-white"
                            style={{ height: '700px' }}
                        >
                            <InteractiveMap onDestinationClick={handleDestinationClick} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Region Filters */}
                {view === 'grid' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-center gap-3 mb-12 flex-wrap"
                    >
                        {allRegions.map((region) => (
                            <button
                                key={region}
                                onClick={() => setFilter(region)}
                                className={`px-5 py-2 rounded-full border-2 transition-all font-black ${
                                    filter === region
                                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-400 shadow-lg scale-105'
                                        : 'bg-white text-indigo-700 border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50'
                                }`}
                            >
                                {region}
                            </button>
                        ))}
                    </motion.div>
                )}

                {/* Grid View */}
                {view === 'grid' && (
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {filteredDestinations.map((dest, index) => (
                                <motion.div
                                    key={dest.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <div className="rounded-3xl overflow-hidden group bg-white shadow-xl border-2 border-gray-200 hover:border-indigo-300 transition-all">
                                        <div 
                                            className="h-72 relative overflow-hidden cursor-pointer"
                                            onClick={() => handleDestinationClick(dest)}
                                        >
                                            <img 
                                                src={dest.image} 
                                                alt={dest.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                onError={(e) => {
                                                    e.target.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800';
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                            
                                            {/* Heart Icon */}
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={(e) => e.stopPropagation()}
                                                className="absolute top-4 right-4 w-12 h-12 backdrop-blur-xl bg-white/80 border border-white/60 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all shadow-lg"
                                            >
                                                <Heart size={20} className="text-indigo-600 group-hover:text-white" />
                                            </motion.button>
                                            
                                            {/* Rating */}
                                            <div className="absolute top-4 left-4 backdrop-blur-xl bg-white/95 rounded-2xl px-4 py-2 flex items-center gap-2 shadow-lg border border-white/60">
                                                <Star size={16} fill="#f59e0b" className="text-amber-500" />
                                                <span className="text-gray-900 font-black">{dest.rating}</span>
                                            </div>

                                            {/* Category Badge */}
                                            <div className="absolute bottom-4 right-4 backdrop-blur-xl bg-indigo-600 border border-indigo-400 rounded-xl px-4 py-2">
                                                <span className="text-white font-bold text-sm">{dest.category}</span>
                                            </div>

                                            {/* Location */}
                                            <div className="absolute bottom-4 left-4">
                                                <h3 className="text-2xl font-black text-white mb-1 drop-shadow-lg">{dest.name}</h3>
                                                <p className="text-white/90 text-sm font-semibold flex items-center gap-1 drop-shadow-md">
                                                    <MapPin size={16} />
                                                    {dest.country} • {dest.region}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-6 bg-white">
                                            <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => handleDestinationClick(dest)}>
                                                <div>
                                                    <p className="text-gray-600 text-xs font-bold uppercase tracking-wide mb-1">Starting from</p>
                                                    <p className="text-3xl font-black text-gray-900">
                                                        ₹{dest.price.toLocaleString('en-IN')}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-indigo-600 font-black text-sm">{dest.duration}</p>
                                                    <p className="text-gray-500 text-xs font-semibold">Best: {dest.bestTime.split(' ')[0]}</p>
                                                </div>
                                            </div>

                                            <ContactButtons message={`Hi! I'm interested in ${dest.name}. Can you provide more details?`} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}

                {/* No Results */}
                {view === 'grid' && filteredDestinations.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-2xl text-indigo-700 font-semibold">No destinations found for this filter</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Destinations;
