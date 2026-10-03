// ─── Types ───────────────────────────────────────────────────────────────────

export type Category = "heritage" | "nature" | "religious" | "adventure" | "art" | "beach" | "wildlife";

export interface Place {
  name: string;
  category: Category;
  img?: string;
  desc: string;
  history: string;
  best: string;
  fee: string;
  timings: string;
  map: string;
}

export interface State {
  slug: string;
  name: string;
  region: string;
  capital: string;
  tagline: string;
  heroImg?: string;
  hidden?: boolean;
  places: Place[];
}

export interface Region {
  key: string;
  name: string;
  blurb: string;
}

// ─── Category config ─────────────────────────────────────────────────────────

export const CATEGORIES: Record<Category, { label: string; color: string; emoji: string }> = {
  heritage:  { label: "Heritage",  color: "#f08c00", emoji: "🏛️" },
  nature:    { label: "Nature",    color: "#0f9898", emoji: "🌿" },
  religious: { label: "Religious", color: "#7c3aed", emoji: "🛕" },
  adventure: { label: "Adventure", color: "#dc2626", emoji: "⛰️" },
  art:       { label: "Art",       color: "#db2777", emoji: "🎨" },
  beach:     { label: "Beach",     color: "#0ea5e9", emoji: "🏖️" },
  wildlife:  { label: "Wildlife",  color: "#16a34a", emoji: "🐾" },
};

// ─── Placeholder images by category ─────────────────────────────────────────
export const PLACEHOLDER_IMAGES: Record<Category, string> = {
  heritage:  "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
  nature:    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  religious: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
  adventure: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
  art:       "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=800&q=80",
  beach:     "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  wildlife:  "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80",
};

export function getPlaceImage(place: Place): string {
  return place.img || PLACEHOLDER_IMAGES[place.category];
}

// ─── Regions ──────────────────────────────────────────────────────────────────

export const REGIONS: Region[] = [
  { key: "north",     name: "North",     blurb: "Himalayan peaks, Mughal grandeur, and the Gangetic plain." },
  { key: "south",     name: "South",     blurb: "Temple towns, backwaters, and ancient Dravidian culture." },
  { key: "east",      name: "East",      blurb: "Mangroves, monasteries, and the Bay of Bengal coast." },
  { key: "west",      name: "West",      blurb: "Desert forts, beach resorts, and the financial capital." },
  { key: "central",   name: "Central",   blurb: "Tiger reserves, waterfalls, and medieval fortresses." },
  { key: "northeast", name: "Northeast", blurb: "Seven sisters steeped in living traditions and misty hills." },
];

// ─── States & Places ─────────────────────────────────────────────────────────

