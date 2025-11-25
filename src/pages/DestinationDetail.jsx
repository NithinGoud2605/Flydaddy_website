import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Calendar, Star, Users, Check, ArrowLeft, Heart, Share2, Camera, Compass } from 'lucide-react';
import { getDestinationById, allDestinations } from '../data/destinations';
import { ContactButtons } from '../components/ui/ContactButtons';

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
            <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
                <div className="text-indigo-700 text-xl font-semibold">Loading...</div>
            </div>
        );
    }

    const isIndian = destination.country === 'India';
    const currency = isIndian ? '₹' : '₹';

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/20 to-pink-100/30" />
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
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
                    className="absolute top-24 left-6 z-20 flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-xl border-2 border-indigo-300 rounded-full text-indigo-700 hover:bg-white transition-all shadow-lg"
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
                            <div className="inline-block mb-4 px-4 py-2 bg-indigo-600/90 backdrop-blur-md border border-indigo-400 rounded-full">
                                <span className="text-white font-black text-sm">{destination.category}</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-5xl md:text-7xl font-black mb-4 text-white drop-shadow-lg">
                                {destination.name}
                            </h1>

                            {/* Location & Rating */}
                            <div className="flex flex-wrap items-center gap-6 text-lg mb-6">
                                <div className="flex items-center gap-2">
                                    <MapPin className="text-white" size={24} />
                                    <span className="text-white font-semibold drop-shadow-md">
                                        {destination.country} {destination.state && `• ${destination.state}`}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 bg-amber-500/90 px-4 py-2 rounded-full border border-amber-400 shadow-lg">
                                    <Star className="text-white" size={20} fill="currentColor" />
                                    <span className="text-white font-black">{destination.rating}</span>
                                    <span className="text-white/90 text-sm font-semibold">Excellent</span>
                                </div>
                            </div>

                            {/* Quick Info */}
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 px-5 py-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/30">
                                    <Clock className="text-white" size={20} />
                                    <span className="font-black text-white">{destination.duration}</span>
                                </div>
                                <div className="flex items-center gap-2 px-5 py-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/30">
                                    <Calendar className="text-white" size={20} />
                                    <span className="font-black text-white">{destination.bestTime}</span>
                                </div>
                                <div className="flex items-center gap-2 px-5 py-3 bg-indigo-600 rounded-xl border border-indigo-400 shadow-lg">
                                    <span className="text-2xl font-black text-white">{currency}{destination.price.toLocaleString('en-IN')}</span>
                                    <span className="text-sm text-white/90 font-semibold">per person</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column - Details */}
                    <div className="lg:col-span-2">
                        {/* Tabs */}
                        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                            {['overview', 'highlights', 'activities', 'included'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-3 rounded-xl font-black capitalize transition-all whitespace-nowrap ${
                                        activeTab === tab
                                            ? 'bg-indigo-600 text-white shadow-lg'
                                            : 'bg-white text-indigo-700 hover:bg-indigo-50 border-2 border-indigo-200 hover:border-indigo-400'
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
                                className="bg-white rounded-3xl p-8 border-2 border-indigo-200 shadow-lg"
                            >
                                {activeTab === 'overview' && (
                                    <div>
                                        <h2 className="text-3xl font-black mb-6 flex items-center gap-3 text-indigo-700">
                                            <Compass className="text-indigo-600" />
                                            About {destination.name}
                                        </h2>
                                        <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">
                                            {destination.description}
                                        </p>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-indigo-50 p-5 rounded-2xl border-2 border-indigo-200">
                                                <div className="text-indigo-600 text-sm font-black mb-1">Region</div>
                                                <div className="text-gray-900 text-lg font-black">{destination.region}</div>
                                            </div>
                                            <div className="bg-indigo-50 p-5 rounded-2xl border-2 border-indigo-200">
                                                <div className="text-indigo-600 text-sm font-black mb-1">Best Time</div>
                                                <div className="text-gray-900 text-lg font-black">{destination.bestTime}</div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'highlights' && (
                                    <div>
                                        <h2 className="text-3xl font-black mb-6 flex items-center gap-3 text-indigo-700">
                                            <Camera className="text-indigo-600" />
                                            Top Highlights
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {destination.highlights.map((highlight, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex items-start gap-4 p-4 bg-indigo-50 rounded-2xl border-2 border-indigo-200 hover:border-indigo-400 transition-all group"
                                                >
                                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-black text-white group-hover:scale-110 transition-transform">
                                                        {index + 1}
                                                    </div>
                                                    <div className="flex-1 pt-1">
                                                        <p className="text-gray-900 font-black">{highlight}</p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'activities' && (
                                    <div>
                                        <h2 className="text-3xl font-black mb-6 flex items-center gap-3 text-indigo-700">
                                            <Users className="text-indigo-600" />
                                            Activities & Experiences
                                        </h2>
                                        <div className="flex flex-wrap gap-3">
                                            {destination.activities.map((activity, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="px-6 py-4 bg-indigo-50 rounded-2xl border-2 border-indigo-200 hover:border-indigo-400 transition-all hover:scale-105 cursor-pointer"
                                                >
                                                    <span className="text-indigo-700 font-black text-lg">{activity}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'included' && (
                                    <div>
                                        <h2 className="text-3xl font-black mb-6 flex items-center gap-3 text-indigo-700">
                                            <Check className="text-emerald-600" />
                                            What's Included
                                        </h2>
                                        <div className="space-y-4">
                                            {destination.included.map((item, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex items-center gap-4 p-5 bg-emerald-50 rounded-2xl border-2 border-emerald-200 hover:border-emerald-400 transition-all"
                                                >
                                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                                                        <Check size={18} className="text-emerald-600" />
                                                    </div>
                                                    <p className="text-gray-900 text-lg font-black">{item}</p>
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
                                className="bg-white rounded-3xl p-8 border-2 border-indigo-200 shadow-2xl"
                            >
                                <div className="text-center mb-6">
                                    <p className="text-gray-600 text-sm mb-2 font-black">Starting from</p>
                                    <div className="text-5xl font-black text-indigo-600 mb-2">
                                        {currency}{destination.price.toLocaleString('en-IN')}
                                    </div>
                                    <p className="text-gray-600 text-sm font-semibold">per person</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <input
                                        type="date"
                                        className="w-full px-4 py-4 bg-white rounded-xl border-2 border-gray-200 text-gray-900 focus:border-indigo-400 focus:outline-none transition-all"
                                        placeholder="Select Date"
                                    />
                                    <input
                                        type="number"
                                        min="1"
                                        defaultValue="2"
                                        className="w-full px-4 py-4 bg-white rounded-xl border-2 border-gray-200 text-gray-900 focus:border-indigo-400 focus:outline-none transition-all"
                                        placeholder="Number of Travelers"
                                    />
                                </div>

                                <ContactButtons 
                                    variant="stacked" 
                                    message={`Hi! I'm interested in booking ${destination.name} package. Starting from ₹${destination.price.toLocaleString('en-IN')} per person. Can you help me with booking?`} 
                                />

                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <p className="text-gray-600 text-sm text-center font-semibold">
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
                        <h2 className="text-4xl font-black mb-8 text-center text-indigo-700">
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
                                    <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-indigo-400 transition-all shadow-lg">
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
                                            <h3 className="text-xl font-black text-gray-900 mb-2">{similar.name}</h3>
                                            <p className="text-gray-600 text-sm mb-3 font-semibold">{similar.country}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-indigo-600 font-black">
                                                    {currency}{similar.price.toLocaleString('en-IN')}
                                                </span>
                                                <span className="text-amber-600 flex items-center gap-1 font-black">
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



