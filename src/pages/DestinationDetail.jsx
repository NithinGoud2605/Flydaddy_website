import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Calendar, Star, Users, Check, ArrowLeft, Heart, Share2, Camera, Compass } from 'lucide-react';
import { getDestinationById, allDestinations } from '../data/destinations';

const DestinationDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [destination, setDestination] = useState(null);
    const [isLiked, setIsLiked] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    const [similarDestinations, setSimilarDestinations] = useState([]);

    useEffect(() => {
        const dest = getDestinationById(id);
        if (dest) {
            setDestination(dest);
            // Find similar destinations
            const similar = allDestinations
                .filter(d => d.id !== id && (d.region === dest.region || d.category === dest.category))
                .slice(0, 3);
            setSimilarDestinations(similar);
            window.scrollTo(0, 0);
        } else {
            navigate('/destinations');
        }
    }, [id, navigate]);

    if (!destination) {
        return (
            <div className="min-h-screen bg-dark flex items-center justify-center">
                <div className="text-white text-xl">Loading...</div>
            </div>
        );
    }

    const isIndian = destination.country === 'India';
    const currency = isIndian ? '₹' : '₹';

    return (
        <div className="min-h-screen bg-dark text-white">
            {/* Hero Section with Image */}
            <div className="relative h-[70vh] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img 
                        src={destination.image} 
                        alt={destination.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent"></div>
                </div>

                {/* Floating Action Buttons */}
                <div className="absolute top-24 right-6 z-20 flex flex-col gap-3">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsLiked(!isLiked)}
                        className={`p-4 rounded-full backdrop-blur-xl border-2 transition-all ${
                            isLiked 
                                ? 'bg-secondary border-secondary text-white' 
                                : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                        }`}
                    >
                        <Heart size={24} fill={isLiked ? 'currentColor' : 'none'} />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-4 rounded-full bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white hover:bg-white/20 transition-all"
                    >
                        <Share2 size={24} />
                    </motion.button>
                </div>

                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate(-1)}
                    className="absolute top-24 left-6 z-20 flex items-center gap-2 px-6 py-3 bg-dark/80 backdrop-blur-xl border-2 border-primary/30 rounded-full text-white hover:bg-dark/90 transition-all"
                >
                    <ArrowLeft size={20} />
                    <span className="font-semibold">Back</span>
                </motion.button>

                {/* Hero Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            {/* Category Badge */}
                            <div className="inline-block mb-4 px-4 py-2 bg-primary/20 backdrop-blur-md border border-primary/40 rounded-full">
                                <span className="text-primary font-bold text-sm">{destination.category}</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
                                {destination.name}
                            </h1>

                            {/* Location & Rating */}
                            <div className="flex flex-wrap items-center gap-6 text-lg mb-6">
                                <div className="flex items-center gap-2">
                                    <MapPin className="text-primary" size={24} />
                                    <span className="text-gray-200 font-medium">
                                        {destination.country} {destination.state && `• ${destination.state}`}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 bg-yellow-500/20 px-4 py-2 rounded-full border border-yellow-500/30">
                                    <Star className="text-yellow-400" size={20} fill="currentColor" />
                                    <span className="text-white font-bold">{destination.rating}</span>
                                    <span className="text-gray-300 text-sm">Excellent</span>
                                </div>
                            </div>

                            {/* Quick Info */}
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                                    <Clock className="text-accent" size={20} />
                                    <span className="font-semibold">{destination.duration}</span>
                                </div>
                                <div className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                                    <Calendar className="text-success" size={20} />
                                    <span className="font-semibold">{destination.bestTime}</span>
                                </div>
                                <div className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-primary to-purple rounded-xl border border-primary/30">
                                    <span className="text-2xl font-bold">{currency}{destination.price.toLocaleString('en-IN')}</span>
                                    <span className="text-sm">per person</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column - Details */}
                    <div className="lg:col-span-2">
                        {/* Tabs */}
                        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                            {['overview', 'highlights', 'activities', 'included'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-3 rounded-xl font-semibold capitalize transition-all whitespace-nowrap ${
                                        activeTab === tab
                                            ? 'bg-gradient-to-r from-primary to-purple text-white'
                                            : 'bg-dark-lighter text-gray-400 hover:text-white hover:bg-dark-lightest'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-dark-lighter rounded-3xl p-8 border border-primary/20"
                            >
                                {activeTab === 'overview' && (
                                    <div>
                                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                            <Compass className="text-primary" />
                                            About {destination.name}
                                        </h2>
                                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                            {destination.description}
                                        </p>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-dark p-5 rounded-2xl border border-white/10">
                                                <div className="text-accent text-sm font-semibold mb-1">Region</div>
                                                <div className="text-white text-lg font-bold">{destination.region}</div>
                                            </div>
                                            <div className="bg-dark p-5 rounded-2xl border border-white/10">
                                                <div className="text-accent text-sm font-semibold mb-1">Best Time</div>
                                                <div className="text-white text-lg font-bold">{destination.bestTime}</div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'highlights' && (
                                    <div>
                                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                            <Camera className="text-primary" />
                                            Top Highlights
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {destination.highlights.map((highlight, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex items-start gap-4 p-4 bg-dark rounded-2xl border border-white/10 hover:border-primary/30 transition-all group"
                                                >
                                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform">
                                                        {index + 1}
                                                    </div>
                                                    <div className="flex-1 pt-1">
                                                        <p className="text-white font-semibold">{highlight}</p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'activities' && (
                                    <div>
                                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                            <Users className="text-primary" />
                                            Activities & Experiences
                                        </h2>
                                        <div className="flex flex-wrap gap-3">
                                            {destination.activities.map((activity, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="px-6 py-4 bg-gradient-to-br from-dark to-dark-lightest rounded-2xl border-2 border-primary/30 hover:border-accent/50 transition-all hover:scale-105 cursor-pointer"
                                                >
                                                    <span className="text-white font-semibold text-lg">{activity}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'included' && (
                                    <div>
                                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                            <Check className="text-success" />
                                            What's Included
                                        </h2>
                                        <div className="space-y-4">
                                            {destination.included.map((item, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex items-center gap-4 p-5 bg-dark rounded-2xl border border-success/20 hover:border-success/40 transition-all"
                                                >
                                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                                                        <Check size={18} className="text-success" />
                                                    </div>
                                                    <p className="text-white text-lg">{item}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column - Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-gradient-to-br from-dark-lighter to-dark-lightest rounded-3xl p-8 border-2 border-primary/30 shadow-2xl"
                            >
                                <div className="text-center mb-6">
                                    <p className="text-gray-400 text-sm mb-2">Starting from</p>
                                    <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                                        {currency}{destination.price.toLocaleString('en-IN')}
                                    </div>
                                    <p className="text-gray-400 text-sm">per person</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <input
                                        type="date"
                                        className="w-full px-4 py-4 bg-dark rounded-xl border border-white/10 text-white focus:border-primary focus:outline-none transition-all"
                                        placeholder="Select Date"
                                    />
                                    <input
                                        type="number"
                                        min="1"
                                        defaultValue="2"
                                        className="w-full px-4 py-4 bg-dark rounded-xl border border-white/10 text-white focus:border-primary focus:outline-none transition-all"
                                        placeholder="Number of Travelers"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 bg-gradient-to-r from-primary to-purple text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all mb-4"
                                >
                                    Book Now
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 bg-transparent border-2 border-primary text-primary font-bold text-lg rounded-xl hover:bg-primary/10 transition-all"
                                >
                                    Enquire Now
                                </motion.button>

                                <div className="mt-6 pt-6 border-t border-white/10">
                                    <p className="text-gray-400 text-sm text-center">
                                        💬 Need help? Contact our travel experts
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Similar Destinations */}
                {similarDestinations.length > 0 && (
                    <div className="mt-20">
                        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">
                            You Might Also Like
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {similarDestinations.map((similar, index) => (
                                <motion.div
                                    key={similar.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="group cursor-pointer"
                                    onClick={() => navigate(`/destination/${similar.id}`)}
                                >
                                    <div className="bg-dark-lighter rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all">
                                        <div className="h-48 overflow-hidden">
                                            <img 
                                                src={similar.image} 
                                                alt={similar.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                onError={(e) => {
                                                    e.target.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400';
                                                }}
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-2">{similar.name}</h3>
                                            <p className="text-gray-400 text-sm mb-3">{similar.country}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-primary font-bold">
                                                    {currency}{similar.price.toLocaleString('en-IN')}
                                                </span>
                                                <span className="text-yellow-400 flex items-center gap-1">
                                                    ★ {similar.rating}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DestinationDetail;