export const STATES: State[] = [
  {
    slug: "rajasthan", name: "Rajasthan", region: "north", capital: "Jaipur",
    tagline: "Land of kings, desert forts, and vibrant bazaars.",
    heroImg: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80",
    places: [
      {
        name: "Amber Fort", category: "heritage",
        img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
        desc: "A majestic hilltop fort overlooking Maota Lake, blending Rajput and Mughal architectural styles.",
        history: "Built in 1592 by Raja Man Singh I, it served as the capital of the Kachhwaha Rajput clan before Jaipur was founded.",
        best: "October to March", fee: "₹100 (Indians), ₹500 (foreigners)", timings: "8:00 AM – 5:30 PM", map: "Amber Fort, Jaipur",
      },
      {
        name: "Jaisalmer Fort", category: "heritage",
        img: "https://images.unsplash.com/photo-1606298855672-3efb63017be8?w=800&q=80",
        desc: "A living golden sandstone fort rising from the Thar Desert, home to thousands of residents.",
        history: "Founded in 1156 AD by Rawal Jaisal, it was a key trade post on the Silk Route for centuries.",
        best: "November to February", fee: "₹100 (Indians), ₹500 (foreigners)", timings: "9:00 AM – 6:00 PM", map: "Jaisalmer Fort, Rajasthan",
      },
      {
        name: "Ranthambore National Park", category: "wildlife",
        img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80",
        desc: "One of India's premier tiger reserves, spread across rugged terrain dotted with medieval ruins.",
        history: "Once the hunting ground of Jaipur's royals, declared a national park in 1980 under Project Tiger.",
        best: "October to June", fee: "₹500–₹1200 (safaris vary)", timings: "6:00 AM – 10:00 AM, 2:30 PM – 6:30 PM", map: "Ranthambore National Park, Rajasthan",
      },
    ],
  },
  {
    slug: "uttar-pradesh", name: "Uttar Pradesh", region: "north", capital: "Lucknow",
    tagline: "Home of the Taj, the Ganga, and Mughal splendour.",
    heroImg: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80",
    places: [
      {
        name: "Taj Mahal", category: "heritage",
        img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
        desc: "An ivory-white marble mausoleum on the banks of the Yamuna — the world's most iconic monument to love.",
        history: "Built by Mughal Emperor Shah Jahan between 1631 and 1648 in memory of his beloved wife Mumtaz Mahal.",
        best: "October to March", fee: "₹50 (Indians), ₹1100 (foreigners)", timings: "6:00 AM – 6:30 PM (closed Fridays)", map: "Taj Mahal, Agra",
      },
      {
        name: "Varanasi Ghats", category: "religious",
        img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&q=80",
        desc: "A series of riverfront steps along the sacred Ganga where pilgrims bathe and ancient rituals unfold daily.",
        history: "Varanasi is one of the world's oldest continuously inhabited cities, sacred to Hindus, Buddhists, and Jains alike.",
        best: "October to March", fee: "Free", timings: "24 hours (Ganga Aarti at dawn and dusk)", map: "Dashashwamedh Ghat, Varanasi",
      },
    ],
  },
  {
    slug: "kerala", name: "Kerala", region: "south", capital: "Thiruvananthapuram",
    tagline: "God's Own Country — backwaters, spice gardens, and Ayurveda.",
    heroImg: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
    places: [
      {
        name: "Alleppey Backwaters", category: "nature",
        img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
        desc: "A labyrinthine network of canals, lagoons, and lakes where traditional kettuvallam houseboats drift through lush paddy fields.",
        history: "The backwaters formed through centuries of silting by rivers; the houseboat tradition dates to the 18th century.",
        best: "September to March", fee: "Houseboat: ₹8,000–₹20,000/night", timings: "Boat rides available all day", map: "Alleppey Backwaters, Kerala",
      },
      {
        name: "Munnar Tea Gardens", category: "nature",
        img: "https://images.unsplash.com/photo-1605196560547-b2f7281b7355?w=800&q=80",
        desc: "Rolling emerald hills carpeted with tea plantations at 1,600 m elevation, crowned by misty peaks.",
        history: "British planters established tea estates here in the late 19th century; today Munnar produces some of India's finest teas.",
        best: "September to May", fee: "Tea museum: ₹75", timings: "Open all day", map: "Munnar, Kerala",
      },
    ],
  },
  {
    slug: "goa", name: "Goa", region: "west", capital: "Panaji",
    tagline: "Sun, sea, spice, and Portuguese-flavoured charm.",
    heroImg: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=80",
    places: [
      {
        name: "Baga Beach", category: "beach",
        img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
        desc: "Goa's liveliest beach, lined with shacks, water sports, and a buzzing nightlife strip.",
        history: "Once a quiet fishing village, Baga transformed into a tourist hub from the 1960s hippie trail onwards.",
        best: "November to February", fee: "Free", timings: "Open all day", map: "Baga Beach, Goa",
      },
      {
        name: "Palolem Beach", category: "beach",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
        desc: "A crescent-shaped paradise in South Goa, flanked by rocky headlands and backed by coconut palms.",
        history: "Palolem remained one of Goa's last undiscovered beaches until backpacker trails opened it up in the 1990s.",
        best: "October to March", fee: "Free", timings: "Open all day", map: "Palolem Beach, Goa",
      },
    ],
  },
  {
    slug: "ladakh", name: "Ladakh", region: "north", capital: "Leh",
    tagline: "The land of high passes — stark, silent, and spectacular.",
    heroImg: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&q=80",
    places: [
      {
        name: "Pangong Lake", category: "nature",
        img: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80",
        desc: "A high-altitude saltwater lake at 4,350 m whose waters shift from sapphire to turquoise to green across the day.",
        history: "Stretching 134 km across the India-China border, Pangong has been a disputed boundary zone since the 1960s.",
        best: "May to September", fee: "Inner Line Permit required (~₹400)", timings: "Open all day", map: "Pangong Lake, Ladakh",
      },
      {
        name: "Nubra Valley", category: "adventure",
        img: "https://images.unsplash.com/photo-1547041702-e67a2dd0700d?w=800&q=80",
        desc: "A high-altitude cold desert with sand dunes, Bactrian camels, and monasteries perched on cliffs.",
        history: "Carved by the Shyok and Nubra rivers, it was part of the ancient Silk Route connecting Leh to Kashgar.",
        best: "June to September", fee: "Inner Line Permit required", timings: "Open all day", map: "Nubra Valley, Ladakh",
      },
    ],
  },
  {
    slug: "uttarakhand", name: "Uttarakhand", region: "north", capital: "Dehradun",
    tagline: "Devbhoomi — the land of gods, glaciers, and the Ganges.",
    heroImg: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    places: [
      {
        name: "Valley of Flowers", category: "nature",
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        desc: "A UNESCO World Heritage alpine valley bursting with hundreds of wildflower species against a Himalayan backdrop.",
        history: "Rediscovered in 1931 by British mountaineer Frank Smythe; protected as a national park since 1982.",
        best: "July to August (peak bloom)", fee: "₹150 (Indians), ₹600 (foreigners)", timings: "7:00 AM – 5:00 PM", map: "Valley of Flowers, Uttarakhand",
      },
      {
        name: "Jim Corbett National Park", category: "wildlife",
        img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80",
        desc: "India's oldest national park and a premier tiger reserve nestled in the Himalayan foothills.",
        history: "Established in 1936 as Hailey National Park; renamed after legendary hunter-turned-conservationist Jim Corbett.",
        best: "November to June", fee: "₹200–₹2000 (zone and vehicle vary)", timings: "6:00 AM – 10:00 AM, 2:30 PM – 6:00 PM", map: "Jim Corbett National Park, Uttarakhand",
      },
    ],
  },
  {
    slug: "karnataka", name: "Karnataka", region: "south", capital: "Bengaluru",
    tagline: "Temple kingdoms, coffee estates, and tech capital.",
    heroImg: "https://images.unsplash.com/photo-1590777485083-7bf0dd25e7bc?w=1200&q=80",
    places: [
      {
        name: "Hampi", category: "heritage",
        img: "https://images.unsplash.com/photo-1590777485083-7bf0dd25e7bc?w=800&q=80",
        desc: "The ruined capital of the Vijayanagara Empire, a UNESCO World Heritage site of surreal boulder-strewn landscape and temple complexes.",
        history: "At its peak in the early 16th century, Hampi was one of the world's largest cities; sacked after the Battle of Talikota in 1565.",
        best: "October to February", fee: "₹40 (Indians), ₹600 (foreigners)", timings: "6:00 AM – 6:00 PM", map: "Hampi, Karnataka",
      },
      {
        name: "Coorg", category: "nature",
        img: "https://images.unsplash.com/photo-1605196560547-b2f7281b7355?w=800&q=80",
        desc: "Scotland of India — misty hills blanketed in coffee and spice plantations with cascading waterfalls.",
        history: "The fiercely independent Kodava people resisted Mughal and British incursions; Coorg was the last kingdom annexed by the British in 1834.",
        best: "October to May", fee: "Varies by attraction", timings: "Open all day", map: "Coorg, Karnataka",
      },
    ],
  },
  {
    slug: "maharashtra", name: "Maharashtra", region: "west", capital: "Mumbai",
    tagline: "Bollywood, cave temples, and the Western Ghats.",
    heroImg: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=1200&q=80",
    places: [
      {
        name: "Ajanta Caves", category: "heritage",
        img: "https://images.unsplash.com/photo-1579531403960-53cf8a4a0da8?w=800&q=80",
        desc: "Thirty rock-cut Buddhist cave monuments featuring some of the finest surviving ancient Indian art and frescoes.",
        history: "Carved between the 2nd century BCE and 480 CE, they were abandoned and rediscovered by a British officer in 1819.",
        best: "November to March", fee: "₹40 (Indians), ₹600 (foreigners)", timings: "9:00 AM – 5:30 PM (closed Mondays)", map: "Ajanta Caves, Aurangabad",
      },
      {
        name: "Gateway of India", category: "heritage",
        img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=800&q=80",
        desc: "An iconic basalt arch overlooking Mumbai Harbour, built to commemorate King George V's visit in 1911.",
        history: "Constructed in Indo-Saracenic style and inaugurated in 1924, it was the last sight of India for British troops leaving after independence.",
        best: "November to February", fee: "Free", timings: "Open all day", map: "Gateway of India, Mumbai",
      },
    ],
  },
];

// ─── Search index helper ──────────────────────────────────────────────────────

export interface SearchItem {
  type: "state" | "place";
  label: string;
  sub: string;
  stateSlug: string;
  placeIdx?: number;
}

export function buildSearchIndex(): SearchItem[] {
  const idx: SearchItem[] = [];
  STATES.forEach((s) => {
    idx.push({ type: "state", label: s.name, sub: s.capital, stateSlug: s.slug });
    s.places.forEach((p, i) => {
      idx.push({
        type: "place",
        label: p.name,
        sub: `${s.name} · ${CATEGORIES[p.category].label}`,
        stateSlug: s.slug,
        placeIdx: i,
      });
    });
  });
  return idx;
}
