import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { ContactButtons } from '../components/ui/ContactButtons';

const Contact = () => {

    const contactInfo = [
        {
            icon: <Phone className="text-white" size={32} />,
            title: "Call Us",
            info: "+91 9951125818",
            subinfo: "Mon-Sat: 9AM - 8PM",
            action: "tel:+919951125818",
            bgColor: "bg-indigo-600"
        },
        {
            icon: <Mail className="text-white" size={32} />,
            title: "Email Us",
            info: "contact@flydaddytours.com",
            subinfo: "We'll respond within 24 hours",
            action: "mailto:contact@flydaddytours.com",
            bgColor: "bg-rose-600"
        },
        {
            icon: <MapPin className="text-white" size={32} />,
            title: "Visit Us",
            info: "Himayat Nagar, Hyderabad",
            subinfo: "Telangana 500029, India",
            action: "https://maps.app.goo.gl/iiMRhquFG966X3zS8",
            bgColor: "bg-emerald-600"
        },
        {
            icon: <Clock className="text-white" size={32} />,
            title: "Working Hours",
            info: "Monday - Saturday",
            subinfo: "9:00 AM - 8:00 PM IST",
            action: null,
            bgColor: "bg-amber-600"
        }
    ];


    const faqs = [
        { q: "How do I book a trip?", a: "You can book through our website or contact us directly for personalized assistance." },
        { q: "What payment methods do you accept?", a: "We accept credit/debit cards, UPI, net banking, and EMI options." },
        { q: "Can I customize my tour package?", a: "Absolutely! We specialize in creating customized itineraries to suit your preferences." },
        { q: "What is your cancellation policy?", a: "Our flexible cancellation policy varies by package. Contact us for specific details." }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/20 to-pink-100/30" />
            <motion.div
                className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-indigo-400/20 via-purple-400/15 to-pink-400/20 rounded-full blur-3xl"
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
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                            className="text-7xl mb-6 inline-block"
                        >
                            💬
                        </motion.div>
                        <h1 className="text-6xl md:text-7xl font-black mb-6">
                            <span 
                                style={{
                                    background: 'linear-gradient(to right, #7c3aed, #ec4899, #f59e0b, #10b981)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                Get in Touch
                            </span>
                        </h1>
                        <p className="text-2xl text-indigo-800 font-semibold mb-8">
                            Let's plan your dream vacation together
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quick Contact Section */}
            <section className="py-16 bg-indigo-600 relative z-10">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            Need Instant Help?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 font-semibold">
                            Connect with us directly via WhatsApp or Call for immediate assistance
                        </p>
                        <div className="max-w-xl mx-auto">
                            <ContactButtons variant="stacked" message="Hi! I want to inquire about your travel packages. Can you help me?" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-20 bg-white/50 relative z-10">
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
                                className={`bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-indigo-400 transition-all text-center shadow-lg ${item.action ? 'cursor-pointer' : ''}`}
                            >
                                <div className={`inline-block p-4 ${item.bgColor} rounded-2xl mb-6 shadow-lg`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-black mb-2 text-gray-900">{item.title}</h3>
                                <p className="text-indigo-700 font-black mb-1">{item.info}</p>
                                <p className="text-gray-600 text-sm font-semibold">{item.subinfo}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs & Emergency Contact */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto space-y-8">
                        {/* Quick FAQs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 border-2 border-indigo-200 shadow-lg"
                        >
                            <h3 className="text-3xl font-black mb-6 text-indigo-700 flex items-center gap-3">
                                <MessageCircle className="text-indigo-600" />
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
                                        className="bg-indigo-50 rounded-2xl p-5 border-2 border-indigo-100 hover:border-indigo-300 transition-all"
                                    >
                                        <h4 className="font-black text-indigo-700 mb-2">{faq.q}</h4>
                                        <p className="text-gray-700 text-sm font-semibold">{faq.a}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Emergency Contact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-rose-100 rounded-3xl p-8 border-2 border-rose-300 shadow-lg"
                        >
                            <h3 className="text-2xl font-black mb-4 text-rose-800">
                                🚨 24/7 Emergency Support
                            </h3>
                            <p className="text-rose-700 mb-4 font-semibold">
                                Need immediate assistance during your trip? We're here for you!
                            </p>
                            <a
                                href="tel:+919951125818"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 text-white font-black rounded-xl hover:bg-rose-700 transition-all shadow-lg"
                            >
                                <Phone size={20} />
                                +91 9951125818
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-white/50 relative z-10">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-black mb-4 text-indigo-700">
                            Visit Our Office
                        </h2>
                        <p className="text-indigo-800 text-lg font-semibold">Come say hello! We'd love to meet you in person</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="rounded-3xl overflow-hidden border-4 border-indigo-200 shadow-2xl h-96 bg-white flex items-center justify-center"
                    >
                        <div className="text-center px-6">
                            <MapPin size={64} className="text-indigo-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-black text-gray-900 mb-2">Fly Daddy Tours & Travels</h3>
                            <p className="text-gray-700 mb-1 font-semibold">Sri Sai Mithai Mansion, 102, Himayat Nagar Rd</p>
                            <p className="text-gray-700 font-semibold">Himayatnagar, Hyderabad, Telangana 500029</p>
                            <a 
                                href="https://maps.app.goo.gl/iiMRhquFG966X3zS8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-block px-8 py-3 bg-indigo-600 text-white font-black rounded-xl hover:bg-indigo-700 transition-all shadow-lg"
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

