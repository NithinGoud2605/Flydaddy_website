// Comprehensive tour packages data

export const indianPackages = [
  {
    id: 'golden-triangle',
    title: "Golden Triangle Tour",
    subtitle: "Delhi • Agra • Jaipur",
    duration: "6 Days / 5 Nights",
    groupSize: "2-15 People",
    rating: 4.9,
    reviews: 1250,
    price: 24999,
    originalPrice: 34999,
    image: '/images/destinations/agra-taj-mahal.jpg',
    category: 'Cultural',
    difficulty: 'Easy',
    features: [
      "5-Star Hotel Accommodation",
      "Taj Mahal at Sunrise",
      "Amber Fort Elephant Ride",
      "Private AC Transportation",
      "Professional Guide",
      "All Entry Tickets Included"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Delhi", activities: ["India Gate", "Qutub Minar", "Lotus Temple"] },
      { day: 2, title: "Delhi Sightseeing", activities: ["Red Fort", "Chandni Chowk", "Raj Ghat"] },
      { day: 3, title: "Delhi to Agra", activities: ["Taj Mahal", "Agra Fort", "Mehtab Bagh"] },
      { day: 4, title: "Agra to Jaipur", activities: ["Fatehpur Sikri", "Chand Baori"] },
      { day: 5, title: "Jaipur Sightseeing", activities: ["Amber Fort", "City Palace", "Hawa Mahal"] },
      { day: 6, title: "Departure", activities: ["Shopping", "Airport Transfer"] }
    ],
    included: ["Accommodation", "Daily Breakfast", "Transportation", "Guide", "Monuments Entry"],
    excluded: ["Flights", "Lunch & Dinner", "Personal Expenses", "Tips"]
  },
  {
    id: 'kerala-backwaters',
    title: "Kerala Backwaters & Hills",
    subtitle: "Cochin • Munnar • Thekkady • Alleppey",
    duration: "7 Days / 6 Nights",
    groupSize: "2-10 People",
    rating: 4.9,
    reviews: 890,
    price: 32999,
    originalPrice: 44999,
    image: '/images/destinations/kerala-backwaters.jpg',
    category: 'Nature & Wellness',
    difficulty: 'Easy',
    features: [
      "Luxury Houseboat Stay",
      "Tea Plantation Visit",
      "Ayurvedic Spa Session",
      "Wildlife Safari",
      "Traditional Kathakali Show",
      "All Meals Included"
    ],
    itinerary: [
      { day: 1, title: "Arrival Cochin", activities: ["Chinese Fishing Nets", "Fort Kochi Walk"] },
      { day: 2, title: "Cochin to Munnar", activities: ["Tea Gardens", "Mattupetty Dam"] },
      { day: 3, title: "Munnar Exploration", activities: ["Eravikulam Park", "Top Station"] },
      { day: 4, title: "Munnar to Thekkady", activities: ["Spice Plantation", "Periyar Lake"] },
      { day: 5, title: "Thekkady to Alleppey", activities: ["Wildlife Safari", "Houseboat Check-in"] },
      { day: 6, title: "Alleppey Backwaters", activities: ["Houseboat Cruise", "Village Tour"] },
      { day: 7, title: "Departure", activities: ["Beach Visit", "Airport Transfer"] }
    ],
    included: ["Hotels & Houseboat", "All Meals", "Transportation", "Activities", "Spa Session"],
    excluded: ["Flights", "Shopping", "Personal Expenses"]
  },
  {
    id: 'rajasthan-royal',
    title: "Royal Rajasthan Tour",
    subtitle: "Jaipur • Jodhpur • Udaipur • Jaisalmer",
    duration: "9 Days / 8 Nights",
    groupSize: "2-12 People",
    rating: 4.8,
    reviews: 750,
    price: 44999,
    originalPrice: 59999,
    image: '/images/destinations/udaipur-lake-palace.jpg',
    category: 'Heritage',
    difficulty: 'Moderate',
    features: [
      "Heritage Hotel Stays",
      "Camel Safari in Thar Desert",
      "Sunset at Sand Dunes",
      "Private Palace Tours",
      "Traditional Rajasthani Dinner",
      "Cultural Performances"
    ],
    itinerary: [
      { day: 1, title: "Arrival Jaipur", activities: ["City Palace", "Hawa Mahal"] },
      { day: 2, title: "Jaipur Exploration", activities: ["Amber Fort", "Jal Mahal", "Albert Hall"] },
      { day: 3, title: "Jaipur to Jodhpur", activities: ["Mehrangarh Fort", "Clock Tower"] },
      { day: 4, title: "Jodhpur Sightseeing", activities: ["Jaswant Thada", "Umaid Bhawan"] },
      { day: 5, title: "Jodhpur to Jaisalmer", activities: ["Gadisar Lake", "Desert Check-in"] },
      { day: 6, title: "Jaisalmer Desert", activities: ["Camel Safari", "Desert Camp"] },
      { day: 7, title: "Jaisalmer to Udaipur", activities: ["Jaisalmer Fort", "Travel Day"] },
      { day: 8, title: "Udaipur Lakes", activities: ["City Palace", "Lake Pichola Cruise"] },
      { day: 9, title: "Departure", activities: ["Saheliyon Ki Bari", "Airport Transfer"] }
    ],
    included: ["Heritage Hotels", "Daily Breakfast", "Transportation", "Desert Camp", "Activities"],
    excluded: ["Flights", "Lunch & Dinner", "Shopping"]
  },
  {
    id: 'goa-beach',
    title: "Goa Beach Paradise",
    subtitle: "North & South Goa",
    duration: "5 Days / 4 Nights",
    groupSize: "2-20 People",
    rating: 4.7,
    reviews: 1450,
    price: 18999,
    originalPrice: 25999,
    image: '/images/destinations/goa-beach.jpg',
    category: 'Beach & Adventure',
    difficulty: 'Easy',
    features: [
      "Beach Resort Stay",
      "Water Sports Package",
      "Dudhsagar Waterfall Trip",
      "Sunset Cruise with Dinner",
      "Old Goa Heritage Tour",
      "Beach Parties Access"
    ],
    itinerary: [
      { day: 1, title: "Arrival North Goa", activities: ["Calangute Beach", "Baga Beach"] },
      { day: 2, title: "North Goa Adventure", activities: ["Water Sports", "Fort Aguada"] },
      { day: 3, title: "Old Goa & Cruise", activities: ["Basilica", "Se Cathedral", "Sunset Cruise"] },
      { day: 4, title: "Dudhsagar Falls", activities: ["Waterfall Trek", "Spice Plantation"] },
      { day: 5, title: "South Goa & Departure", activities: ["Palolem Beach", "Shopping"] }
    ],
    included: ["Beach Resort", "Daily Breakfast", "Water Sports", "Cruise", "Transportation"],
    excluded: ["Flights", "Lunch & Dinner", "Alcohol", "Personal Expenses"]
  },
  {
    id: 'ladakh-adventure',
    title: "Ladakh Adventure Expedition",
    subtitle: "Leh • Nubra • Pangong • Tso Moriri",
    duration: "8 Days / 7 Nights",
    groupSize: "4-12 People",
    rating: 5.0,
    reviews: 620,
    price: 39999,
    originalPrice: 54999,
    image: '/images/destinations/ladakh-pangong.jpg',
    category: 'Adventure',
    difficulty: 'Challenging',
    features: [
      "High Altitude Experience",
      "Khardung La Pass",
      "Pangong Lake Camping",
      "Double Hump Camel Ride",
      "Monastery Visits",
      "All Permits Included"
    ],
    itinerary: [
      { day: 1, title: "Arrival Leh", activities: ["Acclimatization", "Shanti Stupa"] },
      { day: 2, title: "Leh Local", activities: ["Leh Palace", "Monasteries"] },
      { day: 3, title: "Leh to Nubra", activities: ["Khardung La", "Diskit Monastery"] },
      { day: 4, title: "Nubra Valley", activities: ["Camel Safari", "Sand Dunes"] },
      { day: 5, title: "Nubra to Pangong", activities: ["Shyok River Route", "Pangong Lake"] },
      { day: 6, title: "Pangong to Leh", activities: ["Chang La Pass", "Thiksey Monastery"] },
      { day: 7, title: "Leh Sightseeing", activities: ["Magnetic Hill", "Sangam Point"] },
      { day: 8, title: "Departure", activities: ["Shopping", "Airport Transfer"] }
    ],
    included: ["Hotels & Camps", "All Meals", "Transportation", "Permits", "Oxygen Support"],
    excluded: ["Flights", "Personal Expenses", "Medical Insurance"]
  }
];

