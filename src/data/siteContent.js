// ============================================================
//  Shree Momai Cabs — Single Source of Truth
//  Edit this file to update all website content
// ============================================================

export const brand = {
  name: 'Shree Momai Cabs',
  tagline: 'Your Trusted Taxi Partner in Dwarka',
  location: 'Dwarka, Gujarat',
  phones: ['+91 7984767057', '+91 9274547505'],
  email: 'shreemomaitour@gmail.com',
  whatsapp: '917984767057',
  colors: {
    blue: '#1B3A8C',
    gold: '#F5B400',
    black: '#111111',
  },
};

export const nav = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Fleet',        href: '#fleet' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Contact',      href: '#contact' },
];

export const hero = {
  badge:    '24×7 Taxi Booking Available',
  heading1: 'Book Your Taxi',
  heading2: 'in Dwarka',
  heading3: 'Today!',
  subheading:
    'Reliable taxi service for Dwarka sightseeing, temple tours, airport pickup, railway station transfer, and outstation trips across Gujarat.',
  cta1: { label: 'Book Now on WhatsApp', type: 'whatsapp' },
  cta2: { label: 'Call Now', type: 'call' },
  highlights: [
    { icon: 'Clock',   text: '24×7 Booking' },
    { icon: 'Shield',  text: 'Safe & Clean' },
    { icon: 'Users',   text: 'Local Experts' },
    { icon: 'Heart',   text: 'Family Friendly' },
  ],
  stats: [
    { value: '5000+', label: 'Happy Customers' },
    { value: '50+',   label: 'Routes Covered' },
    { value: '1+',    label: 'Years Experience' },
    { value: '24×7',  label: 'Availability' },
  ],
};

export const about = {
  badge:   'About Us',
  heading: 'Feel the Difference with Shree Momai Cabs',
  body: [
    'Shree Momai Cabs is a trusted name in taxi and tour services based in Dwarka, Gujarat. We have been serving pilgrims, tourists, and local residents for over 1 year with reliable, safe, and comfortable travel experiences.',
    'We specialize in Dwarka Darshan, Bet Dwarka tours, Nageshwar Jyotirlinga visits, beach tours, airport transfers, and outstation cab services across Gujarat. Our experienced local drivers know every route, temple, and hidden gem of this sacred city.',
    'Our fleet of well-maintained AC vehicles ensures you travel in comfort while our professional drivers ensure you reach your destination safely and on time.',
  ],
  features: [
    'Experienced Local Drivers',
    'Well-Maintained AC Vehicles',
    'Transparent Pricing',
    'On-Time Guarantee',
    'Clean & Sanitized Cars',
    '24×7 Customer Support',
  ],
};

export const services = [
  {
    id: 1,
    icon: 'MapPin',
    title: 'Local Dwarka Sightseeing',
    desc: "Explore Dwarka's most popular spots with our comfortable cabs and expert local drivers.",
  },
  {
    id: 2,
    icon: 'Temple',
    title: 'Dwarka Darshan Package',
    desc: 'Complete Dwarka Darshan covering Dwarkadhish Temple and all key religious sites.',
  },
  {
    id: 3,
    icon: 'Waves',
    title: 'Bet Dwarka Tour',
    desc: 'Convenient boat-and-cab combo for the sacred Bet Dwarka island pilgrimage.',
  },
  {
    id: 4,
    icon: 'Star',
    title: 'Nageshwar Jyotirlinga',
    desc: 'Dedicated cab service to the revered Nageshwar Jyotirlinga temple, one of 12 Jyotirlingas.',
  },
  {
    id: 5,
    icon: 'Flower',
    title: 'Rukmini Temple Visit',
    desc: 'Comfortable transfer to the ancient Rukmini Devi temple, just outside Dwarka city.',
  },
  {
    id: 6,
    icon: 'Waves',
    title: 'Shivrajpur Beach Tour',
    desc: 'Relax at the pristine Blue Flag Shivrajpur Beach with a hassle-free cab service.',
  },
  {
    id: 7,
    icon: 'Bridge',
    title: 'Sudarshan Setu Visit',
    desc: "India's longest cable-stayed pedestrian bridge — a must-visit near Bet Dwarka.",
  },
  {
    id: 8,
    icon: 'RefreshCw',
    title: 'Round Trip Taxi Service',
    desc: 'Affordable round-trip cabs within Dwarka and to nearby cities across Gujarat.',
  },
  {
    id: 9,
    icon: 'Plane',
    title: 'Airport Pickup & Drop',
    desc: 'Timely pickup and drop to Jamnagar, Rajkot, Ahmedabad & Porbandar airports.',
  },
  {
    id: 10,
    icon: 'Train',
    title: 'Railway Station Transfer',
    desc: 'Punctual cab service to and from Dwarka Railway Station and nearby stations.',
  },
  {
    id: 11,
    icon: 'Navigation',
    title: 'Outstation Cab Service',
    desc: 'Long-distance cabs to Somnath, Diu, Sasan Gir, Porbandar, Rajkot & Ahmedabad.',
  },
  {
    id: 12,
    icon: 'Users',
    title: 'Family & Group Tours',
    desc: 'Spacious vehicles for families and groups — Innova, Ertiga & Rumion available.',
  },
  {
    id: 13,
    icon: 'Building',
    title: 'Hotel Transfer Service',
    desc: 'Seamless hotel pickup and drop service across all parts of Dwarka.',
  },
  {
    id: 14,
    icon: 'Clock',
    title: '24×7 Taxi Booking',
    desc: 'Book your cab any time — day or night. We are always available for your journey.',
  },
];

