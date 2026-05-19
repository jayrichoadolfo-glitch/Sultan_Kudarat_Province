// ==========================================
// 1. TOURIST DESTINATION DATA ARRAY (3 Per Category)
// ==========================================
const destinations = [
    // ------------------------------------------
    // CATEGORY: Beach
    // ------------------------------------------
    {
        id: 1,
        name: "Balot Island",
        municipality: "Kalamansig",
        category: "Beach",
        image: "images/dagat.jpg", // Note: Download a pristine white sand island image
        shortDescription: "An untouched coastal paradise featuring white sand shorelines.",
        fullDescription: "Balot Island is a hidden gem in Kalamansig boasting crystal-clear turquoise waters, a wide stretch of powdery white sand, and vibrant coral reefs ideal for snorkeling.",
        entranceFee: "Php 50",
        openingHours: "Open 24/7 (Boat schedules vary)",
        activities: ["Island Hopping", "Snorkeling", "Beach Camping", "Sunset Viewing"],
        bestTimeToVisit: "December to May",
        travelTips: "Coordinate with the Kalamansig Tourism Office before booking boat transfers."
    },
    {
        id: 2,
        name: "Poral Beach",
        municipality: "Lebak",
        category: "Beach",
        image: "images/poral.jpg", // Note: Download a gray/dark sand beach image with waves
        shortDescription: "A popular wide beach layout with unique dark volcanic sand.",
        fullDescription: "Poral Beach is a vast stretching coastline known for its therapeutic dark sand, strong refreshing waves from the Celebes Sea, and beautiful public cottage setups.",
        entranceFee: "Php 20",
        openingHours: "6:00 AM - 6:00 PM Daily",
        activities: ["Swimming", "Beach Volleyball", "Skimboarding", "Picnicking"],
        bestTimeToVisit: "March to October",
        travelTips: "Perfect for large family gatherings. Bring your own food as there are no large restaurants nearby."
    },
    {
        id: 3,
        name: "Siranangan Beach",
        municipality: "Kalamansig",
        category: "Beach",
        image: "images/siranangan.jpg", // Note: Download a rocky beach coastal view image
        shortDescription: "A stunning beach where rock formations meet the deep blue sea.",
        fullDescription: "Siranangan Beach offers dramatic landscapes featuring clean waters breaks, magnificent rock formations, and clear view of the open ocean.",
        entranceFee: "Php 30",
        openingHours: "7:00 AM - 5:00 PM Daily",
        activities: ["Rock Climbing", "Coastal Photography", "Sightseeing", "Relaxing"],
        bestTimeToVisit: "January to June",
        travelTips: "Wear protective footwear or aqua shoes to navigate the sharp rock formations safely."
    },

    // ------------------------------------------
    // CATEGORY: Mountain
    // ------------------------------------------
    {
        id: 4,
        name: "Mount Daguma Range",
        municipality: "Bagumbayan",
        category: "Mountain",
        image: "images/daguma.jpg", // Note: Download a lush, misty mountain range view
        shortDescription: "A majestic, misty mountain range covered in dense rainforests.",
        fullDescription: "The Mount Daguma Range spans across several towns, serving as a critical sanctuary for biodiversity, indigenous flora, and breathtaking high-altitude viewing decks.",
        entranceFee: "Free",
        openingHours: "Daylight Hours",
        activities: ["Mountain Trekking", "Bird Watching", "Eco-trail Hiking", "Nature Photography"],
        bestTimeToVisit: "Dry season (January to April)",
        travelTips: "Secure a local tour guide and permission from the municipal environmental office before hiking."
    },
    {
        id: 5,
        name: "Pitot Kalabaw Hill",
        municipality: "Lebak",
        category: "Mountain",
        image: "images/pitot.jpg", // Note: Download a high green hill viewpoint overlooking plains
        shortDescription: "A scenic highland peak offering panoramic 360-degree views.",
        fullDescription: "Pitot Kalabaw Hill is an easily accessible viewing deck that provides sweeping views of Lebak's agricultural valleys, mountain gaps, and the sea breeze line.",
        entranceFee: "Php 20",
        openingHours: "5:00 AM - 7:00 PM Daily",
        activities: ["Sunrise Chasing", "Camping", "Sightseeing", "Stargazing"],
        bestTimeToVisit: "Early Morning (5:30 AM) for sunrise",
        travelTips: "Bring a light jacket as winds can get exceptionally cold during early mornings."
    },
    {
        id: 6,
        name: "Mount Pitong Gatang",
        municipality: "Senator Ninoy Aquino (SNA)",
        category: "Mountain",
        image: "images/pitong-gatang.jpg", // Note: Download a rugged mountain peak or trail image
        shortDescription: "A challenging peak famous among seasoned local mountaineers.",
        fullDescription: "Mount Pitong Gatang offers rugged trails, rich mossy forests, and encounters with unique wildlife, rewarding climbers with a view above the clouds.",
        entranceFee: "Php 100 (Registration fee)",
        openingHours: "Requires pre-booked scheduling",
        activities: ["Hardcore Trekking", "Backpack Camping", "Flora Studies"],
        bestTimeToVisit: "March to May",
        travelTips: "This is a minor-to-major climb. Ensure your physical fitness and bring complete outdoor camping gear."
    },

    // ------------------------------------------
    // CATEGORY: Waterfall
    // ------------------------------------------
    {
        id: 7,
        name: "Bamban Falls",
        municipality: "Senator Ninoy Aquino (SNA)",
        category: "Waterfall",
        image: "images/falls.jpg", // Note: Download a clean, multi-tiered forest waterfall
        shortDescription: "A refreshing forest-side cascade ideal for nature enthusiasts.",
        fullDescription: "Bamban Falls features cool springs and clear waters cleanly framed by rock formations preserved meticulously by indigenous Dulangan Manobo communities.",
        entranceFee: "Php 20",
        openingHours: "6:00 AM - 4:30 PM Daily",
        activities: ["Trekking", "River Swimming", "Family Picnic Gatherings"],
        bestTimeToVisit: "Summer months (March to May)",
        travelTips: "Bring reliable waterproof bags or cases to protect your electronic equipment."
    },
    {
        id: 8,
        name: "Nalus Falls",
        municipality: "Kiamba border / Bagumbayan",
        category: "Waterfall",
        image: "images/nalus.jpg", // Note: Download a powerful waterfall dropping into a deep pool
        shortDescription: "A hidden powerful waterfall crashing down into a deep basin.",
        fullDescription: "Nalus Falls is an off-the-beaten-path ecotourism site featuring raw natural pools, heavy clean current drops, and cold running water straight from mountain springs.",
        entranceFee: "Php 30",
        openingHours: "8:00 AM - 4:00 PM Daily",
        activities: ["Cliff Diving", "Cold Spring Swimming", "Nature Trekking"],
        bestTimeToVisit: "November to February",
        travelTips: "The natural pool is deep; wear life vests if you are not a confident swimmer."
    },
    {
        id: 9,
        name: "Liliong Falls",
        municipality: "Esperanza",
        category: "Waterfall",
        image: "images/lilong.webp", // Note: Download a curtain-like wide forest waterfall
        shortDescription: "A scenic wide curtain waterfall enclosed in an emerald canyon.",
        fullDescription: "Liliong Falls features a serene curtain stream structure that flows gracefully down smooth rock basins, providing a relaxing paradise for adventurers.",
        entranceFee: "Php 25",
        openingHours: "7:00 AM - 5:00 PM Daily",
        activities: ["Canyon Trekking", "Freshwater Bathing", "Photography"],
        bestTimeToVisit: "February to May",
        travelTips: "Be mindful of sudden weather changes; check with local guides regarding water behavior."
    },

    // ------------------------------------------
    // CATEGORY: Historical Site
    // ------------------------------------------
    {
        id: 10,
        name: "Provincial Capitol Palace",
        municipality: "Isulan",
        category: "Historical Site",
        image: "images/dome.webp", // Note: Download the famous Golden Mosque-style Capitol image
        shortDescription: "A glorious palace featuring majestic golden domes reflecting cultural roots.",
        fullDescription: "Commonly praised as one of the most beautiful provincial structures in the Philippines, this landmark incorporates traditional Arabic design with grand domes, serving as the seat of local governance.",
        entranceFee: "Free",
        openingHours: "8:00 AM - 5:00 PM (Weekdays)",
        activities: ["Sightseeing", "Cultural Photography", "Guided Architectural Walking"],
        bestTimeToVisit: "Late Afternoon (Sunset view)",
        travelTips: "Maintain solemn silence inside government perimeter boundaries and dress modestly."
    },
    {
        id: 11,
        name: "Sultan Kudarat Monument",
        municipality: "Isulan",
        category: "Historical Site",
        image: "images/city.jpg", // Note: Download an image of a historical hero statue
        shortDescription: "A heroic bronze monument dedicated to the legendary Sultan.",
        fullDescription: "This historical plaza landmark features a giant statue honoring Sultan Muhammad Dipatuan Kudarat, the brave warrior king who fiercely defended Mindanao against foreign colonization.",
        entranceFee: "Free",
        openingHours: "Open 24/7",
        activities: ["Historical Reading", "Plaza Strolling", "Taking Memorabilia Photos"],
        bestTimeToVisit: "Evening (When the monument is beautifully illuminated)",
        travelTips: "Located near the town center, making it a great quick historical stopover."
    },
    {
        id: 12,
        name: "SNA Heritage Marker",
        municipality: "Senator Ninoy Aquino (SNA)",
        category: "Historical Site",
        image: "images/heritage.jpg", // Note: Download a cultural village or tribal landmark image
        shortDescription: "A site honoring the indigenous tribes and early settlers.",
        fullDescription: "A landmark dedicated to preserving the cultural interactions, historical treaties, and heritage preservation stories of the Dulangan Manobo tribe and early Christian pioneers.",
        entranceFee: "Free",
        openingHours: "8:00 AM - 4:00 PM Daily",
        activities: ["Cultural Immersion", "Artifact Viewing", "Local History Learning"],
        bestTimeToVisit: "September (During local municipality charter weeks)",
        travelTips: "Always ask permission from tribal elders before photographing sacred heritage installations."
    },

    // ------------------------------------------
    // CATEGORY: Island
    // ------------------------------------------
    {
        id: 13,
        name: "Colon Sabalo Island",
        municipality: "Kalamansig",
        category: "Island",
        image: "images/colon.jpg", // Note: Download an image of an isolated tropical islet
        shortDescription: "An isolated islet featuring lush green canopies and coral shelves.",
        fullDescription: "An offshore islet ringed by shallow reef platforms, making it an exquisite, private destination for deep-sea diving, scuba training, and seeing thriving fish communities.",
        entranceFee: "Php 50 (Excluding boat rental)",
        openingHours: "6:00 AM - 4:00 PM (Boat departures)",
        activities: ["Scuba Diving", "Snorkeling", "Marine Wildlife Watching"],
        bestTimeToVisit: "March to May",
        travelTips: "There are zero commercial stores or facilities on the islet. Bring your own food and hydration packs."
    },
    {
        id: 14,
        name: "White Islet Sandbar",
        municipality: "Lebak",
        category: "Island",
        image: "images/white.jpg", // Note: Download a pristine ocean sandbar image
        shortDescription: "A stunning sandbar that emerges beautifully during low tide.",
        fullDescription: "A temporary pure white sandbar completely surrounded by clear waters. It shifts shapes depending on seasonal ocean currents and wind movements.",
        entranceFee: "Php 40",
        openingHours: "Dependent on local tide tables",
        activities: ["Swimming", "Drone Photography", "Sunbathing"],
        bestTimeToVisit: "Early morning during low tide cycles",
        travelTips: "Check the local tide forecast at the port before renting a boat so you don't miss the sandbar visibility window."
    },
    {
        id: 15,
        name: "Donau Islet Rock",
        municipality: "Kalamansig",
        category: "Island",
        image: "images/donao.jpg", // Note: Download a rocky outpost island image in blue water
        shortDescription: "A striking rocky outcrop island ideal for extreme exploration.",
        fullDescription: "A dramatic, jagged rock island system rising boldly from the deep sea, serving as a nesting site for migratory sea birds and a challenge for cliff adventurers.",
        entranceFee: "Php 100 per boat approach",
        openingHours: "8:00 AM - 3:00 PM (Weather permitting)",
        activities: ["Bird Watching", "Extreme Rock Exploring", "Deep Water Snorkeling"],
        bestTimeToVisit: "April and May",
        travelTips: "Do not attempt to land on the island during choppy waves or rough weather conditions."
    },

    // ------------------------------------------
    // CATEGORY: Adventure
    // ------------------------------------------
    {
        id: 16,
        name: "Marguez Hot and Cold Springs",
        municipality: "Esperanza",
        category: "Adventure",
        image: "images/pool.jpg", // Note: Download an image of natural geothermal pools
        shortDescription: "A therapeutic nature trek into merging hot and cold springs.",
        fullDescription: "An absolute outdoor wonderland where natural geothermal hot springs flow alongside a freezing freshwater river system, allowing travelers to experience both back-to-back.",
        entranceFee: "Php 40",
        openingHours: "6:00 AM - 6:00 PM Daily",
        activities: ["Therapeutic Bathing", "Jungle Trekking", "River Exploring"],
        bestTimeToVisit: "Rainy season or cool months (November to January)",
        travelTips: "The trail leading inside can get slippery. Wear high-traction hiking sandals."
    },
    {
        id: 17,
        name: "Kudong Eco-Zipline",
        municipality: "Tacurong City / Isulan border",
        category: "Adventure",
        image: "images/zipline.jpg", // Note: Download a zipline adventure image over trees
        shortDescription: "An exhilarating zipline ride over sprawling green plantations.",
        fullDescription: "Fly high across an adrenaline-pumping canopy zipline network that gives you a bird's-eye view of Sultan Kudarat's vast crop plains and valleys.",
        entranceFee: "Php 250 (Includes ride pass)",
        openingHours: "8:30 AM - 5:00 PM Daily",
        activities: ["Ziplining", "Skywalking", "Extreme Adventure Photography"],
        bestTimeToVisit: "Any dry operational day",
        travelTips: "Strict weight regulations apply for safety reasons. Wear secure, enclosed athletic shoes."
    },
    {
        id: 18,
        name: "Caves of Esperanza",
        municipality: "Esperanza",
        category: "Adventure",
        image: "images/cave.jpg", // Note: Download an image of cavern stalactites
        shortDescription: "A thrilling caving expedition through ancient limestone systems.",
        fullDescription: "Explore massive underground limestone chambers featuring breathtaking stalactites, stalagmites, natural subterranean streams, and unique bat colonies.",
        entranceFee: "Php 150 (Includes safety gear rental)",
        openingHours: "8:00 AM - 3:00 PM (Cut-off)",
        activities: ["Spelunking / Caving", "Rock Crawling", "Geological Exploration"],
        bestTimeToVisit: "March to August",
        travelTips: "Helmets and headlamps are mandatory. Always stay close to your certified cave guide."
    }
];
// ==========================================
// 2. RUNTIME CONDITIONAL ROUTING PAGE SELECTION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("destinationsGrid")) initDestinationsPage();
    if (document.getElementById("photoGridGroup")) initGalleryPage();
    if (document.getElementById("inquiryForm")) initValidationForm();
});

