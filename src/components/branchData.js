import { CircleDot, Home, MapPin, Phone, Menu, X, Star, Coffee, Wifi, Zap, BookOpen, ShieldCheck, Trees, Waves, Dumbbell, Car, Armchair, Wind, Tv, Utensils, Sun } from "lucide-react";

export const branches = [
  {
    id: 'koteshwor',
    name: 'Koteshwor Branch',
    rooms: [
      { name: "Single Deluxe", occupancy: "1 Person", price: "Rs. 18,000", features: ["Private Room", "Shared Bath"] },
      { name: "Double Shared", occupancy: "2 Persons", price: "Rs. 14,000", features: ["Spacious", "Study Tables"] },
      { name: "Triple Shared", occupancy: "3 Persons", price: "Rs. 11,000", features: ["Budget Friendly", "Large Lockers"] }
    ],
    location: 'Koteshwor, Kathmandu',
    landmark: 'Near Nabil Bank',
    description: 'Located in the heart of Koteshwor, offering easy access to public transport and city centers.',
    coordinates: { lat: 27.6756, lng: 85.3459 },
    features: ['City Center Access', 'Near Nabil Bank', 'Rooftop Terrace'],
    amenities: [
      { icon: Sun, label: "Rooftop Terrace" },
      { icon: Wifi, label: "High Speed WiFi" },
      { icon: BookOpen, label: "Study Hall" },
      { icon: ShieldCheck, label: "24/7 Security" },
      { icon: Zap, label: "Power Backup" }
    ],
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'satdobato',
    name: 'Satdobato Branch',
    rooms: [
      { name: "Single Standard", occupancy: "1 Person", price: "Rs. 16,000", features: ["Quiet", "Garden View"] },
      { name: "Double Deluxe", occupancy: "2 Persons", price: "Rs. 13,000", features: ["Balcony", "Attached Bath"] },
      { name: "Four Sharing", occupancy: "4 Persons", price: "Rs. 9,500", features: ["Most Affordable", "Large Room"] }
    ],
    location: 'Satdobato, Lalitpur',
    landmark: 'Behind Swimming Pool',
    description: 'A peaceful environment perfect for students and professionals, right behind the swimming complex.',
    coordinates: { lat: 27.6588, lng: 85.3247 },
    features: ['Quiet Zone', 'Swimming Pool Nearby', 'Spacious Garden'],
    amenities: [
      { icon: Trees, label: "Spacious Garden" },
      { icon: Waves, label: "Swimming Pool Access" },
      { icon: Car, label: "Ample Parking" },
      { icon: Dumbbell, label: "Mini Gym" },
      { icon: Wifi, label: "High Speed WiFi" }
    ],
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=2070',
    gallery: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1616594039964-40891a909733?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'jhamsikhel',
    name: 'Jhamsikhel Branch',
    rooms: [
      { name: "Premium Single", occupancy: "1 Person", price: "Rs. 22,000", features: ["AC", "Attached Bath", "TV"] },
      { name: "Premium Double", occupancy: "2 Persons", price: "Rs. 18,000", features: ["AC", "Attached Bath"] },
      { name: "Triple Luxury", occupancy: "3 Persons", price: "Rs. 15,000", features: ["AC", "Shared Luxury Bath"] }
    ],
    location: 'Jhamsikhel, Lalitpur',
    landmark: 'Near St. Mary School',
    description: 'Experience the premium lifestyle in the vibrant area of Jhamsikhel.',
    coordinates: { lat: 27.6783, lng: 85.3075 },
    features: ['Premium Area', 'Near St. Mary School', 'Modern Architecture'],
    amenities: [
      { icon: Armchair, label: "Modern Lounge" },
      { icon: Coffee, label: "Coffee Bar" },
      { icon: Wind, label: "AC Rooms" },
      { icon: Wifi, label: "High Speed WiFi" },
      { icon: ShieldCheck, label: "24/7 Security" }
    ],
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1505693436371-52665a0100e7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1522771753035-4850d355d242?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c0141?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'tinkune',
    name: 'Tinkune Branch',
    rooms: [
      { name: "Single Pod", occupancy: "1 Person", price: "Rs. 15,000", features: ["Privacy Pod", "Modern"] },
      { name: "Double Standard", occupancy: "2 Persons", price: "Rs. 13,000", features: ["Comfortable", "City View"] },
      { name: "Dormitory", occupancy: "6 Persons", price: "Rs. 8,500", features: ["Social", "Locker"] }
    ],
    location: 'Tinkune, Kathmandu',
    landmark: '50m from Kantipur Television',
    description: 'Strategic location with modern amenities for a comfortable stay.',
    coordinates: { lat: 27.6854, lng: 85.3486 },
    features: ['Media Hub', 'High Speed Internet', 'Executive Suites'],
    amenities: [
      { icon: Tv, label: "Media Room" },
      { icon: Armchair, label: "Conference Hall" },
      { icon: Wifi, label: "High Speed WiFi" },
      { icon: Zap, label: "Power Backup" },
      { icon: Utensils, label: "Premium Dining" }
    ],
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=2070',
    gallery: [
      'https://images.unsplash.com/photo-1522771753035-4850d355d242?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1505693436371-52665a0100e7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'baneshwor',
    name: 'Baneshwor Branch',
    rooms: [
      { name: "Student Single", occupancy: "1 Person", price: "Rs. 17,000", features: ["Study Focused", "Quiet"] },
      { name: "Student Double", occupancy: "2 Persons", price: "Rs. 13,500", features: ["Study Tables", "Bookshelf"] },
      { name: "Student Triple", occupancy: "3 Persons", price: "Rs. 10,500", features: ["Budget", "Group Study"] }
    ],
    location: 'Baneshwor, Kathmandu',
    landmark: 'Near Liverpool College',
    description: 'Ideal for students, located near major educational institutions in Baneshwor.',
    coordinates: { lat: 27.6915, lng: 85.3420 },
    features: ['Student Friendly', 'Near Colleges', 'Study Halls'],
    amenities: [
      { icon: BookOpen, label: "Library" },
      { icon: Wifi, label: "High Speed WiFi" },
      { icon: Utensils, label: "Cafeteria" },
      { icon: ShieldCheck, label: "24/7 Security" },
      { icon: Sun, label: "Open Terrace" }
    ],
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=2070',
    gallery: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1505693436371-52665a0100e7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1522771753035-4850d355d242?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'thapathali',
    name: 'Thapathali Branch',
    rooms: [
      { name: "Executive Single", occupancy: "1 Person", price: "Rs. 25,000", features: ["AC", "Ensuite", "Work Desk"] },
      { name: "Executive Double", occupancy: "2 Persons", price: "Rs. 20,000", features: ["AC", "Ensuite"] }
    ],
    location: 'Thapathali, Kathmandu',
    landmark: 'Central Business District',
    description: 'Our newest branch offering top-tier facilities in the business hub.',
    coordinates: { lat: 27.6902, lng: 85.3198 },
    features: ['Business Hub', 'Luxury Lounge', 'Premium Concierge'],
    amenities: [
      { icon: Armchair, label: "Executive Lounge" },
      { icon: ShieldCheck, label: "Concierge" },
      { icon: Dumbbell, label: "Gym" },
      { icon: Wind, label: "AC Rooms" },
      { icon: Wifi, label: "Fiber Internet" }
    ],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=2070',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1616594039964-40891a909733?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800'
    ]
  },
];

