# Flydaddy Website - Setup Guide

## Quick Start Guide

Follow these steps to get your Flydaddy Travel Agency website up and running!

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- React & React DOM
- React Router DOM
- Framer Motion (animations)
- Tailwind CSS (styling)
- Lucide React (icons)
- React Simple Maps (interactive maps)

### Step 2: Start Development Server

```bash
npm run dev
```

The website will be available at: http://localhost:5173

### Step 3: Add Your Images

The project expects destination images in the `public/images/destinations/` folder. Make sure to add images for all destinations mentioned in the data files.

**Expected image files:**
- agra-taj-mahal.jpg
- bali-rice-terraces.jpg
- bangalore-city.jpg
- barcelona-sagrada-familia.jpg
- delhi-india-gate.jpg
- dubai-burj-khalifa.jpg
- egypt-pyramids.jpg
- goa-beach.jpg
- great-wall-china.jpg
- iceland-northern-lights.jpg
- jaipur-hawa-mahal.jpg
- kerala-backwaters.jpg
- ladakh-pangong.jpg
- london-big-ben.jpg
- machu-picchu.jpg
- maldives-beach.jpg
- mumbai-gateway.jpg
- new-york-skyline.jpg
- paris-eiffel-tower.jpg
- rio-christ-redeemer.jpg
- santorini-greece.jpg
- singapore-marina-bay.jpg
- switzerland-matterhorn.jpg
- sydney-opera-house.jpg
- thailand-phi-phi.jpg
- tokyo-mount-fuji.jpg
- udaipur-lake-palace.jpg
- varanasi-ghats.jpg
- venice-grand-canal.jpg

## Project Features

### ✅ Completed Features

1. **Vibrant Color Scheme**
   - Bright cyan, coral red, yellow, green, purple, orange, pink
   - Dark navy background with gradients
   - Professional and modern look

2. **Interactive Maps**
   - World map with international destinations
   - India map focusing on major cities
   - Smooth hover effects and transitions
   - Click-to-navigate functionality

3. **Comprehensive Pages**
   - Home page with hero section and search
   - Destinations page with grid/map views
   - Individual destination detail pages
   - Tour packages with expandable itineraries
   - About page with company story
   - Contact page with form and FAQs

4. **User Experience**
   - Smooth page transitions
   - Loading states and spinners
   - Back-to-top button
   - Scroll-to-top on navigation
   - Responsive design for all devices
   - Micro-interactions and hover effects

5. **Data Management**
   - 10 Indian destinations
   - 15 International destinations
   - 5 Indian tour packages
   - 5 International tour packages
   - Complete itineraries and details

## Customization Guide

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#00D9FF',    // Change this
  secondary: '#FF6B6B',  // Change this
  // ... etc
}
```

### Add New Destinations

Edit `src/data/destinations.js`:

```javascript
{
  id: 'new-destination',
  name: 'Your Destination',
  country: 'Country Name',
  // ... add all required fields
}
```

### Add New Packages

Edit `src/data/packages.js`:

```javascript
{
  id: 'new-package',
  title: 'Package Name',
  // ... add all required fields
}
```

### Modify Contact Information

Edit `src/pages/Contact.jsx`:

```javascript
const contactInfo = [
  {
    icon: <Phone />,
    title: "Call Us",
    info: "YOUR PHONE NUMBER",
    // ...
  },
  // ...
];
```

## Building for Production

### Create Production Build

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy

The `dist` folder can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## Troubleshooting

### Issue: Images not loading
**Solution**: Make sure images are in the correct folder (`public/images/destinations/`) and filenames match exactly.

### Issue: Maps not showing
**Solution**: Check internet connection - maps load data from external CDN.

### Issue: Animations not smooth
**Solution**: Clear browser cache and ensure hardware acceleration is enabled.

### Issue: Build fails
**Solution**: 
1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again
4. Run `npm run build`

## Performance Optimization

The site is already optimized with:
- Code splitting
- Lazy loading
- Image optimization
- Minification
- Tree shaking

For further optimization:
1. Use WebP format for images
2. Implement lazy loading for images
3. Add service workers for offline support
4. Enable gzip compression on server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Need Help?

- Check the main README.md for detailed documentation
- Review component files for inline comments
- Contact: info@flydaddy.com

---

Happy coding! 🚀✈️🌍