// ==========================================
// 3. DESTINATIONS RENDERING & FILTER ENGINE
// ==========================================
function initDestinationsPage() {
    const grid = document.getElementById("destinationsGrid");
    const search = document.getElementById("searchInput");
    const filterButtons = document.querySelectorAll(".filter-btn");
    
    let activeCategory = "All";
    let activeSearchText = "";

    function render() {
        const filtered = destinations.filter(item => {
            const matchesCategory = activeCategory === "All" || item.category === activeCategory;
            const matchesSearch = item.name.toLowerCase().includes(activeSearchText) || 
                                  item.municipality.toLowerCase().includes(activeSearchText) ||
                                  item.category.toLowerCase().includes(activeSearchText);
            return matchesCategory && matchesSearch;
        });

        grid.innerHTML = filtered.map(item => `
            <div class="col">
                <div class="card h-100 shadow-sm border-0">
                    <img src="${item.image}" class="card-img-top object-fit-cover" style="height:220px;" alt="${item.name}">
                    <div class="card-body">
                        <span class="badge bg-secondary mb-2">${item.category}</span>
                        <h5 class="card-title fw-bold">${item.name}</h5>
                        <p class="text-muted small mb-2"><i class="bi bi-geo-alt"></i> ${item.municipality}, Sultan Kudarat</p>
                        <p class="card-text text-secondary text-truncate-3">${item.shortDescription}</p>
                        <div class="mt-3 text-dark small"><strong>Entrance:</strong> ${item.entranceFee}</div>
                    </div>
                    <div class="card-footer bg-white border-0 pb-3">
                        <button class="btn btn-warning w-100 fw-semibold" onclick="launchModalDetail(${item.id})">View Details</button>
                    </div>
                </div>
            </div>
        `).join('');
        if (filtered.length === 0) grid.innerHTML = `<div class="col-12 text-center my-4 text-muted">No destinations matched your criteria.</div>`;
    }

    search.addEventListener("input", (e) => {
        activeSearchText = e.target.value.toLowerCase();
        render();
    });

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = btn.getAttribute("data-category");
            render();
        });
    });

    render();
}

