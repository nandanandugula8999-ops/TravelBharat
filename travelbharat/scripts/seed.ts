import mongoose from "mongoose";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

// ── Import models ──────────────────────────────────────────────────────────
import State from "../src/models/State";
import City from "../src/models/City";
import Category from "../src/models/Category";
import Place from "../src/models/Place";

const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) throw new Error("MONGODB_URI not set in .env.local");

// ─── Data ────────────────────────────────────────────────────────────────────

const statesData = [
  // NORTH
  { name: "Jammu & Kashmir", slug: "jammu-kashmir", region: "North", capital: "Srinagar (Summer) / Jammu (Winter)", description: "A land of snow-capped mountains, serene lakes, and Mughal gardens. Known for its breathtaking natural beauty and rich cultural heritage.", coverImage: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800", isUnionTerritory: true },
  { name: "Ladakh", slug: "ladakh", region: "North", capital: "Leh", description: "The land of high passes — a cold desert with stunning moonscapes, ancient monasteries, and the world's highest motorable roads.", coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", isUnionTerritory: true },
  { name: "Himachal Pradesh", slug: "himachal-pradesh", region: "North", capital: "Shimla", description: "The 'Dev Bhoomi' (Land of Gods) — a Himalayan state famous for apple orchards, adventure sports, and scenic hill stations.", coverImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800", isUnionTerritory: false },
  { name: "Punjab", slug: "punjab", region: "North", capital: "Chandigarh", description: "The 'Land of Five Rivers' — home to the Golden Temple, fertile plains, vibrant Bhangra culture, and warm Punjabi hospitality.", coverImage: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=800", isUnionTerritory: false },
  { name: "Haryana", slug: "haryana", region: "North", capital: "Chandigarh", description: "Surrounding Delhi on three sides, Haryana is rich in Mahabharata history with the sacred battlefields of Kurukshetra.", coverImage: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800", isUnionTerritory: false },
  { name: "Uttarakhand", slug: "uttarakhand", region: "North", capital: "Dehradun", description: "The 'Land of Gods' — home to Char Dham pilgrimage, Valley of Flowers, Jim Corbett National Park, and adventure in the Himalayas.", coverImage: "https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?w=800", isUnionTerritory: false },
  { name: "Uttar Pradesh", slug: "uttar-pradesh", region: "North", capital: "Lucknow", description: "India's most populous state — home to the Taj Mahal, Varanasi ghats, Ayodhya, and the spiritual heart of Hindu civilization.", coverImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800", isUnionTerritory: false },
  { name: "Delhi", slug: "delhi", region: "North", capital: "New Delhi", description: "India's capital — a megacity blending Mughal grandeur, colonial architecture, and modern buzz. From Qutub Minar to street food lanes.", coverImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800", isUnionTerritory: true },
  { name: "Rajasthan", slug: "rajasthan", region: "North", capital: "Jaipur", description: "The 'Land of Kings' — a state of mighty forts, ornate palaces, desert dunes, and vivid folk traditions.", coverImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800", isUnionTerritory: false },
  // SOUTH
  { name: "Kerala", slug: "kerala", region: "South", capital: "Thiruvananthapuram", description: "God's Own Country — emerald backwaters, Ayurvedic resorts, lush hill stations, and pristine beaches framed by coconut palms.", coverImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800", isUnionTerritory: false },
  { name: "Tamil Nadu", slug: "tamil-nadu", region: "South", capital: "Chennai", description: "The cradle of Dravidian culture — towering gopurams, classical Bharatanatyam dance, ancient temples, and flavorful cuisine.", coverImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800", isUnionTerritory: false },
  { name: "Karnataka", slug: "karnataka", region: "South", capital: "Bengaluru", description: "From the ruins of Hampi to the coffee estates of Coorg and the tech hub of Bengaluru — Karnataka holds incredible diversity.", coverImage: "https://images.unsplash.com/photo-1617523869947-b37e76e0c59e?w=800", isUnionTerritory: false },
  { name: "Andhra Pradesh", slug: "andhra-pradesh", region: "South", capital: "Amaravati", description: "Famous for Tirupati — the world's most visited pilgrimage site — and the Nagarjunakonda Buddhist heritage and Araku valley.", coverImage: "https://images.unsplash.com/photo-1616935902393-9a0b6c7ac93c?w=800", isUnionTerritory: false },
  { name: "Telangana", slug: "telangana", region: "South", capital: "Hyderabad", description: "Home to Hyderabad's Charminar, the Nizam's palaces, rich biryani culture, and the ancient Warangal Fort.", coverImage: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=800", isUnionTerritory: false },
  { name: "Goa", slug: "goa", region: "South", capital: "Panaji", description: "India's smallest state — a paradise of golden beaches, Portuguese colonial churches, seafood shacks, and vibrant nightlife.", coverImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800", isUnionTerritory: false },
  { name: "Lakshadweep", slug: "lakshadweep", region: "South", capital: "Kavaratti", description: "A pristine archipelago of coral atolls in the Arabian Sea — India's smallest UT with crystal-clear lagoons and untouched reefs.", coverImage: "https://images.unsplash.com/photo-1586523969266-2eb1f5b99b64?w=800", isUnionTerritory: true },
  { name: "Puducherry", slug: "puducherry", region: "South", capital: "Puducherry", description: "A French colonial gem on India's southeast coast — cobblestone streets, pastel villas, yoga ashrams, and peaceful beaches.", coverImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800", isUnionTerritory: true },
  // EAST
  { name: "West Bengal", slug: "west-bengal", region: "East", capital: "Kolkata", description: "The cultural capital of India — Rabindranath Tagore's homeland, the Sundarbans mangroves, Darjeeling tea gardens, and the Ganges delta.", coverImage: "https://images.unsplash.com/photo-1558431382-27e303142255?w=800", isUnionTerritory: false },
  { name: "Odisha", slug: "odisha", region: "East", capital: "Bhubaneswar", description: "The 'Temple State' — Jagannath Puri, the Konark Sun Temple, tribal art, and the pristine Chilika Lake.", coverImage: "https://images.unsplash.com/photo-1602779780516-5f2e1d53b9c4?w=800", isUnionTerritory: false },
  { name: "Jharkhand", slug: "jharkhand", region: "East", capital: "Ranchi", description: "A land of waterfalls, forests, tribal culture, and mineral wealth — known for the Betla National Park and ancient temples.", coverImage: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800", isUnionTerritory: false },
  { name: "Bihar", slug: "bihar", region: "East", capital: "Patna", description: "The cradle of Buddhism and the Mauryan Empire — Bodh Gaya, Nalanda, Vaishali, and the sacred Ganga are here.", coverImage: "https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?w=800", isUnionTerritory: false },
  // WEST
  { name: "Gujarat", slug: "gujarat", region: "West", capital: "Gandhinagar", description: "The land of Gandhi — vibrant Garba festivals, the Rann of Kutch salt desert, ancient step wells, Gir lions, and Somnath temple.", coverImage: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800", isUnionTerritory: false },
  { name: "Maharashtra", slug: "maharashtra", region: "West", capital: "Mumbai", description: "India's economic powerhouse — Mumbai's Bollywood glamour, the Ajanta & Ellora caves, Sahyadri hill forts, and Konkan coastline.", coverImage: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800", isUnionTerritory: false },
  { name: "Dadra & Nagar Haveli and Daman & Diu", slug: "dadra-nagar-haveli-daman-diu", region: "West", capital: "Daman", description: "A compact UT blending Portuguese colonial heritage with tribal culture and scenic beaches on the Arabian Sea.", coverImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800", isUnionTerritory: true },
  // CENTRAL
  { name: "Madhya Pradesh", slug: "madhya-pradesh", region: "Central", capital: "Bhopal", description: "The 'Heart of India' — Khajuraho temples, Bandhavgarh tigers, Kanha meadows, Orchha's medieval splendor, and Sanchi stupa.", coverImage: "https://images.unsplash.com/photo-1617152703978-c59fb3aea9f0?w=800", isUnionTerritory: false },
  { name: "Chhattisgarh", slug: "chhattisgarh", region: "Central", capital: "Raipur", description: "A land of dense forests, thundering waterfalls like Chitrakote, tribal art, and hidden Buddhist stupas.", coverImage: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800", isUnionTerritory: false },
  // NORTHEAST
  { name: "Assam", slug: "assam", region: "Northeast", capital: "Dispur", description: "The gateway to Northeast India — home to the one-horned rhino at Kaziranga, Majuli river island, tea estates, and the mighty Brahmaputra.", coverImage: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800", isUnionTerritory: false },
  { name: "Meghalaya", slug: "meghalaya", region: "Northeast", capital: "Shillong", description: "The 'Abode of Clouds' — the wettest place on Earth, living root bridges, crystal caves, and stunning waterfalls.", coverImage: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800", isUnionTerritory: false },
  { name: "Arunachal Pradesh", slug: "arunachal-pradesh", region: "Northeast", capital: "Itanagar", description: "The 'Land of Dawn-lit Mountains' — Tawang monastery, Ziro valley, and the last truly wild frontier of India.", coverImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800", isUnionTerritory: false },
  { name: "Nagaland", slug: "nagaland", region: "Northeast", capital: "Kohima", description: "The 'Land of Festivals' — host of the Hornbill Festival, Dzukou Valley trekking, and rich Naga warrior heritage.", coverImage: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800", isUnionTerritory: false },
  { name: "Manipur", slug: "manipur", region: "Northeast", capital: "Imphal", description: "The 'Switzerland of the East' — Loktak Lake with floating phumdis, classical Manipuri dance, and the legendary Kangla Fort.", coverImage: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800", isUnionTerritory: false },
  { name: "Mizoram", slug: "mizoram", region: "Northeast", capital: "Aizawl", description: "A serene hill state with 91% forest cover — bamboo forests, Phawngpui Blue Mountain, and gentle Mizo culture.", coverImage: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800", isUnionTerritory: false },
  { name: "Tripura", slug: "tripura", region: "Northeast", capital: "Agartala", description: "A small state with mighty heritage — Ujjayanta Palace, Unakoti rock carvings, and rich Bengali-tribal cultural blend.", coverImage: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800", isUnionTerritory: false },
  { name: "Sikkim", slug: "sikkim", region: "Northeast", capital: "Gangtok", description: "India's smallest state by area — home to Kangchenjunga, Rumtek Monastery, rhododendron forests, and pristine Yumthang Valley.", coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", isUnionTerritory: false },
  { name: "Andaman & Nicobar Islands", slug: "andaman-nicobar", region: "East", capital: "Port Blair", description: "A tropical archipelago of 572 islands — Cellular Jail history, Radhanagar Beach, pristine coral reefs, and endemic wildlife.", coverImage: "https://images.unsplash.com/photo-1586523969266-2eb1f5b99b64?w=800", isUnionTerritory: true },
  { name: "Chandigarh", slug: "chandigarh", region: "North", capital: "Chandigarh", description: "India's most planned city — designed by Le Corbusier, with the stunning Rock Garden, Sukhna Lake, and Rose Garden.", coverImage: "https://images.unsplash.com/photo-1625731762547-c9d394da8ed7?w=800", isUnionTerritory: true },
];

const categoriesData = [
  { name: "Heritage", slug: "heritage", description: "Ancient monuments, forts, palaces, and UNESCO World Heritage Sites", icon: "🏛️" },
  { name: "Nature", slug: "nature", description: "National parks, wildlife sanctuaries, beaches, mountains, and forests", icon: "🌿" },
  { name: "Religious", slug: "religious", description: "Temples, mosques, churches, gurudwaras, and pilgrimage sites", icon: "🙏" },
  { name: "Adventure", slug: "adventure", description: "Trekking, river rafting, skiing, paragliding, and outdoor sports", icon: "🏔️" },
];

// Places will be seeded after states+categories so we can reference their IDs
const getPlacesData = (stateMap: Record<string, string>, catMap: Record<string, string>) => [
  // ── UTTAR PRADESH ────────────────────────────────────────────────────────
  {
    name: "Taj Mahal",
    slug: "taj-mahal",
    stateId: stateMap["uttar-pradesh"],
    categoryIds: [catMap["heritage"]],
    shortDescription: "The world's greatest monument to love — a UNESCO World Heritage marble mausoleum built by Mughal Emperor Shah Jahan.",
    description: "Built between 1632 and 1653, the Taj Mahal is a masterpiece of Mughal architecture, blending Persian, Islamic, and Indian styles. Situated on the south bank of the Yamuna river in Agra, it was commissioned by Emperor Shah Jahan in memory of his wife Mumtaz Mahal. The complex includes the main mausoleum, a mosque, a guest house, and formal gardens enclosed within a crenellated wall.",
    historicalSignificance: "Designated a UNESCO World Heritage Site in 1983, the Taj Mahal is considered the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage. Over 20,000 artisans from across the empire worked on it.",
    bestTimeToVisit: "October to March (cool and clear skies). Avoid summer — extreme heat and haze reduce visibility. Full moon nights offer a magical silver glow.",
    entryFee: "₹50 (Indians) / ₹1,100 (Foreigners)",
    timings: "Sunrise to Sunset (closed on Fridays)",
    mapLink: "https://maps.app.goo.gl/JKKQ7K6TvVBvjrwH6",
    images: [
      { url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200", caption: "The iconic Taj Mahal at sunrise" },
      { url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200", caption: "Taj Mahal reflecting in the central pool" },
    ],
    isFeatured: true, isVerified: true,
  },
  {
    name: "Varanasi Ghats",
    slug: "varanasi-ghats",
    stateId: stateMap["uttar-pradesh"],
    categoryIds: [catMap["religious"]],
    shortDescription: "The spiritual heart of India — 88 ghats along the Ganges where Hindus bathe, pray, and perform cremation rituals.",
    description: "Varanasi (Kashi) is one of the world's oldest living cities. The 84+ ghats stretching 6.5 km along the Ganges are the stage for life and death in the Hindu cosmos. The Ganga Aarti at Dashashwamedh Ghat draws thousands nightly — priests swing fire lamps in perfect synchrony to devotional music as bells ring and incense fills the air.",
    historicalSignificance: "Mentioned in the Rigveda, Varanasi is at least 3,000 years old — older than history, older than tradition, older even than legend.",
    bestTimeToVisit: "October to March. Diwali and Ganga Mahotsav in November are spectacular.",
    entryFee: "Free (boat rides ₹200–600)",
    timings: "Open 24 hours. Ganga Aarti at 6:30 AM and 7:00 PM daily.",
    mapLink: "https://maps.app.goo.gl/J2LNqmXPV1j4xXR29",
    images: [
      { url: "https://images.unsplash.com/photo-1561361058-c24e107a4817?w=1200", caption: "Evening Ganga Aarti at Dashashwamedh Ghat" },
      { url: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1200", caption: "Morning rituals along the Ganges" },
    ],
    isFeatured: true, isVerified: true,
  },
  // ── RAJASTHAN ─────────────────────────────────────────────────────────────
  {
    name: "Amer Fort",
    slug: "amer-fort",
    stateId: stateMap["rajasthan"],
    categoryIds: [catMap["heritage"]],
    shortDescription: "A stunning Rajput hill fort overlooking Maota Lake — a UNESCO World Heritage Site and the pride of Jaipur.",
    description: "Amer Fort (Amber Fort) is a majestic fort-palace located 11 km from Jaipur on a ridge overlooking Maota Lake. Built from pale yellow and pink sandstone and white marble, it was the seat of the Kachhawahas Rajputs. The highlight is the Sheesh Mahal (Palace of Mirrors) — its walls covered with thousands of tiny mirrors that create a starry effect when lit by a single candle.",
    historicalSignificance: "Construction began in 1592 by Raja Man Singh I. Part of the Hill Forts of Rajasthan UNESCO cluster inscribed in 2013.",
    bestTimeToVisit: "October to March. Avoid peak summer (April–June) when temperatures hit 45°C.",
    entryFee: "₹100 (Indians) / ₹500 (Foreigners)",
    timings: "8:00 AM – 5:30 PM daily",
    mapLink: "https://maps.app.goo.gl/MuoVNGHPpq3JUq8N6",
    images: [
      { url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200", caption: "Amer Fort at golden hour" },
      { url: "https://images.unsplash.com/photo-1477587458883-47145ed31459?w=1200", caption: "Sheesh Mahal interior with mirror work" },
    ],
    isFeatured: true, isVerified: true,
  },
  {
    name: "Hawa Mahal",
    slug: "hawa-mahal",
    stateId: stateMap["rajasthan"],
    categoryIds: [catMap["heritage"]],
    shortDescription: "The 'Palace of Winds' — a five-storey pink sandstone facade with 953 small windows built for royal ladies to observe street life.",
    description: "Hawa Mahal is an iconic palace in the Pink City of Jaipur, built in 1799 by Maharaja Sawai Pratap Singh. Its facade, resembling a honeycomb, has 953 small windows (jharokhas) decorated with intricate lattice work to allow royal ladies of the harem to observe everyday life and festivals without being seen.",
    historicalSignificance: "Built by poet-king Sawai Pratap Singh who was inspired by the crown of Lord Krishna, this is one of the most photographed monuments in India.",
    bestTimeToVisit: "October to February. Visit early morning to catch it glowing golden-pink in the sunrise light.",
    entryFee: "₹50 (Indians) / ₹200 (Foreigners)",
    timings: "9:00 AM – 5:00 PM (closed on national holidays)",
    mapLink: "https://maps.app.goo.gl/oHhBqoBDG4ZC5DcGA",
    images: [
      { url: "https://images.unsplash.com/photo-1477587458883-47145ed31459?w=1200", caption: "Hawa Mahal's intricate pink sandstone facade" },
    ],
    isFeatured: false, isVerified: true,
  },
  {
    name: "Rann of Kutch",
    slug: "rann-of-kutch",
    stateId: stateMap["gujarat"],
    categoryIds: [catMap["nature"]],
    shortDescription: "The world's largest salt desert — a surreal white expanse that transforms into a mirror during moonlit nights.",
    description: "The Great Rann of Kutch is one of the world's largest salt marshes, stretching 7,500 sq km across Gujarat. During the dry season (November–February), the flat salt pans create a blindingly white, otherworldly landscape. The annual Rann Utsav festival brings folk music, craft villages, camel rides, and full-moon nights that cast a magical silver glow across the vast flats.",
    historicalSignificance: "Part of the Indus Valley Civilization region. The archaeological site of Dholavira — an ancient Harappan city — lies within the Rann and is now a UNESCO World Heritage Site.",
    bestTimeToVisit: "November to February during the Rann Utsav festival. Full moon nights are unmissable.",
    entryFee: "₹100 (festival permit required during Rann Utsav)",
    timings: "Open all day",
    mapLink: "https://maps.app.goo.gl/hWQ6dW1v3cYJDhNf7",
    images: [
      { url: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=1200", caption: "The endless white expanse of Rann of Kutch" },
      { url: "https://images.unsplash.com/photo-1558431382-27e303142255?w=1200", caption: "Traditional huts at the Rann Utsav village" },
    ],
    isFeatured: true, isVerified: true,
  },
  // ── KARNATAKA ────────────────────────────────────────────────────────────
  {
    name: "Hampi",
    slug: "hampi",
    stateId: stateMap["karnataka"],
    categoryIds: [catMap["heritage"]],
    shortDescription: "A UNESCO World Heritage Site — the hauntingly beautiful ruins of Vijayanagara Empire spread across a surreal boulder-strewn landscape.",
    description: "Hampi was once the second-largest city in the world and the capital of the Vijayanagara Empire (14th–16th centuries). Today its ruins spread across 26 sq km of granite boulders and rice paddies. The Virupaksha Temple still functions after 7 centuries. The Stone Chariot, Lotus Mahal, Queen's Bath, and Vittala Temple with its famous musical pillars are must-sees.",
    historicalSignificance: "Inscribed as a UNESCO World Heritage Site in 1986. At its peak, Hampi was home to 500,000 people and was described by Portuguese travelers as grander than Rome.",
    bestTimeToVisit: "October to February. Avoid May–September (monsoon rains and extreme heat in pre-monsoon).",
    entryFee: "₹40 (Indians) / ₹600 (Foreigners)",
    timings: "6:00 AM – 6:00 PM (Vittala Temple); Virupaksha: 6 AM – 1 PM, 3 PM – 8:30 PM",
    mapLink: "https://maps.app.goo.gl/bF6dFcLJv6D1QKcD9",
    images: [
      { url: "https://images.unsplash.com/photo-1617523869947-b37e76e0c59e?w=1200", caption: "Stone Chariot at Vittala Temple, Hampi" },
      { url: "https://images.unsplash.com/photo-1592549585870-b08d7136d2ba?w=1200", caption: "Virupaksha Temple amid Hampi's boulder landscape" },
    ],
    isFeatured: true, isVerified: true,
  },
  {
    name: "Mysore Palace",
    slug: "mysore-palace",
    stateId: stateMap["karnataka"],
    categoryIds: [catMap["heritage"]],
    shortDescription: "One of the most visited monuments in India — an opulent Indo-Saracenic royal palace that blazes with 100,000 lights on Sundays.",
    description: "The Mysore Palace is the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. The current palace was built between 1897 and 1912 in Indo-Saracenic style, blending Hindu, Muslim, Rajput, and Gothic architecture. Every Sunday evening and during the Dasara festival, the palace is illuminated by nearly 100,000 light bulbs — a sight that rivals any in the world.",
    historicalSignificance: "The palace sits on a site that has had royal structures since at least the 14th century. The Dasara procession from here is one of India's grandest festivals, celebrated for over 400 years.",
    bestTimeToVisit: "October during Dasara festival. Any time of year is good; Sundays for the illumination show.",
    entryFee: "₹70 (Indians) / ₹200 (Foreigners)",
    timings: "10:00 AM – 5:30 PM daily",
    mapLink: "https://maps.app.goo.gl/5GTDMmJCuSFMxxvt5",
    images: [
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200", caption: "Mysore Palace illuminated on a Sunday evening" },
    ],
    isFeatured: false, isVerified: true,
  },
  // ── KERALA ───────────────────────────────────────────────────────────────
  {
    name: "Alleppey Backwaters",
    slug: "alleppey-backwaters",
    stateId: stateMap["kerala"],
    categoryIds: [catMap["nature"]],
    shortDescription: "A network of serene canals, lagoons, and rice paddies best explored on a traditional houseboat (kettuvallam).",
    description: "Alleppey (Alappuzha) is called the 'Venice of the East' for its intricate network of canals, backwaters, beaches, and lagoons. The most iconic way to experience it is on a traditional rice-barge houseboat (kettuvallam) — converted from old cargo boats, these vessels now come with bedrooms, kitchens, and sit-out decks. The Vembanad Lake, stretching 96 km, is the backdrop for the famous Nehru Trophy Snake Boat Race.",
    historicalSignificance: "The backwaters have been a vital trade route for centuries. Venetian explorer Marco Polo visited the Kerala coast in 1292 CE.",
    bestTimeToVisit: "August to March. August for the spectacular Nehru Trophy Snake Boat Race.",
    entryFee: "Houseboat rental: ₹6,000–₹25,000 per night",
    timings: "Boats typically depart noon and return the following morning",
    mapLink: "https://maps.app.goo.gl/VsZfKvt4JkGZ6N8N8",
    images: [
      { url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200", caption: "Traditional houseboat gliding through Kerala backwaters" },
      { url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1200", caption: "Tranquil backwater canal at dawn" },
    ],
    isFeatured: true, isVerified: true,
  },
  {
    name: "Munnar Tea Gardens",
    slug: "munnar-tea-gardens",
    stateId: stateMap["kerala"],
    categoryIds: [catMap["nature"]],
    shortDescription: "A highland hill station draped in endless emerald tea plantations at 1,600m altitude in the Western Ghats.",
    description: "Munnar sits at the confluence of three mountain streams in the Western Ghats at 1,600 m. Its rolling hills carpeted with manicured tea estates (over 30,000 hectares) create one of India's most iconic green landscapes. The Eravikulam National Park here is home to the endangered Nilgiri Tahr. The Neelakurinji flower (Strobilanthes kunthiana) blooms once every 12 years, turning the hillsides purple.",
    bestTimeToVisit: "September to May. March–May for Neelakurinji blooming (if in a bloom year). December–January for cool misty mornings.",
    entryFee: "Free (Tea Museum: ₹150)",
    timings: "Open all day",
    mapLink: "https://maps.app.goo.gl/JDAfyJCGm3MaNZL6A",
    images: [
      { url: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=1200", caption: "Tea plantations carpet the hills of Munnar" },
    ],
    isFeatured: false, isVerified: true,
  },
  // ── TAMIL NADU ────────────────────────────────────────────────────────────
  {
    name: "Meenakshi Amman Temple",
    slug: "meenakshi-amman-temple",
    stateId: stateMap["tamil-nadu"],
    categoryIds: [catMap["religious"]],
    shortDescription: "A magnificent ancient Dravidian temple with 14 gopurams covered in 33,000 colorful sculptures — the heart of Madurai.",
    description: "The Meenakshi Amman Temple is a historic Hindu temple in Madurai dedicated to Meenakshi (a form of Parvati) and Sundareshwarar (Shiva). The sprawling complex covers 14 acres and features 14 majestic towers (gopurams), the tallest being 52m high. Every single inch of the towers is covered in vibrant stucco sculptures of gods, demons, and mythological creatures — an overwhelming feast for the senses.",
    historicalSignificance: "The original temple is said to have been built by Kulasekara Pandya. The current structure was largely built during the Nayak period (16th–17th centuries). It attracts 15,000+ pilgrims daily.",
    bestTimeToVisit: "October to March. October–November for the Meenakshi Thirukalyanam festival.",
    entryFee: "Free (Camera: ₹50)",
    timings: "5:00 AM – 12:30 PM, 4:00 PM – 10:00 PM",
    mapLink: "https://maps.app.goo.gl/W52xEqUevfDPE6Bz6",
    images: [
      { url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200", caption: "The towering gopurams of Meenakshi Temple" },
    ],
    isFeatured: true, isVerified: true,
  },
  {
    name: "Chettinad",
    slug: "chettinad",
    stateId: stateMap["tamil-nadu"],
    categoryIds: [catMap["heritage"]],
    shortDescription: "A cluster of 75 villages with palatial mansions built by wealthy Chettiar merchants — a living museum of vanishing opulence.",
    description: "Chettinad is a region of magnificent, rambling mansions built by the Nattukotai Chettiars — a merchant community that amassed wealth from trade across Southeast Asia in the 19th century. The mansions, now largely empty, feature Burmese teak pillars, Belgian glass, Italian marble, and handmade tiles from Calicut. The region is also famous for its spicy, distinctive cuisine — Chettinad chicken curry is known worldwide.",
    bestTimeToVisit: "November to February. The mild weather makes exploring the labyrinthine mansions comfortable.",
    entryFee: "₹200–500 per mansion (varies)",
    timings: "9:00 AM – 5:00 PM",
    mapLink: "https://maps.app.goo.gl/yFdJdMhR85vAqBbr9",
    images: [
      { url: "https://images.unsplash.com/photo-1624131099606-df97eab34f15?w=1200", caption: "A grand Chettinad mansion corridor" },
    ],
    isFeatured: false, isVerified: true,
  },
  // ── PUNJAB ───────────────────────────────────────────────────────────────
  {
    name: "Golden Temple",
    slug: "golden-temple",
    stateId: stateMap["punjab"],
    categoryIds: [catMap["religious"]],
    shortDescription: "Harmandir Sahib — the holiest Sikh shrine, a glittering gold and marble temple surrounded by the Amrit Sarovar holy pool.",
    description: "The Golden Temple (Harmandir Sahib) in Amritsar is the spiritual and cultural center of the Sikh religion. Built in the 16th century and later covered with 750 kg of gold leaf, the temple sits in the middle of the 'Pool of Nectar' (Amrit Sarovar) from which the city gets its name. The Guru Ka Langar here serves free meals to 100,000 people daily, regardless of religion — the world's largest free community kitchen.",
    historicalSignificance: "Construction began in 1574 under Guru Ram Das and the Adi Granth was first installed here in 1604 by Guru Arjan Dev. The temple was rebuilt multiple times after repeated destruction.",
    bestTimeToVisit: "October to March. Diwali and Gurpurab (Guru Nanak's birthday) are magical times to visit.",
    entryFee: "Free",
    timings: "Open 24 hours",
    mapLink: "https://maps.app.goo.gl/rT5oNpjGqnBwVqr86",
    images: [
      { url: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=1200", caption: "Golden Temple glowing at dusk" },
      { url: "https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?w=1200", caption: "Pilgrims crossing the causeway to Harmandir Sahib" },
    ],
    isFeatured: true, isVerified: true,
  },
  // ── DELHI ────────────────────────────────────────────────────────────────
  {
    name: "Qutub Minar",
    slug: "qutub-minar",
    stateId: stateMap["delhi"],
    categoryIds: [catMap["heritage"]],
    shortDescription: "India's tallest brick minaret at 72.5m — a UNESCO World Heritage Site and masterpiece of early Indo-Islamic architecture.",
    description: "The Qutub Minar is a soaring 72.5-metre minaret built in 1193 by Qutb-ud-din Aibak, founder of the Delhi Sultanate. Made of red sandstone with intricate carvings of Quranic verses and floral patterns, it tapers from a 15m diameter at the base to 2.5m at the top. The complex also contains India Gate (not to be confused with the war memorial), the Iron Pillar (4th century, remarkably rust-free), and ruins of the Quwwat-ul-Islam mosque.",
    historicalSignificance: "UNESCO World Heritage Site since 1993. The Iron Pillar here is a remarkable metallurgical feat — 1,600 years old and still rust-free, a mystery that modern science has only recently explained.",
    bestTimeToVisit: "October to March. Mornings are best to avoid crowds.",
    entryFee: "₹40 (Indians) / ₹600 (Foreigners)",
    timings: "Sunrise to Sunset",
    mapLink: "https://maps.app.goo.gl/E7qx44SGSGUR85Sq5",
    images: [
      { url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200", caption: "Qutub Minar towering against a blue sky" },
    ],
    isFeatured: false, isVerified: true,
  },
  // ── MADHYA PRADESH ───────────────────────────────────────────────────────
  {
    name: "Khajuraho Temples",
    slug: "khajuraho-temples",
    stateId: stateMap["madhya-pradesh"],
    categoryIds: [catMap["heritage"]],
    shortDescription: "Medieval temples famous for their erotic sculptures — a UNESCO World Heritage Site representing the zenith of Chandela artistry.",
    description: "The Khajuraho Group of Monuments is a collection of Hindu and Jain temples built between 950 and 1050 CE during the Chandela dynasty. Of the original 85 temples, 22 survive. They are famous for their nagara-style architectural symbolism and their erotic sculptures — though only 10% of the carvings are erotic, they represent the teachings of the Kamasutra and the philosophy that kama (desire) is one of the four aims of human life.",
    historicalSignificance: "UNESCO World Heritage Site since 1986. The temples were 'rediscovered' by a British officer T.S. Burt in 1838, having been hidden in forests for centuries.",
    bestTimeToVisit: "October to March. February for the Khajuraho Dance Festival when classical dances are performed against the temple backdrop.",
    entryFee: "₹40 (Indians) / ₹600 (Foreigners)",
    timings: "Sunrise to Sunset. Light and Sound show evenings at 7:30 PM.",
    mapLink: "https://maps.app.goo.gl/CYRXGdKrXDqHEH5a8",
    images: [
      { url: "https://images.unsplash.com/photo-1617152703978-c59fb3aea9f0?w=1200", caption: "Ornately carved Khajuraho temple spires" },
    ],
    isFeatured: true, isVerified: true,
  },
  {
    name: "Orchha Fort",
    slug: "orchha-fort",
    stateId: stateMap["madhya-pradesh"],
    categoryIds: [catMap["heritage"]],
    shortDescription: "A forgotten medieval town of chhatris and palaces rising from the Betwa River — one of India's most atmospheric hidden gems.",
    description: "Orchha is a small town in Madhya Pradesh on an island formed by a loop in the Betwa River. Its 16th–17th century fort complex contains palaces (Raj Mahal, Jahangir Mahal, Rai Praveen Mahal) whose interiors are decorated with beautiful murals. The town's skyline is defined by the chhatris (cenotaphs) of Orchha's rulers, which are architecturally similar to Mughal domes.",
    bestTimeToVisit: "October to March. November for the Orchha Festival of classical dance.",
    entryFee: "₹250 (Indians) / ₹500 (Foreigners) for the fort complex",
    timings: "8:00 AM – 6:00 PM",
    mapLink: "https://maps.app.goo.gl/mU1wvnFvxkCLUAFe7",
    images: [
      { url: "https://images.unsplash.com/photo-1617152703978-c59fb3aea9f0?w=1200", caption: "Orchha's cenotaphs reflecting in the Betwa River" },
    ],
    isFeatured: false, isVerified: true,
  },
  // ── ODISHA ───────────────────────────────────────────────────────────────
  {
    name: "Konark Sun Temple",
    slug: "konark-sun-temple",
    stateId: stateMap["odisha"],
    categoryIds: [catMap["heritage"]],
    shortDescription: "A 13th-century UNESCO World Heritage masterpiece — conceived as a colossal chariot of the Sun God with 24 intricately carved wheels.",
    description: "The Konark Sun Temple is a 13th-century Hindu temple dedicated to Surya (the Sun God) and designed as a monumental chariot with 24 wheels and 7 horses. Each wheel functions as a sundial, capable of telling the time to the minute. Built by King Narasimhadeva I of the Eastern Ganga dynasty, it represents the highest point of Kalinga architecture. The 'Black Pagoda' as it was called by sailors, served as a navigational landmark.",
    historicalSignificance: "UNESCO World Heritage Site since 1984. The main shikhara (tower) collapsed centuries ago but the mandapa (hall) still stands at 39m.",
    bestTimeToVisit: "November to February. December for the Konark Dance Festival.",
    entryFee: "₹40 (Indians) / ₹600 (Foreigners)",
    timings: "6:00 AM – 8:00 PM",
    mapLink: "https://maps.app.goo.gl/XPZRN4WRgTiPTYLS8",
    images: [
      { url: "https://images.unsplash.com/photo-1602779780516-5f2e1d53b9c4?w=1200", caption: "The intricately carved wheel of the Konark Sun Temple" },
    ],
    isFeatured: false, isVerified: true,
  },
  // ── UTTARAKHAND ─────────────────────────────────────────────────────────
  {
    name: "Valley of Flowers",
    slug: "valley-of-flowers",
    stateId: stateMap["uttarakhand"],
    categoryIds: [catMap["nature"]],
    shortDescription: "A UNESCO World Heritage Site — a remote Himalayan valley that bursts into a riot of 300+ alpine flower species during the monsoon.",
    description: "The Valley of Flowers National Park in Uttarakhand's Chamoli district is a high-altitude Himalayan valley at 3,352–3,658m. During the monsoon (July–August), it transforms into an extraordinary carpet of over 300 species of wildflowers — primulas, poppies, daisies, Brahma kamal, and rare blue poppies. It was first described to the western world by mountaineer Frank Smythe in 1931.",
    historicalSignificance: "UNESCO World Heritage Site in 2005 (as part of Nanda Devi and Valley of Flowers). According to the Ramayana, Hanuman visited this valley to collect the Sanjeevani herb.",
    bestTimeToVisit: "Mid-July to mid-August for peak blooms. The park is closed November to May.",
    entryFee: "₹150/day (Indians) / ₹600/day (Foreigners) + Trekking permit",
    timings: "Trek starts from Govindghat; 13 km one way",
    mapLink: "https://maps.app.goo.gl/Vf4z3g5TQ1F4Bdhe7",
    images: [
      { url: "https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?w=1200", caption: "Wildflowers carpet the Valley of Flowers" },
    ],
    isFeatured: true, isVerified: true,
  },
  // ── ASSAM ────────────────────────────────────────────────────────────────
  {
    name: "Kaziranga National Park",
    slug: "kaziranga-national-park",
    stateId: stateMap["assam"],
    categoryIds: [catMap["nature"]],
    shortDescription: "Home to the world's largest population of the one-horned rhino — a UNESCO World Heritage Site on the Brahmaputra floodplains.",
    description: "Kaziranga National Park spans 430 sq km of tall elephant grass, marshland, and dense forests in the Golaghat and Nagaon districts of Assam. It hosts two-thirds of the world's one-horned rhinoceros population (over 2,600). It also has the highest density of tigers of any protected area in the world, along with wild elephants, water buffalo, and swamp deer. Jeep and elephant safaris are available.",
    historicalSignificance: "UNESCO World Heritage Site since 1985. Mary Curzon persuaded her husband, the Viceroy Lord Curzon, to establish the reserve in 1905 after finding no rhinos during her visit.",
    bestTimeToVisit: "November to April. The park is closed during monsoon (May–October) due to flooding.",
    entryFee: "₹150 (Indians) + ₹500 for jeep safari",
    timings: "Morning safari: 7:00 AM – 9:30 AM; Evening: 2:30 PM – 4:30 PM",
    mapLink: "https://maps.app.goo.gl/E3Hm6dFj98eubBxc7",
    images: [
      { url: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1200", caption: "One-horned rhinos in Kaziranga's grasslands" },
    ],
    isFeatured: true, isVerified: true,
  },
  {
    name: "Majuli River Island",
    slug: "majuli-river-island",
    stateId: stateMap["assam"],
    categoryIds: [catMap["nature"]],
    shortDescription: "The world's largest river island — a serene Brahmaputra island that's the cradle of Assamese neo-Vaishnavite culture and satras.",
    description: "Majuli is a large river island in the Brahmaputra river in Assam — the world's largest river island. Majuli is the seat of Vaishnavite culture in Assam with 22 satras (monasteries), each with its own unique dance, music, mask-making, and craft traditions. The island is home to several migratory bird species and has a population of about 150,000 people from various indigenous communities.",
    bestTimeToVisit: "October to March. November for the Ali-Ai-Ligang festival.",
    entryFee: "Free (ferry from Jorhat: ₹15)",
    timings: "Open all day; ferry services run from 8 AM – 4 PM",
    mapLink: "https://maps.app.goo.gl/jTHUJDWpxGeSVscf8",
    images: [
      { url: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=1200", caption: "Traditional mask-making in Majuli's satras" },
    ],
    isFeatured: false, isVerified: true,
  },
  // ── MEGHALAYA ────────────────────────────────────────────────────────────
  {
    name: "Living Root Bridges",
    slug: "living-root-bridges",
    stateId: stateMap["meghalaya"],
    categoryIds: [catMap["nature"]],
    shortDescription: "Bridges hand-grown from the aerial roots of ancient rubber fig trees by the Khasi people — some are 500 years old and 50m long.",
    description: "The living root bridges of Meghalaya are an extraordinary example of bioengineering. The Khasi and Jaintia peoples of the East Khasi Hills guide the roots of the Ficus elastica (Indian rubber tree) across streams and rivers, creating living bridges that grow stronger with age. The double-decker root bridge near Nongriat village is the most famous, requiring a 3,500-step descent to reach.",
    bestTimeToVisit: "October to May. Avoid monsoon (June–September) when the steep trails become dangerously slippery.",
    entryFee: "₹50 (conservation fee)",
    timings: "Open all day; 3–4 hour trek from Tyrna village",
    mapLink: "https://maps.app.goo.gl/xAZomkVxqZTBHzwU9",
    images: [
      { url: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=1200", caption: "The iconic double-decker living root bridge" },
    ],
    isFeatured: true, isVerified: true,
  },
  // ── NAGALAND ─────────────────────────────────────────────────────────────
  {
    name: "Dzukou Valley",
    slug: "dzukou-valley",
    stateId: stateMap["nagaland"],
    categoryIds: [catMap["nature"], catMap["adventure"]],
    shortDescription: "The 'Valley of Flowers of the Northeast' — a breathtaking high-altitude valley blooming with seasonal wildflowers at 2,452m.",
    description: "Dzukou Valley sits on the Nagaland-Manipur border at 2,452m altitude and is accessible only on foot. The valley is named after the Dzukou lily (Lilium mackliniae) which blooms here in July–August. The pristine wilderness, crystal streams, and absence of any human settlement make it one of India's most unspoiled natural destinations. The trek from Viswema takes 2–3 hours.",
    bestTimeToVisit: "June to September for wildflowers. December–January for snow. March–April for rhododendrons.",
    entryFee: "₹50 (permit required from Nagaland/Manipur forest department)",
    timings: "Trekking starts from Viswema (Nagaland side) or Mao (Manipur side)",
    mapLink: "https://maps.app.goo.gl/RZ7sVGPJy2hLHEPS6",
    images: [
      { url: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=1200", caption: "Dzukou Valley carpeted in wildflowers" },
    ],
    isFeatured: false, isVerified: true,
  },
  // ── ARUNACHAL PRADESH ────────────────────────────────────────────────────
  {
    name: "Tawang Monastery",
    slug: "tawang-monastery",
    stateId: stateMap["arunachal-pradesh"],
    categoryIds: [catMap["religious"]],
    shortDescription: "India's largest and Asia's second-largest Buddhist monastery — perched at 3,048m above a valley in the remote Himalayas.",
    description: "Tawang Monastery (Galden Namgey Lhatse) was founded in the 17th century and is located at 3,048m in the Tawang Valley near the border with China. It belongs to the Gelug sect of Tibetan Buddhism and houses 450 monks. The monastery contains a 8m golden statue of Lord Buddha, a 1,000-year-old library of Buddhist manuscripts, and stunning thangka paintings.",
    historicalSignificance: "The 6th Dalai Lama was born in the Tawang district. The monastery played a crucial role in the 1962 Sino-Indian War — the Dalai Lama passed through Tawang during his escape from Tibet in 1959.",
    bestTimeToVisit: "March to October. Avoid monsoon (July–August). Torgya festival in January is spectacular.",
    entryFee: "Free",
    timings: "7:00 AM – 5:00 PM",
    mapLink: "https://maps.app.goo.gl/QRvAhBE3YV8r4Wy77",
    images: [
      { url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200", caption: "Tawang Monastery overlooking the valley" },
    ],
    isFeatured: false, isVerified: true,
  },
  {
    name: "Ziro Valley",
    slug: "ziro-valley",
    stateId: stateMap["arunachal-pradesh"],
    categoryIds: [catMap["nature"]],
    shortDescription: "A lush UNESCO-nominated valley at 1,500m — home to the Apatani tribe and the famous Ziro Music Festival.",
    description: "Ziro Valley in the Lower Subansiri district of Arunachal Pradesh is a UNESCO tentative World Heritage Site. The valley at 1,524m is defined by pine-covered hills and flat rice fields tended by the Apatani people — famous for their unique facial tattoos and nose plugs. Every September, the Ziro Music Festival brings indie musicians from across India to perform in this remote paradise.",
    bestTimeToVisit: "March to October. September for the Ziro Music Festival. March–April for Myoko festival of the Apatani people.",
    entryFee: "Free (Inner Line Permit required for non-Arunachalis)",
    timings: "Open all day",
    mapLink: "https://maps.app.goo.gl/1sdPfFLJZMsJCDGe8",
    images: [
      { url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200", caption: "Rice terraces of Ziro Valley" },
    ],
    isFeatured: false, isVerified: true,
  },
  // ── WEST BENGAL ─────────────────────────────────────────────────────────
  {
    name: "Sundarbans",
    slug: "sundarbans",
    stateId: stateMap["west-bengal"],
    categoryIds: [catMap["nature"]],
    shortDescription: "The world's largest mangrove forest and a UNESCO World Heritage Site — home to the Royal Bengal Tiger and saltwater crocodiles.",
    description: "The Sundarbans is a vast mangrove forest delta formed by the Ganges, Brahmaputra, and Meghna rivers, shared between India (West Bengal) and Bangladesh. The Indian portion covers 4,264 sq km and is a UNESCO World Heritage Site and Biosphere Reserve. It is home to the Royal Bengal Tiger — adapted to swimming — along with Irrawaddy dolphins, saltwater crocodiles, and over 260 bird species.",
    historicalSignificance: "UNESCO World Heritage Site since 1987. 'Sundarban' means 'beautiful forest' in Bengali. The tigers here are uniquely adapted to the tidal environment.",
    bestTimeToVisit: "November to February. Boat safaris are the only way to explore.",
    entryFee: "₹150 (Indians) + ₹200 boat fee",
    timings: "Day trips from Kolkata; overnight stays at Sajnekhali or Sunderban Tiger Reserve",
    mapLink: "https://maps.app.goo.gl/Bx6mqXbgxYQ9f7HcA",
    images: [
      { url: "https://images.unsplash.com/photo-1558431382-27e303142255?w=1200", caption: "Dense mangrove forests of the Sundarbans" },
    ],
    isFeatured: false, isVerified: true,
  },
  // ── HIMACHAL PRADESH ─────────────────────────────────────────────────────
  {
    name: "Rohtang Pass",
    slug: "rohtang-pass",
    stateId: stateMap["himachal-pradesh"],
    categoryIds: [catMap["adventure"]],
    shortDescription: "A high-altitude Himalayan mountain pass at 3,978m — offering snow activities, stunning views, and the gateway to Lahaul-Spiti.",
    description: "Rohtang Pass (Sanskrit: 'pile of corpses' — a reminder of how many travelers died here) sits at 3,978m on the Pir Panjal range. It connects the Kullu Valley to the Lahaul and Spiti valleys. The pass offers spectacular views of glaciers and snow-capped peaks. Activities include skiing, snowboarding, snow scooter rides, and simply playing in the snow — it's a favorite for Indians who've never seen snow.",
    bestTimeToVisit: "May to November (pass is closed in winter due to heavy snowfall). June–July for best accessibility.",
    entryFee: "₹500 permit fee required (online booking mandatory); ₹2,500 NGT fee for diesel vehicles",
    timings: "Permits from 9:00 AM",
    mapLink: "https://maps.app.goo.gl/eBdcyJGLxGG8mz2E7",
    images: [
      { url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200", caption: "Rohtang Pass covered in snow" },
    ],
    isFeatured: false, isVerified: true,
  },
  // ── MAHARASHTRA ─────────────────────────────────────────────────────────
  {
    name: "Ajanta Caves",
    slug: "ajanta-caves",
    stateId: stateMap["maharashtra"],
    categoryIds: [catMap["heritage"]],
    shortDescription: "30 rock-cut Buddhist cave monuments with some of the finest surviving ancient paintings in the world — UNESCO listed.",
    description: "The Ajanta Caves are 30 rock-cut Buddhist cave monuments from the 2nd century BCE–480 CE in Maharashtra's Aurangabad district. The caves contain paintings and sculptures considered masterpieces of Buddhist religious art. The paintings — depicting Jataka tales (stories of Buddha's previous lives) — were executed using natural pigments and represent the pinnacle of ancient Indian painting.",
    historicalSignificance: "UNESCO World Heritage Site since 1983. The caves were 'discovered' by British officer John Smith while tiger hunting in 1819 — they had been abandoned and forgotten for over 1,000 years.",
    bestTimeToVisit: "November to February. Avoid monsoon when the approach road can be treacherous.",
    entryFee: "₹40 (Indians) / ₹600 (Foreigners)",
    timings: "9:00 AM – 5:30 PM (closed on Mondays)",
    mapLink: "https://maps.app.goo.gl/5Yv8GgQqeRRkzqLG9",
    images: [
      { url: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200", caption: "Intricate paintings inside Ajanta's cave halls" },
    ],
    isFeatured: false, isVerified: true,
  },
  // ── LADAKH ───────────────────────────────────────────────────────────────
  {
    name: "Pangong Tso Lake",
    slug: "pangong-tso-lake",
    stateId: stateMap["ladakh"],
    categoryIds: [catMap["nature"]],
    shortDescription: "A stunning high-altitude salt lake at 4,350m that shifts through 7 shades of blue — stretching from Ladakh into Tibet.",
    description: "Pangong Tso is a long, narrow, endorheic lake in the Himalayas at 4,350m altitude. Stretching 134 km from India to Tibet, the lake changes colors throughout the day — from turquoise to blue to dark navy. Despite being a saltwater lake, it partially freezes in winter. Made famous internationally by the Bollywood film 3 Idiots, it attracts thousands of visitors to this remote frontier.",
    bestTimeToVisit: "May to September. February for frozen lake drive. Permit required (Inner Line Permit).",
    entryFee: "₹400 (permit included); camping at the lake: ₹1,000–2,000",
    timings: "Open all day",
    mapLink: "https://maps.app.goo.gl/pCBB8W4QamyvnHT37",
    images: [
      { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200", caption: "The impossibly blue Pangong Tso at sunrise" },
    ],
    isFeatured: true, isVerified: true,
  },
  // ── JAMMU & KASHMIR ─────────────────────────────────────────────────────
  {
    name: "Dal Lake",
    slug: "dal-lake",
    stateId: stateMap["jammu-kashmir"],
    categoryIds: [catMap["nature"]],
    shortDescription: "Srinagar's jewel — a shimmering lake famed for its ornate houseboats, shikara rides, and floating vegetable gardens.",
    description: "Dal Lake is an urban lake in Srinagar, the summer capital of Jammu & Kashmir. The 18 sq km lake is dotted with ornate cedar houseboats (introduced in the colonial era when British were not allowed to own land), shikara wooden boats, and floating gardens (rad) where tomatoes, cucumbers, and lotus are grown. The lake's shores are lined with Mughal-era gardens — Shalimar Bagh, Nishat Bagh, and Chashme Shahi.",
    bestTimeToVisit: "April to October for pleasant weather. December–January for snow on the Dal with frozen edges and winter mist.",
    entryFee: "Free (Shikara rides: ₹200–600 per hour)",
    timings: "Open all day",
    mapLink: "https://maps.app.goo.gl/UE2y4rdJmTFVKMAS9",
    images: [
      { url: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=1200", caption: "Shikaras at dawn on the serene Dal Lake" },
    ],
    isFeatured: true, isVerified: true,
  },
  // ── BIHAR ────────────────────────────────────────────────────────────────
  {
    name: "Bodh Gaya",
    slug: "bodh-gaya",
    stateId: stateMap["bihar"],
    categoryIds: [catMap["religious"]],
    shortDescription: "The most sacred Buddhist site on earth — where Siddhartha Gautama attained enlightenment under the Bodhi Tree, 2,500 years ago.",
    description: "Bodh Gaya in Bihar is the most important pilgrimage site in Buddhism. This is where Siddhartha Gautama sat under the Bodhi Tree (Ficus religiosa) and attained enlightenment (Bodhi) about 2,500 years ago. The Mahabodhi Temple complex, a UNESCO World Heritage Site, surrounds the descendent of the original Bodhi Tree and the Vajrasana (Diamond Throne). Monks from Japan, Thailand, Sri Lanka, China, and Tibet maintain monasteries here.",
    historicalSignificance: "UNESCO World Heritage Site since 2002. Emperor Ashoka visited Bodh Gaya in 260 BCE and built the original temple. Pilgrims from across the Buddhist world have been visiting for over 2,000 years.",
    bestTimeToVisit: "October to March. Buddha Purnima in May is the most sacred day.",
    entryFee: "Free (temple complex: ₹100)",
    timings: "5:00 AM – 9:00 PM",
    mapLink: "https://maps.app.goo.gl/3Mx2fYHGVxnYFAUA7",
    images: [
      { url: "https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?w=1200", caption: "The Mahabodhi Temple and sacred Bodhi Tree" },
    ],
    isFeatured: false, isVerified: true,
  },
  // ── MANIPUR ──────────────────────────────────────────────────────────────
  {
    name: "Loktak Lake",
    slug: "loktak-lake",
    stateId: stateMap["manipur"],
    categoryIds: [catMap["nature"]],
    shortDescription: "Northeast India's largest freshwater lake — home to unique floating islands called phumdis and the endangered Sangai deer.",
    description: "Loktak Lake in Manipur is the largest freshwater lake in Northeast India (287 sq km). Its most remarkable feature is the phumdis — heterogeneous mass of vegetation, soil, and organic matter floating on the lake surface. The Keibul Lamjao National Park, entirely within the lake, is the world's only floating national park and the last refuge of the endangered brow-antlered deer (Sangai).",
    bestTimeToVisit: "October to March. September for the Loktak boat race.",
    entryFee: "₹50 (Indians); boat ride: ₹200",
    timings: "Open all day",
    mapLink: "https://maps.app.goo.gl/Wy8CuPWFCg5cEmZy9",
    images: [
      { url: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=1200", caption: "Floating phumdis on Loktak Lake" },
    ],
    isFeatured: false, isVerified: true,
  },
  // ── GOA ──────────────────────────────────────────────────────────────────
  {
    name: "Basilica of Bom Jesus",
    slug: "basilica-of-bom-jesus",
    stateId: stateMap["goa"],
    categoryIds: [catMap["religious"], catMap["heritage"]],
    shortDescription: "A UNESCO World Heritage baroque church housing the mortal remains of Saint Francis Xavier — built in 1605.",
    description: "The Basilica of Bom Jesus is a UNESCO World Heritage Site and one of the best examples of baroque architecture in India. Built in 1605, it contains the mortal remains of St. Francis Xavier (patron saint of Goa), preserved in a silver casket and displayed in a glass casing inside a gilded Italian baroque mausoleum. Every 10 years, the body is exposed for public veneration — the last exposition was in 2024.",
    historicalSignificance: "UNESCO World Heritage Site (as part of Churches and Convents of Goa) since 1986. St. Francis Xavier died in 1552 and his body, remarkably preserved, has been in Goa since 1554.",
    bestTimeToVisit: "October to March. December for the Feast of St. Francis Xavier.",
    entryFee: "Free",
    timings: "9:00 AM – 6:30 PM (Monday–Saturday); 10:30 AM – 6:30 PM (Sunday)",
    mapLink: "https://maps.app.goo.gl/Hus7pTJaKf49t7mK6",
    images: [
      { url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200", caption: "The baroque facade of Basilica of Bom Jesus" },
    ],
    isFeatured: false, isVerified: true,
  },
  // ── SIKKIM ───────────────────────────────────────────────────────────────
  {
    name: "Rumtek Monastery",
    slug: "rumtek-monastery",
    stateId: stateMap["sikkim"],
    categoryIds: [catMap["religious"]],
    shortDescription: "One of the most significant Tibetan Buddhist monasteries outside Tibet — the seat of the Karma Kagyu lineage near Gangtok.",
    description: "Rumtek Monastery (Dharmachakra Centre) is the largest monastery in Sikkim and one of the most significant Buddhist centers outside Tibet. Built in the 1960s by the 16th Karmapa as a replica of the original Rumtek Monastery in Tibet, it houses rare Buddhist art, golden statues, and the Black Crown of the Karmapa. The monastery complex includes a monastery, shedra (college), retreat center, and garden.",
    bestTimeToVisit: "March to May and September to November. Losar (Tibetan New Year) and Saga Dawa festival are spectacular.",
    entryFee: "Free",
    timings: "9:00 AM – 4:00 PM",
    mapLink: "https://maps.app.goo.gl/W8R5FqGxD7fHovgHA",
    images: [
      { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200", caption: "Rumtek Monastery with prayer flags" },
    ],
    isFeatured: false, isVerified: true,
  },
  // ── ANDAMAN ──────────────────────────────────────────────────────────────
  {
    name: "Radhanagar Beach",
    slug: "radhanagar-beach",
    stateId: stateMap["andaman-nicobar"],
    categoryIds: [catMap["nature"]],
    shortDescription: "Voted Asia's best beach — a pristine crescent of powder-white sand on Havelock Island surrounded by turquoise waters.",
    description: "Radhanagar Beach (Beach No. 7) on Havelock Island in the Andaman archipelago was voted Asia's best beach by Time magazine. The 2 km crescent of pristine white sand is framed by dense tropical forest and lapped by crystal-clear turquoise water. Snorkeling, swimming, and watching the spectacular sunset here are unmissable. The Andaman islands also offer excellent scuba diving at Elephant Beach.",
    bestTimeToVisit: "November to April. Avoid monsoon (May–October) when seas are rough and many services close.",
    entryFee: "Free",
    timings: "6:00 AM – 6:00 PM (after sunset access is prohibited for turtle nesting)",
    mapLink: "https://maps.app.goo.gl/nM4eERsK4SKy7iCL6",
    images: [
      { url: "https://images.unsplash.com/photo-1586523969266-2eb1f5b99b64?w=1200", caption: "The pristine Radhanagar Beach at sunrise" },
    ],
    isFeatured: true, isVerified: true,
  },
];

async function main() {
  await mongoose.connect(MONGODB_URI);
  console.log("✅ Connected to MongoDB");

  // Clear existing data
  await Promise.all([
    State.deleteMany({}),
    City.deleteMany({}),
    Category.deleteMany({}),
    Place.deleteMany({}),
  ]);
  console.log("🗑️  Cleared existing data");

  // Seed states
  const states = await State.insertMany(statesData);
  const stateMap: Record<string, string> = {};
  states.forEach((s) => { stateMap[s.slug] = s._id.toString(); });
  console.log(`✅ Seeded ${states.length} states/UTs`);

  // Seed categories
  const categories = await Category.insertMany(categoriesData);
  const catMap: Record<string, string> = {};
  categories.forEach((c) => { catMap[c.slug] = c._id.toString(); });
  console.log(`✅ Seeded ${categories.length} categories`);

  // Seed places
  const placesData = getPlacesData(stateMap, catMap);
  const places = await Place.insertMany(placesData);
  console.log(`✅ Seeded ${places.length} places`);

  // Verify counts
  console.log("\n📊 Database Summary:");
  console.log(`   States/UTs: ${await State.countDocuments()}`);
  console.log(`   Categories: ${await Category.countDocuments()}`);
  console.log(`   Places:     ${await Place.countDocuments()}`);

  await mongoose.disconnect();
  console.log("\n✅ Seed complete! Database disconnected.");
}

main().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
