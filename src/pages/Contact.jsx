import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Facebook, Instagram, Twitter, Linkedin, CheckCircle } from 'lucide-react';
import { ContactButtons } from '../components/ui/ContactButtons';
import { GlassCard, BentoCard } from '../components/ui/GlassCard';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        destination: '',
        travelers: '',
        date: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    const contactInfo = [
        {
            icon: <Phone className="text-primary" size={32} />,
            title: "Call Us",
            info: "+91 99511 25818",
            subinfo: "Mon-Sat: 9AM - 8PM",
            action: "tel:+919951125818"
        },
        {
            icon: <Mail className="text-accent" size={32} />,
            title: "Email Us",
            info: "contact@flydaddytours.com",
            subinfo: "We'll respond within 24 hours",
            action: "mailto:contact@flydaddytours.com"
        },
        {
            icon: <MapPin className="text-secondary" size={32} />,
            title: "Visit Us",
            info: "Himayat Nagar, Hyderabad",
            subinfo: "Telangana 500029, India",
            action: "https://maps.google.com"
        },
        {
            icon: <Clock className="text-success" size={32} />,
            title: "Working Hours",
            info: "Monday - Saturday",
            subinfo: "9:00 AM - 8:00 PM IST",
            action: null
        }
    ];

    const socialLinks = [
        { icon: <Facebook size={24} />, name: "Facebook", color: "hover:text-blue-500", link: "#" },
        { icon: <Instagram size={24} />, name: "Instagram", color: "hover:text-pink-500", link: "#" },
        { icon: <Twitter size={24} />, name: "Twitter", color: "hover:text-sky-500", link: "#" },
        { icon: <Linkedin size={24} />, name: "LinkedIn", color: "hover:text-blue-600", link: "#" }
    ];

    const faqs = [
        { q: "How do I book a trip?", a: "You can book through our website or contact us directly for personalized assistance." },
        { q: "What payment methods do you accept?", a: "We accept credit/debit cards, UPI, net banking, and EMI options." },
        { q: "Can I customize my tour package?", a: "Absolutely! We specialize in creating customized itineraries to suit your preferences." },
        { q: "What is your cancellation policy?", a: "Our flexible cancellation policy varies by package. Contact us for specific details." }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-dark via-dark-lighter to-dark text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-slow"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                            className="text-7xl mb-6 inline-block"
                        >
                            💬
                        </motion.div>
                        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple to-accent bg-clip-text text-transparent">
                            Get in Touch
                        </h1>
                        <p className="text-2xl text-gray-300 mb-8">
                            Let's plan your dream vacation together
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quick Contact Section */}
            <section className="py-16 bg-gradient-to-r from-primary via-pink to-purple">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            Need Instant Help?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Connect with us directly via WhatsApp or Call for immediate assistance
                        </p>
                        <div className="max-w-xl mx-auto">
                            <ContactButtons variant="stacked" message="Hi! I want to inquire about your travel packages. Can you help me?" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-20 bg-dark-lighter">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                onClick={() => item.action && window.open(item.action, '_blank')}
                                className={`bg-dark/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-primary/20 hover:border-primary/50 transition-all text-center ${item.action ? 'cursor-pointer' : ''}`}
                            >
                                <div className="inline-block p-4 bg-gradient-to-br from-primary/20 to-purple/20 rounded-2xl mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                <p className="text-primary font-semibold mb-1">{item.info}</p>
                                <p className="text-gray-400 text-sm">{item.subinfo}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">
                                Send Us a Message
                            </h2>
                            <p className="text-gray-400 mb-8">
                                Fill out the form below and we'll get back to you within 24 hours
                            </p>

                            {submitted && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="mb-6 p-6 bg-success/20 border-2 border-success/50 rounded-2xl flex items-center gap-3"
                                >
                                    <CheckCircle className="text-success flex-shrink-0" size={32} />
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Message Sent Successfully!</h4>
                                        <p className="text-gray-300 text-sm">We'll get back to you soon.</p>
                                    </div>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-300">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-dark-lighter border-2 border-white/10 rounded-xl text-white focus:border-primary focus:outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-300">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-dark-lighter border-2 border-white/10 rounded-xl text-white focus:border-primary focus:outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-300">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-dark-lighter border-2 border-white/10 rounded-xl text-white focus:border-primary focus:outline-none transition-all"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-300">Destination</label>
                                        <input
                                            type="text"
                                            name="destination"
                                            value={formData.destination}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-dark-lighter border-2 border-white/10 rounded-xl text-white focus:border-primary focus:outline-none transition-all"
                                            placeholder="e.g. Bali, Paris"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-300">Number of Travelers</label>
                                        <input
                                            type="number"
                                            name="travelers"
                                            min="1"
                                            value={formData.travelers}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-dark-lighter border-2 border-white/10 rounded-xl text-white focus:border-primary focus:outline-none transition-all"
                                            placeholder="2"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-300">Travel Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-dark-lighter border-2 border-white/10 rounded-xl text-white focus:border-primary focus:outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-300">Message *</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 bg-dark-lighter border-2 border-white/10 rounded-xl text-white focus:border-primary focus:outline-none transition-all resize-none"
                                        placeholder="Tell us about your travel plans..."
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full py-5 bg-gradient-to-r from-primary to-purple text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-primary/50 transition-all flex items-center justify-center gap-3"
                                >
                                    <Send size={24} />
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Right Side - FAQs & Social */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {/* Quick FAQs */}
                            <div className="bg-dark-lighter rounded-3xl p-8 border-2 border-primary/20">
                                <h3 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                                    <MessageCircle className="text-primary" />
                                    Quick FAQs
                                </h3>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="bg-dark/50 rounded-2xl p-5 border border-white/10 hover:border-primary/30 transition-all"
                                        >
                                            <h4 className="font-bold text-primary mb-2">{faq.q}</h4>
                                            <p className="text-gray-400 text-sm">{faq.a}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-gradient-to-br from-primary/10 via-purple/10 to-accent/10 rounded-3xl p-8 border-2 border-primary/20">
                                <h3 className="text-3xl font-bold mb-6 text-white text-center">
                                    Connect With Us
                                </h3>
                                <div className="flex justify-center gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.link}
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`w-14 h-14 bg-dark/50 backdrop-blur-sm rounded-2xl border-2 border-white/10 hover:border-primary flex items-center justify-center text-gray-400 ${social.color} transition-all`}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                                <p className="text-center text-gray-400 mt-6">
                                    Follow us for travel inspiration, tips, and exclusive deals!
                                </p>
                            </div>

                            {/* Emergency Contact */}
                            <div className="bg-secondary/10 rounded-3xl p-8 border-2 border-secondary/30">
                                <h3 className="text-2xl font-bold mb-4 text-white">
                                    🚨 24/7 Emergency Support
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    Need immediate assistance during your trip? We're here for you!
                                </p>
                                <a
                                    href="tel:+919876543210"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/90 transition-all"
                                >
                                    <Phone size={20} />
                                    +91 98765 43210
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-dark-lighter">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Visit Our Office
                        </h2>
                        <p className="text-gray-400 text-lg">Come say hello! We'd love to meet you in person</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl h-96 bg-dark-lightest flex items-center justify-center"
                    >
                        <div className="text-center px-6">
                            <MapPin size={64} className="text-primary mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Fly Daddy Tours & Travels</h3>
                            <p className="text-gray-400 mb-1">Sri Sai Mithai Mansion, 102, Himayat Nagar Rd</p>
                            <p className="text-gray-400">Himayatnagar, Hyderabad, Telangana 500029</p>
                            <a 
                                href="https://maps.google.com/?q=Sri+Sai+Mithai+Mansion+102+Himayat+Nagar+Rd+Hyderabad"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-block px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all"
                            >
                                Get Directions
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

