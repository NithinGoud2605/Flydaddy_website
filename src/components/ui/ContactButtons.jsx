import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const PHONE_NUMBER = "+919951125818"; // Format: +91 9951125818 (no spaces in tel: link)
const WHATSAPP_NUMBER = "919951125818"; // Without + for WhatsApp URL

export const ContactButtons = ({ variant = "default", message = "Hi, I'm interested in your travel packages!" }) => {
    const handleCall = () => {
        window.location.href = `tel:${PHONE_NUMBER}`;
    };

    const handleWhatsApp = () => {
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    };

    if (variant === "stacked") {
        return (
            <div className="flex flex-col gap-3 w-full">
                <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleWhatsApp}
                    className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
                >
                    <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" />
                    <span>WhatsApp Enquiry</span>
                </motion.button>
                
                <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCall}
                    className="w-full px-6 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
                >
                    <Phone size={22} className="group-hover:rotate-12 transition-transform" />
                    <span>Call Now</span>
                </motion.button>
            </div>
        );
    }

    return (
        <div className="flex gap-3">
            <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
                <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
                <span className="hidden sm:inline">WhatsApp</span>
            </motion.button>
            
            <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCall}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
                <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                <span className="hidden sm:inline">Call</span>
            </motion.button>
        </div>
    );
};



