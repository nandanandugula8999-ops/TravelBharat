/* TravelBharat app (extracted from index7.html) */



    const DATA = {
      regions: [
        { key: "north", name: "North", blurb: "Himalayan passes, Mughal capitals, desert forts." },
        { key: "west", name: "West", blurb: "Coastline, salt flats, and the Deccan trap hills." },
        { key: "south", name: "South", blurb: "Temple towns, hill stations, backwaters." },
        { key: "east", name: "East", blurb: "River deltas, tribal heartlands, colonial ports." },
        { key: "northeast", name: "Northeast", blurb: "Living root bridges and cloud forests." },
        { key: "central", name: "Central", blurb: "Sandstone temples and tiger forests." }
      ],
      categories: {
        heritage: { label: "Heritage", color: "var(--gold)" },
        nature: { label: "Nature", color: "var(--teal)" },
        religious: { label: "Religious", color: "var(--maroon)" },
        adventure: { label: "Adventure", color: "var(--slate)" }
      },
      states: [
        {
          slug: "rajasthan", name: "Rajasthan", region: "north", capital: "Jaipur", tagline: "Desert forts, painted cities, and the Thar's open horizon.", heroImg: "images/places/amber-fort.webp",
          places: [
            { name: "Amber Fort", category: "heritage", img: "images/places/amber-fort.webp", desc: "A hilltop fort of pale sandstone and marble above Maota Lake, built by the Kachwaha Rajputs and famed for its mirrored Sheesh Mahal.", history: "Construction began in 1592 under Raja Man Singh I and continued for generations under successive rulers.", best: "October to March", fee: "\u20B9100 (Indians), \u20B9500 (foreign nationals)", timings: "8:00 AM \u2013 5:30 PM", map: "Amber Fort, Jaipur" },
            { name: "Jaisalmer Fort", category: "heritage", img: "images/places/jaisalmer-fort.webp", desc: "A living fort of golden sandstone rising from the Thar Desert, still home to families, shops, and havelis within its walls.", history: "Built in 1156 by the Bhati Rajput ruler Rawal Jaisal, one of the few 'living forts' left in India.", best: "November to February", fee: "Free to enter; museum \u20B9100", timings: "Open all day; museum 9:00 AM \u2013 6:00 PM", map: "Jaisalmer Fort, Rajasthan" },
            { name: "Thar Desert Safari, Sam Dunes", category: "adventure", img: "images/places/thar-desert-safari-sam-dunes.webp", desc: "Rolling golden dunes outside Jaisalmer where camel and jeep safaris cross the sand at sunset.", history: "Part of the Thar, one of the world's most densely populated deserts, long crossed by camel caravans on the old trade routes.", best: "October to February", fee: "Safari packages from \u20B9500", timings: "Best at sunrise or sunset", map: "Sam Sand Dunes, Jaisalmer" }
          ]
        },
        {
          slug: "uttar-pradesh", name: "Uttar Pradesh", region: "north", capital: "Lucknow", tagline: "The Ganga plain's temple towns and the Taj at its centre.", heroImg: "images/places/taj-mahal.jpg",
          places: [
            { name: "Taj Mahal", category: "heritage", img: "images/places/taj-mahal.jpg", desc: "A white marble mausoleum on the Yamuna's bank, built by Shah Jahan for his wife Mumtaz Mahal and inlaid with semi-precious stone.", history: "Construction ran from 1632 to 1653, employing an estimated 20,000 artisans; a UNESCO World Heritage Site since 1983.", best: "October to March, at sunrise", fee: "\u20B950 (Indians), \u20B91,100 (foreign nationals)", timings: "Sunrise to sunset, closed Fridays", map: "Taj Mahal, Agra" },
            { name: "Varanasi Ghats", category: "religious", img: "images/places/varanasi-ghats.webp", desc: "A string of stone steps along the Ganga where pilgrims bathe at dawn and cremation fires burn through the night.", history: "Regarded as one of the oldest continuously inhabited cities in the world and central to Hindu pilgrimage for millennia.", best: "October to March", fee: "Free; boat rides from \u20B9200", timings: "Ganga Aarti at Dashashwamedh Ghat, 6:45 PM daily", map: "Dashashwamedh Ghat, Varanasi" }
          ]
        },
        {
          slug: "himachal-pradesh", name: "Himachal Pradesh", region: "north", capital: "Shimla", tagline: "Colonial hill towns giving way to high Himalayan valleys.", heroImg: "images/places/spiti-valley.webp",
          places: [
            { name: "Spiti Valley", category: "adventure", img: "images/places/spiti-valley.webp", desc: "A cold desert valley of monasteries and switchback roads, sitting in the rain shadow of the Himalayas near the Tibetan border.", history: "Historically a Buddhist kingdom linked to Ladakh and Tibet, with monasteries dating back over a thousand years.", best: "June to September (roads open)", fee: "Inner Line Permit required for some areas", timings: "Best travelled in daylight due to mountain roads", map: "Spiti Valley, Himachal Pradesh" },
            { name: "Rohtang Pass", category: "nature", img: "images/places/rohtang-pass.webp", desc: "A high mountain pass near Manali offering snowfields even in summer, gateway to Lahaul and Spiti.", history: "Long used as a trade route between Kullu, Lahaul, and Spiti before modern tunnels reduced the crossing.", best: "May to October", fee: "Permit and vehicle fee apply", timings: "9:00 AM \u2013 4:00 PM (weather permitting)", map: "Rohtang Pass, Manali" }
          ]
        },
        {
          slug: "delhi", name: "Delhi", region: "north", capital: "\u2014", tagline: "Seven historic cities layered into one union territory.", heroImg: "images/places/humayun-s-tomb.webp",
          places: [
            { name: "Humayun's Tomb", category: "heritage", img: "images/places/humayun-s-tomb.webp", desc: "A red sandstone and white marble tomb set in a formal Persian charbagh garden, precursor in style to the Taj Mahal.", history: "Commissioned in 1569 by Humayun's widow Bega Begum, the first garden-tomb on the Indian subcontinent.", best: "October to March", fee: "\u20B935 (Indians), \u20B9550 (foreign nationals)", timings: "6:00 AM \u2013 6:00 PM", map: "Humayun's Tomb, Delhi" },
            { name: "Qutub Minar", category: "heritage", img: "images/places/qutub-minar.webp", desc: "A 73-metre tapering tower of fluted red sandstone and marble, the tallest brick minaret in the world.", history: "Construction began in 1192 under Qutb-ud-din Aibak, completed by his successors over the following century.", best: "October to March", fee: "\u20B935 (Indians), \u20B9550 (foreign nationals)", timings: "7:00 AM \u2013 5:00 PM", map: "Qutub Minar, Delhi" }
          ]
        },
        {
          slug: "jammu-kashmir", name: "Jammu & Kashmir", region: "north", capital: "Srinagar (summer)", tagline: "Alpine lakes and meadows framed by the Pir Panjal.", heroImg: "images/places/dal-lake.webp",
          places: [
            { name: "Dal Lake", category: "nature", img: "images/places/dal-lake.webp", desc: "A lake ringed by the Zabarwan hills, dotted with houseboats and floating vegetable gardens.", history: "Long the centrepiece of Srinagar's Mughal-era gardens, several of which still line its shores.", best: "March to October", fee: "Shikara rides from \u20B9300", timings: "Best at sunrise for the floating market", map: "Dal Lake, Srinagar" },
            { name: "Gulmarg", category: "adventure", img: "images/places/gulmarg.webp", desc: "A meadow town turned ski resort, home to one of the world's highest cable cars, the Gulmarg Gondola.", history: "Developed as a summer retreat under British rule; the name means 'meadow of flowers' in Kashmiri.", best: "December to February (skiing); April to June (meadows)", fee: "Gondola from \u20B9740", timings: "9:00 AM \u2013 5:00 PM", map: "Gulmarg, Kashmir" }
          ]
        },
        {
          slug: "uttarakhand", name: "Uttarakhand", region: "north", capital: "Dehradun", tagline: "Ganga's source valleys, pilgrim trails, and lake-side hill towns.", heroImg: "images/places/rishikesh.webp",
          places: [
            { name: "Rishikesh", category: "religious", img: "images/places/rishikesh.webp", desc: "A pilgrim town on the Ganga where the river leaves the mountains, now also India's best-known base for yoga and white-water rafting.", history: "Long a centre for yoga and meditation, drawing global attention after the Beatles studied here in 1968.", best: "September to April", fee: "Free; rafting packages from \u20B9500", timings: "Ganga Aarti at Triveni Ghat, sunset daily", map: "Rishikesh, Uttarakhand" },
            { name: "Valley of Flowers", category: "nature", img: "images/places/valley-of-flowers.webp", desc: "A high-altitude meadow in the Western Himalayas that erupts into hundreds of alpine flower species each monsoon.", history: "Brought to wider attention in 1931 by British mountaineer Frank Smythe; a UNESCO World Heritage Site since 2005.", best: "July to September", fee: "\u20B9150 (Indians), \u20B9600 (foreign nationals)", timings: "Trek gate open 7:00 AM \u2013 2:00 PM", map: "Valley of Flowers National Park, Uttarakhand" },
            { name: "Nainital", category: "nature", img: "images/places/nainital.webp", desc: "A colonial hill station built around a crescent-shaped lake in the Kumaon foothills, ringed by forested ridges.", history: "Founded by the British in 1841 after a merchant discovered the lake, later developed as a summer retreat.", best: "March to June, September to November", fee: "Free; boating from \u20B9200", timings: "Open all day", map: "Naini Lake, Nainital" }
          ]
        },
        {
          slug: "punjab", name: "Punjab", region: "north", capital: "Chandigarh", tagline: "The Sikh heartland of wheat fields and gurdwara gold.", heroImg: "images/places/golden-temple.webp",
          places: [
            { name: "Golden Temple", category: "religious", img: "images/places/golden-temple.webp", desc: "A gurdwara plated in gold leaf, standing in the middle of the Amrit Sarovar tank at the centre of Amritsar.", history: "Founded by the fourth Sikh Guru, Guru Ram Das, in 1577; the gold plating was added in the early 19th century under Maharaja Ranjit Singh.", best: "October to March", fee: "Free, including the community kitchen", timings: "Open 24 hours", map: "Golden Temple, Amritsar" },
            { name: "Wagah Border", category: "heritage", img: "images/places/wagah-border.webp", desc: "The India-Pakistan border crossing near Amritsar, known for its ceremonial evening flag-lowering by both countries' guards.", history: "Established as a border checkpoint after Partition in 1947; the joint retreat ceremony has run since 1959.", best: "October to March", fee: "Free", timings: "Ceremony begins around sunset daily", map: "Wagah Border, Amritsar" }
          ]
        },
        {
          slug: "haryana", name: "Haryana", region: "north", capital: "Chandigarh", tagline: "The Kurukshetra plains where the Mahabharata is set.", heroImg: "images/places/kurukshetra.webp",
          places: [
            { name: "Kurukshetra", category: "religious", img: "images/places/kurukshetra.webp", desc: "A pilgrimage town of sacred tanks and temples, traditionally held as the battlefield of the Mahabharata and the setting of the Bhagavad Gita.", history: "Referenced across ancient Hindu texts as a site of the great war between the Pandavas and Kauravas.", best: "October to March", fee: "Free; some sites charge nominal entry", timings: "Varies by temple", map: "Brahma Sarovar, Kurukshetra" },
            { name: "Sultanpur National Park", category: "nature", img: "images/places/sultanpur-national-park.webp", desc: "A wetland bird sanctuary near Gurugram that draws migratory flamingos, cranes, and pelicans through the winter.", history: "Declared a national park in 1989 after starting as a bird sanctuary in the 1970s around a natural lake.", best: "November to February", fee: "\u20B950 (Indians), \u20B9200 (foreign nationals)", timings: "7:00 AM \u2013 4:30 PM, closed Mondays", map: "Sultanpur National Park, Haryana" }
          ]
        },
        {
          slug: "ladakh", name: "Ladakh", region: "north", capital: "Leh", tagline: "A cold desert of Buddhist monasteries and passes above 5,000 metres.", heroImg: "images/places/pangong-tso.webp",
          places: [
            { name: "Pangong Tso", category: "nature", img: "images/places/pangong-tso.webp", desc: "A long, high-altitude lake that shifts through shades of blue across the day, stretching from Ladakh into Tibet.", history: "Sits at roughly 4,225 metres and gained wide recognition after appearing in the film '3 Idiots'.", best: "May to September", fee: "Inner Line Permit required", timings: "Best light in early morning and late afternoon", map: "Pangong Lake, Ladakh" },
            { name: "Nubra Valley", category: "adventure", img: "images/places/nubra-valley.webp", desc: "A high desert valley beyond Khardung La, with sand dunes, double-humped Bactrian camels, and Diskit's cliffside monastery.", history: "Once a stop on the Silk Road caravan routes linking Ladakh to Central Asia.", best: "May to September", fee: "Inner Line Permit required", timings: "Best visited in daylight due to mountain roads", map: "Nubra Valley, Ladakh" }
          ]
        },
        {
          slug: "maharashtra", name: "Maharashtra", region: "west", heroImg: "images/places/ajanta-caves.webp", capital: "Mumbai", tagline: "Deccan cave temples, hill forts, and a restless coast.",
          places: [
            { name: "Ajanta Caves", category: "heritage", img: "images/places/ajanta-caves.webp", desc: "Thirty rock-cut Buddhist caves carved into a horseshoe gorge, holding some of India's finest surviving ancient paintings.", history: "Excavated in two phases, roughly 2nd century BCE and 5th century CE, then rediscovered by a British officer in 1819.", best: "November to March", fee: "\u20B940 (Indians), \u20B9600 (foreign nationals)", timings: "9:00 AM \u2013 5:00 PM, closed Mondays", map: "Ajanta Caves, Maharashtra" },
            { name: "Ellora Caves", category: "religious", img: "images/places/ellora-caves.webp", desc: "Thirty-four caves cut side by side for Buddhist, Hindu, and Jain worship, centred on the monolithic Kailasa temple.", history: "Carved between the 6th and 10th centuries CE, with Kailasa temple hewn from a single rock face.", best: "November to March", fee: "\u20B940 (Indians), \u20B9600 (foreign nationals)", timings: "6:00 AM \u2013 6:00 PM, closed Tuesdays", map: "Ellora Caves, Maharashtra" }
          ]
        },
        {
          slug: "gujarat", name: "Gujarat", region: "west", heroImg: "images/places/rann-of-kutch.webp", capital: "Gandhinagar", tagline: "Salt desert, lion sanctuary, and stepwell architecture.",
          places: [
            { name: "Rann of Kutch", category: "nature", img: "images/places/rann-of-kutch.webp", desc: "A vast white salt desert that floods seasonally, hosting the Rann Utsav festival under full moon skies.", history: "One of the largest salt deserts on earth, home to the Banni grasslands and Kutchi craft villages nearby.", best: "November to February", fee: "Free; festival tent packages vary", timings: "Best visited around the full moon", map: "White Rann of Kutch, Gujarat" },
            { name: "Gir National Park", category: "nature", img: "images/places/gir-national-park.webp", desc: "The last wild home of the Asiatic lion, a dry deciduous forest across Gujarat's Saurashtra region.", history: "Protected since 1965; conservation efforts brought the lion population back from under 200 to over 600 today.", best: "December to March", fee: "Safari permits from \u20B9800", timings: "Closed mid-June to mid-October (monsoon)", map: "Gir National Park, Gujarat" }
          ]
        },
        {
          slug: "goa", name: "Goa", region: "west", capital: "Panaji", tagline: "Portuguese churches, laterite forts, and a long Arabian Sea coast.", heroImg: "images/places/basilica-of-bom-jesus.webp",
          places: [
            { name: "Basilica of Bom Jesus", category: "religious", img: "images/places/basilica-of-bom-jesus.webp", desc: "A baroque church in Old Goa holding the mortal remains of St. Francis Xavier in a silver casket.", history: "Completed in 1605 under Portuguese rule, a UNESCO World Heritage Site since 1986.", best: "November to February", fee: "Free", timings: "9:00 AM \u2013 6:30 PM", map: "Basilica of Bom Jesus, Old Goa" },
            { name: "Palolem Beach", category: "nature", img: "images/places/palolem-beach.webp", desc: "A crescent bay of calm water and coconut palms in South Goa, quieter than the northern beach strip.", history: "Grew from a fishing village into a low-rise beach destination favoured for its shape and shallow water.", best: "November to March", fee: "Free", timings: "Open all day", map: "Palolem Beach, Goa" }
          ]
        },
        {
          slug: "kerala", name: "Kerala", region: "south", heroImg: "images/places/alleppey-backwaters.webp", capital: "Thiruvananthapuram", tagline: "Backwaters, tea hills, and a coastline of old spice ports.",
          places: [
            { name: "Alleppey Backwaters", category: "nature", img: "images/places/alleppey-backwaters.webp", desc: "A network of lagoons and canals threaded through coconut groves, best seen from a converted rice-barge houseboat.", history: "The waterways once carried rice and coir cargo before becoming Kerala's signature tourist experience.", best: "September to March", fee: "Houseboat stays from \u20B96,000/night", timings: "Overnight cruises typically depart noon", map: "Alleppey Backwaters, Kerala" },
            { name: "Munnar", category: "nature", img: "images/places/munnar.webp", desc: "Rolling tea estates and misted peaks in the Western Ghats, at the meeting point of three mountain streams.", history: "Developed as a hill station and tea-planting centre by British planters in the late 19th century.", best: "September to March", fee: "Tea museum entry \u20B9150", timings: "Best light in early morning", map: "Munnar, Kerala" }
          ]
        },
        {
          slug: "tamil-nadu", name: "Tamil Nadu", region: "south", heroImg: "images/places/meenakshi-amman-temple.webp", capital: "Chennai", tagline: "Dravidian temple towers and a long classical coastline.",
          places: [
            { name: "Meenakshi Amman Temple", category: "religious", img: "images/places/meenakshi-amman-temple.webp", desc: "A Dravidian temple complex in Madurai with towering, sculpture-covered gopurams dedicated to Meenakshi and Sundareswarar.", history: "The present structure dates largely to the 14th\u201317th centuries, though the site's worship traces back much earlier.", best: "October to March", fee: "Free; camera fee applies", timings: "5:00 AM \u2013 12:30 PM, 4:00 PM \u2013 9:30 PM", map: "Meenakshi Amman Temple, Madurai" },
            { name: "Mahabalipuram Shore Temple", category: "heritage", img: "images/places/mahabalipuram-shore-temple.webp", desc: "A granite temple standing directly against the surf, part of a wider group of rock-cut monuments on the Coromandel coast.", history: "Built under the Pallava dynasty in the 8th century CE; a UNESCO World Heritage Site.", best: "November to February", fee: "\u20B940 (Indians), \u20B9600 (foreign nationals)", timings: "6:00 AM \u2013 6:00 PM", map: "Shore Temple, Mahabalipuram" }
          ]
        },
        {
          slug: "karnataka", name: "Karnataka", region: "south", heroImg: "images/places/hampi.webp", capital: "Bengaluru", tagline: "Ruined empires and coffee hills across the Deccan plateau.",
          places: [
            { name: "Hampi", category: "heritage", img: "images/places/hampi.webp", desc: "A boulder-strewn landscape of temples and ruined royal enclosures, once the capital of the Vijayanagara Empire.", history: "Flourished in the 14th\u201316th centuries as one of the largest cities in the world before its sack in 1565.", best: "October to February", fee: "\u20B940 (Indians), \u20B9600 (foreign nationals)", timings: "6:00 AM \u2013 6:00 PM", map: "Hampi, Karnataka" },
            { name: "Coorg (Kodagu)", category: "nature", img: "images/places/coorg-kodagu.webp", desc: "Coffee-covered hills and misty ridgelines in Karnataka's Western Ghats, known as the Scotland of India.", history: "Home to the Kodava people, with a distinct martial and agrarian culture predating colonial coffee planting.", best: "October to March", fee: "Free; estate tours vary", timings: "Open all day", map: "Coorg, Karnataka" }
          ]
        },
        {
          slug: "telangana", name: "Telangana", region: "south", heroImg: "images/places/golconda-fort.webp", capital: "Hyderabad", tagline: "Qutb Shahi forts and pearl-trading bazaars.",
          places: [
            { name: "Golconda Fort", category: "heritage", img: "images/places/golconda-fort.webp", desc: "A hilltop fortress once the centre of the diamond trade, famed for an acoustic system that carries sound across the complex.", history: "Built up over centuries by the Qutb Shahi dynasty from the 16th century, on earlier Kakatiya foundations.", best: "November to February", fee: "\u20B925 (Indians), \u20B9300 (foreign nationals)", timings: "9:00 AM \u2013 5:30 PM", map: "Golconda Fort, Hyderabad" }
          ]
        },
        {
          slug: "west-bengal", name: "West Bengal", region: "east", heroImg: "images/places/sundarbans-national-park.webp", capital: "Kolkata", tagline: "Colonial river ports and the Sundarbans delta.",
          places: [
            { name: "Sundarbans National Park", category: "nature", img: "images/places/sundarbans-national-park.webp", desc: "The world's largest mangrove forest, straddling the Ganga delta and home to the Bengal tiger.", history: "Declared a national park in 1984 and a UNESCO World Heritage Site, shared across the India-Bangladesh border.", best: "November to February", fee: "Permit and boat safari from \u20B91,500", timings: "Day safaris depart early morning", map: "Sundarbans National Park, West Bengal" },
            { name: "Victoria Memorial", category: "heritage", img: "images/places/victoria-memorial.webp", desc: "A white marble monument and museum in Kolkata, built in memory of Queen Victoria and set in wide formal gardens.", history: "Completed in 1921 after being commissioned by Lord Curzon in 1901, blending British and Mughal architectural styles.", best: "October to March", fee: "\u20B930 (Indians), \u20B9500 (foreign nationals)", timings: "10:00 AM \u2013 5:00 PM, closed Mondays", map: "Victoria Memorial, Kolkata" }
          ]
        },
        {
          slug: "odisha", name: "Odisha", region: "east", heroImg: "images/places/konark-sun-temple.webp", capital: "Bhubaneswar", tagline: "Sun temples, sea coast, and Jagannath's chariots.",
          places: [
            { name: "Konark Sun Temple", category: "heritage", img: "images/places/konark-sun-temple.webp", desc: "A 13th-century temple shaped as a colossal stone chariot with carved wheels, dedicated to the sun god Surya.", history: "Built around 1250 CE under King Narasimhadeva I; a UNESCO World Heritage Site since 1984.", best: "October to February", fee: "\u20B940 (Indians), \u20B9600 (foreign nationals)", timings: "6:00 AM \u2013 8:00 PM", map: "Konark Sun Temple, Odisha" }
          ]
        },
        {
          slug: "meghalaya", name: "Meghalaya", region: "northeast", heroImg: "images/places/double-decker-living-root-bridge.webp", capital: "Shillong", tagline: "Living root bridges under some of the world's heaviest rainfall.",
          places: [
            { name: "Double Decker Living Root Bridge", category: "nature", img: "images/places/double-decker-living-root-bridge.webp", desc: "A bridge of two stacked, still-growing rubber-tree roots trained across a gorge by the Khasi people, near Cherrapunji.", history: "Root bridges take 15\u201320 years to grow and can last for centuries, a Khasi engineering tradition generations old.", best: "October to April", fee: "Village entry fee ~\u20B950", timings: "Trek best started early morning", map: "Double Decker Root Bridge, Nongriat" },
            { name: "Cherrapunji (Sohra)", category: "nature", img: "images/places/cherrapunji-sohra.webp", desc: "A plateau town among the wettest inhabited places on earth, with waterfalls that surge in the monsoon.", history: "Long held the world rainfall record before neighbouring Mawsynram took the title.", best: "October to April for clear views", fee: "Waterfall viewpoints ~\u20B920", timings: "Open all day", map: "Cherrapunji, Meghalaya" }
          ]
        },
        {
          slug: "assam", name: "Assam", region: "northeast", heroImg: "images/places/kaziranga-national-park.webp", capital: "Dispur", tagline: "Brahmaputra grasslands and the last one-horned rhinos.",
          places: [
            { name: "Kaziranga National Park", category: "nature", img: "images/places/kaziranga-national-park.webp", desc: "Floodplain grasslands along the Brahmaputra holding the largest population of the greater one-horned rhinoceros.", history: "Established in 1905 at the urging of Mary Curzon; a UNESCO World Heritage Site since 1985.", best: "November to April", fee: "Safari permits from \u20B9900", timings: "Closed May to October (monsoon)", map: "Kaziranga National Park, Assam" }
          ]
        },
        {
          slug: "madhya-pradesh", name: "Madhya Pradesh", region: "central", heroImg: "images/places/khajuraho-group-of-monuments.webp", capital: "Bhopal", tagline: "Sandstone temple towns and central India's tiger forests.",
          places: [
            { name: "Khajuraho Group of Monuments", category: "religious", img: "images/places/khajuraho-group-of-monuments.webp", desc: "Sandstone temples covered in intricate sculpture, built by the Chandela dynasty across a wide temple town.", history: "Constructed mostly between 950 and 1050 CE; only about 20 of an original 85 temples survive.", best: "October to March", fee: "\u20B940 (Indians), \u20B9600 (foreign nationals)", timings: "Dawn to dusk", map: "Khajuraho Temples, Madhya Pradesh" },
            { name: "Bandhavgarh National Park", category: "nature", img: "images/places/bandhavgarh-national-park.webp", desc: "Dense sal forest and rocky ridges holding one of India's highest densities of Bengal tigers.", history: "Once the hunting reserve of the Maharajas of Rewa before becoming a national park in 1968.", best: "November to April", fee: "Safari permits from \u20B91,000", timings: "Closed July to September (monsoon)", map: "Bandhavgarh National Park, Madhya Pradesh" }
          ]
        },
        {
          slug: "dadra-nagar-haveli-daman-diu", name: "Dadra and Nagar Haveli and Daman and Diu", region: "west", capital: "Daman", tagline: "A small coastal and enclave union territory of Portuguese forts and mangrove creeks.", hidden: true,
          places: [
            { name: "Diu Fort", category: "heritage", img: "images/places/diu-fort.webp", desc: "A Portuguese coastal fort of thick bastions and sea-facing ramparts guarding the old harbour town of Diu.", history: "Built by the Portuguese in 1535 and held until Diu's annexation by India in 1961.", best: "October to March", fee: "\u20B925 approx.", timings: "9:00 AM \u2013 6:00 PM", map: "Diu Fort, Diu" },
            { name: "Vasona Lion Safari Park", category: "nature", img: "images/places/vasona-lion-safari-park.webp", desc: "A forested safari park near Silvassa with Asiatic lions, deer, and a small lake, set among the Sahyadri foothills.", history: "Developed as a wildlife park within Silvassa's forest belt on the Daman Ganga river.", best: "November to February", fee: "\u20B950 approx.", timings: "9:00 AM \u2013 5:00 PM, closed Mondays", map: "Vasona Lion Safari Park, Silvassa" }
          ]
        },
        {
          slug: "andhra-pradesh", name: "Andhra Pradesh", region: "south", capital: "Amaravati", tagline: "Temple hills and the Eastern Ghats' coffee-scented valleys.", hidden: true,
          places: [
            { name: "Tirumala Venkateswara Temple", category: "religious", img: "images/places/tirumala-venkateswara-temple.webp", desc: "One of the world's most-visited pilgrimage sites, crowning the seven hills of Tirumala above Tirupati.", history: "Temple records trace worship here back over a thousand years, with major construction under the Vijayanagara and later dynasties.", best: "September to February", fee: "Free darshan; special entry tickets \u20B9300", timings: "Open nearly 24 hours with scheduled sevas", map: "Tirumala Venkateswara Temple, Tirupati" },
            { name: "Araku Valley", category: "nature", img: "images/places/araku-valley.webp", desc: "A coffee-growing valley in the Eastern Ghats reached by a scenic train ride through tunnels and waterfalls from Visakhapatnam.", history: "Home to indigenous tribal communities and coffee cultivation introduced in the colonial and post-independence periods.", best: "October to March", fee: "Free; Araku train ticket from \u20B9280", timings: "Best as a day trip from Visakhapatnam", map: "Araku Valley, Andhra Pradesh" }
          ]
        },
        {
          slug: "andaman-nicobar", name: "Andaman and Nicobar Islands", region: "south", capital: "Port Blair", tagline: "Coral reefs and colonial history scattered across the Bay of Bengal.", hidden: true,
          places: [
            { name: "Radhanagar Beach, Havelock Island", category: "nature", img: "images/places/radhanagar-beach-havelock-island.webp", desc: "A wide crescent of white sand and turquoise water on Havelock (Swaraj Dweep), ranked among Asia's best beaches.", history: "Named after a village settled by Bengali refugees; Havelock became the Andamans' main tourist base from the 1990s onward.", best: "November to April", fee: "Free", timings: "Open all day", map: "Radhanagar Beach, Havelock Island" },
            { name: "Cellular Jail", category: "heritage", img: "images/places/cellular-jail.webp", desc: "A colonial-era prison in Port Blair built to isolate political prisoners, now a national memorial with a nightly light-and-sound show.", history: "Built by the British between 1896 and 1906 to hold freedom fighters in solitary confinement.", best: "October to March", fee: "\u20B930 approx.; light show \u20B950", timings: "9:00 AM \u2013 5:00 PM; light show evenings", map: "Cellular Jail, Port Blair" }
          ]
        },
        {
          slug: "lakshadweep", name: "Lakshadweep", region: "south", capital: "Kavaratti", tagline: "A scatter of coral atolls in the Arabian Sea, India's smallest union territory.", hidden: true,
          places: [
            { name: "Agatti Island", category: "nature", img: "images/places/agatti-island.webp", desc: "A slender coral island ringed by a shallow turquoise lagoon, the main air gateway into the Lakshadweep archipelago.", history: "Part of the Laccadive chain, long inhabited by a Malayalam-speaking, predominantly Muslim fishing and coconut-farming community.", best: "October to May", fee: "Entry permit required for all visitors", timings: "Lagoon activities typically 9:00 AM \u2013 4:00 PM", map: "Agatti Island, Lakshadweep" }
          ]
        },
        {
          slug: "puducherry", name: "Puducherry", region: "south", capital: "Puducherry", tagline: "A French colonial quarter facing the Bay of Bengal.", hidden: true,
          places: [
            { name: "Auroville", category: "heritage", img: "images/places/auroville.webp", desc: "An experimental township near Puducherry built around the golden, spherical Matrimandir, conceived as a universal community.", history: "Founded in 1968 under the guidance of Mirra Alfassa ('the Mother'), a disciple of philosopher Sri Aurobindo.", best: "October to March", fee: "Free; Matrimandir viewing pass free", timings: "9:00 AM \u2013 5:00 PM, closed Mondays", map: "Auroville, Puducherry" },
            { name: "Promenade Beach & French Quarter", category: "heritage", img: "images/places/promenade-beach-french-quarter.webp", desc: "A seafront promenade lined with mustard-and-white colonial villas, bougainvillea, and a still-used lighthouse.", history: "Laid out under French colonial administration, which held Puducherry until 1954.", best: "October to March", fee: "Free", timings: "Vehicle-free on the promenade 6:00 PM \u2013 7:30 AM", map: "Puducherry Promenade Beach" }
          ]
        },
        {
          slug: "chandigarh", name: "Chandigarh", region: "north", capital: "Chandigarh", tagline: "A planned modernist city shared as the capital of Punjab and Haryana.", hidden: true,
          places: [
            { name: "Rock Garden", category: "heritage", img: "images/places/rock-garden.webp", desc: "A sculpture garden built entirely from industrial and household waste, hidden behind winding walls near the Capitol Complex.", history: "Created secretly from 1957 onward by government employee Nek Chand on forest land, discovered by officials in 1975 and preserved rather than demolished.", best: "October to March", fee: "\u20B930 approx.", timings: "9:00 AM \u2013 6:00 PM (seasonal)", map: "Rock Garden, Chandigarh" },
            { name: "Sukhna Lake", category: "nature", img: "images/places/sukhna-lake.webp", desc: "A reservoir lake at the foothills of the Shivaliks, laid out as the city's promenade and boating spot.", history: "Created in 1958 by damming the Sukhna Choe stream, part of Le Corbusier's original city plan for Chandigarh.", best: "October to March", fee: "Free; boating from \u20B9100", timings: "5:00 AM \u2013 8:00 PM", map: "Sukhna Lake, Chandigarh" }
          ]
        },
        {
          slug: "bihar", name: "Bihar", region: "east", capital: "Patna", tagline: "The ground where Buddhism began, on the Gangetic plain.", hidden: true,
          places: [
            { name: "Mahabodhi Temple, Bodh Gaya", category: "religious", img: "images/places/mahabodhi-temple-bodh-gaya.webp", desc: "A tall brick temple beside the descendant of the Bodhi Tree under which the Buddha is said to have attained enlightenment.", history: "Originally built around the 3rd century BCE under Emperor Ashoka, rebuilt in its current form by the 5th\u20136th century CE; a UNESCO World Heritage Site.", best: "October to March", fee: "Free", timings: "5:00 AM \u2013 9:00 PM", map: "Mahabodhi Temple, Bodh Gaya" },
            { name: "Nalanda Mahavihara", category: "heritage", img: "images/places/nalanda-mahavihara.webp", desc: "The red-brick ruins of an ancient Buddhist monastic university that once drew scholars from across Asia.", history: "Active from around the 5th to 12th centuries CE before its destruction; excavated ruins were inscribed as a UNESCO World Heritage Site in 2016.", best: "October to March", fee: "\u20B925 (Indians), \u20B9300 (foreign nationals)", timings: "9:00 AM \u2013 5:30 PM, closed Fridays", map: "Nalanda Ruins, Bihar" }
          ]
        },
        {
          slug: "jharkhand", name: "Jharkhand", region: "east", capital: "Ranchi", tagline: "Forested plateau country of waterfalls and mining towns.", hidden: true,
          places: [
            { name: "Betla National Park", category: "nature", img: "images/places/betla-national-park.webp", desc: "A sal and bamboo forest in the Palamu hills holding tigers, elephants, and the ruins of two old forts.", history: "Among the earliest reserves brought under Project Tiger in 1974.", best: "November to April", fee: "Safari permits from \u20B9400", timings: "Closed July to September (monsoon)", map: "Betla National Park, Jharkhand" },
            { name: "Baidyanath Temple, Deoghar", category: "religious", img: "images/places/baidyanath-temple-deoghar.webp", desc: "One of the twelve Jyotirlinga shrines to Shiva, at the centre of the town of Deoghar.", history: "Draws one of India's largest annual pilgrimages, the Kanwar Yatra, when devotees carry Ganga water here on foot.", best: "October to February (outside Shravan month crowds)", fee: "Free", timings: "4:00 AM \u2013 3:30 PM, 6:00 PM \u2013 9:00 PM", map: "Baidyanath Temple, Deoghar" }
          ]
        },
        {
          slug: "chhattisgarh", name: "Chhattisgarh", region: "central", capital: "Raipur", tagline: "Waterfalls and tribal forest country in India's heartland.", hidden: true,
          places: [
            { name: "Chitrakoot Falls", category: "nature", img: "images/places/chitrakoot-falls.webp", desc: "A wide, horseshoe-shaped waterfall on the Indravati River, often called the Niagara of India for its breadth in monsoon.", history: "Fed by the Indravati, which rises in the Eastern Ghats and flows through Bastar's forest belt.", best: "October to January", fee: "Free", timings: "Open all day", map: "Chitrakoot Falls, Chhattisgarh" },
            { name: "Kanger Valley National Park", category: "nature", img: "images/places/kanger-valley-national-park.webp", desc: "A dense forest reserve in Bastar holding limestone caves, the Tirathgarh waterfall, and rare wildlife like the hill mynah.", history: "Declared a national park in 1982 to protect one of central India's last stretches of undisturbed forest.", best: "November to April", fee: "Entry and guide fees apply", timings: "Closed during monsoon (July\u2013September)", map: "Kanger Valley National Park, Chhattisgarh" }
          ]
        },
        {
          slug: "sikkim", name: "Sikkim", region: "northeast", capital: "Gangtok", tagline: "Monastery-topped ridges beneath Kangchenjunga.", hidden: true,
          places: [
            { name: "Tsomgo Lake", category: "nature", img: "images/places/tsomgo-lake.webp", desc: "A glacial lake near Gangtok that freezes over in winter, framed by prayer flags and high mountain slopes.", history: "Held as sacred by local Sikkimese communities, historically a stop on the old trade route to Tibet.", best: "March to June, October to December", fee: "Permit required (arranged via registered agents)", timings: "9:00 AM \u2013 3:00 PM (road-dependent)", map: "Tsomgo Lake, Sikkim" },
            { name: "Rumtek Monastery", category: "religious", img: "images/places/rumtek-monastery.webp", desc: "The largest monastery in Sikkim, seat-in-exile of the Karmapa lineage of Tibetan Buddhism.", history: "Rebuilt in the 1960s after the original 16th-century monastery fell into disrepair, following the pattern of its Tibetan namesake.", best: "March to June, October to December", fee: "Free", timings: "6:00 AM \u2013 6:00 PM", map: "Rumtek Monastery, Sikkim" }
          ]
        },
        {
          slug: "arunachal-pradesh", name: "Arunachal Pradesh", region: "northeast", capital: "Itanagar", tagline: "India's easternmost sunrise state, cloaked in Himalayan forest.", hidden: true,
          places: [
            { name: "Tawang Monastery", category: "religious", img: "images/places/tawang-monastery.webp", desc: "India's largest Buddhist monastery, perched on a ridge above the Tawang valley close to the Tibetan border.", history: "Founded in 1680\u201381, associated with the birthplace of the 6th Dalai Lama.", best: "March to June, September to November", fee: "Free; Inner Line Permit required for the state", timings: "6:00 AM \u2013 6:00 PM", map: "Tawang Monastery, Arunachal Pradesh" }
          ]
        },
        {
          slug: "manipur", name: "Manipur", region: "northeast", capital: "Imphal", tagline: "A valley kingdom ringed by hills, centred on a floating lake.", hidden: true,
          places: [
            { name: "Loktak Lake", category: "nature", img: "images/places/loktak-lake.webp", desc: "The largest freshwater lake in Northeast India, famous for its floating phumdis (vegetation mats) and the Keibul Lamjao floating national park.", history: "Keibul Lamjao, on the lake's phumdis, is the last natural habitat of the endangered sangai (brow-antlered deer).", best: "November to February", fee: "Park entry ~\u20B950", timings: "Boat rides typically 8:00 AM \u2013 4:00 PM", map: "Loktak Lake, Manipur" }
          ]
        },
        {
          slug: "mizoram", name: "Mizoram", region: "northeast", capital: "Aizawl", tagline: "Steep green ridgelines along the Myanmar border.", hidden: true,
          places: [
            { name: "Reiek Peak", category: "adventure", img: "images/places/reiek-peak.webp", desc: "A ridge-top viewpoint near Aizawl with a recreated traditional Mizo village and views over layered hill ranges.", history: "Named after the Reiek range and long significant in local Mizo folklore and settlement history.", best: "October to March", fee: "Minimal entry fee", timings: "Open daytime hours", map: "Reiek Peak, Mizoram" }
          ]
        },
        {
          slug: "nagaland", name: "Nagaland", region: "northeast", capital: "Kohima", tagline: "Terraced hills of Naga tribal culture and a World War II battlefield.", hidden: true,
          places: [
            { name: "Kohima War Cemetery", category: "heritage", img: "images/places/kohima-war-cemetery.webp", desc: "A terraced Commonwealth war cemetery on the site of the 1944 Battle of Kohima, a turning point of the Burma campaign.", history: "Maintained by the Commonwealth War Graves Commission; the battle is often called the 'Stalingrad of the East'.", best: "October to March", fee: "Free", timings: "6:00 AM \u2013 6:00 PM", map: "Kohima War Cemetery, Nagaland" },
            { name: "Kisama Heritage Village", category: "heritage", img: "images/places/kisama-heritage-village.webp", desc: "A cluster of traditional morungs representing Nagaland's sixteen major tribes, host to the annual Hornbill Festival.", history: "Built to preserve Naga tribal architecture and culture, and to host the Hornbill Festival launched in 2000.", best: "Early December (Hornbill Festival) or October to March", fee: "Festival passes vary; free outside festival dates", timings: "9:00 AM \u2013 5:00 PM", map: "Kisama Heritage Village, Nagaland" }
          ]
        },
        {
          slug: "tripura", name: "Tripura", region: "northeast", capital: "Agartala", tagline: "A former princely state of palaces and lake pavilions.", hidden: true,
          places: [
            { name: "Ujjayanta Palace", category: "heritage", img: "images/places/ujjayanta-palace.webp", desc: "A white-domed former royal palace in Agartala, now housing the Tripura State Museum amid Mughal-style gardens.", history: "Built in 1901 by Maharaja Radha Kishore Manikya, seat of the Tripura royal family until the state's merger with India in 1949.", best: "October to March", fee: "\u20B920 approx.", timings: "10:00 AM \u2013 5:00 PM, closed Mondays", map: "Ujjayanta Palace, Agartala" },
            { name: "Neermahal", category: "heritage", img: "images/places/neermahal.webp", desc: "A lake palace of white and red stone rising from the middle of Rudrasagar Lake, reached only by boat.", history: "Built in 1930 by Maharaja Bir Bikram Kishore Manikya as a royal summer retreat, blending Hindu and Mughal styles.", best: "October to March", fee: "\u20B920 approx.; boat ride extra", timings: "9:00 AM \u2013 4:30 PM", map: "Neermahal, Tripura" }
          ]
        }
      ]
    };

    const GALLERY = [
      { img: "images/places/taj-mahal.jpg", name: "Taj Mahal", place: "Uttar Pradesh", slug: "uttar-pradesh", idx: 0 },
      { img: "images/places/amber-fort.webp", name: "Amber Fort", place: "Rajasthan", slug: "rajasthan", idx: 0 },
      { img: "images/places/palolem-beach.webp", name: "Palolem Beach", place: "Goa", slug: "goa", idx: 1 },
      { img: "images/places/nubra-valley.webp", name: "Nubra Valley", place: "Ladakh", slug: "ladakh", idx: 1 },
      { img: "images/places/tawang-monastery.webp", name: "Tawang Monastery", place: "Arunachal Pradesh", slug: "arunachal-pradesh", idx: 0 }
    ];

    /* Central image mapping: slug -> local WebP (offline-ready) */
    const DESTINATION_IMAGES = {
      "agatti-island": "images/places/agatti-island.webp",
      "ajanta-caves": "images/places/ajanta-caves.webp",
      "alleppey-backwaters": "images/places/alleppey-backwaters.webp",
      "amber-fort": "images/places/amber-fort.webp",
      "araku-valley": "images/places/araku-valley.webp",
      "auroville": "images/places/auroville.webp",
      "baidyanath-temple-deoghar": "images/places/baidyanath-temple-deoghar.webp",
      "bandhavgarh-national-park": "images/places/bandhavgarh-national-park.webp",
      "basilica-of-bom-jesus": "images/places/basilica-of-bom-jesus.webp",
      "betla-national-park": "images/places/betla-national-park.webp",
      "cellular-jail": "images/places/cellular-jail.webp",
      "cherrapunji-sohra": "images/places/cherrapunji-sohra.webp",
      "chitrakoot-falls": "images/places/chitrakoot-falls.webp",
      "coorg-kodagu": "images/places/coorg-kodagu.webp",
      "dal-lake": "images/places/dal-lake.webp",
      "diu-fort": "images/places/diu-fort.webp",
      "double-decker-living-root-bridge": "images/places/double-decker-living-root-bridge.webp",
      "ellora-caves": "images/places/ellora-caves.webp",
      "gir-national-park": "images/places/gir-national-park.webp",
      "golconda-fort": "images/places/golconda-fort.webp",
      "golden-temple": "images/places/golden-temple.webp",
      "gulmarg": "images/places/gulmarg.webp",
      "hampi": "images/places/hampi.webp",
      "humayun-s-tomb": "images/places/humayun-s-tomb.webp",
      "jaisalmer-fort": "images/places/jaisalmer-fort.webp",
      "kanger-valley-national-park": "images/places/kanger-valley-national-park.webp",
      "kaziranga-national-park": "images/places/kaziranga-national-park.webp",
      "khajuraho-group-of-monuments": "images/places/khajuraho-group-of-monuments.webp",
      "kisama-heritage-village": "images/places/kisama-heritage-village.webp",
      "kohima-war-cemetery": "images/places/kohima-war-cemetery.webp",
      "konark-sun-temple": "images/places/konark-sun-temple.webp",
      "kurukshetra": "images/places/kurukshetra.webp",
      "loktak-lake": "images/places/loktak-lake.webp",
      "mahabalipuram-shore-temple": "images/places/mahabalipuram-shore-temple.webp",
      "mahabodhi-temple-bodh-gaya": "images/places/mahabodhi-temple-bodh-gaya.webp",
      "meenakshi-amman-temple": "images/places/meenakshi-amman-temple.webp",
      "munnar": "images/places/munnar.webp",
      "nainital": "images/places/nainital.webp",
      "nalanda-mahavihara": "images/places/nalanda-mahavihara.webp",
      "neermahal": "images/places/neermahal.webp",
      "nubra-valley": "images/places/nubra-valley.webp",
      "palolem-beach": "images/places/palolem-beach.webp",
      "pangong-tso": "images/places/pangong-tso.webp",
      "promenade-beach-french-quarter": "images/places/promenade-beach-french-quarter.webp",
      "qutub-minar": "images/places/qutub-minar.webp",
      "radhanagar-beach-havelock-island": "images/places/radhanagar-beach-havelock-island.webp",
      "rann-of-kutch": "images/places/rann-of-kutch.webp",
      "reiek-peak": "images/places/reiek-peak.webp",
      "rishikesh": "images/places/rishikesh.webp",
      "rock-garden": "images/places/rock-garden.webp",
      "rohtang-pass": "images/places/rohtang-pass.webp",
      "rumtek-monastery": "images/places/rumtek-monastery.webp",
      "spiti-valley": "images/places/spiti-valley.webp",
      "sukhna-lake": "images/places/sukhna-lake.webp",
      "sultanpur-national-park": "images/places/sultanpur-national-park.webp",
      "sundarbans-national-park": "images/places/sundarbans-national-park.webp",
      "taj-mahal": "images/places/taj-mahal.jpg",
      "tawang-monastery": "images/places/tawang-monastery.webp",
      "thar-desert-safari-sam-dunes": "images/places/thar-desert-safari-sam-dunes.webp",
      "tirumala-venkateswara-temple": "images/places/tirumala-venkateswara-temple.webp",
      "tsomgo-lake": "images/places/tsomgo-lake.webp",
      "ujjayanta-palace": "images/places/ujjayanta-palace.webp",
      "valley-of-flowers": "images/places/valley-of-flowers.webp",
      "varanasi-ghats": "images/places/varanasi-ghats.webp",
      "vasona-lion-safari-park": "images/places/vasona-lion-safari-park.webp",
      "victoria-memorial": "images/places/victoria-memorial.webp",
      "wagah-border": "images/places/wagah-border.webp"
    };
    const IMG_DIMS = {
      "images/places/agatti-island.webp": [800, 600],
      "images/places/ajanta-caves.webp": [800, 585],
      "images/places/alleppey-backwaters.webp": [800, 600],
      "images/places/amber-fort.webp": [800, 500],
      "images/places/araku-valley.webp": [800, 360],
      "images/places/auroville.webp": [800, 600],
      "images/places/baidyanath-temple-deoghar.webp": [800, 600],
      "images/places/bandhavgarh-national-park.webp": [800, 535],
      "images/places/basilica-of-bom-jesus.webp": [800, 600],
      "images/places/betla-national-park.webp": [800, 600],
      "images/places/cellular-jail.webp": [800, 600],
      "images/places/cherrapunji-sohra.webp": [800, 1067],
      "images/places/chitrakoot-falls.webp": [800, 450],
      "images/places/coorg-kodagu.webp": [800, 450],
      "images/places/dal-lake.webp": [800, 533],
      "images/places/diu-fort.webp": [800, 600],
      "images/places/double-decker-living-root-bridge.webp": [800, 600],
      "images/places/ellora-caves.webp": [800, 533],
      "images/places/gir-national-park.webp": [618, 440],
      "images/places/golconda-fort.webp": [800, 1022],
      "images/places/golden-temple.webp": [800, 466],
      "images/places/gulmarg.webp": [800, 1067],
      "images/places/hampi.webp": [800, 533],
      "images/places/humayun-s-tomb.webp": [800, 270],
      "images/places/jaisalmer-fort.webp": [800, 1067],
      "images/places/kanger-valley-national-park.webp": [800, 600],
      "images/places/kaziranga-national-park.webp": [800, 572],
      "images/places/khajuraho-group-of-monuments.webp": [540, 720],
      "images/places/kisama-heritage-village.webp": [800, 655],
      "images/places/kohima-war-cemetery.webp": [800, 540],
      "images/places/konark-sun-temple.webp": [800, 572],
      "images/places/kurukshetra.webp": [800, 600],
      "images/places/loktak-lake.webp": [800, 600],
      "images/places/mahabalipuram-shore-temple.webp": [800, 600],
      "images/places/mahabodhi-temple-bodh-gaya.webp": [800, 448],
      "images/places/meenakshi-amman-temple.webp": [800, 1067],
      "images/places/munnar.webp": [800, 800],
      "images/places/nainital.webp": [800, 533],
      "images/places/nalanda-mahavihara.webp": [800, 533],
      "images/places/neermahal.webp": [800, 600],
      "images/places/nubra-valley.webp": [800, 533],
      "images/places/palolem-beach.webp": [800, 532],
      "images/places/pangong-tso.webp": [800, 530],
      "images/places/promenade-beach-french-quarter.webp": [800, 1200],
      "images/places/qutub-minar.webp": [800, 1067],
      "images/places/radhanagar-beach-havelock-island.webp": [800, 533],
      "images/places/rann-of-kutch.webp": [800, 450],
      "images/places/reiek-peak.webp": [800, 532],
      "images/places/rishikesh.webp": [800, 600],
      "images/places/rock-garden.webp": [800, 1067],
      "images/places/rohtang-pass.webp": [540, 304],
      "images/places/rumtek-monastery.webp": [800, 451],
      "images/places/spiti-valley.webp": [800, 533],
      "images/places/sukhna-lake.webp": [800, 194],
      "images/places/sultanpur-national-park.webp": [800, 533],
      "images/places/sundarbans-national-park.webp": [800, 533],
      "images/places/taj-mahal.jpg": [1920, 1262],
      "images/places/tawang-monastery.webp": [800, 600],
      "images/places/thar-desert-safari-sam-dunes.webp": [800, 533],
      "images/places/tirumala-venkateswara-temple.webp": [800, 642],
      "images/places/tsomgo-lake.webp": [800, 600],
      "images/places/ujjayanta-palace.webp": [800, 565],
      "images/places/valley-of-flowers.webp": [800, 600],
      "images/places/varanasi-ghats.webp": [800, 533],
      "images/places/vasona-lion-safari-park.webp": [800, 532],
      "images/places/victoria-memorial.webp": [800, 600],
      "images/places/wagah-border.webp": [800, 600]
    };
    function imgWH(src) { const d = IMG_DIMS[src]; return d ? ` width="${d[0]}" height="${d[1]}"` : ''; }
    const IMG_FALLBACK = 'images/places/fallback.webp';
    // Global safety net: any image that fails to load falls back instead of breaking layout
    document.addEventListener('error', (e) => {
      const t = e.target;
      if (t && t.tagName === 'IMG' && !t.dataset.fb && t.src.indexOf('fallback.webp') === -1) {
        t.dataset.fb = '1';
        t.src = IMG_FALLBACK;
      }
    }, true);

    function renderGallery() {
      const el = document.getElementById('galleryGrid');
      if (!el) return;
      el.innerHTML = GALLERY.map(g => `
    <div class="gallery-item" role="button" tabindex="0" aria-label="View details for ${g.name}, ${g.place}" onclick="openPlace('${g.slug}', ${g.idx}, false)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openPlace('${g.slug}', ${g.idx}, false);}">
      <img src="${g.img}"${imgWH(g.img)} alt="${g.name}, ${g.place}" loading="lazy" decoding="async">
      <div class="gallery-cap"><span>${g.name}</span><small>${g.place}</small></div>
    </div>
  `).join('');
    }

    // MakeMyTrip target. Every Book button opens the holiday-packages page
    // for that place's own destination (city/state from its map field),
    // e.g. Taj Mahal -> agra-travel-packages.html, not the MMT homepage.
    const MMT_URL = 'https://www.makemytrip.com/';
    // A few map towns are too small for MakeMyTrip to list, so resolve
    // them to the nearest destination MakeMyTrip does list.
    const MMT_DEST_ALIAS = {
      'himachal pradesh': 'himachal',
      'old goa': 'goa',
      'havelock island': 'andaman',
      'port blair': 'andaman',
      'nongriat': 'meghalaya',
      'kurukshetra': 'haryana',
      'silvassa': 'daman'
    };
    function mmtSlug(s) {
      return String(s || '').toLowerCase().trim()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '_');
    }
    function mmtDestination(state, place) {
      let city = '';
      if (place && place.map && place.map.indexOf(',') !== -1) {
        city = place.map.split(',').pop().trim();
      }
      const alias = MMT_DEST_ALIAS[city.toLowerCase()];
      if (alias) return alias;
      if (city) return city;
      return (state && state.name) || '';
    }
    function mmtLink(state, place) {
      const slug = mmtSlug(mmtDestination(state, place)) || mmtSlug(state && state.name);
      if (!slug) return MMT_URL;
      return MMT_URL + 'holidays-india/' + slug + '-travel-packages.html';
    }

    function catColor(cat) { return DATA.categories[cat] ? DATA.categories[cat].color : "var(--gold)"; }
    function catLabel(cat) { return DATA.categories[cat] ? DATA.categories[cat].label : cat; }

    function renderRegionJump() {
      const el = document.getElementById('regionJump');
      el.innerHTML = DATA.regions.map(r => `<button onclick="scrollToRegion('${r.key}')">${r.name}</button>`).join('');
    }

    function renderRegions() {
      const wrap = document.getElementById('regionsWrap');
      wrap.innerHTML = DATA.regions.map(r => {
        const states = DATA.states.filter(s => s.region === r.key && !s.hidden);
        if (!states.length) return '';
        const tiles = states.map(s => `
      <div class="state-tile ${s.heroImg ? 'has-img' : ''}" role="button" tabindex="0" aria-label="Explore ${s.name}" onclick="openState('${s.slug}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openState('${s.slug}');}">
        ${s.heroImg ? `<div class="state-tile-img"><img src="${s.heroImg}"${imgWH(s.heroImg)} alt="${s.name}" loading="lazy" decoding="async"></div>` : ''}
        <div class="state-tile-body">
          <div class="rule"></div>
          <h3>${s.name}</h3>
          <div class="cap">${s.capital}</div>
          <div class="tag">${s.tagline}</div>
        </div>
      </div>`).join('');
        return `
      <div class="region-block" id="region-${r.key}">
        <div class="region-head">
          <h2>${r.name}</h2>
          <p>${r.blurb}</p>
        </div>
        <div class="state-grid">${tiles}</div>
      </div>`;
      }).join('');
    }

    function scrollToRegion(key) {
      goHome();
      requestAnimationFrame(() => {
        const target = document.getElementById('region-' + key);
        if (!target) return;
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    /* Footer FAQ link: user-initiated return home, then scroll to FAQ (no auto shifts) */
    function goFaq() {
      goHome();
      requestAnimationFrame(() => {
        const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const f = document.getElementById('faqs');
        if (f) f.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      });
    }

    function goHome() {
      document.getElementById('stateView').classList.remove('active');
      document.getElementById('homeHero').style.display = '';
      document.getElementById('regionsWrap').style.display = '';
      document.querySelector('.gallery-section').style.display = '';
      const disc = document.getElementById('discover');
      if (disc) disc.style.display = '';
      ['browseCategory', 'hiddenGems', 'planTrip'].forEach(id => {
        const s = document.getElementById(id);
        if (s) s.style.display = '';
      });
      closeModal();
      if (typeof _homeScroll === 'number') {
        window.scrollTo({ top: _homeScroll, behavior: 'auto' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    let currentStateSlug = null;
    let activeFilter = 'all';
    let _homeScroll = 0;

    function openState(slug) {
      const state = DATA.states.find(s => s.slug === slug);
      if (!state) { showToast('Destination not found'); return; }
      _homeScroll = window.scrollY || 0;
      currentStateSlug = slug;
      activeFilter = 'all';
      document.getElementById('homeHero').style.display = 'none';
      document.getElementById('regionsWrap').style.display = 'none';
      document.querySelector('.gallery-section').style.display = 'none';
      const discHide = document.getElementById('discover');
      if (discHide) discHide.style.display = 'none';
      ['browseCategory', 'hiddenGems', 'planTrip'].forEach(id => {
        const s = document.getElementById(id);
        if (s) s.style.display = 'none';
      });
      const view = document.getElementById('stateView');
      view.classList.add('active');
      renderStateView(state);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function renderStateView(state) {
      const view = document.getElementById('stateView');
      if (!state || !view) return;
      const regionName = (DATA.regions.find(r => r.key === state.region) || {}).name || 'India';
      const cats = [...new Set((state.places || []).map(p => p.category))];
      const chips = ['all', ...cats].map(c => `
    <button class="chip ${c === activeFilter ? 'active' : ''}" onclick="setFilter('${c}')">${c === 'all' ? 'All places' : catLabel(c)}</button>
  `).join('');
      view.innerHTML = `
    <div class="wrap">
      <button class="back-link" onclick="goHome()">&larr; All states</button>
      <div class="state-header">
        <h2>${state.name}</h2>
        <div class="state-meta">Capital: ${state.capital} &middot; ${regionName} India</div>
        <div class="state-count" aria-live="polite">${state.places.length} destination${state.places.length !== 1 ? 's' : ''} &middot; ${cats.length} categor${cats.length !== 1 ? 'ies' : 'y'}: ${cats.map(catLabel).join(', ')}</div>
        <p class="state-desc">${state.tagline}</p>
      </div>
      <div class="chip-row" id="chipRow">${chips}</div>
      <div class="itinerary-banner" id="itineraryBanner">
        <div>
          <div class="it-title">Build your ${state.name} trip</div>
          <div class="it-sub">Pick places from the list below, then generate a day-by-day plan.</div>
        </div>
        <div style="display:flex;align-items:center;gap:12px;">
          <div class="it-count" id="itineraryCount">0 places selected</div>
          <button class="itinerary-btn" id="generateItineraryBtn" type="button" onclick="openItineraryModal()" disabled>Generate itinerary</button>
        </div>
      </div>
      <div class="place-list" id="placeList" aria-live="polite"></div>
    </div>
  `;
      renderPlaces(state);
      updateItineraryUI();
    }

    function setFilter(cat) {
      activeFilter = cat;
      const state = DATA.states.find(s => s.slug === currentStateSlug);
      renderStateView(state);
    }

    /* Shared card helpers: duration is a suggestion derived from category (no data change) */
    function recommendedDuration(p) {
      if (p.category === 'heritage') return 'Half day';
      if (p.category === 'religious') return '2\u20133 hours';
      if (p.category === 'adventure') return 'Full day';
      return 'Half\u2013full day';
    }
    function cardMedia(state, p) {
      if (p.img) return `<div class="pc-media"><img src="${p.img}"${imgWH(p.img)} alt="${p.name}, ${state.name}" loading="lazy" decoding="async" draggable="false"><span class="pc-badge">${catLabel(p.category)}</span></div>`;
      return `<div class="pc-media pc-media-empty"><span class="pc-badge">${catLabel(p.category)}</span><span class="pc-empty-label">${catLabel(p.category)}</span></div>`;
    }

    function renderPlaces(state) {
      const list = document.getElementById('placeList');
      if (!list) return;
      const places = (state.places || []).filter(p => activeFilter === 'all' || p.category === activeFilter);
      if (!places.length) {
        list.innerHTML = `<div class="discover-empty">No places in this category yet. <button class="discover-reset" type="button" onclick="setFilter('all')">Show all places</button></div>`;
        return;
      }
      list.innerHTML = places.map((p, i) => {
        const realIdx = state.places.indexOf(p);
        const key = state.slug + '|' + realIdx;
        const isWish = wishlist.has(key);
        const inTrip = itinerary.has(key);
        return `
    <div class="place-card" style="--cat-color:${catColor(p.category)}" onclick="openPlace('${state.slug}', ${realIdx}, true)">
      <button class="wish-btn ${isWish ? 'active' : ''}" data-wish="${state.slug}|${realIdx}" onclick="event.stopPropagation(); toggleWish('${state.slug}', ${realIdx}, this)" aria-label="Save ${p.name} to wishlist" aria-pressed="${isWish}">
        ${isWish ? '\u2605' : ' \u2606'}
      </button>
      ${cardMedia(state, p)}
      <div class="place-card-body">
        <div class="cat-label">${catLabel(p.category)} &middot; ${state.name}</div>
        <h4>${p.name}</h4>
        <p class="pc-desc">${p.desc}</p>
        <dl class="pc-meta">
          <div><dt>Best time</dt><dd>${p.best}</dd></div>
          <div><dt>Duration</dt><dd>Suggested: ${recommendedDuration(p)}</dd></div>
          <div><dt>Entry</dt><dd>${p.fee}</dd></div>
        </dl>
        <a class="pc-map-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.map)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" aria-label="View ${p.name} on Google Maps">&#x1F4CD; View on Map</a>
      </div>
      <div class="place-card-actions">
        <button class="pc-details-btn" type="button" onclick="event.stopPropagation(); openPlace('${state.slug}', ${realIdx}, true)">View details</button>
        <button class="it-add-btn ${inTrip ? 'added' : ''}" data-trip="${state.slug}|${realIdx}" type="button" onclick="event.stopPropagation(); toggleItinerary('${state.slug}', ${realIdx}, this)" aria-pressed="${inTrip}">${inTrip ? '\u2713 Added to trip' : '+ Add to trip'}</button>
        <a class="mmt-card-btn" href="${mmtLink(state, p)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" aria-label="Book a trip to ${p.name} on MakeMyTrip">&#x1F9F3; Book on MakeMyTrip</a>
      </div>
    </div>`;
      }).join('');
    }

    /* Generic, honest travel tips derived from category + data (no invented facts) */
    function travelTips(p) {
      const tips = [];
      if (p.category === 'heritage') tips.push('Wear comfortable walking shoes — forts involve climbs and uneven steps.', 'Carry water; shade is limited inside large complexes.');
      else if (p.category === 'nature') tips.push('Start early for the best light and smaller crowds.', 'Check seasonal closures before going — many parks shut in monsoon.');
      else if (p.category === 'religious') tips.push('Dress modestly and confirm shrine timings — midday closures are common.', 'Footwear rules apply at most sanctuaries; socks help.');
      else tips.push('Check road and weather status on the day — mountain routes change fast.', 'Carry layers; temperatures swing sharply by altitude and sun.');
      if (/permit/i.test(p.best)) tips.push('A permit is mentioned for this area — arrange it at least a day ahead.');
      return tips.slice(0, 3);
    }

    let _modalLastFocus = null;
    function onStarToggle(stateSlug, idx) {
      const textBtn = document.getElementById('modalWishTextBtn');
      toggleWishText(stateSlug, idx, textBtn || document.createElement('button'));
    }
    function toggleWishText(stateSlug, idx, btn) {
      const star = document.getElementById('modalWishBtn');
      toggleWish(stateSlug, idx, star || btn);
      const added = wishlist.has(stateSlug + '|' + idx);
      btn.classList.toggle('added', added);
      btn.innerHTML = added ? '\u2605 Saved to wishlist' : '\u2606 Add to Wishlist';
      btn.setAttribute('aria-pressed', added ? 'true' : 'false');
      syncWishButtons();
    }

    /* Modal scroll-lock: freeze the page behind any open dialog (nesting-safe) */
    let _lockCount = 0;
    function lockScroll() {
      _lockCount++;
      document.body.style.overflow = 'hidden';
    }
    function unlockScroll() {
      _lockCount = Math.max(0, _lockCount - 1);
      if (!_lockCount) document.body.style.overflow = '';
    }

    function openPlace(stateSlug, idx, fromRegion) {
      const state = DATA.states.find(s => s.slug === stateSlug);
      const p = state && state.places[idx];
      if (!state || !p) { showToast('Destination not found'); return; }
      const overlay = document.getElementById('modalOverlay');
      const nearby = state.places.filter((x, i) => i !== idx).slice(0, 3);
      const key = stateSlug + '|' + idx;
      const isWish = wishlist.has(key);
      const inTrip = (typeof itinerary !== 'undefined') && itinerary.has(key);
      const tips = travelTips(p);
      _modalLastFocus = document.activeElement;
      document.getElementById('modalBody').style.setProperty('--cat-color', catColor(p.category));
      document.getElementById('modalBody').innerHTML = `
    <button class="wish-btn ${isWish ? 'active' : ''}" id="modalWishBtn" data-wish="${stateSlug}|${idx}" style="top:54px;right:18px;" onclick="onStarToggle('${stateSlug}', ${idx})" aria-label="Save ${p.name} to wishlist" aria-pressed="${isWish}">
      ${isWish ? '\u2605' : ' \u2606'}
    </button>
    <button class="modal-close" id="modalCloseBtn" onclick="closeModal()" aria-label="Close details">&times;</button>
    ${p.img ? `<div class="modal-img"><img src="${p.img}"${imgWH(p.img)} alt="${p.name}, ${state.name}" loading="lazy" decoding="async"></div>`
          : `<div class="modal-img" style="display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--gold-bg),var(--paper-raised));font-family:'Fraunces',serif;font-size:14px;color:var(--gold);">${catLabel(p.category)}</div>`}
    <div class="cat-label">${catLabel(p.category)}</div>
    <h3 id="modalTitle">${p.name}</h3>
    <div class="loc-line">${state.name}</div>
    <p class="desc">${p.desc}</p>
    <p class="desc">${p.history}</p>
    <div class="fact-grid">
      <div class="fact"><div class="k">Best time to visit</div><div class="v">${p.best}</div></div>
      <div class="fact"><div class="k">Recommended duration</div><div class="v">Suggested: ${recommendedDuration(p)}</div></div>
      <div class="fact"><div class="k">Timings</div><div class="v">${p.timings}</div></div>
      <div class="fact"><div class="k">Entry fee</div><div class="v">${p.fee}</div></div>
      <div class="fact"><div class="k">Location</div><div class="v">${p.map}</div></div>
      <div class="fact"><div class="k">State</div><div class="v">${state.name}</div></div>
    </div>
    ${tips.length ? `<div class="tips"><div class="k">Good to know</div><ul>${tips.map(t => `<li>${t}</li>`).join('')}</ul></div>` : ''}
    <div class="btn-row">
      <a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.map)}" target="_blank" rel="noopener noreferrer">&#x1F4CD; View on map</a>
      ${fromRegion ? `<a class="book-btn" href="${mmtLink(state, p)}" target="_blank" rel="noopener noreferrer" title="Book your trip to ${p.name} on MakeMyTrip">&#x1F9F3; Book Your Trip</a>` : ''}
      <button class="modal-act ${isWish ? 'added' : ''}" id="modalWishTextBtn" data-wish="${stateSlug}|${idx}" type="button" onclick="toggleWishText('${stateSlug}', ${idx}, this)" aria-pressed="${isWish}">${isWish ? '\u2605 Saved to wishlist' : '\u2606 Add to Wishlist'}</button>
      <button class="it-add-btn modal-trip-btn ${inTrip ? 'added' : ''}" data-trip="${stateSlug}|${idx}" type="button" onclick="toggleItinerary('${stateSlug}', ${idx}, this)" aria-pressed="${inTrip}">${inTrip ? '\u2713 Added to trip' : '+ Add to Trip'}</button>
    </div>
    ${nearby.length ? `<div class="nearby">
      <div class="k">Nearby in ${state.name}</div>
      ${nearby.map(n => `<div class="nearby-item" role="button" tabindex="0" onclick="openPlace('${state.slug}', ${state.places.indexOf(n)}, true)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openPlace('${state.slug}', ${state.places.indexOf(n)}, true);}">${n.name}</div>`).join('')}
    </div>` : ''}
    <div class="modal-foot"><button class="modal-foot-close" type="button" onclick="closeModal()">Close</button></div>
  `;
      const wasOpen = overlay.classList.contains('open');
      overlay.classList.add('open');
      if (!wasOpen) lockScroll();
      const closeBtn = document.getElementById('modalCloseBtn');
      if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
      const ov = document.getElementById('modalOverlay');
      if (!ov.classList.contains('open')) return;
      ov.classList.remove('open');
      unlockScroll();
      if (_modalLastFocus && _modalLastFocus.focus) { try { _modalLastFocus.focus(); } catch (e) { } _modalLastFocus = null; }
    }
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
      if (e.target.id === 'modalOverlay') closeModal();
    });
    /* Keyboard focus trap: keep Tab cycling inside the open destination modal */
    document.getElementById('modalOverlay').addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      const overlay = document.getElementById('modalOverlay');
      if (!overlay.classList.contains('open')) return;
      const items = Array.from(overlay.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])')).filter(el => !el.disabled && el.offsetParent !== null);
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    function escHtml(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

    /* primary nav: mobile panel + dropdowns */
    function toggleMainNav() {
      const nav = document.getElementById('mainNav');
      const btn = document.getElementById('navToggle');
      const open = nav && !nav.classList.contains('open');
      if (nav) nav.classList.toggle('open', open);
      if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    function closeMainNav() {
      const nav = document.getElementById('mainNav');
      const btn = document.getElementById('navToggle');
      if (nav) nav.classList.remove('open');
      if (btn) btn.setAttribute('aria-expanded', 'false');
      document.querySelectorAll('.nav-drop.open').forEach(d => {
        d.classList.remove('open');
        const b = d.querySelector('.nav-link');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
    }
    function toggleNavDrop(name) {
      const drop = document.getElementById('navDrop-' + name);
      if (!drop) return;
      const wasOpen = drop.classList.contains('open');
      document.querySelectorAll('.nav-drop.open').forEach(d => {
        d.classList.remove('open');
        const b = d.querySelector('.nav-link');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        drop.classList.add('open');
        const b = drop.querySelector('.nav-link');
        if (b) b.setAttribute('aria-expanded', 'true');
      }
    }
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.main-nav') && !e.target.closest('.nav-toggle')) closeMainNav();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMainNav();
    });

    /* light / dark theme toggle (persisted, defaults to system) */
    function effectiveTheme() {
      const t = document.documentElement.getAttribute('data-theme');
      if (t === 'dark' || t === 'light') return t;
      return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    }
    function syncThemeBtn() {
      const btn = document.getElementById('themeBtn');
      if (!btn) return;
      const dark = effectiveTheme() === 'dark';
      btn.innerHTML = dark ? '&#9728;' : '&#9789;';
      btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
      btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    }
    function setTheme(t) {
      document.documentElement.setAttribute('data-theme', t);
      try { localStorage.setItem('travelbharat-theme', t); } catch (e) {}
      syncThemeBtn();
    }
    function toggleTheme() {
      setTheme(effectiveTheme() === 'dark' ? 'light' : 'dark');
    }

    /* search */
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    function buildSearchIndex() {
      const idx = [];
      DATA.states.forEach(s => {
        idx.push({ type: 'state', label: s.name, sub: s.capital, slug: s.slug });
        s.places.forEach((p, i) => {
          idx.push({ type: 'place', label: p.name, sub: `${s.name} \u00B7 ${catLabel(p.category)}`, slug: s.slug, idx: i });
        });
      });
      return idx;
    }
    const SEARCH_INDEX = buildSearchIndex();

    let lastMatches = [];
    let activeMatch = -1;

    function syncSearchClear() {
      const shell = searchInput.closest('.search-shell');
      if (shell) shell.classList.toggle('has-text', searchInput.value.length > 0);
      searchInput.setAttribute('aria-expanded', searchResults.classList.contains('open') ? 'true' : 'false');
    }

    function renderSearchResults() {
      const q = searchInput.value.trim();
      if (!q) {
        searchResults.classList.remove('open');
        lastMatches = [];
        activeMatch = -1;
        syncSearchClear();
        return;
      }
      const ql = q.toLowerCase();
      lastMatches = SEARCH_INDEX.filter(item =>
        item.label.toLowerCase().includes(ql) || item.sub.toLowerCase().includes(ql)
      ).slice(0, 8);
      activeMatch = -1;
      if (!lastMatches.length) {
        searchResults.innerHTML = `<div class="search-empty">No matches for &ldquo;${escHtml(q)}&rdquo;. Try a state, place or category.</div>`;
      } else {
        searchResults.innerHTML = lastMatches.map((m, i) => `
      <div class="sr-item" role="option" id="sr-opt-${i}" aria-selected="false" data-idx="${i}" tabindex="-1">
        ${escHtml(m.label)}<small>${escHtml(m.sub)}</small>
      </div>
    `).join('');
      }
      searchResults.classList.add('open');
      searchInput.setAttribute('aria-activedescendant', '');
      syncSearchClear();
    }

    function highlightMatch() {
      searchResults.querySelectorAll('.sr-item').forEach((el, i) => {
        const on = i === activeMatch;
        el.classList.toggle('sr-active', on);
        el.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      searchInput.setAttribute('aria-activedescendant', activeMatch >= 0 ? 'sr-opt-' + activeMatch : '');
    }

    let _searchTimer = null;
    searchInput.addEventListener('input', () => {
      clearTimeout(_searchTimer);
      _searchTimer = setTimeout(renderSearchResults, 120);
    });
    searchResults.addEventListener('click', (e) => {
      const item = e.target.closest('.sr-item');
      if (item && item.dataset.idx != null && lastMatches[parseInt(item.dataset.idx, 10)]) {
        handleSearchClick(lastMatches[parseInt(item.dataset.idx, 10)]);
      }
    });
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        if (!lastMatches.length) return;
        e.preventDefault();
        activeMatch = e.key === 'ArrowDown'
          ? (activeMatch + 1) % lastMatches.length
          : (activeMatch - 1 + lastMatches.length) % lastMatches.length;
        highlightMatch();
      } else if (e.key === 'Enter') {
        if (activeMatch >= 0 && lastMatches[activeMatch]) handleSearchClick(lastMatches[activeMatch]);
        else if (lastMatches.length === 1) handleSearchClick(lastMatches[0]);
      } else if (e.key === 'Escape') {
        if (searchInput.value) { searchInput.value = ''; renderSearchResults(); }
        else { searchResults.classList.remove('open'); syncSearchClear(); }
      }
    });
    document.getElementById('searchClear').addEventListener('click', () => {
      searchInput.value = '';
      renderSearchResults();
      searchInput.focus();
    });

    function handleSearchClick(m) {
      searchResults.classList.remove('open');
      searchInput.value = '';
      lastMatches = [];
      activeMatch = -1;
      syncSearchClear();
      if (m.type === 'state') {
        openState(m.slug);
      } else {
        openState(m.slug);
        setTimeout(() => openPlace(m.slug, m.idx), 60);
      }
    }

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-shell')) {
        searchResults.classList.remove('open');
        syncSearchClear();
      }
    });

    renderRegionJump();
    renderRegions();
    renderGallery();

    // ==== DESTINATION DISCOVERY (filter + sort, user-controlled, no page jumps) ====
    const DISCOVER = { region: 'all', state: 'all', category: 'all', season: 'all', dtype: 'all', popular: 'all', sort: 'recommended' };
    const MONTHS = { january: 1, february: 2, march: 3, april: 4, may: 5, june: 6, july: 7, august: 8, september: 9, october: 10, november: 11, december: 12 };
    const SEASONS = { winter: [10, 11, 12, 1, 2, 3], summer: [4, 5, 6], monsoon: [7, 8, 9] };

    function discoverMonths(best) {
      const t = String(best || '').toLowerCase();
      const found = [];
      Object.keys(MONTHS).forEach(m => { if (t.includes(m)) found.push(MONTHS[m]); });
      if (!found.length) return [];
      if (found.length >= 2 && /to|-|–/.test(t)) {
        const out = [];
        let cur = found[0];
        const end = found[found.length - 1];
        for (let n = 0; n < 12; n++) { out.push(cur); if (cur === end) break; cur = cur % 12 + 1; }
        return out;
      }
      return found;
    }
    function discoverSeasonMatch(best, season) {
      if (season === 'all') return true;
      const months = discoverMonths(best);
      if (!months.length) return true;
      return months.some(m => SEASONS[season].includes(m));
    }
    function discoverType(p) {
      const t = `${p.name} ${p.desc}`.toLowerCase();
      if (/fort|palace|fortress|caves|tomb|minar|memorial|jail/.test(t)) return 'forts';
      if (/beach|coast|island|lagoon/.test(t)) return 'beach';
      if (/temple|shrine|church|mosque|monastery|gurdwara|ghat|dargah/.test(t)) return 'sacred';
      if (/lake|river|waterfall|backwater|falls|delta/.test(t)) return 'water';
      if (/park|sanctuary|safari|tiger|lion|rhino|reserve|wildlife/.test(t)) return 'wildlife';
      if (/hill|valley|peak|pass|desert|dune|meadow|glacier/.test(t)) return 'hills';
      return 'other';
    }
    function discoverPopularSet() {
      const s = new Set();
      if (typeof GALLERY !== 'undefined') GALLERY.forEach(g => s.add(g.slug + '|' + g.idx));
      return s;
    }
    function discoverAllPlaces() {
      const out = [];
      DATA.states.forEach(st => st.places.forEach((p, i) => out.push({ state: st, place: p, idx: i })));
      return out;
    }
    function toggleDiscoverPanel() {
      const panel = document.getElementById('filterPanel');
      const btn = document.getElementById('filterBtn');
      const show = panel.hidden;
      panel.hidden = !show;
      btn.setAttribute('aria-expanded', show ? 'true' : 'false');
    }
    function setDiscoverFilter(key, value) { DISCOVER[key] = value; syncDiscoverControls(); applyDiscoverFilters(); }
    function setDiscoverSort(value) { DISCOVER.sort = value; applyDiscoverFilters(); }
    function resetDiscoverFilters() {
      DISCOVER.region = 'all'; DISCOVER.state = 'all'; DISCOVER.category = 'all';
      DISCOVER.season = 'all'; DISCOVER.dtype = 'all'; DISCOVER.popular = 'all';
      document.getElementById('fRegion').value = 'all';
      document.getElementById('fState').value = 'all';
      document.getElementById('fCategory').value = 'all';
      document.getElementById('fSeason').value = 'all';
      document.getElementById('fType').value = 'all';
      document.getElementById('fPopular').checked = false;
      document.getElementById('sortSelect').value = 'recommended';
      DISCOVER.sort = 'recommended';
      applyDiscoverFilters();
    }
    function clearDiscoverKey(key) {
      const defaults = { region: 'all', state: 'all', category: 'all', season: 'all', dtype: 'all', popular: 'all' };
      DISCOVER[key] = defaults[key];
      const map = { region: 'fRegion', state: 'fState', category: 'fCategory', season: 'fSeason', dtype: 'fType' };
      if (map[key]) document.getElementById(map[key]).value = 'all';
      if (key === 'popular') document.getElementById('fPopular').checked = false;
      applyDiscoverFilters();
    }
    function discoverLabel(key, val) {
      if (key === 'region') return (DATA.regions.find(r => r.key === val) || {}).name || val;
      if (key === 'state') return (DATA.states.find(s => s.slug === val) || {}).name || val;
      if (key === 'category') return val === 'religious' ? 'Pilgrimage' : catLabel(val);
      if (key === 'season') return { winter: 'Winter', summer: 'Summer', monsoon: 'Monsoon' }[val] || val;
      if (key === 'dtype') return { forts: 'Forts & Palaces', beach: 'Beaches & Coast', sacred: 'Temples & Shrines', water: 'Lakes & Rivers', hills: 'Hills & Valleys', wildlife: 'Wildlife & Parks' }[val] || val;
      if (key === 'popular') return 'Popular only';
      return val;
    }
    function syncDiscoverControls() {
      const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
      set('fRegion', DISCOVER.region);
      set('fState', DISCOVER.state);
      set('fCategory', DISCOVER.category);
      set('fSeason', DISCOVER.season);
      set('fType', DISCOVER.dtype);
      const pop = document.getElementById('fPopular');
      if (pop) pop.checked = DISCOVER.popular === 'yes';
      const sort = document.getElementById('sortSelect');
      if (sort) sort.value = DISCOVER.sort;
    }
    function applyDiscoverFilters() {
      const box = document.getElementById('discoverResults');
      const pills = document.getElementById('activeFilters');
      const count = document.getElementById('resultCount');
      if (!box) return;
      const popularSet = discoverPopularSet();
      let list = discoverAllPlaces().filter(({ state, place, idx }) => {
        if (!state || !place) return false;
        // Hidden states are only included when explicitly selected
        if (state.hidden && DISCOVER.state !== state.slug) return false;
        if (DISCOVER.region !== 'all' && state.region !== DISCOVER.region) return false;
        if (DISCOVER.state !== 'all' && state.slug !== DISCOVER.state) return false;
        if (DISCOVER.category !== 'all' && place.category !== DISCOVER.category) return false;
        if (!discoverSeasonMatch(place.best, DISCOVER.season)) return false;
        if (DISCOVER.dtype !== 'all' && discoverType(place) !== DISCOVER.dtype) return false;
        if (DISCOVER.popular === 'yes' && !popularSet.has(state.slug + '|' + idx)) return false;
        return true;
      });
      const stateCount = new Set(list.map(x => x.state.slug)).size;
      if (DISCOVER.sort === 'name') list.sort((a, b) => a.place.name.localeCompare(b.place.name));
      else if (DISCOVER.sort === 'state') list.sort((a, b) => a.state.name.localeCompare(b.state.name) || a.place.name.localeCompare(b.place.name));
      else if (DISCOVER.sort === 'category') list.sort((a, b) => catLabel(a.place.category).localeCompare(catLabel(b.place.category)) || a.place.name.localeCompare(b.place.name));
      const activeKeys = ['region', 'state', 'category', 'season', 'dtype', 'popular'].filter(k => DISCOVER[k] !== 'all');
      pills.innerHTML = activeKeys.length
        ? activeKeys.map(k => `<span class="discover-pill">${discoverLabel(k, DISCOVER[k])}<button type="button" onclick="clearDiscoverKey('${k}')" aria-label="Remove ${k} filter">&times;</button></span>`).join('')
        : `<span class="discover-count">Showing everything — add a filter to narrow it down.</span>`;
      count.textContent = `${list.length} place${list.length !== 1 ? 's' : ''} across ${stateCount} state${stateCount !== 1 ? 's' : ''}`;
      if (!list.length) {
        box.innerHTML = `<div class="discover-empty">No places match these filters yet. Try widening the season or clearing one filter above.<br><br><button class="discover-reset" type="button" onclick="resetDiscoverFilters()">Reset all filters</button></div>`;
        return;
      }
      const canWish = (typeof wishlist !== 'undefined');
      const canTrip = (typeof itinerary !== 'undefined');
      box.innerHTML = list.slice(0, 24).map(({ state, place, idx }) => {
        const key = state.slug + '|' + idx;
        const isWish = canWish && wishlist.has(key);
        const inTrip = canTrip && itinerary.has(key);
        return `
      <div class="place-card" style="--cat-color:${catColor(place.category)}" onclick="openPlace('${state.slug}', ${idx}, true)">
        <button class="wish-btn ${isWish ? 'active' : ''}" data-wish="${state.slug}|${idx}" type="button" onclick="event.stopPropagation(); toggleWish('${state.slug}', ${idx}, this)" aria-label="Save ${place.name} to wishlist" aria-pressed="${isWish}">${isWish ? '\u2605' : ' \u2606'}</button>
        ${cardMedia(state, place)}
        <div class="place-card-body">
          <div class="cat-label">${catLabel(place.category)} &middot; ${state.name}</div>
          <h4>${place.name}</h4>
          <p class="pc-desc">${place.desc}</p>
          <dl class="pc-meta">
            <div><dt>Best time</dt><dd>${place.best}</dd></div>
            <div><dt>Duration</dt><dd>Suggested: ${recommendedDuration(place)}</dd></div>
            <div><dt>Entry</dt><dd>${place.fee}</dd></div>
          </dl>
          <a class="pc-map-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.map)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" aria-label="View ${place.name} on Google Maps">&#x1F4CD; View on Map</a>
        </div>
        <div class="place-card-actions">
          <button class="pc-details-btn" type="button" onclick="event.stopPropagation(); openPlace('${state.slug}', ${idx}, true)">View details</button>
          <button class="it-add-btn ${inTrip ? 'added' : ''}" data-trip="${state.slug}|${idx}" type="button" onclick="event.stopPropagation(); toggleItinerary('${state.slug}', ${idx}, this)" aria-pressed="${inTrip}">${inTrip ? '\u2713 Added to trip' : '+ Add to trip'}</button>
          <a class="mmt-card-btn" href="${mmtLink(state, place)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" aria-label="Book a trip to ${place.name} on MakeMyTrip">&#x1F9F3; Book on MakeMyTrip</a>
        </div>
      </div>`;
      }).join('') + (list.length > 24 ? `<div class="discover-empty">Showing 24 of ${list.length} — narrow filters to see more specific picks.</div>` : '');
    }
    function initDiscover() {
      const rSel = document.getElementById('fRegion');
      const sSel = document.getElementById('fState');
      if (!rSel || !sSel) return;
      rSel.innerHTML = `<option value="all">All regions</option>` + DATA.regions.map(r => `<option value="${r.key}">${r.name}</option>`).join('');
      sSel.innerHTML = `<option value="all">All states</option>` + DATA.states.slice().sort((a, b) => a.name.localeCompare(b.name)).map(s => `<option value="${s.slug}">${s.name}${s.hidden ? ' (UT / smaller state)' : ''}</option>`).join('');
      syncDiscoverControls();
      applyDiscoverFilters();
    }

    // ==== WISHLIST ====
    const wishlist = new Set();
    // Load from localStorage if available
    try {
      const saved = localStorage.getItem('travelbharat-wishlist');
      if (saved) {
        const arr = JSON.parse(saved);
        if (Array.isArray(arr)) arr.forEach(item => { if (typeof item === 'string') wishlist.add(item); });
        updateWishCount();
      }
    } catch (e) { }

    /* Reusable toast notifications: polite live region, auto-dismiss, closable */
    function showToast(msg) {
      const stack = document.getElementById('toastStack');
      if (!stack || !msg) return;
      while (stack.children.length >= 3) stack.firstChild.remove();
      const t = document.createElement('div');
      t.className = 'toast';
      const s = document.createElement('span');
      s.textContent = msg;
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'toast-close';
      b.setAttribute('aria-label', 'Dismiss notification');
      b.textContent = '\u00D7';
      b.onclick = () => t.remove();
      t.appendChild(s);
      t.appendChild(b);
      stack.appendChild(t);
      setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 250); }, 2600);
    }

    function toggleWish(stateSlug, idx, btnEl) {
      const key = stateSlug + '|' + idx;
      const added = !wishlist.has(key);
      if (!added) {
        wishlist.delete(key);
      } else {
        wishlist.add(key);
      }
      updateWishCount();
      syncWishButtons();
      // Persist
      try {
        localStorage.setItem('travelbharat-wishlist', JSON.stringify([...wishlist]));
      } catch (e) { }
      showToast(added ? 'Added to wishlist' : 'Removed from wishlist');
    }

    let _wishPrev = -1;
    function updateWishCount() {
      const countEl = document.getElementById('wishCount');
      const n = wishEntries().length;
      if (countEl) {
        countEl.textContent = n;
        if (n !== _wishPrev && _wishPrev !== -1) {
          countEl.classList.remove('pop');
          void countEl.offsetWidth;
          countEl.classList.add('pop');
        }
      }
      _wishPrev = n;
      const hb = document.getElementById('headerWishBtn');
      if (hb) hb.setAttribute('aria-label', `My Wishlist (${n} saved)`);
    }

    // ==== ITINERARY BUILDER ====
    const itinerary = new Set(); // stores "stateSlug|index"

    function saveItinerary() {
      try { localStorage.setItem('travelbharat-itinerary', JSON.stringify([...itinerary])); } catch (e) { }
    }

    function pruneItinerary() {
      let changed = false;
      [...itinerary].forEach(key => {
        const parts = String(key).split('|');
        const state = DATA.states.find(s => s.slug === parts[0]);
        const idx = parseInt(parts[1], 10);
        if (!state || isNaN(idx) || !state.places[idx]) { itinerary.delete(key); changed = true; }
      });
      if (changed) saveItinerary();
    }

    // Load saved trip if available
    try {
      const saved = localStorage.getItem('travelbharat-itinerary');
      if (saved) {
        const arr = JSON.parse(saved);
        if (Array.isArray(arr)) arr.forEach(k => { if (typeof k === 'string') itinerary.add(k); });
        pruneItinerary();
      }
    } catch (e) { }

    function updateItineraryUI() {
      saveItinerary();
      const count = itinerary.size;
      const countEl = document.getElementById('itineraryCount');
      const generateBtn = document.getElementById('generateItineraryBtn');
      if (countEl) countEl.textContent = `${count} place${count !== 1 ? 's' : ''} selected`;
      if (generateBtn) generateBtn.disabled = count === 0;
      const pt = document.getElementById('planTripCount');
      if (pt) pt.textContent = count ? `${count} place${count !== 1 ? 's' : ''} saved so far.` : 'No places saved yet.';
    }

    let tripPace = 3; // places per day: user-controlled, no auto changes
    let _tripClearTimer = null;
    let _tripLastFocus = null;
    const TRIP_SLOTS = ['Morning', 'Afternoon', 'Evening', 'Late evening'];
    const TRIP_HOURS = { 'Half day': 4, '2\u20133 hours': 2.5, 'Full day': 7, 'Half\u2013full day': 5 };

    function toggleItinerary(stateSlug, idx, btnEl) {
      const key = stateSlug + '|' + idx;
      const added = !itinerary.has(key);
      if (!added) {
        itinerary.delete(key);
      } else {
        itinerary.add(key);
      }
      updateItineraryUI();
      syncTripButtons();
      showToast(added ? 'Added to itinerary' : 'Removed from itinerary');
    }

    function tripStopMapsUrl(stateName, place) {
      return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(place.map || (place.name + ', ' + stateName));
    }
    function tripStopHours(place) {
      return TRIP_HOURS[recommendedDuration(place)] || 4;
    }
    function setTripPace(val) {
      tripPace = Math.min(4, Math.max(2, parseInt(val, 10) || 3));
      openItineraryModal();
    }
    function moveItinerary(key, dir) {
      const arr = [...itinerary];
      const i = arr.indexOf(key);
      const j = i + dir;
      if (i < 0 || j < 0 || j >= arr.length) return;
      const tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
      itinerary.clear();
      arr.forEach(k => itinerary.add(k));
      saveItinerary();
      openItineraryModal();
    }
    function removeItineraryStop(key) {
      itinerary.delete(key);
      updateItineraryUI();
      syncTripButtons();
      openItineraryModal();
    }
    function clearItinerary() {
      const btn = document.getElementById('tripClearBtn');
      if (btn && btn.dataset.armed !== '1') {
        btn.dataset.armed = '1';
        btn.textContent = 'Tap again to clear';
        clearTimeout(_tripClearTimer);
        _tripClearTimer = setTimeout(() => { btn.dataset.armed = ''; btn.textContent = 'Clear trip'; }, 3000);
        return;
      }
      itinerary.clear();
      updateItineraryUI();
      syncTripButtons();
      openItineraryModal();
      showToast('Itinerary cleared');
    }

    function openItineraryModal() {
      const modal = document.getElementById('itineraryModal');
      const titleEl = document.getElementById('itineraryTitle');
      const metaEl = document.getElementById('itineraryMeta');
      const bodyEl = document.getElementById('itineraryBody');
      const wasOpen = modal.classList.contains('open');
      if (!wasOpen) _tripLastFocus = document.activeElement;

      if (itinerary.size === 0) {
        titleEl.textContent = 'Your Trip Plan';
        metaEl.textContent = 'No places selected yet.';
        bodyEl.innerHTML = `<div class="it-empty">
          <p>Browse states and tap <strong>+ Add to trip</strong> on places to build your day-by-day plan here.</p>
          <button class="wl-view" type="button" onclick="closeItineraryModal(); goHome();">Start exploring</button>
        </div>`;
        modal.classList.add('open');
        if (!wasOpen) { const c = modal.querySelector('.it-close'); if (c) c.focus(); }
        return;
      }

      // Insertion order = user order. Chunk into days by chosen pace (no reshuffling).
      const stops = [];
      itinerary.forEach(key => {
        const [slug, idxStr] = key.split('|');
        const state = DATA.states.find(s => s.slug === slug);
        const place = state && state.places[parseInt(idxStr, 10)];
        if (state && place) stops.push({ key, slug, state, place });
      });
      const days = [];
      stops.forEach(s => {
        if (!days.length || days[days.length - 1].length >= tripPace) days.push([]);
        days[days.length - 1].push(s);
      });
      const stateCount = new Set(stops.map(s => s.slug)).size;
      const totalHrs = stops.reduce((a, s) => a + tripStopHours(s.place), 0);

      titleEl.textContent = `Your ${days.length}-Day Trip Plan`;
      metaEl.textContent = `${stops.length} place${stops.length !== 1 ? 's' : ''} \u00B7 ${days.length} day${days.length !== 1 ? 's' : ''} \u00B7 ${stateCount} state${stateCount !== 1 ? 's' : ''} \u00B7 \u2248${Math.round(totalHrs)}h planned`;

      bodyEl.innerHTML = `
    <div class="trip-toolbar no-print">
      <label class="trip-pace">Pace
        <select onchange="setTripPace(this.value)" aria-label="Places per day">
          <option value="2"${tripPace === 2 ? ' selected' : ''}>Relaxed (2/day)</option>
          <option value="3"${tripPace === 3 ? ' selected' : ''}>Classic (3/day)</option>
          <option value="4"${tripPace === 4 ? ' selected' : ''}>Packed (4/day)</option>
        </select>
      </label>
      <button class="trip-tool" id="tripClearBtn" type="button" onclick="clearItinerary()">Clear trip</button>
      <button class="trip-tool" type="button" onclick="printItinerary()">Print</button>
      <button class="trip-tool" type="button" onclick="downloadItinerary(this)">Download</button>
      <button class="trip-tool" type="button" onclick="shareItinerary(this)">Share</button>
    </div>
    <div class="trip-tips"><span class="k">Good to know</span> Start early for the big sights, and reconfirm timings the evening before — shrines and parks often close midday or weekly.</div>
    ${days.map((day, di) => {
        const dayHrs = day.reduce((a, s) => a + tripStopHours(s.place), 0);
        return `
      <div class="it-day">
        <div class="it-day-head">
          <div class="day-num">${di + 1}</div>
          <div>Day ${di + 1} <span class="it-day-hrs">\u2248${Math.round(dayHrs)}h</span></div>
        </div>
        ${day.map((s, si) => `
          <div class="it-stop trip-stop">
            <span class="trip-slot">${TRIP_SLOTS[Math.min(si, TRIP_SLOTS.length - 1)]}</span>
            <div class="trip-stop-main">
              <div class="stop-name">${s.place.name}</div>
              <div class="stop-cat">${catLabel(s.place.category)} \u2022 ${s.state.name} \u2022 ${recommendedDuration(s.place)}</div>
              <a class="trip-map" href="${tripStopMapsUrl(s.state.name, s.place)}" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            </div>
            <div class="trip-stop-btns no-print">
              <button type="button" onclick="moveItinerary('${s.key}', -1)" aria-label="Move ${s.place.name} earlier"${si === 0 && di === 0 ? ' disabled' : ''}>\u2191</button>
              <button type="button" onclick="moveItinerary('${s.key}', 1)" aria-label="Move ${s.place.name} later"${si === day.length - 1 && di === days.length - 1 ? ' disabled' : ''}>\u2193</button>
              <button type="button" onclick="removeItineraryStop('${s.key}')" aria-label="Remove ${s.place.name} from trip">&times;</button>
            </div>
          </div>`).join('')}
      </div>`;
      }).join('')}`;

      modal.classList.add('open');
      if (!wasOpen) { lockScroll(); const c = modal.querySelector('.it-close'); if (c) c.focus(); }
    }

    function itineraryText() {
      const stops = [];
      itinerary.forEach(key => {
        const [slug, idxStr] = key.split('|');
        const state = DATA.states.find(s => s.slug === slug);
        const place = state && state.places[parseInt(idxStr, 10)];
        if (state && place) stops.push({ state, place });
      });
      const days = [];
      stops.forEach(s => {
        if (!days.length || days[days.length - 1].length >= tripPace) days.push([]);
        days[days.length - 1].push(s);
      });
      let out = `TravelBharat Trip Plan (${stops.length} places, ${days.length} days)\n\n`;
      days.forEach((day, di) => {
        out += `Day ${di + 1}\n`;
        day.forEach((s, si) => {
          out += `  ${TRIP_SLOTS[Math.min(si, 3)]}: ${s.place.name} (${s.state.name}, ${catLabel(s.place.category)}) — ${recommendedDuration(s.place)}\n`;
          out += `    Map: ${tripStopMapsUrl(s.state.name, s.place)}\n`;
        });
        out += `\n`;
      });
      return out;
    }
    function printItinerary() { window.print(); }
    function downloadItinerary(btn) {
      try {
        const blob = new Blob([itineraryText()], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'travelbharat-itinerary.txt';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
        if (btn) { const t = btn.textContent; btn.textContent = 'Saved!'; setTimeout(() => { btn.textContent = t; }, 1600); }
      } catch (e) { }
    }
    function shareItinerary(btn) {
      const text = itineraryText();
      const done = (msg) => { if (btn) { const t = btn.textContent; btn.textContent = msg; setTimeout(() => { btn.textContent = t; }, 1600); } };
      if (navigator.share) {
        navigator.share({ title: 'My TravelBharat Trip', text }).catch(() => { });
      } else if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => { done('Copied!'); showToast('Copied successfully'); }).catch(() => done('Copy failed'));
      } else { done('Share unavailable'); }
    }

    function closeItineraryModal() {
      const m = document.getElementById('itineraryModal');
      if (!m || !m.classList.contains('open')) return;
      m.classList.remove('open');
      unlockScroll();
      const btn = document.getElementById('tripClearBtn');
      if (btn) { btn.dataset.armed = ''; btn.textContent = 'Clear trip'; }
      if (_tripLastFocus && _tripLastFocus.focus) { try { _tripLastFocus.focus(); } catch (e) { } _tripLastFocus = null; }
    }

    // ==== MY WISHLIST PANEL ====
    let _wlClearTimer = null;
    let _wlLastFocus = null;

    function saveWishlist() {
      try { localStorage.setItem('travelbharat-wishlist', JSON.stringify([...wishlist])); } catch (e) { }
    }

    function wishEntries() {
      const out = [];
      wishlist.forEach(key => {
        const [slug, idxStr] = key.split('|');
        const idx = parseInt(idxStr, 10);
        const state = DATA.states.find(s => s.slug === slug);
        const place = state && state.places[idx];
        if (place) out.push({ key, slug, idx, state, place });
      });
      return out;
    }

    // refresh the stars on every visible copy (cards, discover, modal) without full re-render
    function syncWishButtons() {
      document.querySelectorAll('[data-wish]').forEach(btn => {
        const key = btn.getAttribute('data-wish');
        const on = wishlist.has(key);
        btn.classList.toggle('active', on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
        if (btn.id !== 'modalWishTextBtn') btn.innerHTML = on ? '\u2605' : ' \u2606';
      });
      const textBtn = document.getElementById('modalWishTextBtn');
      if (textBtn) {
        const key = textBtn.getAttribute('data-wish');
        if (key) {
          const on = wishlist.has(key);
          textBtn.classList.toggle('added', on);
          textBtn.innerHTML = on ? '\u2605 Saved to wishlist' : '\u2606 Add to Wishlist';
          textBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
        }
      }
    }
    function syncTripButtons() {
      document.querySelectorAll('[data-trip]').forEach(btn => {
        const key = btn.getAttribute('data-trip');
        const on = itinerary.has(key);
        btn.classList.toggle('added', on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
        btn.textContent = on ? '\u2713 Added to trip' : '+ Add to trip';
      });
    }

    function renderWishlist() {
      const body = document.getElementById('wishlistBody');
      const meta = document.getElementById('wishlistMeta');
      const toolbar = document.getElementById('wishlistToolbar');
      const clearBtn = document.getElementById('wishlistClear');
      const entries = wishEntries();

      // forget saved items that no longer exist in the data
      if (entries.length !== wishlist.size) {
        wishlist.clear();
        entries.forEach(e => wishlist.add(e.key));
        saveWishlist();
      }
      updateWishCount();

      clearTimeout(_wlClearTimer);
      clearBtn.dataset.armed = '';
      clearBtn.textContent = 'Clear all';

      if (!entries.length) {
        meta.textContent = '';
        toolbar.style.display = 'none';
        body.innerHTML = `
          <div class="wl-empty">
            <div class="wl-empty-star">&#9734;</div>
            <p>Nothing saved yet.</p>
            <p class="wl-empty-sub">Tap the star on any place to keep it here for later.</p>
            <button class="wl-view" onclick="closeWishlist(); goHome();">Start exploring</button>
          </div>`;
        return;
      }

      const stateCount = new Set(entries.map(e => e.slug)).size;
      meta.textContent = `${entries.length} place${entries.length !== 1 ? 's' : ''} saved across ${stateCount} state${stateCount !== 1 ? 's' : ''}`;
      toolbar.style.display = '';

      body.innerHTML = entries.map(({ slug, idx, state, place: p }) => {
        const inTrip = (typeof itinerary !== 'undefined') && itinerary.has(slug + '|' + idx);
        return `
        <div class="wl-item" style="--cat-color:${catColor(p.category)}">
          <div class="wl-thumb">${p.img ? `<img src="${p.img}"${imgWH(p.img)} alt="${p.name}, ${state.name}" loading="lazy" decoding="async">` : `<span>${catLabel(p.category)}</span>`}</div>
          <div class="wl-info">
            <div class="wl-name">${p.name}</div>
            <div class="wl-sub">${state.name} &middot; ${catLabel(p.category)}</div>
            <p class="wl-desc">${p.desc}</p>
          </div>
          <div class="wl-actions">
            <button class="wl-view" onclick="viewWishPlace('${slug}', ${idx})">View details</button>
            <button class="it-add-btn wl-trip ${inTrip ? 'added' : ''}" data-trip="${slug}|${idx}" type="button" onclick="toggleItinerary('${slug}', ${idx}, this)" aria-pressed="${inTrip}">${inTrip ? '\u2713 Added to trip' : '+ Add to trip'}</button>
            <a class="wl-book" href="${mmtLink(state, p)}" target="_blank" rel="noopener noreferrer" aria-label="Book a trip to ${p.name} on MakeMyTrip">&#x1F9F3; MakeMyTrip</a>
            <button class="wl-remove" onclick="removeWish('${slug}', ${idx})" aria-label="Remove ${p.name} from wishlist">Remove</button>
          </div>
        </div>`;
      }).join('');
    }

    function openWishlist() {
      closeModal();
      closeItineraryModal();
      _wlLastFocus = document.activeElement;
      renderWishlist();
      const wm = document.getElementById('wishlistModal');
      const wasOpen = wm.classList.contains('open');
      wm.classList.add('open');
      if (!wasOpen) lockScroll();
      document.getElementById('wishlistClose').focus();
    }

    function closeWishlist() {
      const m = document.getElementById('wishlistModal');
      if (!m || !m.classList.contains('open')) return;
      m.classList.remove('open');
      unlockScroll();
      if (_wlLastFocus && _wlLastFocus.focus) _wlLastFocus.focus();
    }

    function viewWishPlace(slug, idx) {
      closeWishlist();
      openPlace(slug, idx, true);
    }

    function removeWish(slug, idx) {
      wishlist.delete(slug + '|' + idx);
      saveWishlist();
      renderWishlist();
      syncWishButtons();
      showToast('Removed from wishlist');
    }

    // two taps so a stray click can't wipe the list
    function clearWishlist() {
      const btn = document.getElementById('wishlistClear');
      if (btn.dataset.armed !== '1') {
        btn.dataset.armed = '1';
        btn.textContent = 'Tap again to clear all';
        clearTimeout(_wlClearTimer);
        _wlClearTimer = setTimeout(() => { btn.dataset.armed = ''; btn.textContent = 'Clear all'; }, 3000);
        return;
      }
      wishlist.clear();
      saveWishlist();
      renderWishlist();
      syncWishButtons();
      showToast('Wishlist cleared');
    }

    /* Home helpers: category browse, hidden gems, FAQ accordion, dialog focus */
    function browseCategory(cat) {
      closeModal();
      document.getElementById('stateView').classList.remove('active');
      document.getElementById('homeHero').style.display = '';
      document.getElementById('regionsWrap').style.display = '';
      document.querySelector('.gallery-section').style.display = '';
      const disc = document.getElementById('discover');
      if (disc) disc.style.display = '';
      ['browseCategory', 'hiddenGems', 'planTrip'].forEach(id => {
        const s = document.getElementById(id);
        if (s) s.style.display = '';
      });
      // Reset other filters so a category browse is predictable, then apply category
      DISCOVER.region = 'all'; DISCOVER.state = 'all'; DISCOVER.season = 'all';
      DISCOVER.dtype = 'all'; DISCOVER.popular = 'all';
      setDiscoverFilter('category', cat);
      const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const target = document.getElementById('discover');
      if (target) target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    }

    function initHomeSections() {
      const counts = { heritage: 0, nature: 0, religious: 0, adventure: 0 };
      DATA.states.forEach(s => {
        if (s.hidden) return;
        s.places.forEach(p => { if (counts[p.category] != null) counts[p.category]++; });
      });
      document.querySelectorAll('[data-catcount]').forEach(el => {
        const c = counts[el.getAttribute('data-catcount')] || 0;
        el.textContent = c + ' places';
      });
      const grid = document.getElementById('gemsGrid');
      if (grid) {
        const gems = [];
        DATA.states.forEach(s => {
          if (s.hidden && s.places.length && gems.length < 6) gems.push({ state: s, place: s.places[0], idx: 0 });
        });
        grid.innerHTML = gems.map(({ state, place, idx }) => `
          <div class="gem-card">
            ${place.img ? `<img src="${place.img}"${imgWH(place.img)} alt="${place.name}, ${state.name}" loading="lazy" decoding="async">` : ''}
            <div class="gem-body">
              <div class="gem-state">${state.name}</div>
              <div class="gem-name">${place.name}</div>
              <button class="gem-view" type="button" onclick="openPlace('${state.slug}', ${idx}, true)">View</button>
            </div>
          </div>`).join('');
      }
    }

    function toggleFaq(btn) {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
    }

    function trapTabKey(container, e) {
      const items = Array.from(container.querySelectorAll('button, a[href], select, input, [tabindex]:not([tabindex="-1"])')).filter(el => !el.disabled && el.offsetParent !== null);
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }

    document.getElementById('wishlistModal').addEventListener('click', (e) => {
      if (e.target.id === 'wishlistModal') closeWishlist();
    });
    document.getElementById('wishlistModal').addEventListener('keydown', (e) => {
      if (e.key === 'Tab') trapTabKey(document.getElementById('wishlistModal'), e);
    });
    document.getElementById('itineraryModal').addEventListener('click', (e) => {
      if (e.target.id === 'itineraryModal') closeItineraryModal();
    });
    document.getElementById('itineraryModal').addEventListener('keydown', (e) => {
      if (e.key === 'Tab') trapTabKey(document.getElementById('itineraryModal'), e);
    });


    /* wow: hero stats, destination marquee, scroll reveal */
    function initWow() {
      const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Animated coverage stats in the hero (computed from real data)
      const statsEl = document.getElementById('heroStats');
      if (statsEl && typeof DATA !== 'undefined') {
        let places = 0;
        DATA.states.forEach(s => { places += s.places.length; });
        const stats = [
          { n: DATA.states.length, label: 'States & UTs' },
          { n: places, label: 'Places covered' },
          { n: DATA.regions.length, label: 'Regions' }
        ];
        statsEl.innerHTML = stats.map(s =>
          `<div class="hero-stat"><b data-count="${s.n}">${reduceMotion ? s.n : 0}</b><span>${s.label}</span></div>`
        ).join('');
        if (!reduceMotion && window.requestAnimationFrame) {
          const bars = statsEl.querySelectorAll('b');
          const t0 = performance.now(), dur = 1300;
          const tick = (t) => {
            const k = Math.min(1, (t - t0) / dur);
            const eased = 1 - Math.pow(1 - k, 3);
            bars.forEach(b => { b.textContent = Math.round(parseInt(b.dataset.count, 10) * eased); });
            if (k < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      }

      // Infinite destination ticker (decorative; content exists elsewhere)
      const track = document.getElementById('marqueeTrack');
      if (track && typeof DATA !== 'undefined') {
        const seq = DATA.states.filter(s => !s.hidden).map(s => `<span>${s.name}</span><i>&#10022;</i>`).join('');
        track.innerHTML = seq + seq;
      }

      // Reveal sections as they scroll into view
      if (!('IntersectionObserver' in window)) return;
      const els = document.querySelectorAll('.gallery-section, .region-block, #discover, #browseCategory, #hiddenGems, #planTrip, #faqs');
      if (!els.length) return;
      els.forEach(el => el.classList.add('rv'));
      const io = new IntersectionObserver((entries) => {
        entries.forEach(en => {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { threshold: 0.1 });
      els.forEach(el => io.observe(el));
    }


    // ==== INITIALIZE UI ELEMENTS ====
    // Add wish button to modal if not present (defensive)
    document.addEventListener('DOMContentLoaded', () => {
      // Ensure wish count is updated on load
      updateWishCount();
      updateItineraryUI();
      syncThemeBtn();
      // Follow the OS theme live until the user picks one explicitly
      try {
        if (window.matchMedia && !localStorage.getItem('travelbharat-theme')) {
          const mq = window.matchMedia('(prefers-color-scheme: dark)');
          const follow = () => syncThemeBtn();
          if (mq.addEventListener) mq.addEventListener('change', follow);
          else if (mq.addListener) mq.addListener(follow);
        }
      } catch (e) { }
      try { initDiscover(); } catch (e) { }
      try { initHomeSections(); } catch (e) { }
      try { initWow(); } catch (e) { }

      // Close modals on escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeModal();
          closeItineraryModal();
          closeWishlist();
        }
      });
    });
  
