/**
 * Co-founder Agustin W. Salas F. and selected projects from his professional portfolio.
 * Credits follow the portfolio exactly: most projects were designed while he was at Stantec,
 * the rest are his own concept and research work.
 */

export const agustin = {
  slug: "agustin-salas",
  name: "Agustin W. Salas",
  title: "Co-founder",
  focus: "Design Architecture & Master Planning",
  photo: "/agustin/profile.jpg",
  headline: "Design author of experiential buildings.",
  quote: "I truly believe in leading design teams through positive transformation, joy and wellbeing.",
  bio: [
    "Agustin is a Venezuelan-American architect with 22 years of experience as a master planner, architectural designer, interior designer and furniture designer. His work spans public and private concourses, institutional and healthcare buildings, commercial mixed-use developments, residential low- and high-rises and high-end custom homes.",
    "He holds post-graduate studies in Bioclimatic Architecture from the Polytechnic University of Catalonia, and his design practice centres on human wellbeing and a smaller ecological footprint. He specialises in finding functional answers to difficult programmatic problems while keeping a commitment to elegance and design excellence.",
    "His career has been built in collaboration with design teams and architectural firms of great renown, including years as Lead Project Designer at Stantec in Miami. That work includes residential and office towers in the United States, Israel, Russia, Mexico, Africa and China, and hospitality projects across the Caribbean, Central America, Abu Dhabi, the Bahamas and Malaysia.",
  ],
  specialties: [
    "High-rise",
    "Mixed-use commercial",
    "Multifamily, condo & rental",
    "Hospitality",
    "Institutional & education",
    "Cultural & civic",
    "Bioclimatic buildings",
    "Social housing",
  ],
  skills: ["Parametric design", "Computational design", "AI in design", "Sustainable design", "Data analysis"],
  tools: ["BIM", "Rhino + Grasshopper", "CAD", "3ds Max", "SketchUp", "Blender", "Adobe", "Python"],
  stats: [
    { value: "22", label: "Years in architecture" },
    { value: "375+", label: "Projects designed" },
    { value: "120+", label: "Residential projects" },
    { value: "34+", label: "High-rise towers" },
  ],
  recognition: [
    "Honorable mention, Norman Foster Foundation Kharkiv Housing Challenge",
    "SFBJ Structures Awards (2018, 2023)",
    "Florida's BEST Award",
    "UNECE / Kharkiv City Council design competition",
  ],
};

export type AgustinProject = {
  slug: string;
  title: string;
  location: string;
  role: string;
  /** How the portfolio credits the work. */
  credit: string;
  client?: string;
  stats: { value: string; label: string }[];
  summary: string;
  body: string[];
  imageCount: number;
  cover?: number;
};

export function agustinImages(p: AgustinProject) {
  return Array.from({ length: p.imageCount }, (_, i) => `/agustin/${p.slug}/${String(i + 1).padStart(2, "0")}.jpg`);
}

export function agustinCover(p: AgustinProject) {
  return agustinImages(p)[(p.cover ?? 1) - 1];
}

const STANTEC = "Designed while at Stantec";

