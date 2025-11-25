import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe2, Heart, Target, Shield, Sparkles, TrendingUp } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: <Users size={40} className="text-primary" />, value: "50,000+", label: "Happy Travelers" },
        { icon: <Globe2 size={40} className="text-accent" />, value: "50+", label: "Destinations" },
        { icon: <Award size={40} className="text-secondary" />, value: "15+", label: "Years Experience" },
        { icon: <TrendingUp size={40} className="text-success" />, value: "4.9/5", label: "Customer Rating" }
    ];

    const values = [
        {
            icon: <Heart className="text-secondary" size={40} />,
            title: "Passion for Travel",
            description: "We live and breathe travel. Our passion drives us to create unforgettable experiences for every traveler."
        },
        {
            icon: <Shield className="text-primary" size={40} />,
            title: "Trust & Safety",
            description: "Your safety is our priority. We ensure secure bookings and reliable services at every step of your journey."
        },
        {
            icon: <Target className="text-accent" size={40} />,
            title: "Customer First",
            description: "Your satisfaction is our goal. We go above and beyond to exceed your expectations."
        },
        {
            icon: <Sparkles className="text-purple" size={40} />,
            title: "Excellence in Service",
            description: "We strive for excellence in everything we do, from planning to execution."
        }
    ];

    const team = [
        { name: "Rajesh Kumar", role: "Founder & CEO", image: "👨‍💼" },
        { name: "Priya Sharma", role: "Head of Operations", image: "👩‍💼" },
        { name: "Amit Patel", role: "Travel Expert", image: "🧑‍💼" },
        { name: "Sneha Reddy", role: "Customer Relations", image: "👩‍💼" }
    ];

    const milestones = [
        { year: "2009", event: "Flydaddy Founded", description: "Started with a vision to make travel accessible" },
        { year: "2012", event: "10,000 Happy Travelers", description: "Reached our first major milestone" },
        { year: "2015", event: "International Expansion", description: "Expanded services to 25+ countries" },
        { year: "2020", event: "Digital Transformation", description: "Launched our modern booking platform" },
        { year: "2024", event: "50,000+ Travelers", description: "Serving thousands of happy customers" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/20 to-pink-100/30" />
            <motion.div
                className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 via-pink-400/15 to-rose-400/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", duration: 0.8 }}
                            className="inline-block mb-6"
                        >
                            <div className="text-7xl">✈️</div>
                        </motion.div>
                        <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
                            <span 
                                style={{
                                    background: 'linear-gradient(to right, #7c3aed, #ec4899, #f59e0b, #10b981)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                About Fly Daddy Tours & Travels
                            </span>
                        </h1>
                        <p className="text-2xl text-indigo-800 font-semibold mb-8 leading-relaxed">
                            Hyderabad's Premier Travel Agency crafting unforgettable journeys
                        </p>
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-100 border-2 border-indigo-300 rounded-full">
                            <Sparkles className="text-indigo-600" size={20} />
                            <span className="text-indigo-700 font-black">Making Dreams Come True</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white/50">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="text-center p-8 bg-white rounded-3xl border-2 border-indigo-200 hover:border-indigo-400 transition-all shadow-lg"
                            >
                                <div className="flex justify-center mb-4">{stat.icon}</div>
                                <div className="text-4xl font-black text-indigo-600 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-700 font-semibold">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl font-black mb-6 text-indigo-700">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-semibold">
                                <p>
                                    Based in the heart of Hyderabad, Fly Daddy Tours & Travels was founded with a simple belief: 
                                    that travel should be accessible, affordable, and absolutely unforgettable. We've grown into 
                                    one of Hyderabad's most trusted travel partners, with a stellar 4.9 rating from 1000+ reviews.
                                </p>
                                <p>
                                    From our office in Himayat Nagar, we've helped thousands of travelers discover the beauty of 
                                    India and explore the wonders of the world. From the serene backwaters of Kerala to the majestic 
                                    palaces of Rajasthan, from the romantic streets of Paris to the pristine beaches of Maldives – 
                                    we've been there every step of the way.
                                </p>
                                <p>
                                    Today, Fly Daddy Tours & Travels stands as a testament to the power of passion, dedication, and 
                                    the belief that every journey should be extraordinary. We're not just a travel agency; we're your 
                                    partners in creating memories that last a lifetime.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="h-48 rounded-2xl bg-indigo-100 border-2 border-indigo-300 flex items-center justify-center text-6xl">
                                        🌍
                                    </div>
                                    <div className="h-64 rounded-2xl bg-cyan-100 border-2 border-cyan-300 flex items-center justify-center text-6xl">
                                        🏔️
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="h-64 rounded-2xl bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center text-6xl">
                                        🏖️
                                    </div>
                                    <div className="h-48 rounded-2xl bg-purple-100 border-2 border-purple-300 flex items-center justify-center text-6xl">
                                        🎒
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 bg-white/50 relative z-10">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-black mb-4 text-indigo-700">
                            Our Values
                        </h2>
                        <p className="text-xl text-indigo-800 font-semibold">The principles that guide everything we do</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-3xl p-8 border-2 border-indigo-200 hover:border-indigo-400 transition-all text-center shadow-lg"
                            >
                                <div className="inline-block p-4 bg-indigo-100 rounded-2xl mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-black mb-3 text-gray-900">{value.title}</h3>
                                <p className="text-gray-700 leading-relaxed font-semibold">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-black mb-4 text-indigo-700">
                            Our Journey
                        </h2>
                        <p className="text-xl text-indigo-800 font-semibold">Milestones that shaped our story</p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-8 pb-12 border-l-2 border-indigo-300 last:pb-0"
                            >
                                <div className="absolute left-0 top-0 w-4 h-4 bg-indigo-600 rounded-full transform -translate-x-[9px]">
                                    <div className="absolute inset-0 bg-indigo-600 rounded-full animate-ping opacity-75"></div>
                                </div>
                                <div className="bg-white rounded-2xl p-6 border-2 border-indigo-200 hover:border-indigo-400 transition-all shadow-lg">
                                    <div className="text-amber-600 font-black text-2xl mb-2">{milestone.year}</div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-2">{milestone.event}</h3>
                                    <p className="text-gray-700 font-semibold">{milestone.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-white/50 relative z-10">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-black mb-4 text-indigo-700">
                            Meet Our Team
                        </h2>
                        <p className="text-xl text-indigo-800 font-semibold">The people behind your perfect journey</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="bg-white rounded-3xl p-8 border-2 border-indigo-200 hover:border-indigo-400 transition-all text-center shadow-lg"
                            >
                                <div className="text-7xl mb-4">{member.image}</div>
                                <h3 className="text-xl font-black text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-indigo-600 font-black">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-indigo-600 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                            Ready to Create Your Own Story?
                        </h2>
                        <p className="text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-semibold">
                            Let's plan your next adventure together
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = '/contact'}
                            className="px-12 py-5 bg-white text-indigo-600 font-black text-xl rounded-2xl hover:shadow-2xl transition-all"
                        >
                            Get in Touch
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;