export const amenitiesList = [
  {
    icon: Coffee,
    name: "Unlimited Fooding Menu",
    description: "Hygienic and delicious meals served throughout the day with unlimited food options.",
    images: [
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    icon: Star,
    name: "Luxury Bedding",
    description: "Premium mattresses and bedding for your ultimate comfort and restful sleep.",
    images: [
      'https://images.unsplash.com/photo-1631049307255-81fb7c1e71b1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    icon: Home,
    name: "Attached Bathroom",
    description: "Private and clean attached bathrooms in every room.",
    images: [
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1631889992176-3a8c2d5c6d8b?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    icon: CircleDot,
    name: "AC Facility",
    description: "Climate controlled air-conditioned rooms for all seasons.",
    images: [
      'https://images.unsplash.com/photo-1635840667813-e0ea3e99d22f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    icon: Menu,
    name: "Gym Facilities",
    description: "State-of-the-art gym equipment for fitness enthusiasts.",
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    icon: Waves,
    name: "Swimming Pool",
    description: "Refreshing swimming pool for relaxation and exercise.",
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1582735689369-4fe989d85686?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551524164-6cf77f5e1cfc?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    icon: Phone,
    name: "24 HR Security Guard",
    description: "Round the clock security guards and CCTV surveillance for your safety.",
    images: [
      'https://images.unsplash.com/photo-1603350683444-a4d43de20b91?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    icon: Star,
    name: "Library and Study Room",
    description: "Dedicated quiet spaces for studying and reading.",
    images: [
      'https://images.unsplash.com/photo-1521587760476-9c060e7f31a3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    icon: CircleDot,
    name: "Dedicated Internet",
    description: "High-speed WiFi connectivity throughout the facility.",
    images: [
      'https://images.unsplash.com/photo-1544197150-c04f3095eee4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    icon: Home,
    name: "Customer Privacy",
    description: "Your privacy is our priority with secure and private living spaces.",
    images: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    icon: Coffee,
    name: "Room Service Per Day",
    description: "Daily housekeeping and room cleaning services.",
    images: [
      'https://images.unsplash.com/photo-1581578731449-6eea6c0c7f2c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1631889992176-3a2c5d5c6d8b?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    icon: Menu,
    name: "Digital Check In Check Out System",
    description: "Hassle-free digital check-in and check-out process.",
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    icon: Star,
    name: "Unlimited Laundry Facilities",
    description: "Free unlimited laundry services for all residents.",
    images: [
      'https://images.unsplash.com/photo-1582735689369-4fe989d85686?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    icon: CircleDot,
    name: "Daily Games for Hangout",
    description: "Indoor and outdoor games for recreation and socializing.",
    images: [
      'https://images.unsplash.com/photo-1511882150382-421b66e3a8e9?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    icon: Phone,
    name: "Parking Facilities",
    description: "Secure parking spaces available for residents.",
    images: [
      'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800'
    ]
  },
];