export const agustinProjects: AgustinProject[] = [
  {
    slug: "1111-brickell-bay",
    title: "1111 Brickell Bay",
    location: "Miami, Florida",
    role: "Lead Project Designer",
    credit: STANTEC,
    client: "AIMCO",
    stats: [
      { value: "61 + 32", label: "Stories (two towers)" },
      { value: "1.7M", label: "GSF" },
      { value: "624", label: "Residences" },
      { value: "258", label: "Hotel keys" },
    ],
    summary:
      "A mixed-use project on the edge of the Brickell Financial District that pairs the adaptive reuse of an existing 32-story tower with a new 61-story tower.",
    body: [
      "The existing tower is reimagined as a five-star hotel with 178 branded residences, while the new tower adds luxury residences with private terraces that lift the property's waterfront presence.",
      "Amenities include a fitness centre, spa, relaxation lounge, demonstration kitchen, club room and outdoor fire pits. Ground-floor retail and a waterfront promenade invite the public to engage with the bay.",
    ],
    imageCount: 5,
  },
  {
    slug: "acqua-towers",
    title: "Acqua Towers",
    location: "Edgewater, Miami, Florida",
    role: "Lead Project Designer",
    credit: STANTEC,
    client: "Beitel and AIMCO",
    stats: [
      { value: "41", label: "Stories" },
      { value: "635", label: "Residences" },
      { value: "1.67M", label: "GSF" },
      { value: "157k", label: "SF office" },
    ],
    summary:
      "A 41-story multifamily mixed-use complex with two residential towers, townhomes, offices and retail, conceived as a destination for the evolving Edgewater neighbourhood.",
    body: [
      "A public green courtyard sits at the heart of the scheme, a place where people and nature connect that doubles as a neighbourhood amenity.",
      "The office tower rises above the retail along Biscayne Boulevard, and amenities include two pool areas, a spa, event spaces and green terraces with views over the Intracoastal.",
    ],
    imageCount: 3,
  },
  {
    slug: "solitair",
    title: "Solitair",
    location: "Brickell, Miami, Florida",
    role: "Lead Project Designer",
    credit: STANTEC,
    stats: [
      { value: "50", label: "Stories" },
      { value: "438", label: "Residences" },
      { value: "758k", label: "GSF" },
      { value: "NGBS Silver", label: "Certification" },
    ],
    summary:
      "A 50-story tower with an angular, basket-weave façade inspired by the Medjool date palm, one of the most recognisable silhouettes in Brickell.",
    body: [
      "Zigzag, serrated balconies express movement and lightness; glazed guardrails face northeast towards Biscayne Bay while solid rails face northwest.",
      "Interiors use cool, neutral materials as a gallery backdrop for bold art. Storm-water wells, shading and low-emitting interior materials support the project's National Green Building Standard Silver certification.",
    ],
    imageCount: 2,
    cover: 2,
  },
  {
    slug: "hamilton-house",
    title: "Hamilton House",
    location: "Miami, Florida",
    role: "Lead Project Designer",
    credit: STANTEC,
    stats: [
      { value: "60", label: "Stories" },
      { value: "241", label: "Residences" },
      { value: "380", label: "Automated parking" },
    ],
    summary:
      "A bayside rental tower rising 60 stories above an existing 8-story podium, visible from across Biscayne Bay, with a Michelin-starred restaurant at its base.",
    body: [
      "The design pairs an iconic skyline tower with a human-scale street, creating a pedestrian festival plaza at the waterfront activated by the restaurant.",
      "The small site could not take conventional parking, so the team designed a fully automated parking system using car lifts. Amenities include a bay-facing pool, indoor golf, a wellness lounge, a pickleball court and an amphitheatre on the bay.",
    ],
    imageCount: 2,
  },
  {
    slug: "kharkiv-housing-challenge",
    title: "Kharkiv Housing Challenge",
    location: "Kharkiv, Ukraine",
    role: "Competition Lead Designer",
    credit: "Competition entry completed at Stantec · Honorable mention",
    stats: [
      { value: "Honorable", label: "Mention" },
      { value: "Modular", label: "Retrofit system" },
    ],
    summary:
      "An honorable-mention entry to the Norman Foster Foundation Kharkiv Housing Challenge: a modular system to retrofit the city's war-damaged concrete housing blocks and revive its public spaces.",
    body: [
      "The competition was part of the Kharkiv Masterplan, a collaboration between Kharkiv City Council, UNECE, the Norman Foster Foundation, Arup and the Kharkiv Architects Group.",
      "The proposal addresses safety, energy efficiency and community life, including bomb shelters and modular façades, with an identity that is modern yet locally rooted and can be repeated across the city.",
    ],
    imageCount: 2,
  },
  {
    slug: "one-edgewater",
    title: "One Edgewater",
    location: "Edgewater, Miami, Florida",
    role: "Lead Project Designer",
    credit: STANTEC,
    client: "AIMCO",
    stats: [
      { value: "43", label: "Stories" },
      { value: "204", label: "Residences" },
      { value: "463k", label: "GSF" },
    ],
    summary:
      "A slender mixed-use 'neighbourhood beacon' for the Edgewater renaissance, combining housing, neighbourhood retail, green space and parking.",
    body: [
      "All parking sits on the southern edge of the narrow site so the street frontage along 34th Street stays active and public, with service access tucked onto the side street.",
      "Generous balconies, large areas of glass and green amenity spaces open residents to dramatic bay views, and the tower's colour palette draws on the bay's ecosystem.",
    ],
    imageCount: 2,
    cover: 2,
  },
  {
    slug: "distrito-santa-fe",
    title: "Distrito Santa Fe",
    location: "Santa Fe, Mexico City",
    role: "Lead Project Designer",
    credit: "Designed while at Stantec (Boulder, Boston & Miami)",
    client: "Fibra Uno & Parks Desarrolladora",
    stats: [
      { value: "9M", label: "SF mixed-use" },
      { value: "7", label: "High-rise towers" },
      { value: "25", label: "Acres" },
    ],
    summary:
      "A 9-million-square-foot walk/live/work/play/stay district on a hilly 25-acre site in the heart of Santa Fe's financial district.",
    body: [
      "The masterplan brings together two hotels, a supermarket, a 12-screen cinema, a museum, an aquarium, 25 restaurants, 40 shops, an outdoor music venue and a central park.",
      "Housing includes 680 micro-units, 300 high-end condominiums and 400 senior-living units. The scope covered visioning, master planning, architecture, branding, landscape and placemaking.",
    ],
    imageCount: 2,
  },
  {
    slug: "1380-s-ocean",
    title: "1380 S. Ocean Blvd.",
    location: "Pompano Beach, Florida",
    role: "Lead Project Designer",
    credit: STANTEC,
    client: "Lionheart Capital",
    stats: [
      { value: "30", label: "Stories" },
      { value: "134", label: "Residences" },
      { value: "14", label: "Boat slips" },
    ],
    summary:
      "Two luxury waterfront towers between the Atlantic Ocean and the Intracoastal Waterway, shaped by detailed site analysis and a rezoning process.",
    body: [
      "The main tower is set back from the beach so the landscape becomes the foreground to the ocean, and its massing limits shadows and view obstruction for neighbours.",
      "Parking sits above flood level, hidden beneath an 'enhanced dune': a tropical landscape that extends the native dune system protecting the coastline.",
    ],
    imageCount: 2,
  },
  {
    slug: "driftwood",
    title: "Driftwood",
    location: "Bay Harbor Islands, Florida",
    role: "Lead Project Designer",
    credit: STANTEC,
    stats: [
      { value: "7", label: "Stories" },
      { value: "35", label: "Condo residences" },
      { value: "165k", label: "GSF" },
    ],
    summary:
      "A luxury waterfront condominium whose fluid balconies draw on the geography of Bay Harbor Islands and the geometry of natural erosion.",
    body: [
      "Zoning required a break in the massing. Instead of adding structure and cores, the team used a double-height open lobby to create transparency, and articulated the balconies above to accentuate the break in scale.",
      "The result was the client's fastest zoning approval in the municipality to date.",
    ],
    imageCount: 2,
    cover: 2,
  },
  {
    slug: "evo-st-petersburg",
    title: "EVO",
    location: "Downtown St. Petersburg, Florida",
    role: "Lead Project Designer",
    credit: STANTEC,
    stats: [
      { value: "18", label: "Stories" },
      { value: "358", label: "Units" },
      { value: "625k", label: "SF" },
    ],
    summary:
      "An 18-story residential tower bringing much-needed multifamily living to downtown St. Petersburg, inspired by the lively colours of the city and its bayfront.",
    body: [
      "The tower holds 358 one-, two- and three-bedroom units, five commercial spaces, six loft-style homes and a five-story garage.",
      "A 19th-floor amenity deck includes a gym, spa and clubroom, with an infinity-edge pool, fire-pit lounge, event lawn and dog park outdoors.",
    ],
    imageCount: 3,
  },
  {
    slug: "the-pointe",
    title: "The Pointe",
    location: "Nassau, Bahamas",
    role: "Lead Project Designer",
    credit: STANTEC,
    client: "China Construction",
    stats: [
      { value: "684k", label: "SF mixed-use" },
      { value: "200", label: "Hotel keys" },
      { value: "200", label: "Residences" },
    ],
    summary:
      "An oceanfront mixed-use resort in downtown Nassau with residences, a hotel, spa, retail, entertainment, restaurants and a marina.",
    body: [
      "The curved forms of the hotel and condo building take inspiration from the cruise ships nearby, and its geometry gives every residential and hotel unit views of the ocean and the Nassau lighthouse.",
    ],
    imageCount: 2,
  },
  {
    slug: "reflective-horizons",
    title: "Reflective Horizons",
    location: "Shanghai, China",
    role: "Lead Project Designer",
    credit: "Design concept",
    stats: [
      { value: "Zero", label: "Carbon target" },
      { value: "WELL", label: "Wellbeing principles" },
    ],
    summary:
      "A tower concept inspired by water: its sleek verticality and flowing interiors echo water's fluidity and its capacity to recycle and renew.",
    body: [
      "Designed for a zero-carbon footprint, the building harvests rainwater and integrates solar panels and wind turbines into its form.",
      "Open atriums bring in daylight and natural ventilation, while amenity levels, an auditorium and a food hall put human wellbeing at the centre of every decision.",
    ],
    imageCount: 5,
  },
  {
    slug: "the-living-nexus",
    title: "The Living Nexus",
    location: "Kuala Lumpur, Malaysia",
    role: "Lead Project Designer",
    credit: "Design concept",
    stats: [
      { value: "Regenerative", label: "Cultural arts centre" },
    ],
    summary:
      "A regenerative cultural arts centre conceived as a living ecosystem for cultural expression, social justice and human experience.",
    body: [
      "Materials are locally sourced, renewable and low-carbon, and existing cultural heritage elements are adapted and reused.",
      "Solar panels and wind turbines power the centre, and a water system harvests, treats and recycles rainwater for non-potable use.",
    ],
    imageCount: 4,
    cover: 2,
  },
  {
    slug: "regenerative-concepts",
    title: "Living Architecture Studies",
    location: "Miami & Pompano Beach, Florida",
    role: "Principal Lead Designer",
    credit: "Independent research concepts",
    stats: [
      { value: "Biophilic", label: "High-rise research" },
    ],
    summary:
      "A series of studies, including Mod House and a Miami River vertical forest, proposing high-rise buildings that create regenerative ecosystems: turning buildings into trees and cities into forests.",
    body: [
      "Terraced, planted towers use native flora to clean the air, cool the microclimate and reduce the urban heat island effect.",
      "Passive design, solar orientation, natural ventilation, vertical shading fins and rooftop gardens that filter storm water before it reaches the river cut energy demand and tie the building back into its ecosystem.",
    ],
    imageCount: 6,
    cover: 3,
  },
];