export const airports = [
  { name: 'Jamnagar Airport',   code: 'JGA', dist: '~140 km' },
  { name: 'Rajkot Airport',     code: 'RAJ', dist: '~210 km' },
  { name: 'Ahmedabad Airport',  code: 'AMD', dist: '~440 km' },
  { name: 'Porbandar Airport',  code: 'PBD', dist: '~100 km' },
];

export const destinations = [
  {
    name:  'Somnath',
    desc:  'Famous Jyotirlinga temple town on the Arabian Sea coast.',
    dist:  '~235 km',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Somanath_mandir_(cropped).jpg?width=900',
  },
  {
    name:  'Diu',
    desc:  'Beach paradise with Portuguese forts and crystal-clear waters.',
    dist:  '~270 km',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Diu_fort,_India.JPG?width=900',
  },
  {
    name:  'Sasan Gir',
    desc:  'Home of the Asiatic Lion — the only lion sanctuary in Asia.',
    dist:  '~175 km',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Asiatic_Male_Lion_in_Gir_Forest_National_Park.jpg?width=900',
  },
  {
    name:  'Porbandar',
    desc:  "Birthplace of Mahatma Gandhi with a beautiful seafront.",
    dist:  '~100 km',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/The_main_memorial_near_the_house.jpg?width=900',
  },
  {
    name:  'Rajkot',
    desc:  'Major commercial hub with shopping, heritage, and great food.',
    dist:  '~210 km',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Watson_Museum.jpg?width=900',
  },
  {
    name:  'Ahmedabad',
    desc:  'UNESCO World Heritage City with rich culture and heritage.',
    dist:  '~440 km',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/GANDHI_ASHRAM_03.jpg?width=900',
  },
];

export const fleet = [
  {
    name:      'Toyota Innova',
    capacity:  '6-7 Seater',
    type:      'Premium MUV',
    features:  ['AC Cabin', 'Ample Luggage Space', 'Professional Driver', 'Ideal for Families'],
    image:     '/fleet-innova.png',
    badge:     'Most Popular',
  },
  {
    name:      'Maruti Ertiga',
    capacity:  '6 Seater',
    type:      'Comfortable MPV',
    features:  ['AC Cabin', 'Fuel Efficient', 'Comfortable Seats', 'Best for Groups'],
    image:     '/fleet-ertiga.png',
    badge:     'Best Value',
  },
  {
    name:      'Toyota Rumion',
    capacity:  '6 Seater',
    type:      'Premium MPV',
    features:  ['AC Cabin', 'Spacious Interior', 'Smooth Ride', 'Premium Comfort'],
    image:     '/fleet-rumion.png',
    badge:     'New Addition',
  },
  {
    name:      'Swift Dzire',
    capacity:  '4 Seater',
    type:      'Executive Sedan',
    features:  ['AC Cabin', 'Comfortable', 'City & Highway', 'Solo & Couple Trips'],
    image:     '/fleet-swift-dzire.png',
    badge:     'City Rides',
  },
];

export const testimonials = [
  {
    name:   'Ramesh Patel',
    city:   'Ahmedabad',
    rating: 5,
    text:   'Excellent service! The driver was very punctual and knowledgeable about Dwarka temples. Highly recommended for Dwarka Darshan.',
  },
  {
    name:   'Sunita Sharma',
    city:   'Surat',
    rating: 5,
    text:   'We hired Shree Momai Cabs for our family trip to Bet Dwarka. Very clean Innova, professional driver, and very affordable price.',
  },
  {
    name:   'Vijay Kumar',
    city:   'Mumbai',
    rating: 5,
    text:   'Booked for airport drop to Jamnagar. On-time pickup, smooth journey. Will definitely use again on my next Dwarka visit.',
  },
  {
    name:   'Priya Mehta',
    city:   'Vadodara',
    rating: 5,
    text:   'Took their outstation cab to Somnath. The driver was very courteous and the car was well-maintained. Perfect 5-star experience.',
  },
];

export const faqs = [
  {
    q: 'Which areas do you cover for taxi service?',
    a: 'We cover all of Dwarka city, Bet Dwarka, Nageshwar, Shivrajpur Beach, Sudarshan Setu, and outstation routes to Somnath, Diu, Sasan Gir, Porbandar, Rajkot, and Ahmedabad.',
  },
  {
    q: 'How do I book a taxi with Shree Momai Cabs?',
    a: 'Simply click any "Book Now" button on our website to send a WhatsApp message, or call us directly at +91 7984767057 or +91 9274547505. We are available 24×7.',
  },
  {
    q: 'What types of vehicles do you have?',
    a: 'We have Toyota Innova (7-seater), Maruti Ertiga (6-seater), Toyota Rumion (6-seater), and Executive Sedans (4-seater). All vehicles are AC-equipped.',
  },
  {
    q: 'Do you offer airport transfer services?',
    a: 'Yes! We provide airport pickup and drop to Jamnagar Airport, Rajkot Airport, Ahmedabad Airport, and Porbandar Airport.',
  },
  {
    q: 'Is pricing transparent? Are there hidden charges?',
    a: 'We believe in 100% transparent pricing. The fare is agreed before the journey with no hidden charges. Toll and parking are extra as applicable.',
  },
  {
    q: 'Can I book a taxi for early morning or late night?',
    a: 'Yes, we are available 24×7, 365 days a year. You can book a taxi at any time — early morning, midnight, or any hour you need.',
  },
];

export const bookingFormServices = [
  'Local Dwarka Sightseeing',
  'Dwarka Darshan Package',
  'Bet Dwarka Tour',
  'Nageshwar Jyotirlinga',
  'Airport Pickup/Drop',
  'Railway Station Transfer',
  'Outstation Cab',
  'Family/Group Tour',
  'Other',
];