window.launchModalDetail = function(id) {
    const item = destinations.find(d => d.id === id);
    if (!item) return;

    const body = document.getElementById("modalTargetBody");
    body.innerHTML = `
        <div class="modal-header bg-dark text-white">
            <h5 class="modal-title fw-bold">${item.name}</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body p-4">
            <img src="${item.image}" class="img-fluid rounded mb-3 w-100 object-fit-cover" style="max-height: 380px;">
            <p class="lead">${item.fullDescription}</p>
            <div class="row g-3 mt-2">
                <div class="col-md-6"><strong>Location:</strong> ${item.municipality}, Sultan Kudarat</div>
                <div class="col-md-6"><strong>Hours:</strong> ${item.openingHours}</div>
                <div class="col-md-6"><strong>Entrance Fee:</strong> ${item.entranceFee}</div>
                <div class="col-md-6"><strong>Best Time To Visit:</strong> ${item.bestTimeToVisit}</div>
            </div>
            <div class="mt-3"><strong>Activities:</strong> ${item.activities.join(", ")}</div>
            <div class="alert alert-warning mt-3 mb-0"><strong>Travel Tips:</strong> ${item.travelTips}</div>
        </div>
    `;
    const instance = new bootstrap.Modal(document.getElementById('destinationModal'));
    instance.show();
};

