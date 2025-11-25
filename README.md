# Flydaddy Travel Agency Website

A modern, feature-rich travel agency website built with React, showcasing destinations across India and around the world. This premium website offers an exceptional user experience with smooth animations, interactive maps, and a vibrant color scheme.

## ✨ Features

### 🌍 Interactive Maps
- **World Map**: Explore international destinations with smooth hover effects and color-coded regions
- **India Map**: Discover major Indian cities with interactive markers and state highlighting
- Real-time tooltips showing destination details, prices, and ratings

### 🎯 Destinations
- **50+ Destinations**: Comprehensive coverage of Indian cities and international hotspots
- **Detailed Pages**: Each destination features:
  - High-quality images
  - Complete itineraries
  - Highlights and activities
  - Pricing and duration
  - Customer ratings
  - Similar destination recommendations

### 📦 Tour Packages
- Indian tour packages (Golden Triangle, Kerala, Rajasthan, Goa, Ladakh)
- International packages (Dubai, Europe, Maldives, Bali & Thailand, Singapore & Malaysia)
- Expandable itineraries
- Special discounts and offers
- Booking functionality

### 🎨 Design & UX
- **Vibrant Color Palette**: Bright cyan, coral red, yellow, green, purple, orange, and pink
- **Smooth Animations**: Framer Motion powered transitions throughout
- **Responsive Design**: Mobile-first approach with perfect tablet and desktop layouts
- **Glass Morphism**: Modern UI with backdrop blur effects
- **Dark Theme**: Easy on the eyes with gradient backgrounds

### 🚀 Performance Features
- Page transition animations
- Scroll-to-top functionality
- Loading states and spinners
- Optimized image loading
- Smooth scrolling

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Routing**: React Router DOM 6.22.0
- **Animations**: Framer Motion 11.0.0
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React 0.344.0
- **Maps**: React Simple Maps 3.0.0
- **Build Tool**: Vite 7.2.4

## 📁 Project Structure

```
flydaddy-website/
├── public/
│   └── images/
│       └── destinations/          # Destination images
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   └── Globe.jsx          # 3D Globe component
│   │   ├── BackToTop.jsx          # Scroll to top button
│   │   ├── IndiaMap.jsx           # Interactive India map
│   │   ├── InteractiveMap.jsx     # World map
│   │   ├── LoadingSpinner.jsx     # Loading component
│   │   ├── Navbar.jsx             # Navigation bar
│   │   └── ScrollToTop.jsx        # Auto-scroll utility
│   ├── data/
│   │   ├── destinations.js        # All destinations data
│   │   └── packages.js            # Tour packages data
│   ├── pages/
│   │   ├── About.jsx              # About page
│   │   ├── Contact.jsx            # Contact page
│   │   ├── DestinationDetail.jsx  # Destination detail page
│   │   ├── Destinations.jsx       # Destinations listing
│   │   ├── Home.jsx               # Home page
│   │   └── Packages.jsx           # Packages page
│   ├── App.css                    # Global styles
│   ├── App.jsx                    # Main app component
│   ├── index.css                  # Tailwind imports
│   └── main.jsx                   # App entry point
├── eslint.config.js
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/flydaddy-website.git
cd flydaddy-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The optimized production build will be created in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Color Palette

- **Primary**: #FF385C (Airbnb Red/Pink)
- **Secondary**: #00A699 (Teal)
- **Accent**: #FFB400 (Bright Yellow)
- **Success**: #00D56C (Bright Green)
- **Purple**: #8B5CF6 (Vibrant Purple)
- **Orange**: #FF6B35 (Bright Orange)
- **Pink**: #FF385C (Hot Pink)
- **Blue**: #0066FF (Bright Blue)
- **Dark**: #222222 (Soft Black)
- **Dark Lighter**: #484848 (Gray)
- **Dark Lightest**: #717171 (Light Gray)

## 📱 Pages

1. **Home**: Hero section with search, featured destinations, stats, and features
2. **Destinations**: Grid/map view of all destinations with filtering
3. **Destination Detail**: Complete information about each destination
4. **Packages**: Tour packages with itineraries and booking
5. **About**: Company story, values, team, and timeline
6. **Contact**: Contact form, info cards, FAQs, and social media

## 🌟 Key Features

### Animations
- Page transitions with Framer Motion
- Hover effects on cards and buttons
- Floating elements
- Pulse effects on markers
- Gradient animations
- Smooth scrolling

### User Experience
- Intuitive navigation
- Responsive design
- Fast page loads
- Clear call-to-actions
- Easy booking process
- 24/7 support information

### Maps
- Interactive hover states
- Click-to-navigate functionality
- Color-coded regions
- Animated markers
- Real-time tooltips
- Smooth zoom transitions

## 🔧 Configuration

### Tailwind Config
The project uses a custom Tailwind configuration with extended colors, animations, and utilities. See `tailwind.config.js` for details.

### Vite Config
Optimized build settings with React plugin. See `vite.config.js` for configuration.

## 📝 Data Structure

### Destinations
Each destination includes:
- Basic info (name, country, region)
- Pricing and duration
- Rating and category
- Image
- Coordinates for map
- Highlights array
- Activities array
- Included/excluded items

### Packages
Each package includes:
- Title and subtitle
- Duration and group size
- Pricing (with discounts)
- Features array
- Complete itinerary
- Included/excluded items
- Images

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

- **Founder & CEO**: Rajesh Kumar
- **Head of Operations**: Priya Sharma
- **Travel Expert**: Amit Patel
- **Customer Relations**: Sneha Reddy

## 📞 Contact

- **Phone**: +91 98765 43210
- **Email**: info@flydaddy.com
- **Address**: 123 Travel Street, Mumbai, Maharashtra 400001, India
- **Hours**: Monday - Saturday, 9:00 AM - 8:00 PM IST

## 🙏 Acknowledgments

- Images from Unsplash
- Icons from Lucide React
- Maps powered by React Simple Maps
- Animations by Framer Motion

---

Made with ❤️ by the Flydaddy Team | © 2024 Flydaddy. All rights reserved.
