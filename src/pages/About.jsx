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
        <div className="min-h-screen bg-gradient-to-br from-dark via-dark-lighter to-dark text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-slow"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                </div>

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
                        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple to-accent bg-clip-text text-transparent tracking-tight">
                            About Fly Daddy Tours & Travels
                        </h1>
                        <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
                            Hyderabad's Premier Travel Agency crafting unforgettable journeys
                        </p>
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full">
                            <Sparkles className="text-accent" size={20} />
                            <span className="text-primary font-bold">Making Dreams Come True</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-dark-lighter">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="text-center p-8 bg-dark/50 rounded-3xl border-2 border-primary/20 hover:border-primary/50 transition-all"
                            >
                                <div className="flex justify-center mb-4">{stat.icon}</div>
                                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                                <p>
                                    Based in the heart of Hyderabad, Fly Daddy Tours & Travels was founded with a simple belief: 
                                    that travel should be accessible, affordable, and absolutely unforgettable. We've grown into 
                                    one of Hyderabad's most trusted travel partners, with a stellar 4.9 rating from 979 Google reviews.
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
                                    <div className="h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-purple/20 border-2 border-primary/30 flex items-center justify-center text-6xl">
                                        🌍
                                    </div>
                                    <div className="h-64 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 border-2 border-secondary/30 flex items-center justify-center text-6xl">
                                        🏔️
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="h-64 rounded-2xl bg-gradient-to-br from-success/20 to-primary/20 border-2 border-success/30 flex items-center justify-center text-6xl">
                                        🏖️
                                    </div>
                                    <div className="h-48 rounded-2xl bg-gradient-to-br from-purple/20 to-pink/20 border-2 border-purple/30 flex items-center justify-center text-6xl">
                                        🎒
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 bg-dark-lighter">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Our Values
                        </h2>
                        <p className="text-xl text-gray-400">The principles that guide everything we do</p>
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
                                className="bg-dark/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-primary/20 hover:border-primary/50 transition-all text-center"
                            >
                                <div className="inline-block p-4 bg-gradient-to-br from-primary/20 to-purple/20 rounded-2xl mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-white">{value.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">
                            Our Journey
                        </h2>
                        <p className="text-xl text-gray-400">Milestones that shaped our story</p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0"
                            >
                                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full transform -translate-x-[9px]">
                                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                                </div>
                                <div className="bg-dark-lighter rounded-2xl p-6 border border-primary/20 hover:border-primary/50 transition-all">
                                    <div className="text-accent font-bold text-2xl mb-2">{milestone.year}</div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{milestone.event}</h3>
                                    <p className="text-gray-400">{milestone.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-dark-lighter">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Meet Our Team
                        </h2>
                        <p className="text-xl text-gray-400">The people behind your perfect journey</p>
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
                                className="bg-dark/50 rounded-3xl p-8 border-2 border-primary/20 hover:border-primary/50 transition-all text-center"
                            >
                                <div className="text-7xl mb-4">{member.image}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                                <p className="text-primary font-semibold">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-gradient-to-r from-primary via-purple to-accent relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Ready to Create Your Own Story?
                        </h2>
                        <p className="text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
                            Let's plan your next adventure together
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = '/contact'}
                            className="px-12 py-5 bg-white text-purple font-bold text-xl rounded-2xl hover:shadow-2xl transition-all"
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