export const internationalPackages = [
  {
    id: 'dubai-extravaganza',
    title: "Dubai Extravaganza",
    subtitle: "Luxury & Adventure in UAE",
    duration: "5 Days / 4 Nights",
    groupSize: "2-10 People",
    rating: 4.9,
    reviews: 2100,
    price: 89999,
    originalPrice: 119999,
    image: '/images/destinations/dubai-burj-khalifa.jpg',
    category: 'Luxury',
    difficulty: 'Easy',
    features: [
      "5-Star Hotel Stay",
      "Burj Khalifa At The Top",
      "Desert Safari with BBQ",
      "Dubai Mall & Marina Tour",
      "Dhow Cruise Dinner",
      "All Transfers Included"
    ],
    itinerary: [
      { day: 1, title: "Arrival Dubai", activities: ["Hotel Check-in", "Dubai Mall", "Burj Khalifa"] },
      { day: 2, title: "Desert Safari", activities: ["Dune Bashing", "Camel Ride", "BBQ Dinner"] },
      { day: 3, title: "City Tour", activities: ["Dubai Marina", "Palm Jumeirah", "Gold Souk"] },
      { day: 4, title: "Theme Parks", activities: ["IMG Worlds", "Miracle Garden"] },
      { day: 5, title: "Departure", activities: ["Shopping", "Airport Transfer"] }
    ],
    included: ["5-Star Hotel", "Daily Breakfast", "All Activities", "Transfers", "Visa Assistance"],
    excluded: ["Flights", "Lunch & Dinner", "Shopping", "Travel Insurance"]
  },
  {
    id: 'europe-highlights',
    title: "Europe Highlights",
    subtitle: "Paris • Switzerland • Italy",
    duration: "10 Days / 9 Nights",
    groupSize: "10-25 People",
    rating: 4.8,
    reviews: 850,
    price: 189999,
    originalPrice: 249999,
    image: '/images/destinations/paris-eiffel-tower.jpg',
    category: 'Cultural',
    difficulty: 'Moderate',
    features: [
      "4-Star Hotels",
      "Eiffel Tower Visit",
      "Swiss Alps Jungfraujoch",
      "Venice Gondola Ride",
      "Vatican City Tour",
      "Schengen Visa Support"
    ],
    itinerary: [
      { day: 1, title: "Arrival Paris", activities: ["Eiffel Tower", "Seine Cruise"] },
      { day: 2, title: "Paris Sightseeing", activities: ["Louvre", "Notre Dame", "Champs-Élysées"] },
      { day: 3, title: "Paris to Switzerland", activities: ["Travel Day", "Geneva"] },
      { day: 4, title: "Interlaken", activities: ["Jungfraujoch", "Lake Thun"] },
      { day: 5, title: "Lucerne", activities: ["Chapel Bridge", "Mt. Titlis"] },
      { day: 6, title: "Switzerland to Venice", activities: ["Travel Day", "Venice Arrival"] },
      { day: 7, title: "Venice", activities: ["St. Mark's Square", "Gondola Ride"] },
      { day: 8, title: "Venice to Rome", activities: ["Travel Day", "Colosseum Night View"] },
      { day: 9, title: "Rome Exploration", activities: ["Vatican", "Trevi Fountain", "Pantheon"] },
      { day: 10, title: "Departure", activities: ["Shopping", "Airport Transfer"] }
    ],
    included: ["4-Star Hotels", "Daily Breakfast", "Train Transfers", "Guided Tours", "Visa Support"],
    excluded: ["Flights", "Lunch & Dinner", "Local Transport", "Insurance"]
  },
  {
    id: 'maldives-luxury',
    title: "Maldives Luxury Escape",
    subtitle: "Overwater Villa Experience",
    duration: "5 Days / 4 Nights",
    groupSize: "2-4 People",
    rating: 5.0,
    reviews: 540,
    price: 159999,
    originalPrice: 209999,
    image: '/images/destinations/maldives-beach.jpg',
    category: 'Luxury Beach',
    difficulty: 'Easy',
    features: [
      "Overwater Villa",
      "All-Inclusive Meals",
      "Private Beach Access",
      "Snorkeling & Diving",
      "Spa Treatments",
      "Romantic Dinner Setup"
    ],
    itinerary: [
      { day: 1, title: "Arrival Maldives", activities: ["Speedboat Transfer", "Villa Check-in", "Beach Sunset"] },
      { day: 2, title: "Water Activities", activities: ["Snorkeling", "Kayaking", "Island Hopping"] },
      { day: 3, title: "Relaxation Day", activities: ["Spa Treatments", "Beach Time", "Private Dinner"] },
      { day: 4, title: "Adventure Day", activities: ["Diving", "Dolphin Watching", "Water Sports"] },
      { day: 5, title: "Departure", activities: ["Breakfast", "Transfer to Airport"] }
    ],
    included: ["Overwater Villa", "All Meals & Drinks", "Water Activities", "Spa", "Transfers"],
    excluded: ["Flights", "Diving Certification", "Excursions", "Insurance"]
  },
  {
    id: 'bali-thailand',
    title: "Bali & Thailand Combo",
    subtitle: "Best of Southeast Asia",
    duration: "9 Days / 8 Nights",
    groupSize: "2-15 People",
    rating: 4.8,
    reviews: 1320,
    price: 74999,
    originalPrice: 99999,
    image: '/images/destinations/bali-rice-terraces.jpg',
    category: 'Beach & Culture',
    difficulty: 'Easy',
    features: [
      "Beach Resorts",
      "Temple Tours",
      "Phi Phi Islands",
      "Thai Massage",
      "Ubud Rice Terraces",
      "Beach Clubs Access"
    ],
    itinerary: [
      { day: 1, title: "Arrival Bali", activities: ["Seminyak Beach", "Sunset at Tanah Lot"] },
      { day: 2, title: "Ubud Day", activities: ["Rice Terraces", "Monkey Forest", "Art Market"] },
      { day: 3, title: "Bali Water Temples", activities: ["Uluwatu", "Kecak Dance", "Beach Clubs"] },
      { day: 4, title: "Bali to Phuket", activities: ["Flight", "Patong Beach"] },
      { day: 5, title: "Phi Phi Islands", activities: ["Island Tour", "Snorkeling", "Beach Time"] },
      { day: 6, title: "Phuket to Bangkok", activities: ["Flight", "Grand Palace"] },
      { day: 7, title: "Bangkok Temples", activities: ["Wat Pho", "Wat Arun", "River Cruise"] },
      { day: 8, title: "Bangkok Shopping", activities: ["Chatuchak Market", "MBK Center", "Rooftop Bar"] },
      { day: 9, title: "Departure", activities: ["Floating Market", "Airport Transfer"] }
    ],
    included: ["4-Star Hotels", "Daily Breakfast", "Inter-country Flights", "Island Tours", "Activities"],
    excluded: ["International Flights", "Lunch & Dinner", "Visa Fees", "Insurance"]
  },
  {
    id: 'singapore-malaysia',
    title: "Singapore & Malaysia Discovery",
    subtitle: "Modern & Traditional Asia",
    duration: "7 Days / 6 Nights",
    groupSize: "2-12 People",
    rating: 4.7,
    reviews: 980,
    price: 69999,
    originalPrice: 89999,
    image: '/images/destinations/singapore-marina-bay.jpg',
    category: 'City & Culture',
    difficulty: 'Easy',
    features: [
      "Marina Bay Sands",
      "Universal Studios",
      "Gardens by the Bay",
      "Petronas Towers",
      "Genting Highlands",
      "Food Paradise Tours"
    ],
    itinerary: [
      { day: 1, title: "Arrival Singapore", activities: ["Marina Bay", "Gardens by the Bay"] },
      { day: 2, title: "Universal Studios", activities: ["Full Day Theme Park", "Sentosa Beach"] },
      { day: 3, title: "Singapore City", activities: ["Orchard Road", "Chinatown", "Night Safari"] },
      { day: 4, title: "Singapore to Kuala Lumpur", activities: ["Travel", "Petronas Towers"] },
      { day: 5, title: "KL City Tour", activities: ["Batu Caves", "KL Tower", "Bukit Bintang"] },
      { day: 6, title: "Genting Highlands", activities: ["Cable Car", "Theme Park", "Casino"] },
      { day: 7, title: "Departure", activities: ["Shopping", "Airport Transfer"] }
    ],
    included: ["4-Star Hotels", "Daily Breakfast", "Park Tickets", "City Tours", "Transfers"],
    excluded: ["Flights", "Lunch & Dinner", "Shopping", "Personal Expenses"]
  }
];

export const allPackages = [...indianPackages, ...internationalPackages];

export const getPackageById = (id) => {
  return allPackages.find(pkg => pkg.id === id);
};

export const getPackagesByCategory = (category) => {
  return allPackages.filter(pkg => pkg.category === category);
};