// ==========================================
// 4. GALLERY LIGHTBOX RUNTIME LOOP
// ==========================================
function initGalleryPage() {
    const images = document.querySelectorAll(".gallery-img");
    const activeImg = document.getElementById("lightboxActiveImg");
    const caption = document.getElementById("lightboxCaption");
    let currentIndex = 0;

    const lightboxModal = new bootstrap.Modal(document.getElementById('lightboxModal'));

    images.forEach((img, idx) => {
        img.addEventListener("click", () => {
            currentIndex = idx;
            showImage();
            lightboxModal.show();
        });
    });

    function showImage() {
        const target = images[currentIndex];
        activeImg.src = target.src;
        caption.innerText = target.alt || `Sultan Kudarat Scenery Image (${currentIndex + 1}/30)`;
    }

    document.getElementById("prevImageBtn").addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        showImage();
    });

    document.getElementById("nextImageBtn").addEventListener("click", () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        showImage();
    });
}

// ==========================================
// 5. INQUIRY FORM BACKEND VALIDATOR
// ==========================================
function initValidationForm() {
    const form = document.getElementById("inquiryForm");
    const alertBox = document.getElementById("errorAlertBox");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alertBox.classList.add("d-none");
        alertBox.innerHTML = "";
        
        let messages = [];
        
        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("emailAddress").value.trim();
        const phone = document.getElementById("contactNumber").value.trim();
        const destination = document.getElementById("selectedDestination").value;
        const date = document.getElementById("travelDate").value;
        const visitors = parseInt(document.getElementById("visitorCount").value);
        const msg = document.getElementById("userMessage").value.trim();

        // Specific logical checks 
        if (!name) messages.push("Full name field cannot be omitted.");
        if (!email || !/\S+@\S+\.\S+/.test(email)) messages.push("Please include a valid structural email address.");
        if (!phone || !/^\d+$/.test(phone)) messages.push("Contact string must contain absolute numbers only.");
        if (!destination) messages.push("Please pick an available tour destination spot.");
        if (!date) messages.push("Travel agenda date must be provided.");
        if (isNaN(visitors) || visitors < 1) messages.push("Visitor counts must evaluate to at least 1 person.");
        if (!msg) messages.push("Inquiry message block context is required.");

        if (messages.length > 0) {
            alertBox.innerHTML = `<strong>Submission errors:</strong><ul class="mb-0 mt-1">${messages.map(m => `<li>${m}</li>`).join('')}</ul>`;
            alertBox.classList.remove("d-none");
            window.scrollTo({ top: alertBox.offsetTop - 100, behavior: 'smooth' });
        } else {
            alert("Success! Your travel plan inquiry to Sultan Kudarat has been submitted cleanly.");
            form.reset();
        }
    });
}

// CROOS-PAGE SEARCH LOGIC SYNCHRONIZER
document.addEventListener("DOMContentLoaded", () => {
    // 1. Check if we are currently on the destinations rendering page
    const mainSearchInput = document.getElementById("searchInput");
    const navSearchInput = document.getElementById("navSearchInput");

    if (mainSearchInput && navSearchInput) {
        // Sync inputs on destination page for immediate live results
        navSearchInput.addEventListener("input", (e) => {
            mainSearchInput.value = e.target.value;
            // Fire the standard filtering filter loop already inside your app.js
            mainSearchInput.dispatchEvent(new Event('input')); 
        });

        mainSearchInput.addEventListener("input", (e) => {
            navSearchInput.value = e.target.value;
        });
    }

    // 2. Read URL Query Parameters (Handles routing search requests from Home, About, etc.)
    const urlParams = new URLSearchParams(window.location.search);
    const searchParamValue = urlParams.get('search');

    if (searchParamValue && mainSearchInput) {
        // Set values into inputs
        mainSearchInput.value = searchParamValue;
        if (navSearchInput) navSearchInput.value = searchParamValue;
        
        // Trigger your card data filtering engine execution immediately
        setTimeout(() => {
            mainSearchInput.dispatchEvent(new Event('input'));
        }, 100);
    }
});